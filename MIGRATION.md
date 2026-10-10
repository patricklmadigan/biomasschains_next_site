# Cloudflare migration

Prepared 10 October 2026. Production DNS, GitHub `main` and the Vercel subscription have not been changed. Domain cutover requires explicit owner approval.

## Preview and source baseline

- Preview: https://cloudflare-migration.biomasschains-migration.pages.dev/
- Cloudflare Pages project: `biomasschains-migration`.
- GitHub branch: `cloudflare-migration` in the existing `patricklmadigan/biomasschains_next_site` repository.
- Original `main`: `34a3a5f4dd703d4fdf7a35e07731e26d3966ce06`.
- Visual/content baseline: immutable Vercel production deployment `dpl_7U57KtGXh7cTKJtA1fGvQb8B81E3`, deployed 30 May 2026.

The live deployment was newer than GitHub `main`. Its 86 source files were recovered and checked against the deployment's SHA-1 file identifiers. This branch restores that deployed content, including the Ireland/Iceland and West/Central Africa case studies, case photographs and homepage ship animation. Consequently, the diff against `main` includes recovery of existing live content as well as hosting changes. It is not a redesign.

The production source also contained an unauthenticated diagnostic `/api` route that could send email on a GET request. That diagnostic is intentionally excluded. Public pages, navigation, SEO, responsive styling and animations are preserved.

## Architecture

Next.js 14.2.35 and React 18 build static HTML, JavaScript, CSS and images. Cloudflare does not run a Next.js server, image optimizer, middleware or Server Actions. Tailwind and Framer Motion retain their deployed versions and rendering behavior.

`next.config.js` uses static export and a custom image loader. `scripts/prepare-images.mjs` creates the responsive widths requested by Next Image at quality 75. The two original PNGs exceeding Pages' 25 MiB limit are stored as lossless WebP source images. Decoded pixel hashes match the originals. Their original public PNG URLs redirect permanently to the lossless versions; the existing page image references still resolve through the responsive loader.

Only `/api/contact` and `/api/contact/` invoke the bundled Pages Function. `_routes.json` lets ordinary pages and assets bypass the Workers request quota.

Contact flow:

1. The unchanged form collects an enquiry and obtains a managed Turnstile token.
2. The Pages Function checks origin, method, request size, fields, honeypot and submission timing. The existing prohibition on message links is retained.
3. Turnstile is verified server-side, including hostname and the `contact` action.
4. The function signs a short-lived request with HMAC-SHA256 and sends it over HTTPS to the dedicated Hostinger relay.
5. The relay verifies the signature, timestamp and replay ID, then authenticates to `smtp.hostinger.com:465` over certificate-verified TLS. Sender and recipient come only from private configuration.
6. Only Hostinger's final SMTP DATA `250` acceptance permits the relay, function and browser to report success. Failures remain visible as failures. A `?sent=1` query cannot create a success message.

Hostinger's SMTP hostname resolves behind Cloudflare. Workers prohibit direct TCP connections to Cloudflare IPs, so direct SMTP from a Worker is unsuitable. The existing PHP hosting plan provides the relay without another subscription.

The relay uses a dedicated temporary-provider hostname, `aqua-jaguar-642123.hostingersite.com`, within the existing hosting plan. It does not depend on biomasschains.com's website DNS. Its PHP endpoint is `public_html/contact.php`; its private configuration and atomic replay ledger are **above** `public_html`.

## Private settings

Cloudflare preview and production project configurations contain these encrypted bindings:

| Binding | Purpose |
| --- | --- |
| `MAIL_RELAY_URL` | Dedicated HTTPS relay endpoint |
| `MAIL_RELAY_SECRET` | Random shared HMAC key |
| `TURNSTILE_SECRET_KEY` | Server-side challenge verification |

The public Turnstile site key and Plausible domain are in `.env.example`. The widget permits the project preview domain, biomasschains.com and www.biomasschains.com.

