import Image from "next/image";

const imageBase = "/images/cases/cameroon-eu";

const images = {
  hero: {
    src: `${imageBase}/cameroon-handymax-quayside-loading.jpg`,
    alt: "Handymax-class vessel interface reviewed during Central African biomass export diligence.",
    caption:
      "Vessel-loading interface reviewed as part of Handymax-scale export assessment.",
  },
  preparation: {
    src: `${imageBase}/central-africa-feedstock-preparation.jpg`,
    alt: "Woody residue preparation reviewed during Central African biomass supply-chain diligence.",
    caption: "Woody residue preparation assessed against buyer specification and contamination risk.",
  },
  stockpile: {
    src: `${imageBase}/central-africa-biomass-stockpile.jpg`,
    alt: "Biomass stockpile reviewed during origin-side supply-chain diligence in Central Africa.",
    caption: "Biomass stockpiles reviewed during origin-side supply-chain diligence.",
  },
  moisture: {
    src: `${imageBase}/cameroon-stockpile-moisture-control.jpg`,
    alt: "Port-side biomass stockpile conditions reviewed for moisture, dust and contamination risk.",
    caption: "Moisture, dust and stockpile-management risks assessed during port-side diligence.",
  },
  holdLoading: {
    src: `${imageBase}/biomass-hold-loading.jpg`,
    alt: "Biomass hold-loading practicality reviewed for buyer acceptance and shipment planning.",
    caption: "Hold-loading practicality assessed for buyer acceptance and shipment planning.",
  },
  holdTrimming: {
    src: `${imageBase}/biomass-hold-trimming.jpg`,
    alt: "Biomass cargo trimming conditions reviewed inside a Handymax-class vessel hold.",
    caption: "Hold trimming and cargo presentation reviewed as part of shipment-readiness diligence.",
  },
};

const atAGlance = [
  { value: "Central Africa \u2192 EU", label: "export pathway assessed" },
  { value: "Handymax-scale", label: "shipment practicality reviewed" },
  { value: "Buyer-side diligence", label: "field audit and supplier review" },
  { value: "EUDR focus", label: "third-party auditor engaged" },
  { value: "GHG / LCA", label: "pathway emissions calculated" },
  { value: "Supply contract", label: "commercial terms negotiated" },
];

