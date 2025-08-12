import Image from "next/image";

export const metadata = {
  title: "Case — South Africa: Invasive eucalyptus to export",
  description: "Backed local chipping ops; built a compliant chain from invasive feedstock to export.",
  openGraph: { images: ["/tile_truck_cape_town.jpg"] },
};

export default function Page() {
  return (
    <article className="container py-16">
      <h1 className="text-3xl font-semibold">South Africa (Western Cape) — invasive eucalyptus to export</h1>
      <p className="mt-4 opacity-90 max-w-3xl">
        Convert invasive eucalyptus that strained local water sources into a bankable export chain—partnering
        with and financing a local chipping operation while meeting documentation and buyer standards.
      </p>

      <div className="relative h-72 mt-8 rounded-2xl overflow-hidden">
        <Image src="/tile_truck_cape_town.jpg" alt="Walking-floor unloading in Cape Town" fill className="object-cover" />
      </div>

      <section className="mt-10 grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="font-semibold">Challenge</h2>
          <p className="mt-3 opacity-90">
            Turn an environmental liability into a compliant feedstock stream, while standing up port handling,
            storage, and buyer acceptance.
          </p>
        </div>
        <div>
          <h2 className="font-semibold">What we did</h2>
          <ul className="mt-3 space-y-2 opacity-90 list-disc pl-5">
            <li>Structured and backed local chipping operations.</li>
            <li>Specs, QC and moisture plans from roadside to quay.</li>
            <li>Port playbook: handling, storage, HSE, documentation.</li>
            <li>Buyer interface, charter windows and scheduling.</li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold">Outcome</h2>
          <p className="mt-3 opacity-90">
            Repeatable supply chain using invasive feedstock; compliant documentation and processes that cleared buyer checks.
          </p>
        </div>
      </section>

      <div className="mt-10 grid md:grid-cols-3 gap-4">
        <div className="relative h-48 rounded-xl overflow-hidden"><Image src="/tile_store_cape_town.jpg" alt="Storage yard and QC" fill className="object-cover" /></div>
        <div className="relative h-48 rounded-xl overflow-hidden"><Image src="/tile_truck_cape_town.jpg" alt="Walking-floor to ship transfer" fill className="object-cover" /></div>
        <div className="relative h-48 rounded-xl overflow-hidden"><Image src="/bg_cranes.jpg" alt="Quay handling" fill className="object-cover" /></div>
      </div>
    </article>
  );
}
