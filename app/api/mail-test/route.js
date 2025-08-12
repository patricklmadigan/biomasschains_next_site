import { NextResponse } from "next/server";
export const runtime = "nodejs";

export async function GET() {
  try {
    const nodemailer = (await import("nodemailer")).default;
    const port = Number(process.env.SMTP_PORT || 587);
    const t = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465,             // false for 587 STARTTLS
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      requireTLS: port === 587,         // enforce STARTTLS
      tls: { minVersion: "TLSv1.2" },
      logger: true,
      debug: true,
    });

    await t.verify();
    await t.sendMail({
      from: `BiomassChains <${process.env.MAIL_FROM || process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      subject: "SMTP test (Vercel)",
      text: "Hello from /api/mail-test",
      envelope: { from: process.env.SMTP_USER, to: process.env.MAIL_TO },
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[mail-test]", e);
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}
