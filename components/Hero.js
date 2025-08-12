import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[86vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero_ship.jpg"
          alt="Woodchip vessel alongside at port"
          fill
          priority
          className="object-cover brightness-[.55]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      </div>

      <div className="relative container">
        <h1 className="text-4xl sm:text-6xl font-semibold leading-tight">
          Global Biomass Supply Chains — <span className="text-emerald-400">Delivered</span>.
        </h1>
        <p className="mt-6 text-lg opacity-90">
          We help serious developers, producers and investors build fast, compliant, profitable biomass chains worldwide.
          From feasibility to first shipment, from EUDR compliance to CORCs, we make the complex executable.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="/contact" className="btn btn-primary">Book a 20-min intro</a>
          <a href="/cases" className="btn btn-outline">See proof of work</a>
        </div>
        <div className="mt-8 flex items-center gap-6 text-sm opacity-80">
          <span>EUDR & certification ready</span>
          <span>Africa • EU • UK • LATAM</span>
          <span>Biochar • Pellets • Residues</span>
        </div>
      </div>
    </section>
  );
}
