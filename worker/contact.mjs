const MAX_BODY = 64 * 1024;
const EMAIL = /^[A-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9](?:[A-Z0-9.-]*[A-Z0-9])?\.[A-Z]{2,}$/i;
const singleLine = (value) => !/[\r\n\0]/.test(value);

function json(status, error, extra = {}) {
  return Response.json({ ok: status === 200, ...(error ? { error } : {}), ...extra }, {
    status,
    headers: {
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "SAMEORIGIN",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
      "Strict-Transport-Security": "max-age=31536000",
    },
  });
}

async function boundedForm(request) {
  if (Number(request.headers.get("content-length")) > MAX_BODY) throw new Error("size");
  const reader = request.body?.getReader();
  if (!reader) throw new Error("form");
  const chunks = [];
  let size = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > MAX_BODY) { await reader.cancel(); throw new Error("size"); }
      chunks.push(value);
    }
  } finally { reader.releaseLock(); }
  const body = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) { body.set(chunk, offset); offset += chunk.length; }
  return new Request(request.url, {
    method: "POST", body,
    headers: { "Content-Type": request.headers.get("content-type") },
  }).formData();
}

export async function handleContact(request, env, { send, verifyFetch = fetch, now = Date.now } = {}) {
  if (request.method !== "POST") {
    const response = json(405, "Please use the contact form.");
    response.headers.set("Allow", "POST");
    return response;
  }
  const url = new URL(request.url);
  if (request.headers.get("origin") !== url.origin) return json(403, "Please submit from this website.");
  const type = request.headers.get("content-type") || "";
  if (!/^(application\/x-www-form-urlencoded|multipart\/form-data)(;|$)/i.test(type)) {
    return json(415, "Unsupported form format.");
  }
  let form;
  try { form = await boundedForm(request); }
  catch (error) { return json(error.message === "size" ? 413 : 400, "Unable to read the form. Please shorten your message and try again."); }
  const read = (key) => typeof form.get(key) === "string" ? form.get(key).trim() : "";
  const data = Object.fromEntries(["name", "email", "company", "message", "path"].map(key => [key, read(key)]));
  if (!data.name || !data.email || !data.message || data.name.length > 120 || data.email.length > 254 ||
      data.company.length > 200 || data.message.length > 6000 || data.path.length > 300 ||
      !EMAIL.test(data.email) || ![data.name, data.email, data.company, data.path].every(singleLine)) {
    return json(400, "Please enter a valid name, email and message (up to 6,000 characters).");
  }
  const timestamp = Number(read("ts"));
  const elapsed = now() - timestamp;
  if (read("website") || !Number.isFinite(timestamp) || timestamp <= 0 || elapsed < 2000 || elapsed > 2 * 60 * 60 * 1000) {
    return json(400, "Please reload the form, wait a moment and try again.");
  }
  // Fail closed: no bypass, console-only delivery or simulated success.
  if (!["MAIL_RELAY_URL", "MAIL_RELAY_SECRET", "TURNSTILE_SECRET_KEY"].every(key => env[key])) {
    return json(503, "The contact form is temporarily unavailable. Please try again later.");
  }
  let relay;
  try { relay = new URL(env.MAIL_RELAY_URL); } catch { return json(503, "The contact form is temporarily unavailable. Please try again later."); }
  if (relay.protocol !== "https:" || relay.username || relay.password || env.MAIL_RELAY_SECRET.length < 32) {
    return json(503, "The contact form is temporarily unavailable. Please try again later.");
  }
  const token = read("cf-turnstile-response");
  if (/https?:\/\//i.test(data.message)) return json(400, "Links are not allowed in the message.");
  if (!token || token.length > 2048) return json(400, "Please complete the spam check and try again.");
  let verified;
  try {
    const result = await verifyFetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: new URLSearchParams({ secret: env.TURNSTILE_SECRET_KEY, response: token,
        ...(request.headers.get("cf-connecting-ip") ? { remoteip: request.headers.get("cf-connecting-ip") } : {}),
        idempotency_key: crypto.randomUUID(),
      }),
      signal: AbortSignal.timeout(10000),
    });
    if (!result.ok) throw new Error("verification unavailable");
    verified = await result.json();
  } catch { return json(503, "The spam check is temporarily unavailable. Please try again."); }
  if (!verified.success || verified.hostname !== url.hostname || verified.action !== "contact") {
    return json(400, "The spam check expired or failed. Please try again.");
  }
  try {
    data.ip = request.headers.get("cf-connecting-ip") || "unknown";
    data.ua = (request.headers.get("user-agent") || "unknown").slice(0, 500);
    const result = await send(env, data);
    if (!result?.accepted) throw new Error("SMTP did not accept delivery");
    return json(200, null, { accepted: true });
  } catch (failure) {
    // Avoid logging credentials, enquiry content or recipient details.
    console.error("[Contact] Hostinger delivery was not confirmed.");
    return json(502, "Your message was not confirmed as sent. Please try again later.");
  }
}
