# BiomassChains

The `cloudflare-migration` branch preserves the current deployed BiomassChains website and exports it for Cloudflare Pages Free. The contact endpoint runs as a small Pages Function and delivers through a private relay on the existing Hostinger hosting plan.

The live domain remains on Vercel until the owner explicitly approves cutover. See [MIGRATION.md](MIGRATION.md) for the architecture, validation, costs and cutover procedure.

## Build and preview

Use Node.js 22. Copy the public settings in `.env.example` into `.env.local`, then:

```sh
npm ci
npm test
npm run build
npm run preview
```

The preview serves `out/` through Wrangler on port 8788. For a working local contact endpoint, create an ignored `.dev.vars` file with the three private bindings documented in `MIGRATION.md`. Never put those values in source control.

Publish an isolated preview using the existing project:

```sh
npx wrangler pages deploy out --project-name biomasschains-migration --branch cloudflare-migration
```

The build creates responsive images, exports every page, bundles the contact function and enforces Cloudflare's file limits. Generated assets, build output, private settings and local test evidence are ignored by Git.
