import Image from "next/image";

export const metadata = {
  title: "Method | BiomassChains",
  description:
    "A gate-based method for serious biomass supply-chain development, from mandate fit and resource reality to compliance evidence, route to market, commercial structure and first cargo.",
};

const gates = [
  {
    number: "01",
    title: "Mandate fit",
    summary:
      "Confirm there is a serious buyer, developer, investor or project owner, a defined decision to make, and budget for proper work.",
    checks: [
      "Credible buyer, developer, investor or project owner",
      "Defined geography, feedstock, volume and use case",
      "Clear decision or investment question",
      "Budget for proper diligence and execution support",
    ],
  },
  {
    number: "02",
    title: "Resource reality",
    summary:
      "Separate theoretical residue from usable supply by testing ownership, access, seasonality, quality, moisture and aggregation.",
    checks: [
      "Feedstock base and supplier structure",
      "Ownership and competing uses",
      "Quality, moisture, bark, ash and contamination",
      "Realistic available volume",
    ],
  },
  {
    number: "03",
    title: "Compliance and evidence",
    summary:
      "Identify what evidence the chain must carry before a buyer, lender, auditor or certification body will believe it.",
    checks: [
      "Timber legality and EUDR readiness",
      "FSC, PEFC and UK Forestry Standard relevance",
      "Traceability and auditability",
      "LCA inputs, GHG assumptions and carbon-credit evidence",
    ],
  },
  {
    number: "04",
    title: "Route to market",
    summary:
      "Test the physical chain from collection and preprocessing through storage, inland transport, port handling and buyer receipt.",
    checks: [
      "Collection and preprocessing",
      "Storage, road, rail and port handling",
      "Vessel parcel size and freight exposure",
      "Sampling, QA/QC, phytosanitary and claims risk",
    ],
  },
  {
    number: "05",
    title: "Commercial structure",
    summary:
      "Turn the chain into a contractable and investable structure with costs, terms, interfaces and risk allocation made explicit.",
    checks: [
      "Specification design",
      "Supplier terms and buyer requirements",
      "Pricing logic and cost build-up",
      "Risk allocation, documentation flow and contract interfaces",
    ],
  },
  {
    number: "06",
    title: "Pilot chain / first cargo",
    summary:
      "Support the controlled move from diligence to physical material, then use the first movement to improve the repeatable chain.",
    checks: [
      "Test lots and supplier mobilisation",
      "Port readiness and QA procedures",
      "Documentation checks and buyer coordination",
      "Post-shipment review and scale-up design",
    ],
  },
];

const gateVerdicts = [
  ["Proceed", "Evidence is strong enough for the next stage."],
  ["Reframe", "A weakness can be corrected before capital is committed."],
  ["Stop early", "The chain is not yet real, compliant, bankable or executable."],
];

