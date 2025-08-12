'use client';

import { useSearchParams } from "next/navigation";
import { useEffect, useRef, Suspense } from "react";

function FormAndBanner() {
  const params = useSearchParams();
  const sent = params.get("sent");

  // Anti-spam + context
  const tsRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    if (tsRef.current) tsRef.current.value = String(Date.now());
    if (pathRef.current) pathRef.current.value = window.location.pathname;
  }, []);

  return (
    <>
      {sent && (
        <div className="mt-6 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-sm">
          Thanks — your message was sent. We’ll reply shortly.
        </div>
      )}

      <form className="mt-6 grid md:grid-cols-3 gap-4" method="post" action="/api/contact" aria-label="Contact form">
        {/* Honeypot + metadata (hidden) */}
        <input name="website" tabIndex={-1} autoComplete="off" style={{ display: "none" }} />
        <input type="hidden" name="ts" ref={tsRef} />
        <input type="hidden" name="path" ref={pathRef} />

        <input
          required
          name="name"
          type="text"
          autoComplete="name"
          className="rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none"
          placeholder="Name"
        />
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          className="rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none"
          placeholder="Email"
        />
        <input
          name="company"
          type="text"
          autoComplete="organization"
          className="rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none"
          placeholder="Company (optional)"
        />
        <textarea
          required
          name="message"
          rows={4}
          className="md:col-span-3 rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none"
          placeholder="What are you trying to ship? From where to where? Timeline?"
        />
        <button className="md:col-span-3 btn btn-primary">Request a call</button>
      </form>
    </>
  );
}

export default function Contact() {
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-semibold">Let’s build your chain</h1>
      <p className="mt-3 opacity-90">
        Tell us where you want to move biomass, under what rules, and by when. We’ll map a credible path and timeline.
      </p>

      {/* Wrap the hook-using part in Suspense to satisfy Next.js */}
      <Suspense fallback={null}>
        <FormAndBanner />
      </Suspense>
    </div>
  );
}
