/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Build the same responsive widths and quality used by Next's image service.
  images: { loader: "custom", loaderFile: "./image-loader.js" },
};
module.exports = nextConfig;
