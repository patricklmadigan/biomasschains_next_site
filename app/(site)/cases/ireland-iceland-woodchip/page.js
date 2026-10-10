import Image from "next/image";

const imageBase = "/images/cases/ireland-iceland-woodchip";

const images = {
  supplier: {
    src: "/og_ireland-iceland-woodchip.jpg",
    alt: "Residual woodchip stockpile and loading trailer at an Irish supplier yard.",
    caption:
      "Irish sawmill residual woodchip stockpile reviewed as part of low-bark feedstock assessment.",
  },
  port: {
    src: `${imageBase}/irish-port-woodchip-stockpile.png`,
    alt: "Woodchip stockpiles at an Irish port-side yard.",
    caption:
      "Port-side woodchip storage and handling context used to test larger shipment pathways.",
  },
};

const atAGlance = [
  { value: "58", label: "potential suppliers" },
  { value: "12", label: "face-to-face sawmill meetings" },
  { value: "30,000", label: "green metric tonnes Phase 1 case" },
  { value: "150,000/y", label: "green metric tonnes Phase 2 pathway" },
];

export const metadata = {
  title: "Case: Ireland to Iceland woodchip diligence | BiomassChains",
  description:
    "Anonymised low-bark Irish woodchip supply-chain diligence covering suppliers, ports, shipping economics, GHG footprinting and phytosanitary limits.",
  openGraph: {
    images: [images.supplier.src],
  },
};

