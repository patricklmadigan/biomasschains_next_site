'use client';

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

const usefulContext = [
  "Defined geography and feedstock",
  "Indicative volume or buyer/use case",
  "Decision to be made",
  "Budget for proper diligence or execution support",
];

const notFor = [
  "Unpaid supplier lists",
  "Free route design",
  "Speculative GHG or certification opinions",
  "Generic market-entry advice",
];

function FormAndBanner() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [token, setToken] = useState("");
  const challengeRef = useRef(null);
  const widgetRef = useRef(null);
  const submittingRef = useRef(false);
  const sitekey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  function renderChallenge() {
    if (!sitekey || !challengeRef.current || !window.turnstile || widgetRef.current !== null) return;
    widgetRef.current = window.turnstile.render(challengeRef.current, {
      sitekey, action: "contact", appearance: "interaction-only", theme: "dark",
      callback: setToken,
      "expired-callback": () => setToken(""),
      "error-callback": () => { setToken(""); setError("The spam check could not load. Please reload and try again."); },
    });
  }

  async function submit(event) {
    event.preventDefault();
    if (submittingRef.current) return;
    setSent(false); setError("");
    if (!token) { setError("Please wait for the spam check or complete it before sending."); return; }
    const form = event.currentTarget;
    const body = new URLSearchParams(new FormData(form));
    body.set("cf-turnstile-response", token);
    submittingRef.current = true; setSending(true);
    try {
      const response = await fetch("/api/contact", { method: "POST", body });
      const result = await response.json();
      if (!response.ok || result.ok !== true || result.accepted !== true) {
        throw new Error(result.error || "Your message was not confirmed as sent. Please try again later.");
      }
      setSent(true); form.reset();
      if (tsRef.current) tsRef.current.value = String(Date.now());
    } catch (failure) {
      setError(failure.message === "Failed to fetch" ? "The connection failed. Your message was not confirmed as sent. Please try again." : failure.message);
    } finally {
      submittingRef.current = false; setSending(false); setToken("");
      if (window.turnstile && widgetRef.current !== null) window.turnstile.reset(widgetRef.current);
    }
  }

  // Anti-spam + context
  const tsRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    if (tsRef.current) tsRef.current.value = String(Date.now());
    if (pathRef.current) pathRef.current.value = window.location.pathname;
    return () => {
      if (window.turnstile && widgetRef.current !== null) window.turnstile.remove(widgetRef.current);
      widgetRef.current = null;
    };
  }, []);

  return (
    <>
      {sent && (
        <div role="status" className="mt-6 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-sm">
          Thanks - your message was sent. We&apos;ll review the mandate context and reply shortly.
        </div>
      )}

      {error && <div role="alert" className="mt-6 rounded-xl border border-amber-200/40 bg-amber-200/10 px-4 py-3 text-sm">{error}</div>}
      <form className="mt-6 grid md:grid-cols-3 gap-4" method="post" action="/api/contact" onSubmit={submit} aria-label="Contact form">
        {/* Honeypot + metadata (hidden) */}
        <input name="website" tabIndex={-1} autoComplete="off" style={{ display: "none" }} />
        <input type="hidden" name="ts" ref={tsRef} />
        <input type="hidden" name="path" ref={pathRef} />

        <input
          required
          name="name"
          type="text"
          autoComplete="name"
          aria-label="Name"
          maxLength={120}
          className="rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none"
          placeholder="Name"
        />
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          aria-label="Email"
          maxLength={254}
          className="rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none"
          placeholder="Email"
        />
        <input
          name="company"
          type="text"
          autoComplete="organization"
          aria-label="Company (optional)"
          maxLength={200}
          className="rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none"
          placeholder="Company (optional)"
        />
        <textarea
          required
          name="message"
          rows={4}
          aria-label="Mandate context"
          maxLength={6000}
          className="md:col-span-3 rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none"
          placeholder="Mandate context: geography, feedstock, volume, buyer or use case, decision needed and timeline."
        />
        <div className="md:col-span-3">
          <div ref={challengeRef} />
          {!sitekey && <p role="alert" className="mb-4 text-sm text-amber-200">The contact form is temporarily unavailable. Please try again later.</p>}
          <button disabled={sending || !sitekey} className="w-full btn btn-primary">{sending ? "Sending…" : "Start a mandate conversation"}</button>
        </div>
      </form>
      {sitekey && <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" onReady={renderChallenge} onError={() => setError("The spam check could not load. Please reload and try again.")} />}
    </>
  );
}

export default function Contact() {
  return (
    <div className="container py-16">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-amber-200/70">Contact</p>
          <h1 className="mt-3 text-4xl font-semibold">Start a mandate conversation</h1>
          <p className="mt-4 leading-7 opacity-90">
            Use the form for funded biomass supply-chain mandates with a defined geography,
            feedstock, volume, buyer or investment question.
          </p>
          <p className="mt-4 leading-7 opacity-75">
            The first question is whether the mandate is real enough to justify proper work.
            If it is, the conversation can move quickly into scope, evidence needs and execution path.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <section className="rounded-2xl border border-emerald-300/20 bg-emerald-300/[0.06] p-5">
            <h2 className="font-semibold">Useful context</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 opacity-80">
              {usefulContext.map((item) => (
                <li key={item} className="border-l border-emerald-300/40 pl-3">{item}</li>
              ))}
            </ul>
          </section>
          <section className="rounded-2xl border border-amber-200/20 bg-amber-200/[0.06] p-5">
            <h2 className="font-semibold">Not for</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 opacity-80">
              {notFor.map((item) => (
                <li key={item} className="border-l border-amber-200/40 pl-3">{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <FormAndBanner />
    </div>
  );
}
