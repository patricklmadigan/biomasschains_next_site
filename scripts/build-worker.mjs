import { build } from "esbuild";

await build({
  entryPoints: ["worker/index.mjs"],
  outfile: "out/_worker.js",
  bundle: true,
  format: "esm",
  platform: "browser",
  target: "es2022",
  minify: true,
});
