import Image from "next/image";
import Link from "next/link";

export default function Cases() {
  const items = [
    {
      href: "/cases/usa-shovel-ready",
      title: "USA Southeast — pellet plant to shovel-ready (twice)",
      tag: "Development",
      res: "Catchment & supplier qual, rail spur & siting, port plans, specs, FEED inputs and bankable models; paused pre-build, blueprint complete.",
      img: "/case_us_rail_1.jpg",               // ← updated
      alt: "Rail spur into US pellet site earthworks",
    },
    {
      href: "/cases/cameroon-eu",
      title: "Central Africa → EU — handymax-scale biomass exports",
      tag: "Logistics + compliance",
      res: "Qualified supply, port playbook, charter windows and documentation aligned to EU requirements.",
      img: "/tile_port_cameroon.jpg",
      alt: "Port scene with biomass handling equipment",
    },
    {
      href: "/cases/south-africa",
      title: "South Africa (Western Cape) — invasive eucalyptus to export",
      tag: "Sourcing + impact",
      res: "Backed local chipping ops, integrated compliance and port handling; repeatable chain from invasive feedstock.",
      img: "/tile_truck_cape_town.jpg",
      alt: "Walking-floor trailer unloading woodchips at quay in South Africa",
    },
    {
      href: "/cases/australia-carrier",
      title: "Australia → international buyer — full woodchip carrier",
      tag: "Large-scale operations",
      res: "Storage & moisture plan, contracts, scheduling; carrier loaded and sailed.",
      img: "/woodchipcarrier_australia.jpg",
      alt: "Woodchip carrier alongside in Australia",
    },
    {
      href: "/cases/russia-lignin",
      title: "Russia → EU — continuous lignin-pellet coasters",
      tag: "Continuous supply",
      res: "Rail/port route cards, QC and docs; reliable coaster parcels with stable quality.",
      img: "/case_ru_lignin_hold.jpg",          // ← updated
      alt: "Lignin pellets loaded in coaster hold",
    },
  ];

  return (
    <div className="container py-16">
      <h1 className="text-4xl font-semibold">Case Studies</h1>
      <p className="mt-3 opacity-90 max-w-2xl">
        Representative engagements across sourcing, compliance, logistics and operations.
      </p>

      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {items.map((c) => (
          <Link key={c.title} href={c.href} className="card overflow-hidden hover:bg-white/10 transition">
            <div className="relative h-40">
              <Image src={c.img} alt={c.alt || c.title} fill className="object-cover" sizes="(min-width:768px) 33vw, 100vw" />
            </div>
            <div className="p-6">
              <div className="text-xs tracking-wide uppercase opacity-70">{c.tag}</div>
              <h3 className="mt-2 text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm opacity-80">{c.res}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
