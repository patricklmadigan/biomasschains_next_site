import Image from "next/image";

export const metadata = {
  title: "Solutions | BiomassChains",
  description:
    "Practical biomass supply-chain support across resource proof, compliance, logistics, bankability and execution.",
};

const solutionBlocks = [
  {
    number: "01",
    title: "Prove the resource",
    line: "Headline residue numbers are not enough.",
    image: "/images/pages/georgia-pine-stand-resource.jpg",
    alt: "Managed Georgia pine stand used to assess fibre availability and harvesting logic.",
    imageClass: "object-cover object-center",
    text:
      "We test whether the resource is real, accessible, aggregable and commercially relevant before serious capital or buyer attention is committed.",
    points: [
      "Feedstock mapping",
      "Supplier identification",
      "Field validation",
      "Mill engagement",
      "Residue characterisation",
      "Competing-use assessment",
      "Seasonality and moisture risk",
      "Contamination and ownership risk",
      "Harvesting logic and local handling",
      "Realistic available-volume estimates",
    ],
  },
  {
    number: "02",
    title: "Make the chain compliant",
    line: "Evidence has to survive buyer, auditor and investor scrutiny.",
    visual: "evidence",
    text:
      "We structure legality, sustainability, traceability, GHG and certification evidence so the chain can be reviewed, challenged and repeated.",
    points: [
      "EUDR and timber-legality readiness",
      "UK Forestry Standard alignment",
      "FSC and PEFC pathways",
      "Origin documentation",
      "Supplier declarations",
      "Chain-of-custody logic",
      "GHG route cards and LCA inputs",
      "Carbon-credit eligibility",
      "Evidence-pack design",
    ],
  },
  {
    number: "03",
    title: "Make the biomass move",
    line: "The weak point is usually an interface, not an idea.",
    image: "/images/pages/foynes-wakaba-quayside.jpg",
    alt: "Bulk vessel at Foynes quayside during biomass discharge and port handling.",
    imageClass: "object-cover object-center",
    text:
      "We examine the practical chain from forest, farm, mill or yard through road, rail, port, vessel, storage, sampling and buyer receipt.",
    points: [
      "Route assessment",
      "Port selection",
      "Stockpile logic",
      "Vessel parcel sizing",
      "Loading-rate assumptions",
      "Walking-floor or chip-truck handling",
      "Storage constraints",
      "Sampling and QA/QC",
      "Phytosanitary and claims risk",
      "First-shipment planning",
    ],
  },
  {
    number: "04",
    title: "Make the project bankable",
    line: "Serious buyers and investors fund evidence, not enthusiasm.",
    visual: "bankable",
    text:
      "We turn operating reality into decision material: cost, risk, evidence, route logic and a development plan that can support board, IC or lender review.",
    points: [
      "Cost curves",
      "Risk registers",
      "Supplier matrices",
      "GHG models",
      "Route cards",
      "Feasibility packs",
      "IC and board materials",
      "Buyer diligence packs",
      "Development roadmaps",
    ],
  },
  {
    number: "05",
    title: "Support execution",
    line: "Some mandates need diligence; others need first movement of material.",
    image: "/images/pages/greenore-woodchip-aeration.jpg",
    alt: "Woodchip stockpile aeration and loader operations at a port-side storage area.",
    imageClass: "object-cover object-center",
    text:
      "We support the move from pilot chain to repeatable supply where clients need hands-on help with counterparties, documentation, shipment readiness and QA.",
    points: [
      "Supplier negotiation",
      "Specification development",
      "Documentation flow",
      "Port readiness",
      "Shipment preparation",
      "Buyer engagement",
      "QA playbooks",
      "Transition to repeatable supply",
    ],
  },
];

const mandateFilters = [
  ["Resource idea", "Converted into evidence on who controls the fibre, what volume is realistic, and what quality risk sits inside it."],
  ["Compliance claim", "Converted into origin records, traceability logic, GHG inputs and audit-ready documentation."],
  ["Logistics plan", "Converted into route cards, port assumptions, parcel sizing, loading practicality and claims controls."],
  ["Investment case", "Converted into cost build-up, risk allocation, buyer diligence material and decision-ready roadmaps."],
];

function RouteOverlay() {
  return (
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 700 320" aria-hidden="true">
      <path
        d="M58 232 C160 112 282 106 374 170 C458 228 540 154 642 94"
        fill="none"
        stroke="rgba(255,255,255,.34)"
        strokeWidth="12"
        strokeLinecap="round"
      />
      <path
        d="M58 232 C160 112 282 106 374 170 C458 228 540 154 642 94"
        fill="none"
        stroke="#34d399"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {[58, 374, 642].map((x, index) => (
        <circle key={x} cx={x} cy={index === 0 ? 232 : index === 1 ? 170 : 94} r="11" fill="#f8fafc" />
      ))}
    </svg>
  );
}

