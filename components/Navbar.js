import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-black/40 border-b border-white/10">
      <nav className="container h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-xl">BiomassChains</Link>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/solutions" className="opacity-80 hover:opacity-100">Solutions</Link>
          <Link href="/method" className="opacity-80 hover:opacity-100">Method</Link>
          <Link href="/cases" className="opacity-80 hover:opacity-100">Case Studies</Link>
          <Link href="/about" className="opacity-80 hover:opacity-100">About</Link>
          <Link href="/contact" className="opacity-80 hover:opacity-100">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
