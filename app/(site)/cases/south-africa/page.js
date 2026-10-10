import Image from "next/image";

export const dynamic = "force-static";
export const revalidate = 86400;

const imageBase = "/images/cases/south-africa";

const images = {
  harvested: {
    src: `${imageBase}/western-cape-invasive-eucalyptus-harvested.jpg`,
    alt: "Harvested invasive eucalyptus in the Western Cape landscape.",
    caption: "Harvested invasive eucalyptus in the Western Cape, showing the field-scale feedstock base.",
  },
  watercourse: {
    src: `${imageBase}/invasive-eucalyptus-dry-watercourse.jpg`,
    alt: "Invasive eucalyptus beside a dry watercourse in the Western Cape.",
    caption: "Invasive trees along a dried watercourse, illustrating the broader land and water context.",
  },
  truck: {
    src: `${imageBase}/cape-town-woodchip-truck-quayside.png`,
    alt: "Truck unloading woodchip at quay side for port handling.",
    caption: "Truck-delivered woodchip at quay side, ready for port handling.",
  },
  trimming: {
    src: `${imageBase}/handymax-woodchip-trimming.png`,
    alt: "Woodchip cargo being trimmed in a Handymax vessel.",
    caption: "Trimming biomass cargo in a Handymax vessel before departure.",
  },
  hold: {
    src: `${imageBase}/handymax-hold-woodchip.jpg`,
    alt: "Woodchip loaded in the hold of a Handymax vessel.",
    caption: "Partial Handymax hold loaded with woodchip from the South African chain.",
  },
};

export const metadata = {
  title: "Case: South Africa (Western Cape) \u2014 invasive eucalyptus to export | BiomassChains",
  description:
    "Support for a practical export chain using invasive eucalyptus feedstock in the Western Cape.",
  openGraph: {
    images: [images.harvested.src],
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
          South Africa (Western Cape) &mdash; invasive eucalyptus to export
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 opacity-90">
          Support for a practical export chain using invasive eucalyptus feedstock in the Western Cape, linking
          field operations, local chipping, port handling and vessel loading.
        </p>
      </header>

      <div className="mt-8">
        <CaseImage image={images.harvested} priority className="aspect-[16/9]" />
      </div>

      <section className="mt-12 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold">Challenge</h2>
            <p className="mt-4 max-w-3xl leading-7 opacity-90">
              Build a credible and repeatable export pathway for invasive eucalyptus in the Western Cape &mdash; from
              field harvest and feedstock preparation through chipping, port handling and vessel loading &mdash; while
              keeping the chain operationally practical and aligned with buyer expectations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">What we did</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 opacity-90">
              <li>Backed field harvesting and recovery of invasive eucalyptus feedstock.</li>
              <li>Supported local chipping operations and preparation of material for export handling.</li>
              <li>Integrated truck-to-port logistics and practical quay-side handling.</li>
              <li>Supported vessel loading, trimming and cargo-readiness for export shipment.</li>
              <li>Linked the operational chain to a wider land-management case in areas affected by invasive tree growth.</li>
            </ul>
          </section>
        </div>

        <CaseImage
          image={images.watercourse}
          className="aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]"
          sizes="(min-width:1024px) 42vw, 100vw"
        />
      </section>

      <section className="mt-12 grid gap-5 md:grid-cols-2">
        <CaseImage image={images.truck} sizes="(min-width:768px) 50vw, 100vw" />
        <CaseImage image={images.trimming} sizes="(min-width:768px) 50vw, 100vw" />
      </section>

      <section className="mt-12 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold">Key results</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 opacity-90">
              <li>Demonstrated a workable chain from invasive feedstock to export cargo.</li>
              <li>Showed that heterogeneous field material could be converted into a handled, shippable biomass stream.</li>
              <li>Established practical port and vessel-handling know-how for repeat shipments.</li>
              <li>Connected invasive-species management with biomass supply-chain execution.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Outcome</h2>
            <p className="mt-4 max-w-3xl leading-7 opacity-90">
              A repeatable export pathway showing how invasive eucalyptus in the Western Cape can move from field
              clearance through chipping, port handling and vessel loading into an executable biomass supply chain.
              The case combines practical logistics with a wider land-management rationale, turning a difficult
              invasive resource into a usable export stream.
            </p>
          </section>
        </div>

        <CaseImage image={images.hold} className="aspect-[4/3]" sizes="(min-width:1024px) 48vw, 100vw" />
      </section>

      <p className="mt-12">
        <a className="btn btn-primary" href="/contact">Start a mandate conversation</a>
        <a className="btn btn-outline ml-3" href="/cases">All case studies</a>
      </p>
    </article>
  );
}
