'use client';

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // close on route change (optional if you add active links later)
  useEffect(() => {
    const onHash = () => setOpen(false);
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/10">
        <nav className="container h-16 flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-wide text-white">
            BiomassChains
          </Link>

          {/* desktop */}
          <div className="hidden md:flex items-center gap-7 text-white/90">
            <Link href="/solutions" className="hover:text-white">Solutions</Link>
            <Link href="/cases" className="hover:text-white">Case Studies</Link>
            <Link href="/method" className="hover:text-white">Method</Link>
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/contact" className="btn btn-primary">Contact</Link>
          </div>

          {/* mobile toggle */}
          <button
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(v => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/15 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            {open ? (
              <span className="text-sm">Close ✕</span>
            ) : (
              <span className="text-sm">Menu ☰</span>
            )}
          </button>
        </nav>
      </div>

      {/* mobile panel */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden bg-black/95 text-white border-b border-white/10"
        >
          <div className="container py-3 flex flex-col">
            <Link href="/solutions" className="py-2" onClick={() => setOpen(false)}>Solutions</Link>
            <Link href="/cases" className="py-2" onClick={() => setOpen(false)}>Case Studies</Link>
            <Link href="/method" className="py-2" onClick={() => setOpen(false)}>Method</Link>
            <Link href="/about" className="py-2" onClick={() => setOpen(false)}>About</Link>
            <Link href="/contact" className="mt-2 btn btn-primary w-full text-center" onClick={() => setOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}