function CaseImage({ image, className = "aspect-[16/9]", priority = false, sizes = "100vw" }) {
  return (
    <figure>
      <div className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 ${className}`}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          className="object-cover"
          sizes={sizes}
        />
      </div>
      <figcaption className="mt-3 text-sm leading-6 opacity-75">{image.caption}</figcaption>
    </figure>
  );
}

function RouteGraphic() {
  return (
    <figure>
      <div className="card overflow-hidden p-5">
        <div className="text-sm opacity-80">Route logic</div>
        <div className="mt-5 aspect-[16/10] w-full">
          <svg
            className="h-full w-full"
            viewBox="0 0 900 560"
            role="img"
            aria-label="Clean route logic from Irish sawmill residuals through suitable bulk ports toward Icelandic import requirements."
          >
            <defs>
              <linearGradient id="routeLine" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#34d399" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.95" />
              </linearGradient>
              <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#34d399" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
              </radialGradient>
              <filter id="softShadow" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="18" stdDeviation="18" floodColor="#000000" floodOpacity="0.35" />
              </filter>
            </defs>

            <rect width="900" height="560" rx="26" fill="#07120f" />
            <path
              d="M92 360 C170 250 250 215 342 250 C424 282 468 350 552 316 C638 280 685 186 800 162"
              fill="none"
              stroke="url(#routeLine)"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M92 360 C170 250 250 215 342 250 C424 282 468 350 552 316 C638 280 685 186 800 162"
              fill="none"
              stroke="#ffffff"
              strokeOpacity="0.16"
              strokeWidth="18"
              strokeLinecap="round"
            />

            {[
              { cx: 112, cy: 348 },
              { cx: 352, cy: 252 },
              { cx: 552, cy: 316 },
              { cx: 792, cy: 166 },
            ].map((node) => (
              <g key={`${node.cx}-${node.cy}`}>
                <circle cx={node.cx} cy={node.cy} r="58" fill="url(#nodeGlow)" />
                <circle cx={node.cx} cy={node.cy} r="14" fill="#34d399" />
                <circle cx={node.cx} cy={node.cy} r="7" fill="#d1fae5" />
              </g>
            ))}

            <g filter="url(#softShadow)">
              <rect x="44" y="88" width="240" height="132" rx="18" fill="#0f1f1a" stroke="#ffffff" strokeOpacity="0.12" />
              <text x="68" y="126" fill="#f8fafc" fontSize="22" fontWeight="700">Irish origin</text>
              <text x="68" y="160" fill="#d1d5db" fontSize="17">Sawmill residuals</text>
              <text x="68" y="188" fill="#d1d5db" fontSize="17">low-bark feedstock</text>

              <rect x="330" y="68" width="246" height="148" rx="18" fill="#0f1f1a" stroke="#ffffff" strokeOpacity="0.12" />
              <text x="354" y="106" fill="#f8fafc" fontSize="22" fontWeight="700">Supplier screen</text>
              <text x="354" y="140" fill="#d1d5db" fontSize="17">58 potential suppliers</text>
              <text x="354" y="168" fill="#d1d5db" fontSize="17">12 sawmill meetings</text>
              <text x="354" y="196" fill="#d1d5db" fontSize="17">specification checks</text>

              <rect x="500" y="372" width="272" height="138" rx="18" fill="#0f1f1a" stroke="#ffffff" strokeOpacity="0.12" />
              <text x="524" y="410" fill="#f8fafc" fontSize="22" fontWeight="700">Bulk port options</text>
              <text x="524" y="444" fill="#d1d5db" fontSize="17">Foynes, Greenore,</text>
              <text x="524" y="472" fill="#d1d5db" fontSize="17">Rushbrooke and others</text>

              <rect x="626" y="58" width="230" height="132" rx="18" fill="#102033" stroke="#ffffff" strokeOpacity="0.12" />
              <text x="650" y="96" fill="#f8fafc" fontSize="22" fontWeight="700">Iceland route</text>
              <text x="650" y="130" fill="#d1d5db" fontSize="17">Plant-health, GHG</text>
              <text x="650" y="158" fill="#d1d5db" fontSize="17">and scale-up logic</text>
            </g>
          </svg>
        </div>
      </div>
      <figcaption className="mt-3 text-sm leading-6 opacity-75">
        Clean route logic from Irish sawmill residuals through suitable bulk ports toward Icelandic import requirements.
      </figcaption>
    </figure>
  );
}

export default function CaseIrelandIceland() {
  return (
    <article className="container py-16">
      <header className="max-w-4xl">
        <p className="text-sm opacity-80">Case study</p>
        <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">
          Ireland &rarr; Iceland &mdash; woodchip supply-chain diligence
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 opacity-90">
          Assessment of Irish sawmill residuals for an Icelandic carbon-removal feedstock pathway, covering supplier
          origination, port selection, shipping class economics, GHG footprinting, phytosanitary limits and scale-up
          options.
        </p>
      </header>

      <div className="mt-8">
        <CaseImage image={images.supplier} priority />
      </div>

      <section className="card mt-8 p-5">
        <div className="text-sm opacity-80">At a glance</div>
        <div className="mt-3 grid gap-4 sm:grid-cols-4">
          {atAGlance.map((item) => (
            <div key={item.label}>
              <div className="text-2xl font-semibold">{item.value}</div>
              <div className="text-sm opacity-80">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold">Challenge</h2>
            <p className="mt-4 max-w-3xl leading-7 opacity-90">
              Test whether Ireland could supply low-bark woodchip into an Icelandic carbon-removal feedstock pathway
              at meaningful scale, while satisfying technical specification, plant-health, sustainability, port,
              shipping and GHG requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">What we did</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 opacity-90">
              <li>Identified 58 potential Irish wood-fibre suppliers across sawmills, forestry service firms, harvesting firms and chipping operators.</li>
              <li>Held face-to-face meetings with 12 sawmills representing the majority of Irish sawmilling output.</li>
              <li>Assessed sawmill residuals, forestry-service material and pulp-log pathways against bark-content, cost and GHG constraints.</li>
              <li>Compared Irish port options including Galway, Foynes, Greenore, Passage West, Rushbrooke and others.</li>
              <li>Modelled road haulage, port handling, ocean shipping and delivered GHG footprint to Iceland.</li>
              <li>Reviewed sustainability certification and phytosanitary requirements for Icelandic import.</li>
              <li>Developed scale-up logic for moving from small coaster shipments toward larger, lower-cost bulk movements.</li>
            </ul>
          </section>
        </div>

        <RouteGraphic />
      </section>

      <section className="mt-12 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <CaseImage image={images.port} sizes="(min-width:1024px) 44vw, 100vw" />

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold">Key results</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 opacity-90">
              <li>Confirmed that Irish sawmill residuals could meet the low-bark requirement more readily than chipped pulp logs.</li>
              <li>Showed that small coaster shipments created a major delivered-cost and GHG penalty.</li>
              <li>Identified larger Handy-sized shipments and suitable bulk ports as the better Phase 2 pathway.</li>
              <li>Highlighted the value of reducing unnecessary movement of wet wood fibre.</li>
              <li>Created a practical supplier, port and GHG decision framework for an Ireland-to-Iceland biomass pathway.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Outcome</h2>
            <p className="mt-4 max-w-3xl leading-7 opacity-90">
              A grounded supply-chain blueprint for low-bark Irish woodchip into Iceland: supplier base, port choices,
              shipping constraints, GHG footprint, phytosanitary route and scale-up logic. The work separated
              near-term supply complexity from longer-term practical routes and showed where the pathway could be made
              more efficient before procurement or investment decisions were taken.
            </p>
          </section>
        </div>
      </section>

      <p className="mt-12">
        <a className="btn btn-primary" href="/contact">Start a mandate conversation</a>
        <a className="btn btn-outline ml-3" href="/cases">All case studies</a>
      </p>
    </article>
  );
}
