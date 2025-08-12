export default function Method() {
  const steps = [
    {h: "Screening", p: "Resource, regulation, risk, route, returns."},
    {h: "Pilot chain", p: "Suppliers, specs, contracts, test lots."},
    {h: "Scale", p: "Multi-origin sourcing, logistics slots, QC, data room."},
    {h: "Credits", p: "CORC/VER eligibility and issuance pathways."},
  ];
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-semibold">Method</h1>
      <p className="mt-3 opacity-90 max-w-2xl">A pragmatic path from idea to first cargo.</p>
      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {steps.map(s => (
          <div key={s.h} className="card p-6">
            <h3 className="text-xl font-semibold">{s.h}</h3>
            <p className="mt-2 text-sm opacity-90">{s.p}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
