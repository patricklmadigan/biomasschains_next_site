export default function About() {
  return (
    <div className="container py-16 grid lg:grid-cols-2 gap-10 items-start">
      <div>
        <h1 className="text-4xl font-semibold">Who we are</h1>
        <p className="mt-4 opacity-90 text-sm leading-7">
          We are operators. We’ve sat on mill floors and in boardrooms, negotiated with port authorities, and stress‑tested projects with investors. We blend industrial pragmatism with sustainability rigor.
        </p>
        <ul className="mt-4 space-y-2 text-sm opacity-90">
          <li>• 20+ years across pellets, biomass logistics and biochar.</li>
          <li>• Network in EU/UK compliance, certification and ports.</li>
          <li>• Tooling: GIS, LCA, GHG route cards, risk & cost models.</li>
        </ul>
      </div>
      <div className="card p-6 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10">
        <h3 className="text-xl font-semibold mb-3">Credentials</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="rounded-xl border border-white/10 p-4">EUDR-ready processes</div>
          <div className="rounded-xl border border-white/10 p-4">FSC/PEFC experience</div>
          <div className="rounded-xl border border-white/10 p-4">GHG/LCA modeling</div>
          <div className="rounded-xl border border-white/10 p-4">CORC/VER guidance</div>
        </div>
      </div>
    </div>
  );
}
