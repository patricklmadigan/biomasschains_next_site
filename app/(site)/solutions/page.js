export default function Solutions() {
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-semibold">Solutions</h1>
      <p className="mt-3 opacity-90 max-w-2xl">Execution-first services that get biomass moving under real-world constraints.</p>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {[
          { title: "Sourcing & compliance", bullets: ["Feedstock mapping", "EUDR/UKFSA alignment", "FSC/PEFC pathways", "Traceability to origin"]},
          { title: "GHG, LCA & models", bullets: ["Project LCA", "GHG route cards", "Cost curves", "Investor-ready IC"]},
          { title: "Build-out & ops", bullets: ["Contracts & specs", "Port handling", "Vessel/charter windows", "QA & playbooks"]},
        ].map((c) => (
          <div key={c.title} className="card p-6">
            <h3 className="text-xl font-semibold">{c.title}</h3>
            <ul className="mt-3 space-y-2 text-sm opacity-90">
              {c.bullets.map(b => <li key={b}>• {b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