export const metadata = {
  title: "Case: Central Africa to EU buyer-side biomass diligence | BiomassChains",
  description:
    "Anonymised buyer-side diligence for a Central African biomass export pathway, covering field audit, EUDR-focused review, GHG/LCA, port handling and supply-contract negotiation.",
  openGraph: {
    images: [images.hero.src],
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

function ExportChainGraphic() {
  const steps = [
    { x: 112, y: 292, title: "Supplier base", text: "capability" },
    { x: 292, y: 188, title: "Evidence", text: "legality + traceability" },
    { x: 472, y: 292, title: "Port handling", text: "storage + risk" },
    { x: 652, y: 188, title: "Vessel loading", text: "practicality" },
    { x: 808, y: 292, title: "EU buyer", text: "contractability" },
  ];

  return (
    <figure>
      <div className="card overflow-hidden p-5">
        <div className="text-sm opacity-80">Operating chain assessed</div>
        <div className="mt-5 aspect-[16/9] w-full">
          <svg
            className="h-full w-full"
            viewBox="0 0 920 520"
            role="img"
            aria-label="Buyer-side diligence chain from Central African supplier review through legality evidence, port handling and Handymax vessel-loading practicality to European buyer acceptance."
          >
            <defs>
              <linearGradient id="centralAfricaRoute" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="54%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#93c5fd" />
              </linearGradient>
              <radialGradient id="chainGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#34d399" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
              </radialGradient>
              <filter id="chainShadow" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="18" stdDeviation="16" floodColor="#000000" floodOpacity="0.36" />
              </filter>
            </defs>

            <rect width="920" height="520" rx="26" fill="#07120f" />
            <path
              d="M112 292 C190 174 248 146 292 188 C370 262 414 346 472 292 C548 220 598 132 652 188 C720 258 758 322 808 292"
              fill="none"
              stroke="#ffffff"
              strokeOpacity="0.13"
              strokeWidth="18"
              strokeLinecap="round"
            />
            <path
              d="M112 292 C190 174 248 146 292 188 C370 262 414 346 472 292 C548 220 598 132 652 188 C720 258 758 322 808 292"
              fill="none"
              stroke="url(#centralAfricaRoute)"
              strokeWidth="5"
              strokeLinecap="round"
            />

            {steps.map((step, index) => (
              <g key={step.title} filter="url(#chainShadow)">
                <circle cx={step.x} cy={step.y} r="54" fill="url(#chainGlow)" />
                <circle cx={step.x} cy={step.y} r="15" fill={index < 3 ? "#34d399" : "#93c5fd"} />
                <circle cx={step.x} cy={step.y} r="7" fill="#f8fafc" />
                <rect x={step.x - 86} y={step.y + 34} width="172" height="78" rx="16" fill="#0f1f1a" stroke="#ffffff" strokeOpacity="0.12" />
                <text x={step.x} y={step.y + 69} fill="#f8fafc" fontSize="18" fontWeight="700" textAnchor="middle">
                  {step.title}
                </text>
                <text x={step.x} y={step.y + 96} fill="#d1d5db" fontSize="15" textAnchor="middle">
                  {step.text}
                </text>
              </g>
            ))}

            <text x="40" y="72" fill="#f8fafc" fontSize="24" fontWeight="700">
              Central Africa to Europe
            </text>
            <text x="40" y="102" fill="#d1d5db" fontSize="17">
              Buyer-side diligence from supplier evidence through shipment practicality.
            </text>
          </svg>
        </div>
      </div>
      <figcaption className="mt-3 text-sm leading-6 opacity-75">
        Supplier base to residue source to legality and traceability evidence to preparation and stockpiling,
        port handling, vessel-loading practicality, GHG/LCA, supply contract and EU buyer acceptance.
      </figcaption>
    </figure>
  );
}

export default function Page() {
  return (
    <article className="container py-16">
      <header className="max-w-4xl">
        <p className="text-sm opacity-80">Case study</p>
        <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">
          Central Africa &rarr; EU &mdash; buyer-side diligence for Handymax-scale biomass exports
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 opacity-90">
          On-the-ground verification of a Central African biomass export pathway for a European industrial end-user,
          covering supplier qualification, residue specification, legality, sustainability, EUDR due diligence, GHG/LCA,
          port handling, vessel-loading practicality and supply-contract negotiation.
        </p>
      </header>

      <div className="mt-8">
        <CaseImage image={images.hero} priority />
      </div>

      <section className="card mt-8 p-5">
        <div className="text-sm opacity-80">At a glance</div>
        <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
              Create buyer-side confidence in a Central African biomass residue pathway for European industrial use.
              The work required more than identifying available material: it required direct field verification, legality
              and sustainability evidence, EUDR-focused due diligence, feedstock specification control, GHG/LCA calculation,
              port and vessel-loading assessment, and a supply contract capable of supporting buyer acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">What we verified</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 opacity-90">
              <li>Reviewed supplier capability, residue availability and origin evidence against European buyer expectations.</li>
              <li>Conducted on-the-ground checks of residue preparation, storage, handling and contamination risk.</li>
              <li>Assessed legality, sustainability and traceability documentation, supported by an independent third-party EUDR auditor.</li>
              <li>Calculated the GHG/LCA profile of the proposed pathway.</li>
              <li>Reviewed port-side handling, stockpile management, moisture risk, dust risk and vessel-loading practicality.</li>
              <li>Assessed whether the operating chain could support Handymax-scale shipment planning.</li>
              <li>Negotiated the supply contract and tested whether the commercial structure was realistic for buyer acceptance.</li>
            </ul>
          </section>
        </div>

        <CaseImage
          image={images.preparation}
          className="aspect-[16/10] lg:mt-2"
          sizes="(min-width:1024px) 42vw, 100vw"
        />
      </section>

      <section className="mt-12 grid gap-5 md:grid-cols-2">
        <CaseImage image={images.stockpile} sizes="(min-width:768px) 50vw, 100vw" />
        <CaseImage image={images.moisture} sizes="(min-width:768px) 50vw, 100vw" />
      </section>

      <section className="mt-12">
        <ExportChainGraphic />
      </section>

      <section className="mt-12 max-w-4xl">
        <h2 className="text-2xl font-semibold">Buyer-side diligence approach</h2>
        <p className="mt-4 leading-7 opacity-90">
          European industrial buyers need evidence before commitment. In this case the question was not simply whether
          biomass residues existed, but whether the supplier base, documentation, traceability, quality controls, port
          logistics and commercial terms were strong enough for a serious buyer to consider. Our own field audit was
          supported by an external EUDR auditor, bringing an additional independent review of legality, traceability and
          sustainability evidence.
        </p>
      </section>

      <section className="mt-12 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold">Key findings</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 opacity-90">
              <li>Verified the practical conditions required for Central African biomass residues to be considered by a European industrial buyer.</li>
              <li>Identified the main legality, sustainability, traceability, documentation and handling risks before buyer commitment.</li>
              <li>Added independent EUDR-focused scrutiny through a third-party auditor.</li>
              <li>Calculated the GHG/LCA implications of the proposed export pathway.</li>
              <li>Assessed whether supplier controls, port handling and vessel-loading arrangements could support Handymax-scale movements.</li>
              <li>Converted a regional biomass opportunity into an evidence-led buyer-side assessment.</li>
              <li>Negotiated the supply-contract framework needed to move from opportunity to potential execution.</li>
            </ul>
          </section>

          <CaseImage image={images.holdLoading} sizes="(min-width:1024px) 44vw, 100vw" />
        </div>

        <CaseImage image={images.holdTrimming} className="aspect-[4/5]" sizes="(min-width:1024px) 44vw, 100vw" />
      </section>

      <section className="mt-12 max-w-4xl">
        <h2 className="text-2xl font-semibold">Outcome</h2>
        <p className="mt-4 leading-7 opacity-90">
          This work gave the European buyer a grounded, evidence-led view of whether a Central Africa to EU biomass
          residue pathway could be made legal, sustainable, traceable, contractable and operationally realistic at
          Handymax scale. By combining direct field audit, independent EUDR-focused review, GHG/LCA calculation, port
          and vessel-loading assessment and supply-contract negotiation, the diligence clarified what would be required
          before the buyer could commit with confidence.
        </p>
      </section>

      <p className="mt-12">
        <a className="btn btn-primary" href="/contact">Start a mandate conversation</a>
        <a className="btn btn-outline ml-3" href="/cases">All case studies</a>
      </p>
    </article>
  );
}
