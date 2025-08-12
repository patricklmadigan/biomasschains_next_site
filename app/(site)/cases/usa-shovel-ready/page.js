import Image from "next/image";

export const metadata = {
  title: "Case — USA Southeast: Pellet plant to shovel-ready",
  description: "Siting, rail spur, permitting paths, port plans, specs, FEED inputs and bankable models.",
  openGraph: { images: ["/case_us_rail_1.jpg"] },  // ← updated
};

export default function Page() {
  return (
    <article className="container py-16">
      <h1 className="text-3xl font-semibold">USA Southeast — pellet plant to shovel-ready (twice)</h1>
      <p className="mt-4 opacity-90 max-w-3xl">
        Full pre-construction programme delivering siting, rail spur planning, permitting routes, port handling,
        specifications and commercial models.
      </p>

      {/* hero */}
      <div className="relative h-72 mt-8 rounded-2xl overflow-hidden">
        <Image src="/case_us_rail_1.jpg" alt="Rail spur into pellet site earthworks" fill className="object-cover" /> {/* ← updated */}
      </div>

      <section className="mt-10 grid md:grid-cols-3 gap-8">
        <div><h2 className="font-semibold">Challenge</h2><p className="mt-3 opacity-90">Stand up a bankable development path under market and logistics constraints.</p></div>
        <div>
          <h2 className="font-semibold">What we did</h2>
          <ul className="mt-3 space-y-2 opacity-90 list-disc pl-5">
            <li>Catchment & supplier qualification; site selection.</li>
            <li>Rail spur planning and permitting route.</li>
            <li>Port handling layouts, specs and contract terms.</li>
            <li>FEED inputs, route cards and commercial models.</li>
          </ul>
        </div>
        <div><h2 className="font-semibold">Outcome</h2><p className="mt-3 opacity-90">Shovel-ready package; projects paused pre-build by sponsors; blueprint reusable.</p></div>
      </section>

      {/* small gallery (optional second angle) */}
      <div className="mt-10 grid md:grid-cols-2 gap-4">
        <div className="relative h-56 rounded-xl overflow-hidden"><Image src="/case_us_rail_1.jpg" alt="Rail spur — view one" fill className="object-cover" /></div>
        <div className="relative h-56 rounded-xl overflow-hidden"><Image src="/bg_rail.jpg" alt="Rail spur — view two" fill className="object-cover" /></div>
      </div>
    </article>
  );
}
