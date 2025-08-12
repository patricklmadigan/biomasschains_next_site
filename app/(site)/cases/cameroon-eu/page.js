import Image from "next/image";
export const metadata = {
  title: "Case — Central Africa to EU: Handymax biomass exports",
  description: "Qualified supply, port playbook, charter windows and documentation aligned to EU requirements.",
  openGraph: { images: ["/tile_port_cameroon.jpg"] },
};
export default function Page() {
  return (
    <article className="container py-16">
      <h1 className="text-3xl font-semibold">Central Africa → EU — handymax-scale biomass exports</h1>
      <p className="mt-4 opacity-90 max-w-3xl">
        Create a compliant, large-scale route from Central Africa to Europe under seasonal and port constraints.
      </p>

      <div className="relative h-72 mt-8 rounded-2xl overflow-hidden">
        <Image src="/tile_port_cameroon.jpg" alt="Port operations" fill className="object-cover" />
      </div>

      <section className="mt-10 grid md:grid-cols-3 gap-8">
        <div><h2 className="font-semibold">Challenge</h2><p className="mt-3 opacity-90">Stand up supply, port handling and documentation that satisfy European buyers.</p></div>
        <div>
          <h2 className="font-semibold">What we did</h2>
          <ul className="mt-3 space-y-2 opacity-90 list-disc pl-5">
            <li>Supplier mapping & qualification; specs & QC.</li>
            <li>Port playbook: receiving, storage, moisture control.</li>
            <li>Charter windows and scheduling with buyer interface.</li>
            <li>Traceability and documentation aligned to EU requirements.</li>
          </ul>
        </div>
        <div><h2 className="font-semibold">Outcome</h2><p className="mt-3 opacity-90">Handymax-class shipments with repeatable port process and buyer acceptance.</p></div>
      </section>

      <div className="mt-10 grid md:grid-cols-3 gap-4">
        <div className="relative h-48 rounded-xl overflow-hidden"><Image src="/tile_field_cameroon.jpg" alt="In-field operations" fill className="object-cover" /></div>
        <div className="relative h-48 rounded-xl overflow-hidden"><Image src="/tile_hold_cameroon.jpg" alt="Hold loading" fill className="object-cover" /></div>
        <div className="relative h-48 rounded-xl overflow-hidden"><Image src="/tile_port_cameroon.jpg" alt="Quay operations" fill className="object-cover" /></div>
      </div>
    </article>
  );
}
