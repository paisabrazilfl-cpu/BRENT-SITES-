# National Litigation — Roblox Claim Review Site

A static legal-intake site with a national homepage, an intake form, programmatic
geo landing pages (50 states + 10 metros), and the required compliance pages.

## Structure

```
index.html              Homepage with #intakeForm
assets/site-config.js   Brand, phone, and intake endpoint config
geo/*.html              Generated state & metro landing pages
privacy-policy.html     Compliance / legal pages (generated)
terms-of-service.html
tcpa-consent.html
attorney-advertising.html
ad-compliance.html
thank-you.html          Post-submission confirmation (generated)
sitemap.xml             Generated sitemap
robots.txt              Generated
scripts/generate.mjs    Builds geo pages + sitemap + robots.txt
scripts/legal.mjs       Builds legal/compliance pages + thank-you
scripts/serve.mjs       Local static preview server
```

## Build

```bash
npm run build        # regenerate geo pages, legal pages, sitemap, robots.txt
SITE_DOMAIN=https://your-real-domain.com npm run build   # set the production domain
```

The default domain is `https://yourlegaldomain.com`. Set `SITE_DOMAIN` to your real
domain before deploying so canonical URLs and the sitemap are correct.

## Preview

```bash
npm run serve        # http://localhost:8080
```

## Intake form

The form posts JSON to the endpoint in `assets/site-config.js`
(`intakeEndpoint`), currently `https://abby-crm.com/api/web-forms/roblox`.
On success it redirects to `thank-you.html`. If `intakeEndpoint` is left empty,
the form runs in client-side demo mode and redirects without posting.

## Deploy

These are plain static files — host on any static host (Netlify, Vercel,
Cloudflare Pages, S3 + CloudFront, GitHub Pages). Deploy the repository root.

## Compliance note

This is a marketing/intake template. Review all legal, TCPA, and advertising
copy with qualified counsel before publishing.
