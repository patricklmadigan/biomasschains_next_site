# BiomassChains

The `cloudflare-migration` branch preserves the current deployed BiomassChains website and exports it for Cloudflare Pages Free. The contact endpoint runs as a small Pages Function and delivers through a private relay on the existing Hostinger hosting plan.

The owner-approved cutover completed on 10 October 2026. [www.biomasschains.com](https://www.biomasschains.com/) runs on Cloudflare; the apex redirects to HTTPS www. Hostinger email and the active Vercel fallback remain intact. See [MIGRATION.md](MIGRATION.md) for validation, costs and rollback details.

## Build and preview

Use Node.js 22. Copy the public settings in `.env.example` into `.env.local`, then:

```sh
npm ci
npm test
npm run build
npm run preview
```

The preview serves `out/` through Wrangler on port 8788. For a working local contact endpoint, create an ignored `.dev.vars` file with the three private bindings documented in `MIGRATION.md`. Never put those values in source control.

Publish to the live website using the existing project and its production branch:

```sh
npx wrangler pages deploy out --project-name biomasschains-migration --branch cloudflare-migration
```

For an isolated preview, use a different Pages deployment branch label, for example `--branch cloudflare-check`. The project uses Direct Upload; GitHub pushes do not deploy automatically. GitHub `main` remains unchanged.

Check the public deployment against the approved preview:

```sh
node scripts/verify-preview.mjs https://www.biomasschains.com https://749adf64.biomasschains-migration.pages.dev --production
```

The build creates responsive images, exports every page, bundles the contact function and enforces Cloudflare's file limits. Generated assets, build output, private settings and local test evidence are ignored by Git.
