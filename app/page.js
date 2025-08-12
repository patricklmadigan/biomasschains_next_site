import Hero from "../components/Hero";

export default function Page() {
  return (
    <div>
      <Hero />
      <section className="border-y border-white/10 bg-white/5">
        <div className="container py-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
          <div className="opacity-90">Due diligence & siting</div>
          <div className="opacity-90">Logistics & contracts</div>
          <div className="opacity-90">GHG & LCA modeling</div>
          <div className="opacity-90">CORC/VER pathways</div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-semibold">What we deliver</h2>
            <p className="mt-3 opacity-90">End‑to‑end execution support that de‑risks capital and accelerates timeline to first tonnes shipped.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { title: "Sourcing & compliance", desc: "Transparent feedstock mapping, EUDR/UKFSA/FSC/PEFC alignment, traceability to origin." },
              { title: "GHG, LCA & bankable models", desc: "Project‑specific LCA, route cards and cost models that withstand investor diligence." },
              { title: "Build‑out & operations", desc: "Contracts, logistics, port handling, QA specs, and start‑up playbooks for real shipments." }
            ].map((s) => (
              <div key={s.title} className="card p-6">
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 opacity-80 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