function EvidenceVisual() {
  const items = ["Origin", "Legality", "Traceability", "GHG", "Audit"];

  return (
    <div className="relative h-72 overflow-hidden rounded-xl border border-white/10 bg-[#09110e] p-5">
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="relative flex h-full flex-col justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-200/75">Evidence pack</p>
          <div className="mt-4 grid gap-2">
            {items.map((item, index) => (
              <div key={item} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm">
                <span>{item}</span>
                <span className="text-emerald-200/80">0{index + 1}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[82%] rounded-full bg-emerald-300" />
        </div>
      </div>
    </div>
  );
}

function BankableVisual() {
  const rows = [
    ["Supply", "volume / counterparty"],
    ["Route", "cost / timing"],
    ["Evidence", "legality / GHG"],
    ["Contract", "risk / claims"],
  ];

  return (
    <div className="relative h-72 overflow-hidden rounded-xl border border-white/10 bg-[#120f0a] p-5">
      <div className="absolute right-0 top-0 h-32 w-32 bg-amber-200/10 blur-3xl" />
      <div className="relative">
        <p className="text-xs uppercase tracking-[0.2em] text-amber-200/75">Investment readout</p>
        <div className="mt-5 grid gap-3">
          {rows.map(([label, detail], index) => (
            <div key={label} className="grid grid-cols-[5.5rem_1fr] items-center gap-3">
              <div className="text-sm font-semibold">{label}</div>
              <div>
                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-amber-300 to-emerald-300"
                    style={{ width: `${88 - index * 10}%` }}
                  />
                </div>
                <div className="mt-1 text-xs text-white/60">{detail}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 rounded-lg border border-white/10 bg-black/20 p-3 text-sm text-white/75">
          Decision material that can be challenged.
        </div>
      </div>
    </div>
  );
}

function SolutionVisual({ block }) {
  if (block.visual === "evidence") return <EvidenceVisual />;
  if (block.visual === "bankable") return <BankableVisual />;

  return (
    <div className="relative h-72 overflow-hidden rounded-xl border border-white/10 bg-white/[0.04]">
      <Image
        src={block.image}
        alt={block.alt}
        fill
        className={`${block.imageClass || "object-cover"} brightness-[0.74] saturate-[0.82]`}
        sizes="(min-width:1024px) 38vw, (min-width:768px) 50vw, 100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/70" />
      <RouteOverlay />
      <div className="absolute bottom-4 left-4 max-w-[calc(100%-2rem)] rounded-lg border border-white/20 bg-black/50 px-3 py-2 text-[11px] uppercase leading-5 tracking-[0.16em] text-white/80 backdrop-blur">
        {block.line}
      </div>
    </div>
  );
}

function SolutionCard({ block }) {
  return (
    <section id={block.title.toLowerCase().replaceAll(" ", "-")} className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 shadow-2xl shadow-black/20">
      <SolutionVisual block={block} />
      <div className="p-2 pt-6">
        <div className="flex items-center gap-3 text-sm text-amber-200/75">
          <span>{block.number}</span>
          <span className="h-px flex-1 bg-white/10" />
        </div>
        <h2 className="mt-3 text-2xl font-semibold">{block.title}</h2>
        <p className="mt-3 leading-7 text-white/75">{block.text}</p>
        <div className="mt-5 grid gap-2 sm:grid-cols-2">
          {block.points.map((point) => (
            <div key={point} className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm text-white/75">
              {point}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Solutions() {
  return (
    <article className="bg-[#080604]">
      <section className="container py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.78fr] lg:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-amber-200/70">Solutions</p>
            <h1 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Practical support for biomass projects that need to become real.
            </h1>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-white/80">
            Biomass Chains helps developers, buyers, investors and project owners solve the hard
            middle of biomass supply-chain development: the space between an attractive resource
            idea and a chain that can actually be financed, contracted, shipped, audited and
            repeated.
          </p>
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-[#11100b] p-5 sm:p-6 lg:p-8">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["Selective mandates", "Funded work with a real decision, defined geography, feedstock, volume or buyer context."],
              ["Evidence-led", "Supplier reality, route logic, compliance evidence, GHG assumptions and execution risk are tested."],
              ["Execution-aware", "The work is framed around what must happen before tonnes can move without avoidable claims."],
            ].map(([title, text]) => (
              <div key={title} className="border-l border-amber-200/40 pl-4">
                <h2 className="font-semibold">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-white/70">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4 sm:grid-cols-2 lg:grid-cols-4">
          {mandateFilters.map(([title, text]) => (
            <div key={title} className="rounded-xl border border-white/10 bg-black/20 p-4">
              <h2 className="text-sm font-semibold text-amber-100/90">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/70">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container pb-20">
        <div className="grid gap-6 lg:grid-cols-2">
          {solutionBlocks.map((block, index) => (
            <div key={block.title} className={index === 4 ? "lg:col-span-2" : undefined}>
              <SolutionCard block={block} />
            </div>
          ))}
        </div>
      </section>

      <section id="engagement-shape" className="border-y border-white/10 bg-white/[0.03]">
        <div className="container grid gap-8 py-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-amber-200/70">Engagement shape</p>
            <h2 className="mt-3 text-3xl font-semibold">Targeted diligence or hands-on chain development.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              "Resource and supplier diligence",
              "Compliance, GHG and investor evidence",
              "Pilot-chain and first-cargo support",
            ].map((item) => (
              <div key={item} className="rounded-xl border border-white/10 bg-[#0f1410] p-4 text-sm leading-6 text-white/75">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="serious-mandates" className="container py-16">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-semibold">For serious mandates.</h2>
          <p className="mt-4 leading-7 text-white/75">
            The work is not structured to give away supplier lists, route designs, GHG assumptions,
            certification views or market-entry strategies without a proper mandate. It is built
            for parties ready to make decisions on evidence.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="btn btn-primary" href="/contact">Start a mandate conversation</a>
            <a className="btn btn-outline" href="/method">See the method</a>
          </div>
        </div>
      </section>
    </article>
  );
}
