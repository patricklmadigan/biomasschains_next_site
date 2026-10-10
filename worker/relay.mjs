const encoder = new TextEncoder();

export async function sendRelay(env, data, relayFetch = fetch) {
  const id = crypto.randomUUID();
  const body = JSON.stringify({ id, timestamp: Date.now(), ...data });
  const key = await crypto.subtle.importKey('raw', encoder.encode(env.MAIL_RELAY_SECRET), {name:'HMAC',hash:'SHA-256'}, false, ['sign']);
  const signature = [...new Uint8Array(await crypto.subtle.sign('HMAC',key,encoder.encode(body)))].map(byte=>byte.toString(16).padStart(2,'0')).join('');
  const response = await relayFetch(env.MAIL_RELAY_URL, {
    method:'POST', headers:{'Content-Type':'application/json','X-Biomass-Signature':signature},
    // Inspect and reject redirect responses below, so the signed payload is
    // never forwarded to another destination.
    body, redirect:'manual', signal:AbortSignal.timeout(25000),
  });
  if (!response.ok) {
    // Operator diagnostics contain only the HTTP status, never credentials or
    // the enquiry/response body. The visitor still receives a generic failure.
    console.error(`[Contact relay] HTTP ${response.status}`);
    throw new Error('Hostinger relay rejected delivery');
  }
  const result = await response.json();
  if (result.ok !== true || result.accepted !== true || result.id !== id) throw new Error('Hostinger acceptance was not confirmed');
  return {accepted:true};
}
