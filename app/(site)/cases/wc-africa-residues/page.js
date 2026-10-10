import Image from "next/image";

const imageBase = "/images/cases/wc-africa-residues";

const images = {
  region: {
    src: "/og_wc-africa-residues.jpg",
    alt: "Map of Western and Central Africa showing screened countries and priority biomass residue regions.",
    caption:
      "Western and Central Africa screening region, showing the geography behind the residue-origination process.",
  },
  cashew: {
    src: `${imageBase}/cashew-shell-residue.jpg`,
    alt: "Close-up of cashew shell residue reviewed as part of biomass screening.",
    caption: "Cashew shell residue sample reviewed during material and handling assessment.",
  },
};

const funnel = [
  { value: "381", label: "companies investigated" },
  { value: "20", label: "countries screened" },
  { value: "9", label: "biomass categories reviewed" },
  { value: "65", label: "second-screened" },
  { value: "23", label: "shortlisted" },
  { value: "8", label: "final potentials" },
];

export const metadata = {
  title: "Case: West & Central Africa residues | BiomassChains",
  description:
    "Anonymised residue origination across Western and Central Africa, from regional screening to shea and cashew shortlist pathways.",
  openGraph: {
    images: [images.region.src],
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

function ScreeningFunnel() {
  return (
    <section className="card p-5">
      <div className="text-sm opacity-80">Screening funnel</div>
      <div className="mt-4 grid gap-3">
        {funnel.map((step, index) => (
          <div
            key={step.label}
            className="grid grid-cols-[4.5rem_1fr] items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
          >
            <div className="text-2xl font-semibold">{step.value}</div>
            <div>
              <div className="text-sm font-medium">{step.label}</div>
              <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-emerald-300"
                  style={{ width: `${100 - index * 12}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function CaseWCAfrica() {
  return (
    <article className="container py-16">
      <header className="max-w-4xl">
        <p className="text-sm opacity-80">Case study</p>
        <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">
          West &amp; Central Africa residues
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 opacity-90">
          An anonymised origination screen across Western and Central Africa, separating broad residue availability
          from practical first-cargo potential through risk, sustainability, port access and counterparty-readiness
          checks.
        </p>
      </header>

      <div className="mt-8">
        <CaseImage image={images.region} priority />
      </div>

      <section className="card mt-8 p-5">
        <div className="text-sm opacity-80">At a glance</div>
        <div className="mt-3 grid gap-4 sm:grid-cols-4">
          <div>
            <div className="text-2xl font-semibold">381</div>
            <div className="text-sm opacity-80">companies investigated</div>
          </div>
          <div>
            <div className="text-2xl font-semibold">20 countries</div>
            <div className="text-sm opacity-80">regional screen</div>
          </div>
          <div>
            <div className="text-2xl font-semibold">9 categories</div>
            <div className="text-sm opacity-80">biomass types reviewed</div>
          </div>
          <div>
            <div className="text-2xl font-semibold">8 potentials</div>
            <div className="text-sm opacity-80">final opportunity set</div>
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold">Challenge</h2>
            <p className="mt-4 max-w-3xl leading-7 opacity-90">
              Identify which biomass residues in Western and Central Africa could credibly become large-scale,
              sustainable import pathways &mdash; not just on paper, but through real counterparties, workable
              logistics, suitable ports, plant-health checks, sustainability diligence and realistic first-cargo
              planning.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">What we did</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 opacity-90">
              <li>Screened 381 companies across 20 countries and nine biomass categories.</li>
              <li>Built a staged funnel from first screening to second screening, shortlist and final potentials.</li>
              <li>Prioritised residues with scale, density, sustainability logic and port access.</li>
              <li>Focused the final opportunity set on shea cake and de-oiled cashew shell/cake.</li>
              <li>Screened out lower-fit options including RSPO PKS, bamboo, bagasse, cocoa, groundnut, macadamia and inland wood-pellet prospects.</li>
              <li>Developed port, FOB/CIF, aggregation and first-cargo logic for the strongest pathways.</li>
              <li>Framed field due diligence around supplier visits, product samples, port checks, GHG data capture and end-to-end traceability.</li>
            </ul>
          </section>
        </div>

        <ScreeningFunnel />
      </section>

      <section className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <CaseImage image={images.cashew} className="aspect-[4/3]" sizes="(min-width:1024px) 42vw, 100vw" />

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold">Key results</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 opacity-90">
              <li>381 companies investigated across 20 countries.</li>
              <li>65 companies passed second screening.</li>
              <li>23 companies shortlisted.</li>
              <li>8 final potentials identified.</li>
              <li>Shea cake and de-oiled cashew shell/cake emerged as the strongest realistic opportunities.</li>
              <li>Field-audit plan created to move from desk research to supplier validation, sampling, logistics and GHG assessment.</li>
              <li>Port pathways and contract structures were framed around reducing execution risk, including FOB/CIF options.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Outcome</h2>
            <p className="mt-4 max-w-3xl leading-7 opacity-90">
              A ranked origination map for Western and Central Africa that separated theoretical biomass availability
              from practical first-cargo potential. The work identified shea cake and de-oiled cashew shell/cake as the
              most credible near-term residue pathways, while defining the due diligence, port, sampling,
              sustainability and GHG steps needed before any responsible large-scale procurement decision.
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
