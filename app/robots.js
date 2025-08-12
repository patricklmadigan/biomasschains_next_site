// app/robots.js
export default function robots() {
  const base = "https://www.biomasschains.com";
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
