import { NextResponse } from "next/server";
export const runtime = "nodejs";
export async function GET() {
  const ok = (k) => Boolean(process.env[k] && String(process.env[k]).trim());
  return NextResponse.json({
    SMTP_HOST: ok("SMTP_HOST"),
    SMTP_USER: ok("SMTP_USER"),
    SMTP_PASS: ok("SMTP_PASS"),
    MAIL_TO:   ok("MAIL_TO"),
  });
}
