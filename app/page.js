import Hero from "../components/Hero";
import ProofStrip from "../components/ProofStrip"; // ← add this

export default function Page() {
  return (
    <div>
      <Hero />

      <section className="border-y border-white/10 bg-white/5">
        <div className="container py-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
          <div className="opacity-90">Resource screening</div>
          <div className="opacity-90">Supplier diligence</div>
          <div className="opacity-90">GHG & LCA evidence</div>
          <div className="opacity-90">Logistics & contracts</div>
        </div>
      </section>

      <ProofStrip /> {/* ← insert here */}

      <section className="py-20">
        <div className="container">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-semibold">What serious mandates need</h2>
            <p className="mt-3 opacity-90">
              Practical evidence and execution support across the points where biomass chains fail:
              fibre, compliance, route, contract and first movement.
            </p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { title: "Resource and supplier diligence", desc: "Feedstock mapping, supplier engagement, competing-use assessment and realistic available-volume evidence." },
              { title: "Compliance, GHG and bankability", desc: "Legality, traceability, certification logic, route cards, LCA inputs and investor-facing decision material." },
              { title: "Logistics and first movement", desc: "Port handling, storage, QA, sampling, documentation, contracts and first-cargo execution support." }
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
