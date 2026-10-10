import Image from "next/image";

const imageBase = "/images/cases/russia-lignin";

const images = {
  raw: {
    src: `${imageBase}/raw-lignin-excavation.jpg`,
    alt: "Raw lignin on the ground being excavated before processing.",
    caption: "Raw lignin being excavated before processing into pellet fuel.",
  },
  plant: {
    src: `${imageBase}/north-west-russia-lignin-pellet-plant.jpg`,
    alt: "Industrial lignin pellet production facility in north-west Russia.",
    caption:
      "Lignin-pellet production site in north-west Russia, linking industrial residue recovery with export-grade fuel preparation.",
  },
  destination: {
    src: `${imageBase}/lignin-pellets-destination-port-storage.jpg`,
    alt: "Lignin pellets stored outside at a destination port after coaster shipment.",
    caption: "Water-resistant lignin pellets stored outside at the destination port after coaster shipment.",
  },
};

export const metadata = {
  title: "Case: Historical Russia \u2192 EU \u2014 continuous lignin-pellet coasters | BiomassChains",
  description:
    "A pre-2022 lignin-pellet supply chain through production, rail, port handling and regular coaster shipments.",
  openGraph: {
    images: [images.destination.src],
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

export default function Page() {
  return (
    <article className="container py-16">
      <header className="max-w-4xl">
        <p className="text-sm opacity-80">Case study</p>
        <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">
          Historical Russia &rarr; EU &mdash; continuous lignin-pellet coasters
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 opacity-90">
          A pre-2022 lignin-pellet supply chain moving industrial lignin from north-west Russia through
          production, rail and port handling into regular coaster shipments to European buyers.
        </p>
      </header>

      <div className="mt-8">
        <CaseImage image={images.raw} priority />
      </div>

      <section className="mt-12 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold">Historical context</h2>
            <p className="mt-4 max-w-3xl leading-7 opacity-90">
              This case reflects pre-2022 operational experience in Russia&ndash;EU biomass logistics. It is included as
              evidence of practical supply-chain execution: feedstock handling, pellet production, rail and port
              coordination, documentation, quality control and regular coaster movements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Challenge</h2>
            <p className="mt-4 max-w-3xl leading-7 opacity-90">
              Move a technically unusual biomass fuel through a repeatable export chain: from raw lignin recovery
              and pellet production in north-west Russia through inland logistics, port handling, coaster shipment
              and buyer acceptance in Europe. The chain had to manage winter operations, long transport routes,
              customs documentation and consistent product quality.
            </p>
          </section>
        </div>

        <CaseImage
          image={images.plant}
          className="aspect-[16/9] lg:mt-2"
          sizes="(min-width:1024px) 42vw, 100vw"
        />
      </section>

      <section className="mt-12 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <h2 className="text-2xl font-semibold">What we did</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 opacity-90">
            <li>Supported the chain from raw lignin recovery through pellet production and export handling.</li>
            <li>Built rail and port route cards covering movement, storage, loading and turnaround requirements.</li>
            <li>Developed moisture, temperature, sampling and acceptance protocols for a non-standard biomass fuel.</li>
            <li>Managed documentation workflows across customs, port clearance and buyer requirements.</li>
            <li>Coordinated regular coaster parcels, typically around 5,000-7,000 tonnes per cargo.</li>
          </ul>
        </div>

        <CaseImage
          image={images.destination}
          className="aspect-[16/9]"
          sizes="(min-width:1024px) 48vw, 100vw"
        />
      </section>

      <section className="mt-12 grid gap-10 lg:grid-cols-[1fr_1fr]">
        <section>
          <h2 className="text-2xl font-semibold">Key results</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 opacity-90">
            <li>Established a repeatable pathway for lignin pellets from production site to European receiving port.</li>
            <li>Maintained buyer confidence through consistent documentation, quality control and shipment planning.</li>
            <li>Demonstrated that water-resistant lignin pellets could be handled and stored outside at destination.</li>
            <li>Turned a difficult industrial residue into a regular coaster-scale biomass supply chain.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Outcome</h2>
          <p className="mt-4 leading-7 opacity-90">
            A practical pre-2022 logistics model for moving lignin pellets from north-west Russia to European buyers
            in regular coaster parcels. The work combined feedstock handling, factory interface, rail and port
            planning, customs documentation, quality control and receiving-port storage into a repeatable operating
            chain.
          </p>
        </section>
      </section>

      <p className="mt-12">
        <a className="btn btn-primary" href="/contact">Start a mandate conversation</a>
        <a className="btn btn-outline ml-3" href="/cases">All case studies</a>
      </p>
    </article>
  );
}
