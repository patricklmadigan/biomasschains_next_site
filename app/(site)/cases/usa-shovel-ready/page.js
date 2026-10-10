import Image from "next/image";

const imageBase = "/images/cases/usa-shovel-ready";

const images = {
  site: {
    src: "/case_us_rail_1.jpg",
    alt: "Rail spur into proposed Southeast US pellet plant site earthworks.",
    caption: "Proposed pellet plant site with rail-spur access into the development area.",
  },
  chipping: {
    src: `${imageBase}/georgia-in-field-log-chipping.png`,
    alt: "In-field pine log chipping operation in Georgia.",
    caption: "In-field chipping operation within the Southeast US pine fibre catchment.",
  },
  forwarding: {
    src: `${imageBase}/georgia-harvested-pine-forwarding.png`,
    alt: "Forestry machine forwarding harvested pine in Georgia.",
    caption: "Active pine harvesting and forwarding in the Georgia feedstock catchment.",
  },
  logs: {
    src: `${imageBase}/georgia-harvested-pine-logs.png`,
    alt: "Stacks of harvested pine logs in Georgia.",
    caption: "Harvested pine logs staged as part of the project feedstock pathway.",
  },
  rail: {
    src: "/bg_rail.jpg",
    alt: "Rail-spur infrastructure forming part of the plant-to-port logistics route.",
    caption: "Rail-spur infrastructure forming part of the plant-to-port logistics route.",
  },
};

export const metadata = {
  title: "Case: USA Southeast \u2014 pellet plant to shovel-ready | BiomassChains",
  description:
    "Public-facing development case for a proposed Southeast US wood-pellet facility from fibre catchment to export logistics.",
  openGraph: {
    images: [images.site.src],
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
          USA Southeast &mdash; pellet plant to shovel-ready
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 opacity-90">
          Development of a proposed 300,000 t/y wood-pellet facility in Washington, Georgia, taking the chain from
          pine fibre catchment and site selection through rail, port, shipping, permitting, GHG analysis and
          execution-ready commercial workstreams.
        </p>
      </header>

      <div className="mt-8">
        <CaseImage image={images.site} priority />
      </div>

      <section className="card mt-8 p-5">
        <div className="text-sm opacity-80">At a glance</div>
        <div className="mt-3 grid gap-4 sm:grid-cols-4">
          <div>
            <div className="text-2xl font-semibold">300,000 t/y</div>
            <div className="text-sm opacity-80">proposed pellet capacity</div>
          </div>
          <div>
            <div className="text-2xl font-semibold">Washington, Georgia</div>
            <div className="text-sm opacity-80">rail-served project site</div>
          </div>
          <div>
            <div className="text-2xl font-semibold">58 acres</div>
            <div className="text-sm opacity-80">development site</div>
          </div>
          <div>
            <div className="text-2xl font-semibold">Feedstock to port</div>
            <div className="text-sm opacity-80">integrated chain</div>
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold">Challenge</h2>
            <p className="mt-4 max-w-3xl leading-7 opacity-90">
              Build a bankable Southeast US wood-pellet project from first principles: prove the fibre catchment,
              secure a suitable industrial site, define the rail and port pathway, complete environmental and
              permitting work, and assemble the technical, commercial and logistics package needed for final
              investment decision.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">What we did</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 opacity-90">
              <li>Assessed the Georgia pine fibre catchment and raw-material mix, including clean chips, whole-tree chips, shavings, sawdust and dryer fuel.</li>
              <li>Advanced a 58-acre Washington, Georgia site with rail-spur access and a route to export port.</li>
              <li>Developed the site, rail-spur and plant-interface concept for a 300,000 t/y pellet facility.</li>
              <li>Built the rail-to-port logistics pathway, including rail-car requirements, port handling and onward ocean-freight assumptions.</li>
              <li>Progressed environmental due diligence, clean-air permitting, GHG analysis and sustainability assessment.</li>
              <li>Advanced commercial workstreams across feedstock supply, EPC, rail, port handling and shipping.</li>
            </ul>
          </section>
        </div>

        <CaseImage
          image={images.chipping}
          className="aspect-[16/10] lg:mt-2"
          sizes="(min-width:1024px) 42vw, 100vw"
        />
      </section>

      <section className="mt-12 grid gap-5 md:grid-cols-2">
        <CaseImage image={images.forwarding} sizes="(min-width:768px) 50vw, 100vw" />
        <CaseImage image={images.logs} sizes="(min-width:768px) 50vw, 100vw" />
      </section>

      <section className="mt-12 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <section>
          <h2 className="text-2xl font-semibold">Key results</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 opacity-90">
            <li>Proposed 300,000 t/y pellet facility developed to shovel-ready / approval-ready status.</li>
            <li>58-acre rail-served site advanced as the preferred development location.</li>
            <li>Fibre supply, rail, port, shipping and receiving-port logistics defined as an integrated chain.</li>
            <li>Environmental and permitting workstreams advanced to support execution.</li>
            <li>Contract workstreams progressed across the full feedstock-to-port chain.</li>
            <li>Project blueprint remained reusable even though the development was paused before construction.</li>
          </ul>
        </section>

        <CaseImage image={images.rail} sizes="(min-width:1024px) 48vw, 100vw" />
      </section>

      <section className="mt-12 max-w-4xl">
        <h2 className="text-2xl font-semibold">Outcome</h2>
        <p className="mt-4 leading-7 opacity-90">
          A complete development blueprint for an industrial Southeast US wood-pellet plant: feedstock, site, rail,
          port, shipping, EPC, permitting, GHG analysis, sustainability assessment and commercial execution pathway.
          The plant was not built, but the work created an approval-ready package and a repeatable model for future
          biomass infrastructure development.
        </p>
      </section>

      <p className="mt-12">
        <a className="btn btn-primary" href="/contact">Start a mandate conversation</a>
        <a className="btn btn-outline ml-3" href="/cases">All case studies</a>
      </p>
    </article>
  );
}
