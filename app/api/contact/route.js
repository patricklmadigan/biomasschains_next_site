// app/api/contact/route.js
import { NextResponse } from "next/server";
export const runtime = "nodejs";

export async function POST(req) {
  const form = await req.formData();

  // Hidden anti-spam + context fields
  const website = String(form.get("website") || ""); // honeypot
  const ts = Number(form.get("ts") || 0);           // render timestamp
  const path = String(form.get("path") || req.headers.get("referer") || "");

  const name = String(form.get("name") || "").trim();
  const email = String(form.get("email") || "").trim();
  const company = String(form.get("company") || "").trim();
  const message = String(form.get("message") || "").trim();

  // Required
  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }
  // Simple anti-spam
  if (website) return NextResponse.json({ ok: false }, { status: 400 });
  if (/https?:\/\//i.test(message)) {
    return NextResponse.json({ ok: false, error: "Links are not allowed in the message." }, { status: 400 });
  }
  if (ts && Date.now() - ts < 2000) {
    return NextResponse.json({ ok: false, error: "Form submitted too quickly." }, { status: 400 });
  }

  const hasSMTP =
    process.env.SMTP_HOST &&
    process.env.SMTP_USER &&
    process.env.SMTP_PASS &&
    process.env.MAIL_TO;

  if (hasSMTP) {
    const nodemailer = (await import("nodemailer")).default;

    const port = Number(process.env.SMTP_PORT || 587);
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465, // SSL on 465, STARTTLS on 587
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    const fromAddress = process.env.MAIL_FROM || process.env.SMTP_USER;
    const envelope = { from: process.env.SMTP_USER, to: process.env.MAIL_TO };

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";
    const ua = req.headers.get("user-agent") || "unknown";

    const localTag = (ip === "::1" || ip === "127.0.0.1") ? "[LOCAL TEST] " : "";
    const subject = `${localTag}BiomassChains website enquiry — ${name}`;

    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      `Page: ${path}`,
      `IP: ${ip}`,
      `UA: ${ua}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const html = `
      <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;line-height:1.5;">
        <h2 style="margin:0 0 8px;">Website enquiry</h2>
        <p style="margin:0 0 16px;color:#555;">from <strong>${escapeHtml(name)}</strong></p>
        <table style="border-collapse:collapse;margin-bottom:16px;">
          <tr><td style="padding:4px 8px;color:#666;">Email</td><td style="padding:4px 8px;"><a href="mailto:${escapeAttr(email)}">${escapeHtml(email)}</a></td></tr>
          <tr><td style="padding:4px 8px;color:#666;">Company</td><td style="padding:4px 8px;">${escapeHtml(company)}</td></tr>
          <tr><td style="padding:4px 8px;color:#666;">Page</td><td style="padding:4px 8px;">${escapeHtml(path)}</td></tr>
          <tr><td style="padding:4px 8px;color:#666;">IP</td><td style="padding:4px 8px;">${escapeHtml(ip)}</td></tr>
          <tr><td style="padding:4px 8px;color:#666;">UA</td><td style="padding:4px 8px;">${escapeHtml(ua)}</td></tr>
        </table>
        <div style="white-space:pre-wrap;border:1px solid #eee;border-radius:8px;padding:12px;">
          ${escapeHtml(message)}
        </div>
      </div>
    `;

    try {
      await transporter.sendMail({
        from: `BiomassChains <${fromAddress}>`, // must match authenticated mailbox on Hostinger
        to: process.env.MAIL_TO,
        replyTo: email,
        subject,
        text,
        html,
        envelope, // SMTP MAIL FROM / RCPT TO
      });
      return NextResponse.redirect(new URL("/contact?sent=1", req.url), { status: 302 });
    } catch (e) {
      console.error("[Contact] SMTP error:", e);
      return NextResponse.json({ ok: false, error: "Failed to send email." }, { status: 500 });
    }
  }

  // Dev fallback
  console.log("[Contact] (no SMTP)", { name, email, company, message, path });
  return NextResponse.redirect(new URL("/contact?sent=1", req.url), { status: 302 });
}

// Basic HTML escaping
function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
function escapeAttr(s) {
  return escapeHtml(s).replace(/'/g, "&#39;");
}
