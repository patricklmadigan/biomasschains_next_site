import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const widths = [16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840];
const publicRoot = path.resolve("public");
async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const result = [];
  for (const entry of entries) {
    if (entry.name === "optimized") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) result.push(...await walk(full));
    else if (/\.(jpg|jpeg|png|webp)$/i.test(entry.name)) result.push(full);
  }
  return result;
}
// The two oversized PNGs are kept losslessly as WebP in source control.
// Their old public URLs redirect to these identical-pixel originals.
const oversized = [
  "images/cases/usa-shovel-ready/georgia-harvested-pine-logs.png",
  "images/cases/south-africa/handymax-woodchip-trimming.png",
];
for (const source of oversized) {
  const original = path.join(publicRoot, source);
  const lossless = original.replace(/\.png$/, ".webp");
  try { await fs.access(lossless); }
  catch { await sharp(original).webp({ lossless: true, effort: 6 }).toFile(lossless); }
}
const images = await walk(publicRoot);
let generated = 0;
for (const image of images) {
  const relative = path.relative(publicRoot, image).split(path.sep).join("/");
  const oldPng = relative.replace(/\.webp$/, ".png");
  const name = oversized.includes(oldPng) ? oldPng : relative;
  // Generate the requested old PNG URLs from the lossless source instead.
  if (oversized.includes(relative)) continue;
  const sourceTime = (await fs.stat(image)).mtimeMs;
  for (let i = 0; i < widths.length; i += 4) {
    await Promise.all(widths.slice(i, i + 4).map(async width => {
      const output = path.join(publicRoot, `optimized/${name}.w${width}.q75.webp`);
      await fs.mkdir(path.dirname(output), { recursive: true });
      const outputTime = await fs.stat(output).then(stat => stat.mtimeMs, () => 0);
      if (outputTime < sourceTime) {
        await sharp(image).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: 75 }).toFile(output);
        generated++;
      }
    }));
  }
}
await fs.writeFile("public/_redirects", oversized.map(source => `/${source} /${source.replace(/\.png$/, ".webp")} 301`).join("\n") + "\n");
console.log(`Prepared responsive image assets (${generated} generated).`);
