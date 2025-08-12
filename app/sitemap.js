// app/sitemap.js
export default function sitemap() {
  const base = "https://www.biomasschains.com";
  const now = new Date().toISOString();

  const routes = [
    "", "/solutions", "/method", "/cases", "/about", "/contact", "/privacy", "/cookies",
    // long-form cases
    "/cases/usa-shovel-ready",
    "/cases/cameroon-eu",
    "/cases/south-africa",
    "/cases/australia-carrier",
    "/cases/russia-lignin",
  ];

  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: r === "" ? 0.8 : 0.6,
  }));
}
