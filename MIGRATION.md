# Cloudflare migration

Cutover completed with explicit owner approval on 10 October 2026. Both public website names now use Cloudflare Pages Free. DNS propagation and production health were rechecked on 11 October; the owner-authorised Vercel Pro cancellation then completed before the 12 October renewal. On 21 October, the owner approved permanent removal of the obsolete Vercel project and all remaining Vercel-only domain entries. Hostinger email records, GitHub `main`, the Cloudflare deployment and Vercel account/invoice history remain intact.

## Public deployment and cutover results

- Public website: https://www.biomasschains.com/. The apex https://biomasschains.com/ redirects to HTTPS www with the original path and query string preserved.
- Pages production deployment: `fa657c8d-d9c4-4391-94ff-c47597b02ac4`, built from approved application commit `d297bc83a5b065e01be0e9789fd4b685b02d1638` on `cloudflare-migration`.
- Production provider URL: https://biomasschains-migration.pages.dev/.
- Both custom domains, DNS verification and certificate validation report `active`. Independent public-DNS connections verified trusted TLS 1.3 certificates for both names without disabling certificate checks.
- Cloudflare Free zone nameservers: `ezra.ns.cloudflare.com` and `ryleigh.ns.cloudflare.com`. Domain registration remains with Hostinger.
- Only the website destinations changed. Nine existing email records were preserved: two MX records, SPF, DMARC, three DKIM selectors, autoconfig and autodiscover. All mail-service CNAMEs remain DNS-only. Eighteen checks across Cloudflare and Google public DNS confirmed the saved mail values and new delegation.
- Public production checks passed all 15 pages and 367 linked assets/navigation requests, including content, SEO, security headers, indexability, robots/sitemap, redirects, unknown routes and contact rejection cases.
- A real production form submission returned HTTP 200 after SMTP acceptance and used 5 ms CPU. The owner independently submitted from the public www domain on an Android phone over mobile data and supplied an inbox screenshot confirming receipt of the message “Cloudflare domain cutover verification” at the existing Hostinger mailbox.
- The canonical redirect excludes `/.well-known/` paths so certificate validation and renewal remain on the requested hostname. Ordinary apex URLs return 308; HTTP www URLs upgrade to HTTPS. Minimum TLS is 1.2, TLS 1.3 is enabled and Always Use HTTPS is enabled.
- At the 10 October cutover, the prior Vercel site at https://biomasschains-next-site.vercel.app/ returned HTTP 200 and remained available while some local ISP caches still used the old nameservers. The following day's normal-connection check resolved Cloudflare. No computer DNS or hosts-file override was made.

The initial DNS import expanded incorrectly formatted names and destinations from Hostinger's export. Those duplicates were removed with owner approval, and the normalized zone was verified before changing nameservers. The apex redirect initially interfered with Pages certificate validation; excluding the validation paths resolved it and both domain certificates became active. These issues are resolved.

## Propagation and billing completion — 11 October 2026

- At approximately 10:02 BST, normal system DNS and Cloudflare, Google and Quad9 public DNS all returned the Cloudflare delegation and Cloudflare IPv4/IPv6 website destinations for both apex and www. All 20 NS/A/AAAA questions succeeded. This establishes completed propagation on the checked networks; it cannot inspect every private resolver worldwide.
- Through normal DNS, all 15 public pages matched the approved immutable preview for content and SEO. All 367 linked asset/navigation requests, security headers, robots/sitemap, canonical redirects, unknown routes and contact rejection checks passed with no failures.
- Independent connections validated trusted TLS 1.3 certificates for both names. Eighteen public DNS checks again confirmed the Hostinger mail records and delegation. The apex returned 308 to HTTPS www; www and the Plausible script returned 200; an unsigned relay request returned 401. The owner's earlier public-domain inbox receipt remains the evidence for real contact delivery.
- The Vercel audit found one team, one obsolete website project, no connected stores and no enabled paid add-ons. The owner confirmed that any remaining Vercel projects were unwanted and explicitly authorised cancellation after successful propagation/health checks.
- Vercel's **Downgrade from Pro** confirmation stated that Pro features would end immediately, all payments would stop and unused plan time would receive a **$0.80 refund**. That figure is the displayed refund quote, not independent evidence of a processed bank credit.
- The downgrade completed at approximately 10:05 BST. The billing page explicitly confirmed **Hobby Plan — Active**, replacing the Pro subscription before its 12 October renewal. No team, project, account, domain or invoice history was deleted.
- After cancellation, normal-connection HTTPS checks at 10:07 BST again returned 200 with `Server: cloudflare` for the apex's redirected website and the public www contact page.
- Native confirmation evidence is retained privately in `migration-evidence/screenshots/vercel-hobby-confirmed-2026-10-11.jpg`. The now-unnecessary scheduled DNS/cancellation follow-up was paused after success.

## Vercel resource removal — 21 October 2026

Vercel's email about two misconfigured domains was caused by the old project's domain associations remaining after the successful DNS migration. The public website and email records were healthy; restoring Vercel DNS was unnecessary.

