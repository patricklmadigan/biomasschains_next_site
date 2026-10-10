export default function ProofStrip() {
  const items = [
    {
      title: "Ireland → Iceland woodchip",
      kpis: ["58 suppliers mapped", "30k-t shipments", "~0.024 tCO₂e/t"],
      href: "/cases/ireland-iceland-woodchip",
    },
    {
      title: "West & Central Africa residues",
      kpis: ["381 firms scanned", "Shea & cashew shortlists", "CIF/FOB pathways"],
      href: "/cases/wc-africa-residues",
    },
  ];

  return (
    <section className="border-y border-white/10 bg-white/5">
      <div className="container py-8 grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="card p-5 hover:bg-white/10 transition"
          >
            <div className="text-sm opacity-80">Case study</div>
            <h3 className="text-xl font-semibold mt-1">{item.title}</h3>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm opacity-80">
              {item.kpis.map((k, i) => (
                <li key={i}>• {k}</li>
              ))}
            </ul>
            <span className="mt-4 inline-block btn btn-outline">Read the case</span>
          </a>
        ))}
      </div>
    </section>
  );
}
