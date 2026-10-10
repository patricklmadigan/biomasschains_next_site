import fs from "node:fs/promises";
import path from "node:path";

// Next copies public files verbatim; omit oversized PNGs already redirected to
// lossless source assets, without removing any source files or other assets.
const outRoot = path.resolve("out");
for (const relative of [
  "images/cases/usa-shovel-ready/georgia-harvested-pine-logs.png",
  "images/cases/south-africa/handymax-woodchip-trimming.png",
]) {
  const target = path.resolve(outRoot, relative);
  if (!target.startsWith(outRoot + path.sep)) throw new Error("Unsafe output path");
  await fs.rm(target, { force: true });
}
const assets = [];
async function walk(dir) {
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(full);
    else assets.push({ path: path.relative(outRoot, full).split(path.sep).join("/"), bytes: (await fs.stat(full)).size });
  }
}
await walk(outRoot);
const tooLarge = assets.filter(file => file.bytes > 25 * 1024 * 1024);
if (assets.length > 20000 || tooLarge.length) throw new Error(`Cloudflare Free asset limits exceeded: ${JSON.stringify(tooLarge)}`);
const htmlFiles = assets.filter(file => file.path.endsWith(".html"));
for (const file of htmlFiles) {
  const html = await fs.readFile(path.join(outRoot, file.path), "utf8");
  for (const match of html.matchAll(/(?:src|href)="(\/optimized[^"?]+)"/g)) {
    await fs.access(path.join(outRoot, match[1]));
  }
}
const report = {files: assets.length, html:htmlFiles.length, bytes:assets.reduce((sum,file)=>sum+file.bytes,0), largest:assets.toSorted((a,b)=>b.bytes-a.bytes).slice(0,5)};
await fs.mkdir("migration-evidence", { recursive: true });
await fs.writeFile("migration-evidence/build-limits.json", JSON.stringify(report, null, 2));
console.log(JSON.stringify(report));