Copy `relay/config.example.php` outside the relay's web root as `biomasschains-relay-config.php` and populate `RELAY_SECRET`, `SMTP_USER`, `SMTP_PASS` and `MAIL_TO` privately. The actual mailbox password must never be copied into this repository or a Cloudflare browser setting prefixed with `NEXT_PUBLIC_`.

The SMTP password previously stored in Vercel was rejected by Hostinger. The owner supplied the current password through a local password-entry page; the new private relay configuration authenticated successfully. The original Vercel environment was left untouched.

The old SMTP credentials were removed from the isolated Cloudflare project's bindings after the relay was configured. No SMTP password is needed in Cloudflare. Local `.env*` secrets, `.dev.vars`, recovered deployment files, request logs and screenshots remain ignored.

## Validation

- Production build succeeds and emits all 15 public pages plus the 404 page, robots.txt and sitemap.xml. A clean copy of all 104 tracked/staged source files also built successfully and regenerated all 784 responsive image variants without local caches or the two ignored PNG originals.
- 29 automated tests cover accepted delivery, SMTP/network failures, redirect rejection, invalid/mismatched challenges, origin checks, timing, missing settings, header injection and request-size limits.
- Every public page was compared against the live site at desktop 1440 × 900 and mobile 390 × 844. Visible text and sampled layout geometry, typography and image placement match on all 30 comparisons; no horizontal overflow or broken loaded images was found.
- Independent HTTPS checks verified all 15 pages and 367 linked asset/navigation requests. Titles, metadata, canonical links, robots directives and Open Graph settings match the live site. Sitemap differences are limited to build dates.
- Mobile menu opening, case-study navigation and automatic menu closing work. The ship reveal animation remains active.
- Security headers match the original four policies, with HSTS added. Static JavaScript has immutable caching. Preview responses have Cloudflare's automatic `X-Robots-Tag: noindex`.
- Trailing-slash/`.html` canonical redirects and both oversized-image redirects work. Unknown routes and the excluded diagnostic `/api` return 404.
- Contact GET returns 405; invalid challenge returns 400; cross-origin POST returns 403. Relay requests without authentication return 401; its private configuration URL returns 404; replay returns 409.
- A real browser submission passed Turnstile, returned HTTP 200 after SMTP acceptance, reset the form and displayed its success banner. The owner provided screenshots confirming both direct relay and complete Cloudflare form test messages arrived in the existing mailbox.
- The successful Cloudflare contact request used **4 ms CPU**, below the Free plan's 10 ms limit. Total elapsed time was about 4.4 seconds, including network and SMTP waits.
- Plausible retains `data-domain="biomasschains.com"` on all pages. The browser loaded its script and issued its `/api/event` page-view request. Plausible dashboard totals were not independently inspected.

Two implementation failures were resolved before approval: direct Worker SMTP was incompatible with the Hostinger hostname, and the first relay fetch failed with redirect mode `error`. Using `manual` and rejecting all 3xx responses completed delivery without forwarding signed requests to another host.

### Dependency limitations

Next.js was updated from 14.2.5 to the 14.2.35 maintenance patch, and the build-time image library was updated. An audit still reports 21 advisories (3 moderate, 17 high, 1 critical) in the legacy Next.js/build-tool dependency tree. The identified Next.js server vulnerabilities concern runtime features not deployed by this static architecture; build tools process trusted repository content. This is not a claim that every dependency advisory is fixed. A major framework/toolchain modernization is a separate change and should preserve the same visual baseline. Do not deploy this branch with `next start`; use the static export and Pages Function. Local `next dev` binds only to loopback.

## Free limits and estimated cost

The checked export contains approximately 902 files and 253 MB in total. The largest asset is 25,518,994 bytes, below 25 MiB (26,214,400 bytes). The existing authoritative Hostinger zone was exported privately before cutover; its 12 application records include autodiscover/autoconfig as well as the website and mailbox records.