- The signed-in audit found one Hobby team, one project (`biomasschains-next-site`) and one externally registered team domain entry (`biomasschains.com`). There were no connected stores, installed marketplace integrations or shared environment variables.
- After reviewing the irreversible-deletion dialog, the owner explicitly approved permanent deletion of the project, its deployments/functions/environment variables/domain associations, and any remaining Vercel-only entries for apex and www.
- The project deletion completed and the dashboard now shows **Deploy your first project**, with no recent previews. This removes the project's production/preview deployments, serverless functions, stored environment variables, settings and associations for biomasschains.com and www.biomasschains.com.
- The remaining team-level `biomasschains.com` entry was then deleted separately. Vercel confirmed that no aliases remained in its deletion scope, and the Domains page now shows **Add a domain** with an empty list. Hostinger remains the registrar; no Cloudflare or Hostinger DNS settings were changed.
- The free Hobby account and invoice history were retained. GitHub repositories and their history were not removed. Deleting the Vercel project also removes its GitHub deployment connection, so subsequent migration-branch commits cannot trigger that old Vercel project.
- After removal, all 15 public pages and 367 asset/navigation requests again passed the production comparison. Trusted HTTPS for both names, canonical redirects, SEO/security headers, robots/sitemap, contact rejection cases, the Plausible script and relay authentication protection passed. All 18 mail/delegation checks across public DNS passed. This check sent no new email; actual delivery was previously confirmed by the owner's public-domain inbox receipt.
- Private native screenshots record the deletion review and the empty Projects/Domains pages in `migration-evidence/screenshots/`, dated `2026-10-21`.

The obsolete domain configurations that triggered Vercel's warning have been removed. Vercel is no longer a hosting fallback for this website.

## Preview and source baseline

- Approved immutable preview: https://749adf64.biomasschains-migration.pages.dev/.
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

The SMTP password previously stored in Vercel was rejected by Hostinger. The owner supplied the current password through a local password-entry page; the new private relay configuration authenticated successfully. The original Vercel environment was left untouched during migration, then removed with the obsolete project on 21 October.

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
- The successful preview contact request used **4 ms CPU** and the production request used **5 ms CPU**, below the Free plan's 10 ms limit. Production elapsed time was about 0.9 seconds, including network and SMTP waits.
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
| Contact function CPU | 5 ms measured in production | 10 ms per invocation |
| Dynamic requests | Contact endpoint only | 100,000 per day, shared account quota |
| Static requests | Pages CDN | Free static hosting |

Estimated additional recurring cost is **$0/month** for Pages, the contact function, Turnstile and the relay under the existing Hostinger plan. Existing domain registration, Hostinger/mailbox and Plausible arrangements continue at their existing costs. Hostinger web hosting is already paid through 13 November 2028 and also serves other sites. No paid Cloudflare service or new subscription was enabled. Vercel Pro was cancelled on 11 October 2026 and the account now shows the free Hobby plan. Ending the owner's stated $24/month subscription saves approximately **$288/year**.

Moving the entire mailbox to Cloudflare is a separate decision. Email Routing forwards incoming mail to another inbox; it does not supply a conventional hosted mailbox. General outbound sending requires Workers Paid (currently $5/month minimum), while sending to verified destination addresses is free. Retaining the existing Hostinger mailbox/relay is the lowest incremental-cost option for this migration.

References checked on 10 October 2026:

- [Pages limits](https://developers.cloudflare.com/pages/platform/limits/)
- [Workers pricing](https://developers.cloudflare.com/workers/platform/pricing/)
- [Workers TCP restrictions](https://developers.cloudflare.com/workers/runtime-apis/tcp-sockets/)
- [Turnstile server-side validation](https://developers.cloudflare.com/turnstile/get-started/server-side-validation/)
- [Cloudflare email pricing](https://developers.cloudflare.com/email-service/platform/pricing/)
- [Pages custom domains](https://developers.cloudflare.com/pages/configuration/custom-domains/)
- [Certificate validation troubleshooting](https://developers.cloudflare.com/ssl/edge-certificates/changing-dcv-method/troubleshooting/)

## Deployment and rollback

The current project uses Direct Upload. A GitHub push records the source but does not automatically deploy it. Build locally with Node.js 22, `.env.local` public settings and the locked dependencies, then upload `out/` with Wrangler. This reproduces the existing deployment workflow without storing a Cloudflare token in GitHub.

The Pages project's production branch is now `cloudflare-migration`. **Uploading with `--branch cloudflare-migration` publishes to the live website.** A push to GitHub alone still does not deploy. For an isolated future Pages preview, use a different deployment branch label, such as `--branch cloudflare-check`, and inspect its provider URL before publishing to production. This label does not create or modify a GitHub branch.

Re-run the production HTTP comparison against the approved immutable preview:

```sh
node scripts/verify-preview.mjs https://www.biomasschains.com https://749adf64.biomasschains-migration.pages.dev --production
```

This uses the computer's configured DNS. During stale local DNS caching, independent verification used a private test-only public-resolver helper; it did not change system settings and still enforced normal TLS certificate validation.

Use a previously verified Cloudflare Pages deployment or a rebuilt static export for rollback, preserving the contact bindings and all email records. Source history, the approved immutable preview and the saved original DNS export remain available as references.

The former Vercel project was permanently deleted on 21 October. **Restoring the old Vercel DNS destinations alone will not restore the website.** Returning to Vercel would require a separately approved project/deployment setup, a suitable plan and verified current email credentials before any DNS change. The former A records (`216.150.1.1`, `76.76.21.21`) and www CNAME (`cname.vercel-dns.com`) are historical values only. The former Hostinger nameservers (`ns1.dns-parking.com`, `ns2.dns-parking.com`) likewise must not be restored without a complete, currently verified zone and working website destination.

The billing step is complete: propagation and production checks passed, no remaining project required Pro, and the owner-authorised downgrade was verified on 11 October 2026. GitHub `main` remains unchanged; all migration source and documentation are on `cloudflare-migration`.

Keep recovered source, DNS evidence and deployment test evidence privately for rollback. None belongs in the public deployment or Git history.
