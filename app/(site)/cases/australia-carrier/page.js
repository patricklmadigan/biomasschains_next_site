import Image from "next/image";

export const metadata = {
  title: "Case — Australia: Full woodchip carrier",
  description: "Storage & moisture plan, contracts, scheduling; carrier loaded and sailed.",
  openGraph: { images: ["/woodchipcarrier_australia.jpg"] },
};

export default function Page() {
  return (
    <article className="container py-16">
      <h1 className="text-3xl font-semibold">Australia → international buyer — full woodchip carrier</h1>
      <p className="mt-4 opacity-90 max-w-3xl">
        Develop a large-scale chain from remote origins; deliver a full carrier with buyer-grade documentation and QC.
      </p>

      {/* HERO: side-on carrier shot */}
      <div className="relative h-72 mt-8 rounded-2xl overflow-hidden">
        <Image
          src="/woodchipcarrier_australia.jpg"
          alt="Woodchip carrier alongside"
          fill
          className="object-cover"
          sizes="100vw"
          /* tweak if you ever want a slightly higher framing: */
          /* style={{ objectPosition: 'center 60%' }} */
        />
      </div>

      <section className="mt-10 grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="font-semibold">Challenge</h2>
          <p className="mt-3 opacity-90">
            Remote origins, storage/moisture control, charter interface and buyer requirements.
          </p>
        </div>
        <div>
          <h2 className="font-semibold">What we did</h2>
          <ul className="mt-3 space-y-2 opacity-90 list-disc pl-5">
            <li>Supplier qualification and specs.</li>
            <li>Storage layout and moisture/QC plan.</li>
            <li>Contracts, scheduling and charter interface.</li>
            <li>Route cards, models and documentation package.</li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold">Outcome</h2>
          <p className="mt-3 opacity-90">
            Carrier loaded and sailed; end-to-end process validated for repeat movements.
          </p>
        </div>
      </section>

      {/* GALLERY: hold shot with top-biased focus (avoid the central belt crop) */}
      <div className="mt-10 grid md:grid-cols-2 gap-4">
        <div className="relative h-56 rounded-xl overflow-hidden">
          <Image
            src="/woodchip_carrier_hold_australia.jpg"
            alt="Carrier hold"
            fill
            className="object-cover"
            /* Pull the focus upward; nudge 10–30% until it feels right */
            style={{ objectPosition: "50% 80%" }}
            sizes="50vw"
          />
        </div>
      </div>
    </article>
  );
}
