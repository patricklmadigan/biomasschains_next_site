import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-80">
        <div>© {year} BiomassChains</div>
        <nav className="flex items-center gap-6">
          <Link href="/privacy" className="hover:opacity-100 opacity-80">Privacy</Link>
          <Link href="/cookies" className="hover:opacity-100 opacity-80">Cookies</Link>
          <Link href="/contact" className="hover:opacity-100 opacity-80">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