| Item | Current deployment | Cloudflare Free allowance |
| --- | --- | --- |
| Files | 902 | 20,000 |
| Largest file | 24.34 MiB | 25 MiB |
| Contact function CPU | 4 ms measured | 10 ms per invocation |
| Dynamic requests | Contact endpoint only | 100,000 per day, shared account quota |
| Static requests | Pages CDN | Free static hosting |

Estimated additional recurring cost is **$0/month** for Pages, the contact function, Turnstile and the relay under the existing Hostinger plan. Existing domain registration, Hostinger/mailbox and Plausible arrangements continue at their existing costs. Hostinger web hosting is already paid through 13 November 2028 and also serves other sites. No paid Cloudflare service or new subscription was enabled. Removing Vercel after successful cutover saves the owner's stated $24/month ($288/year); other Vercel projects must be checked before cancelling the account subscription.

Moving the entire mailbox to Cloudflare is a separate decision. Email Routing forwards incoming mail to another inbox; it does not supply a conventional hosted mailbox. General outbound sending requires Workers Paid (currently $5/month minimum), while sending to verified destination addresses is free. Retaining the existing Hostinger mailbox/relay is the lowest incremental-cost option for this migration.

References checked on 10 October 2026:

- [Pages limits](https://developers.cloudflare.com/pages/platform/limits/)
- [Workers pricing](https://developers.cloudflare.com/workers/platform/pricing/)
- [Workers TCP restrictions](https://developers.cloudflare.com/workers/runtime-apis/tcp-sockets/)
- [Turnstile server-side validation](https://developers.cloudflare.com/turnstile/get-started/server-side-validation/)
- [Cloudflare email pricing](https://developers.cloudflare.com/email-service/platform/pricing/)

## Deployment and cutover

The current project uses Direct Upload. A GitHub push records the source but does not automatically deploy it. Build locally with Node.js 22, `.env.local` public settings and the locked dependencies, then upload `out/` with Wrangler. This reproduces the existing deployment workflow without storing a Cloudflare token in GitHub.

Before approval, use only `--branch cloudflare-migration` for previews and keep the domain on Vercel. Re-run `node scripts/verify-preview.mjs https://cloudflare-migration.biomasschains-migration.pages.dev` for the independent HTTP comparison.

After explicit owner approval:

1. Export the complete authoritative Hostinger DNS zone, including all MX, SPF, DKIM, DMARC, autodiscover, CAA and other records. Current nameservers are `ns1.dns-parking.com` and `ns2.dns-parking.com`. Known mail records use `mx1.hostinger.com` (5), `mx2.hostinger.com` (10), the Hostinger SPF include and the `hostingermail-a._domainkey`, `hostingermail-b._domainkey` and `hostingermail-c._domainkey` selectors; preserve their actual names/values exactly.
2. Create/import a Free Cloudflare zone if needed and verify every imported record against the full export. A DNS scan alone is insufficient. Preserve email records and keep mail-service hostnames DNS-only.
3. Make `cloudflare-migration` the Pages project's production branch and publish the approved commit as a production deployment. This does not modify GitHub `main`. Confirm the production deployment is indexable and its private settings are present.
4. Associate both custom domains with Pages, preserve the existing apex-to-www behavior, and change only the required website records/nameservers. Confirm Cloudflare-managed certificates for both names before removing Vercel access.
5. Re-run public HTTPS, canonical/redirect, assets, navigation, analytics and real contact delivery tests. Verify MX/SPF/DKIM/DMARC against the export after propagation, and verify mailbox sending/receiving.
6. Retain the Vercel project and previous DNS values during the verification window. If website checks fail, restore the previous website records to Vercel without disturbing email records. A nameserver rollback must restore the complete prior zone, not just the website A/CNAME records.
7. Only after public verification and explicit owner authorisation to cancel, check whether any other Vercel projects need Pro and discontinue the subscription safely.

Keep recovered source, DNS evidence and deployment test evidence privately for rollback. None belongs in the public deployment or Git history.
