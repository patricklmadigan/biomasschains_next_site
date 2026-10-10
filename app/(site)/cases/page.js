import Image from "next/image";
import Link from "next/link";

export default function Cases() {
  const items = [
    // FEATURED
    {
      href: "/cases/ireland-iceland-woodchip",
      title: "Ireland → Iceland — woodchip supply-chain diligence",
      tag: "Ports + GHG",
      res: "58 suppliers identified, 12 sawmill meetings completed, and port/shipping options tested for a low-bark woodchip pathway.",
      img: "/og_ireland-iceland-woodchip.jpg",
      alt: "Tipper discharging residual woodchip beside large stockpile at deep-water yard",
      pinned: true,
      new: true,
    },
    {
      href: "/cases/wc-africa-residues",
      title: "West & Central Africa — residue origination to first cargo",
      tag: "Origination",
      res: "381 firms scanned → shea & cashew shortlists with CIF/FOB pathways and port playbooks.",
      img: "/og_wc-africa-residues.jpg",
      alt: "Residue availability heatmap across West & Central Africa highlighting port-proximate zones",
      pinned: true,
      new: true,
    },

    // REGULAR CARDS
    {
      href: "/cases/usa-shovel-ready",
      title: "USA Southeast — pellet plant to shovel-ready",
      tag: "Development",
      res: "Proposed 300,000 t/y Georgia pellet facility advanced through fibre, site, rail, port, permitting and commercial workstreams.",
      img: "/case_us_rail_1.jpg",
      alt: "Rail spur into US pellet site earthworks",
    },
    {
      href: "/cases/cameroon-eu",
      title: "Central Africa → EU — buyer-side biomass diligence",
      tag: "Buyer diligence + EUDR",
      res: "Field audit, third-party EUDR review, GHG/LCA, port and vessel-loading practicality and contract negotiation for a Handymax-scale pathway.",
      img: "/images/cases/cameroon-eu/cameroon-handymax-quayside-loading.jpg",
      alt: "Handymax-class vessel interface reviewed during Central African biomass export diligence",
    },
    {
      href: "/cases/south-africa",
      title: "South Africa (Western Cape) — invasive eucalyptus to export",
      tag: "Sourcing + impact",
      res: "Field recovery, local chipping, port handling and vessel loading for a repeatable invasive eucalyptus export chain.",
      img: "/images/cases/south-africa/western-cape-invasive-eucalyptus-harvested.jpg",
      alt: "Harvested invasive eucalyptus in the Western Cape landscape",
    },
    {
      href: "/cases/australia-carrier",
      title: "Australia → international buyer — full woodchip carrier",
      tag: "Large-scale operations",
      res: "Western Australian origin, field operations, hold readiness, full-carrier loading and destination dispatch.",
      img: "/images/cases/australia-carrier/australia-woodchip-carrier-quayside-loading.jpg",
      alt: "Woodchip carrier at quayside in Western Australia during loading",
    },
    {
      href: "/cases/russia-lignin",
      title: "Historical Russia → EU — continuous lignin-pellet coasters",
      tag: "Continuous supply",
      res: "Pre-2022 rail, port, documentation and QC model for regular lignin-pellet coaster parcels.",
      img: "/images/cases/russia-lignin/lignin-pellets-destination-port-storage.jpg",
      alt: "Lignin pellets stored outside at a destination port after coaster shipment",
    },
  ];

  const featured = items.filter((i) => i.pinned);
  const others = items.filter((i) => !i.pinned);

  return (
    <div className="container py-16">
      <h1 className="text-4xl font-semibold">Case Studies</h1>
      <p className="mt-3 opacity-90 max-w-2xl">
        Representative engagements across sourcing, compliance, logistics and operations.
      </p>

      {/* Featured row */}
      {featured.length > 0 && (
        <>
          <h2 id="featured" className="mt-10 text-xl opacity-80">Featured</h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            {featured.map((c) => (
              <Link
                key={c.title}
                href={c.href}
                className="card overflow-hidden hover:bg-white/10 transition"
                aria-label={`${c.title} — ${c.tag}`}
              >
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
                  <Image
                    src={c.img}
                    alt={c.alt || c.title}
                    fill
                    className="object-cover"
                    sizes="(min-width:1024px) 560px, 100vw"
                    priority
                  />
                  {/* Bottom gradient to ensure title legibility on any photo */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/50" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2">
                    <div className="text-xs tracking-wide uppercase opacity-70">{c.tag}</div>
                    {c.new && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full border border-emerald-400/60">
                        New
                      </span>
                    )}
                  </div>
                  <h3 className="mt-2 text-xl font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm opacity-80">{c.res}</p>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}

      {/* All case studies */}
      <h2 className="mt-12 text-xl opacity-80">All case studies</h2>
      <div className="mt-4 grid md:grid-cols-3 gap-6">
        {others.map((c) => (
          <Link
            key={c.title}
            href={c.href}
            className="card overflow-hidden hover:bg-white/10 transition"
            aria-label={`${c.title} — ${c.tag}`}
          >
            <div className="relative h-40">
              <Image
                src={c.img}
                alt={c.alt || c.title}
                fill
                className="object-cover"
                sizes="(min-width:768px) 33vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/35" />
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
