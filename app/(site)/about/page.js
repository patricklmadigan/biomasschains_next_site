import Image from "next/image";

export const metadata = {
  title: "About | BiomassChains",
  description:
    "Founder-led biomass supply-chain advisory and execution for resource screening, supplier diligence, compliance, logistics, GHG/LCA, contracts and first cargoes.",
};

const judgementPoints = [
  "Fibre availability",
  "Supplier behaviour",
  "Moisture, bark and ash",
  "Contamination risk",
  "Loading rates",
  "Port constraints",
  "Vessel economics",
  "Legality and certification",
  "GHG performance",
  "Specification and claims",
  "Investor confidence",
  "First shipment execution",
];

const pathways = [
  "Wood pellets",
  "Woodchips",
  "Forestry residues",
  "Sawmill residues",
  "Agricultural residues",
  "Invasive biomass",
  "Lignin pellets",
  "Biochar feedstocks",
];

const operatingQuestions = [
  "Is the fibre really there?",
  "Who controls it?",
  "Can it be accessed legally and sustainably?",
  "Will it meet specification?",
  "Can it be aggregated?",
  "Can it move through the port?",
  "Can it survive freight, moisture, contamination and claims risk?",
  "Will a buyer, lender, investor, auditor or certification body believe the chain?",
];

const whatWeAre = [
  "Operators, project developers and supply-chain builders working where biomass projects become physical.",
  "A specialist practice across the interface between resource owners, industrial buyers, investors, ports, auditors, logistics providers, certification systems and project developers.",
  "A judgement-led partner for mandates that need evidence, route logic, documentation, contracts and execution discipline.",
];

const whatWeAreNot = [
  "Not biomass brokers.",
  "Not a free idea-screening service.",
  "Not a source of unpaid supplier lists, route designs, GHG assumptions, certification opinions or market-entry strategies.",
];

const mandateSignals = [
  ["Real counterparty", "A buyer, developer, investor or project owner with authority to act."],
  ["Defined decision", "A geography, feedstock, volume, use case or investment question that needs evidence."],
  ["Paid diligence", "A mandate structured for proper work, not extraction of technical views before engagement."],
  ["Execution path", "A need to move from resource idea to compliant, contractable and physically workable supply."],
];

function OperationalFigure() {
  return (
    <figure className="relative min-h-[520px] overflow-hidden rounded-2xl border border-white/10 bg-[#140f0a] shadow-2xl shadow-black/40">
      <Image
        src="/images/pages/western-scotland-log-yard-evening.jpg"
        alt="Stacked Sitka spruce logs in a western Scotland log yard at evening light."
        fill
        priority
        className="object-cover object-center brightness-[0.6] saturate-[0.78]"
        sizes="(min-width:1024px) 42vw, 100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/82" />
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
        <p className="text-xs uppercase tracking-[0.22em] text-amber-200/80">Operational judgement</p>
        <h2 className="mt-2 text-2xl font-semibold">From log yard to plant gate</h2>
        <p className="mt-3 max-w-md text-sm leading-6 text-white/80">
          Founder-led advice grounded in fibre catchments, yard design, supplier behaviour,
          logistics, contracts, buyers and investor evidence.
        </p>
      </div>
    </figure>
  );
}

