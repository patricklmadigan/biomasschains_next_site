import Image from "next/image";

export const metadata = {
  title: "Case — Russia to EU: Lignin-pellet coasters",
  description: "Rail & port route cards, moisture/temperature protocols, customs docs and buyer acceptance.",
  openGraph: { images: ["/case_ru_lignin_hold.jpg"] },   // ← updated
};

export default function Page() {
  return (
    <article className="container py-16">
      <h1 className="text-3xl font-semibold">Russia → EU — continuous lignin-pellet coasters</h1>
      <p className="mt-4 opacity-90 max-w-3xl">
        Continuous parcels under winter operations, long rail hauls and detailed documentation.
      </p>

      {/* hero */}
      <div className="relative h-72 mt-8 rounded-2xl overflow-hidden">
        <Image src="/case_ru_lignin_hold.jpg" alt="Lignin pellets in coaster hold" fill className="object-cover" /> {/* ← updated */}
      </div>

      <section className="mt-10 grid md:grid-cols-3 gap-8">
        <div><h2 className="font-semibold">Challenge</h2><p className="mt-3 opacity-90">Keep quality stable across climate and long routes; clear complex documentation.</p></div>
        <div>
          <h2 className="font-semibold">What we did</h2>
          <ul className="mt-3 space-y-2 opacity-90 list-disc pl-5">
            <li>Rail & port route cards; berth/turnaround playbook.</li>
            <li>Moisture/temperature & sampling protocols; acceptance criteria.</li>
            <li>Customs and clearance documentation package.</li>
            <li>Buyer interface and scheduling for regular parcels.</li>
          </ul>
        </div>
        <div><h2 className="font-semibold">Outcome</h2><p className="mt-3 opacity-90">Reliable coaster movements with predictable port performance.</p></div>
      </section>
    </article>
  );
}