function GateMap() {
  return (
    <section id="gate-framework" className="rounded-2xl border border-white/10 bg-[#0d110d] p-5 shadow-2xl shadow-black/30 sm:p-6 lg:p-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.22em] text-amber-200/70">Gate framework</p>
          <h2 className="mt-2 text-2xl font-semibold">Projects earn the right to move forward.</h2>
        </div>
        <p className="max-w-md text-sm leading-6 text-white/70">
          Weak chains are stopped, reframed or sent back for evidence before they consume serious time and capital.
        </p>
      </div>

      <div className="relative mt-8">
        <div className="absolute left-8 right-8 top-6 hidden h-px bg-gradient-to-r from-amber-300/50 via-emerald-300/50 to-sky-300/50 lg:block" />
        <div className="grid gap-4 lg:grid-cols-6">
          {gates.map((gate, index) => (
            <div key={gate.title} className="relative rounded-xl border border-white/10 bg-black/25 p-4">
              <div className="flex items-center gap-3">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-[#15130c] text-sm font-semibold text-amber-100">
                  {gate.number}
                </div>
                {index < gates.length - 1 && (
                  <div className="h-px flex-1 bg-white/10 lg:hidden" />
                )}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{gate.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/70">{gate.summary}</p>
              <div className="mt-4 rounded-lg border border-amber-200/20 bg-amber-200/[0.06] px-3 py-2 text-xs uppercase leading-5 tracking-[0.16em] text-amber-100/80">
                Proceed / reframe / stop
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {gateVerdicts.map(([title, text]) => (
          <div key={title} className="rounded-xl border border-white/10 bg-black/20 p-4">
            <h3 className="font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-white/70">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function MethodEvidenceVisual() {
  return (
    <figure className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-[#11100b]">
      <div className="relative aspect-[16/10]">
        <Image
          src="/images/pages/bulk-carrier-hold-inspection.jpg"
          alt="Inspector inside an empty bulk-carrier hold before biomass loading begins."
          fill
          priority
          className="object-cover brightness-[0.78] saturate-[0.85]"
          sizes="(min-width:1024px) 36vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/0 to-black/45" />
      </div>
      <figcaption className="border-t border-white/10 p-4 text-sm leading-6 text-white/70">
        Gate-based work turns inspection, documentation, operating constraints and physical
        readiness into evidence that can be tested before capital is committed.
      </figcaption>
    </figure>
  );
}

function GateDetail({ gate }) {
  return (
    <section id={`gate-${gate.number}`} className="rounded-2xl border border-white/10 bg-white/[0.045] p-6 sm:p-7">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm text-amber-200/75">Gate {gate.number}</p>
          <h2 className="mt-2 text-2xl font-semibold">{gate.title}</h2>
          <p className="mt-3 max-w-2xl leading-7 text-white/75">{gate.summary}</p>
        </div>
        <div className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-sm text-white/70">
          Proceed / reframe / stop
        </div>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {gate.checks.map((check) => (
          <div key={check} className="rounded-xl border border-white/10 bg-[#0f1410] px-4 py-3 text-sm leading-6 text-white/75">
            {check}
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Method() {
  return (
    <article className="bg-[#080604]">
      <section className="container py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.78fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-amber-200/70">Method</p>
            <h1 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              A gate-based method for serious biomass supply-chain development.
            </h1>
          </div>
          <div>
            <p className="max-w-2xl text-lg leading-8 text-white/80">
              Biomass projects should not move from idea to investment on the basis of a promising
              map, supplier conversation or theoretical residue estimate. They need a disciplined path.
            </p>
            <MethodEvidenceVisual />
          </div>
        </div>

        <div className="mt-12">
          <GateMap />
        </div>
      </section>

      <section id="principle" className="border-y border-white/10 bg-white/[0.03]">
        <div className="container py-12">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-semibold">Protect time, capital and reputation.</h2>
            <p className="mt-4 leading-7 text-white/75">
              Biomass Chains uses a gate-based method designed to expose weak points early. At each
              stage, the project either earns the right to move forward or the work is stopped,
              reframed or redirected toward the evidence gap that matters.
            </p>
          </div>
        </div>
      </section>

      <section id="gate-details" className="container py-16 lg:py-20">
        <div className="grid gap-6">
          {gates.map((gate) => (
            <GateDetail key={gate.title} gate={gate} />
          ))}
        </div>
      </section>

      <section id="final-principle" className="container pb-20">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#11100b]">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r">
              <p className="text-sm uppercase tracking-[0.22em] text-amber-200/70">Final principle</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight">
                Can this biomass supply chain become real, compliant, bankable and repeatable?
              </h2>
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-2xl font-semibold leading-9 text-white/90">
                Or is it still only a story?
              </p>
              <p className="mt-4 leading-7 text-white/75">
                The method is built to answer that question before reputations, buyer confidence,
                investor attention and development budgets are committed to a chain that cannot
                carry the evidence or physical execution burden.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a className="btn btn-primary" href="/contact">Start a mandate conversation</a>
                <a className="btn btn-outline" href="/solutions">View solutions</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
