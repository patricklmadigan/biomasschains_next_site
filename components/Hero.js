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
        <Image
          src="/hero_ship_x_ray.jpg"
          alt=""
          fill
          priority
          aria-hidden="true"
          className="hero-image-xray object-cover brightness-[.55]"
          sizes="100vw"
        />
        <div className="hero-scan-edge pointer-events-none absolute inset-y-0 left-0 w-24" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      </div>

      <div className="relative container">
        <h1 className="text-4xl sm:text-6xl font-semibold leading-tight">
          Biomass supply-chain development for projects that need to become real.
        </h1>
        <p className="mt-6 text-lg opacity-90">
          Biomass Chains helps serious developers, buyers, investors and project owners move
          from resource idea to credible, compliant, bankable and executable supply chain.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="/contact" className="btn btn-primary">Start a mandate conversation</a>
          <a href="/cases" className="btn btn-outline">See proof of work</a>
        </div>
        <div className="mt-8 flex items-center gap-6 text-sm opacity-80">
          <span>Resource reality</span>
          <span>Compliance evidence</span>
          <span>Ports, contracts and first cargoes</span>
        </div>
      </div>
      <style>{`
        .hero-image-xray {
          clip-path: inset(0 100% 0 0);
          animation: heroXrayReveal 2.4s ease-in-out 0.8s forwards;
        }

        .hero-scan-edge {
          opacity: 0;
          background: linear-gradient(
            90deg,
            rgba(52, 211, 153, 0),
            rgba(52, 211, 153, 0.18),
            rgba(255, 255, 255, 0.22),
            rgba(52, 211, 153, 0)
          );
          filter: blur(0.5px);
          mix-blend-mode: screen;
          transform: translateX(-6rem);
          animation: heroScanEdge 2.4s ease-in-out 0.8s forwards;
        }

        @keyframes heroXrayReveal {
          from {
            clip-path: inset(0 100% 0 0);
          }
          to {
            clip-path: inset(0 0 0 0);
          }
        }

        @keyframes heroScanEdge {
          0% {
            opacity: 0;
            transform: translateX(-6rem);
          }
          16% {
            opacity: 0.55;
          }
          84% {
            opacity: 0.32;
          }
          100% {
            opacity: 0;
            transform: translateX(100vw);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-image-xray {
            animation: none;
            clip-path: inset(0 0 0 0);
          }

          .hero-scan-edge {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
