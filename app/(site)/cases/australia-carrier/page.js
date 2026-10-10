import Image from "next/image";

const imageBase = "/images/cases/australia-carrier";

const images = {
  forest: {
    src: `${imageBase}/western-australia-pine-stand.jpg`,
    alt: "Plantation forest stand in Western Australia.",
    caption: "Western Australian plantation forest stand at the origin end of the supply chain.",
  },
  harvester: {
    src: `${imageBase}/western-australia-eucalyptus-harvester.jpg`,
    alt: "Harvester operating in a eucalyptus plantation in Western Australia.",
    caption: "Large harvester working plantation eucalyptus in Western Australia.",
  },
  loading: {
    src: `${imageBase}/australia-woodchip-carrier-quayside-loading.jpg`,
    alt: "Woodchip carrier at quayside in Western Australia during loading.",
    caption:
      "Woodchip carrier at quayside in Western Australia being loaded with eucalyptus woodchip at full-carrier scale.",
  },
  hold: {
    src: `${imageBase}/woodchip-carrier-hold-inspection.jpg`,
    alt: "Workers inspecting a bulk carrier hold before woodchip loading.",
    caption: "Carrier hold inspection before loading, helping ensure cargo cleanliness and no contamination.",
  },
  unloading: {
    src: `${imageBase}/woodchip-destination-port-unloading.jpg`,
    alt: "Australian woodchip being unloaded from a carrier at destination port.",
    caption: "Destination-port discharge of Australian eucalyptus woodchip after ocean shipment.",
  },
  storage: {
    src: `${imageBase}/woodchip-quayside-storage.jpg`,
    alt: "Eucalyptus woodchip stacked at quay side ready for onward truck dispatch.",
    caption: "Eucalyptus woodchip stored at quay side after discharge, ready for onward truck transport.",
  },
};

export const metadata = {
  title: "Case: Australia \u2192 international buyer \u2014 full woodchip carrier | BiomassChains",
  description:
    "Large-scale eucalyptus woodchip chain from Western Australian origins to international buyer discharge and dispatch.",
  openGraph: {
    images: [images.loading.src],
  },
};

function CaseImage({
  image,
  className = "aspect-[16/9]",
  objectPosition,
  priority = false,
  sizes = "100vw",
}) {
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
          style={objectPosition ? { objectPosition } : undefined}
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
          Australia &rarr; international buyer &mdash; full woodchip carrier
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 opacity-90">
          Develop a large-scale eucalyptus woodchip chain from Western Australian origins to an international buyer,
          combining field supply, storage and moisture control, hold preparation, carrier loading, destination
          discharge and onward dispatch.
        </p>
      </header>

      <div className="mt-8">
        <CaseImage
          image={images.loading}
          priority
          className="aspect-[4/5] sm:aspect-[4/3] lg:aspect-[16/10]"
          objectPosition="50% 52%"
        />
      </div>

      <section className="card mt-8 p-5">
        <div className="text-sm opacity-80">At a glance</div>
        <div className="mt-3 grid gap-4 sm:grid-cols-3">
          <div>
            <div className="text-2xl font-semibold">&gt;40,000 t</div>
            <div className="text-sm opacity-80">full carrier cargo</div>
          </div>
          <div>
            <div className="text-2xl font-semibold">Western Australia</div>
            <div className="text-sm opacity-80">origin region</div>
          </div>
          <div>
            <div className="text-2xl font-semibold">End-to-end</div>
            <div className="text-sm opacity-80">origin to destination process</div>
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold">Challenge</h2>
            <p className="mt-4 max-w-3xl leading-7 opacity-90">
              Build a dependable large-scale woodchip export chain from Western Australia to an international buyer,
              moving from forest origin and harvesting through storage, quality control, hold preparation, carrier
              loading, voyage interface, destination discharge and final dispatch. The chain had to work at carrier
              scale, maintain product integrity, and satisfy buyer-grade documentation and operational requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">What we did</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 opacity-90">
              <li>Supported origin-side supply-chain design from forest resource through harvest interface.</li>
              <li>Integrated field operations and harvesting into a practical export feedstock pathway.</li>
              <li>Set storage layout, moisture-control and quality-control procedures for large-scale woodchip handling.</li>
              <li>Supported vessel interface, including hold inspection and cargo-readiness checks before loading.</li>
              <li>Coordinated documentation, scheduling and charter-side execution for a full woodchip carrier.</li>
              <li>Followed the chain through destination-port discharge, quay-side storage and onward truck dispatch.</li>
            </ul>
          </section>
        </div>

        <CaseImage
          image={images.forest}
          className="aspect-[4/5]"
          sizes="(min-width:1024px) 42vw, 100vw"
        />
      </section>

      <section className="mt-12 grid gap-5 md:grid-cols-2">
        <CaseImage image={images.harvester} sizes="(min-width:768px) 50vw, 100vw" />
        <CaseImage image={images.hold} sizes="(min-width:768px) 50vw, 100vw" />
      </section>

      <section className="mt-12 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <section>
          <h2 className="text-2xl font-semibold">Key results</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 opacity-90">
            <li>Demonstrated a full-scale export pathway from Western Australian plantation resource to international buyer.</li>
            <li>Validated carrier-scale loading and shipment, including a woodchip carrier loaded with more than 40,000 tonnes of eucalyptus woodchip.</li>
            <li>Showed that cargo integrity could be protected through hold inspection, controlled loading and destination-port handling.</li>
            <li>Confirmed that the chain could continue beyond discharge into quay-side storage and onward delivery.</li>
          </ul>
        </section>

        <CaseImage
          image={images.unloading}
          className="aspect-[16/10]"
          sizes="(min-width:1024px) 48vw, 100vw"
        />
      </section>

      <section className="mt-12 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <CaseImage
          image={images.storage}
          className="aspect-[16/9]"
          sizes="(min-width:1024px) 48vw, 100vw"
        />

        <section>
          <h2 className="text-2xl font-semibold">Outcome</h2>
          <p className="mt-4 leading-7 opacity-90">
            A full-carrier export chain validated from origin through destination: forest resource, harvesting,
            storage, hold preparation, vessel loading, discharge and onward logistics. The case shows practical
            execution at industrial scale and a repeatable pathway for large eucalyptus woodchip movements from
            Australia to international markets.
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