function FineLineGraphic() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d130f] p-5">
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:34px_34px]" />
      <div className="relative">
        <div className="text-sm text-white/70">Supply-chain reality check</div>
        <div className="mt-5 aspect-[16/7] w-full">
          <svg
            className="h-full w-full"
            viewBox="0 0 900 390"
            role="img"
            aria-label="Biomass supply chain from resource through evidence, logistics, contract and first cargo."
          >
            <defs>
              <linearGradient id="aboutRoute" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#d6a15f" />
                <stop offset="48%" stopColor="#34d399" />
                <stop offset="100%" stopColor="#93c5fd" />
              </linearGradient>
            </defs>
            <rect width="900" height="390" rx="24" fill="#08100d" />
            <path
              d="M82 250 C178 144 260 118 354 177 C444 233 502 284 595 218 C678 160 728 132 818 154"
              fill="none"
              stroke="rgba(255,255,255,.14)"
              strokeWidth="18"
              strokeLinecap="round"
            />
            <path
              d="M82 250 C178 144 260 118 354 177 C444 233 502 284 595 218 C678 160 728 132 818 154"
              fill="none"
              stroke="url(#aboutRoute)"
              strokeWidth="5"
              strokeLinecap="round"
            />
            {[
              ["Resource", 82, 250],
              ["Evidence", 354, 177],
              ["Logistics", 595, 218],
              ["First cargo", 818, 154],
            ].map(([label, x, y]) => (
              <g key={label}>
                <circle cx={x} cy={y} r="17" fill="#f8fafc" />
                <circle cx={x} cy={y} r="9" fill="#0b120f" />
                <text x={x} y={y + 54} fill="#f8fafc" fontSize="22" fontWeight="700" textAnchor="middle">
                  {label}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
}

function MandateFitStrip() {
  return (
    <section className="border-y border-white/10 bg-[#11100b]">
      <div className="container py-10">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-amber-200/70">Mandate fit</p>
            <h2 className="mt-3 text-3xl font-semibold">Selective by design.</h2>
            <p className="mt-4 leading-7 text-white/70">
              The work is for serious parties that need defensible evidence and execution support.
              It is not structured as unpaid market-entry advice.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {mandateSignals.map(([title, text]) => (
              <div key={title} className="rounded-xl border border-white/10 bg-black/20 p-4">
                <h3 className="font-semibold text-white/95">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <article className="bg-[#080604]">
      <section className="container grid gap-12 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:py-24">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-amber-200/70">About Biomass Chains</p>
          <h1 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Biomass supply chains are not built in spreadsheets.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/90">
            Biomass Chains is a specialist advisory and execution practice for serious biomass,
            biochar, renewable heat, industrial decarbonisation and carbon-removal projects.
          </p>
          <p className="mt-5 max-w-3xl leading-7 text-white/75">
            The work is led by Patrick Madigan, whose background sits close to the actual point
            where biomass projects succeed or fail: fibre availability, supplier behaviour,
            moisture, bark, contamination, loading rates, port constraints, vessel economics,
            legality, certification, GHG performance, contracts, investor confidence and first
            shipment execution.
          </p>
          <p className="mt-5 max-w-3xl leading-7 text-white/75">
            Biomass Chains exists for one reason: to help credible parties turn a biomass
            resource idea into a supply chain that can actually operate.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {["Resource reality", "Compliance evidence", "First-cargo execution"].map((item) => (
              <div key={item} className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/80">
                {item}
              </div>
            ))}
          </div>
        </div>

        <OperationalFigure />
      </section>

      <MandateFitStrip />

      <section id="development" className="border-y border-white/10 bg-white/[0.03]">
        <div className="container grid gap-8 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold">Practical biomass-chain development.</h2>
            <p className="mt-4 max-w-2xl leading-7 text-white/75">
              This is not general sustainability consultancy. It is practical biomass-chain
              development for credible parties that need to know whether a resource idea can
              become a supply chain that actually operates.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {judgementPoints.map((point) => (
              <div key={point} className="rounded-xl border border-white/10 bg-[#0f1410] px-4 py-3 text-sm text-white/80">
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="container py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-amber-200/70">Experience base</p>
            <h2 className="mt-3 text-3xl font-semibold">Across fibre, residues, ports and project evidence.</h2>
            <p className="mt-4 leading-7 text-white/75">
              Patrick has worked across wood pellets, woodchips, forestry residues, sawmill
              residues, agricultural residues, invasive biomass, lignin pellets and biochar
              feedstock pathways. His experience includes board-level biomass strategy,
              industrial project development, pellet and wood-fibre supply chains, export
              logistics, supplier due diligence, port handling, vessel planning, sustainability
              systems and investor-facing project work.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {pathways.map((pathway) => (
                <span key={pathway} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-white/75">
                  {pathway}
                </span>
              ))}
            </div>
          </div>

          <FineLineGraphic />
        </div>
      </section>

      <section id="operating-questions" className="container pb-16 lg:pb-20">
        <div className="rounded-2xl border border-white/10 bg-[#11100b] p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-amber-200/70">Operating questions</p>
              <h2 className="mt-3 text-3xl font-semibold">The questions that decide whether a chain can operate.</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {operatingQuestions.map((question, index) => (
                <div key={question} className="rounded-xl border border-white/10 bg-black/20 p-4">
                  <div className="text-xs text-amber-200/70">0{index + 1}</div>
                  <p className="mt-2 text-sm leading-6 text-white/80">{question}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="positioning" className="container pb-20">
        <div className="grid gap-6 lg:grid-cols-2">
          <section className="rounded-2xl border border-emerald-300/20 bg-emerald-300/[0.06] p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">What we are</h2>
            <ul className="mt-5 space-y-4">
              {whatWeAre.map((item) => (
                <li key={item} className="border-l border-emerald-300/40 pl-4 leading-7 text-white/80">
                  {item}
                </li>
              ))}
            </ul>
          </section>
          <section className="rounded-2xl border border-amber-200/20 bg-amber-200/[0.06] p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">What we are not</h2>
            <ul className="mt-5 space-y-4">
              {whatWeAreNot.map((item) => (
                <li key={item} className="border-l border-amber-200/40 pl-4 leading-7 text-white/80">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="mt-12 max-w-4xl">
          <p className="text-2xl font-semibold leading-9">
            If the mandate is credible, we can help move it from concept to bankable evidence,
            and from bankable evidence to physical supply-chain reality.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="btn btn-primary" href="/contact">Start a mandate conversation</a>
            <a className="btn btn-outline" href="/cases">See proof of work</a>
          </div>
        </div>
      </section>
    </article>
  );
}
