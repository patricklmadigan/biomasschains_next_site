import "./../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Analytics from "../components/Analytics";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://www.biomasschains.com"),
  title: "BiomassChains — Global Biomass Supply Chains Delivered",
  description: "We build fast, compliant, profitable biomass supply chains: sourcing & compliance, GHG/LCA modeling, build-out & operations, and CORC/VER pathways.",
  openGraph: {
    title: "BiomassChains — Global Biomass Supply Chains Delivered",
    description: "We build fast, compliant, profitable biomass supply chains worldwide.",
    url: "https://www.biomasschains.com",
    siteName: "BiomassChains",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_GB",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "BiomassChains — Global Biomass Supply Chains Delivered",
    description: "Execution-first biomass chains: compliance, logistics, LCA, credits.",
    images: ["/og-image.png"]
  },
  alternates: {
    canonical: "https://www.biomasschains.com"
  },
  robots: {
    index: true, follow: true
  }
};

export default function RootLayout({ children }) {
  const org = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "BiomassChains",
  "url": "https://www.biomasschains.com",
  "description": "Global Biomass Supply Chains — Delivered.",
  "foundingDate": "2025-01-01",
  "address": { "@type": "PostalAddress", "addressCountry": "GB" },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "patrick@biomasschains.com"
    }
  ]
};

  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
        <Script id="org-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
        <Analytics />
      </body>
    </html>
  );
}
