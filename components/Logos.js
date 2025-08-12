export default function Logos() {
  const items = [
    { name: "EUDR-ready", text: "EUDR" },
    { name: "FSC", text: "FSC" },
    { name: "PEFC", text: "PEFC" },
    { name: "GHG/LCA", text: "LCA" },
    { name: "Ports", text: "PORTS" },
  ];
  return (
    <section className="border-y border-white/10 bg-white/5">
      <div className="container py-8 grid grid-cols-2 sm:grid-cols-5 gap-6 text-sm items-center">
        {items.map(i => (
          <div key={i.name} className="opacity-80 text-center tracking-wide">{i.text}</div>
        ))}
      </div>
    </section>
  );
}
