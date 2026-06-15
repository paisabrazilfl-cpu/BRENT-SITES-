import fs from "fs";
import path from "path";

const DOMAIN = process.env.SITE_DOMAIN || "https://yourlegaldomain.com";

const states = [
  "alabama", "alaska", "arizona", "arkansas", "california", "colorado",
  "connecticut", "delaware", "florida", "georgia", "hawaii", "idaho",
  "illinois", "indiana", "iowa", "kansas", "kentucky", "louisiana",
  "maine", "maryland", "massachusetts", "michigan", "minnesota",
  "mississippi", "missouri", "montana", "nebraska", "nevada",
  "new-hampshire", "new-jersey", "new-mexico", "new-york",
  "north-carolina", "north-dakota", "ohio", "oklahoma", "oregon",
  "pennsylvania", "rhode-island", "south-carolina", "south-dakota",
  "tennessee", "texas", "utah", "vermont", "virginia", "washington",
  "west-virginia", "wisconsin", "wyoming"
];

const metros = [
  "new-york-city", "los-angeles", "chicago", "houston", "phoenix",
  "philadelphia", "san-antonio", "san-diego", "dallas", "miami"
];

const pages = [...states, ...metros];

function titleCase(slug) {
  return slug
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function geoPage(slug) {
  const location = titleCase(slug);
  const url = `${DOMAIN}/geo/${slug}.html`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title>Roblox Claim Review ${location} | Free Family Case Review</title>
  <meta name="description" content="Families in ${location} can request a free Roblox claim review involving unauthorized charges, Robux purchases, child-safety concerns, refunds, and account issues." />
  <meta name="keywords" content="Roblox lawsuit ${location}, Roblox claim review ${location}, Robux refund ${location}, Roblox unauthorized charges ${location}" />
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
  <link rel="canonical" href="${url}" />

  <meta property="og:type" content="website" />
  <meta property="og:title" content="Roblox Claim Review in ${location}" />
  <meta property="og:description" content="Request a free review for Roblox-related unauthorized charges, child-safety concerns, and account issues in ${location}." />
  <meta property="og:url" content="${url}" />

  <script src="/assets/site-config.js"></script>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Roblox Claim Review ${location}",
    "url": "${url}",
    "description": "Free Roblox-related consumer claim review for families in ${location}.",
    "about": [
      "Roblox unauthorized charges",
      "Robux refund concerns",
      "Child online safety",
      "Gaming platform consumer protection"
    ]
  }
  </script>

  <style>
    :root {
      --bg: #090d16;
      --card: #131a2c;
      --gold: #d4af37;
      --text: #f3f4f6;
      --muted: #9ca3af;
      --border: #24324f;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      background: radial-gradient(circle at top left, #172554, #090d16 38%, #05070c);
      color: var(--text);
      font-family: Inter, Arial, sans-serif;
      line-height: 1.65;
    }

    header, main, footer {
      max-width: 1100px;
      margin: auto;
      padding: 24px 20px;
    }

    header {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid var(--border);
    }

    a { color: var(--gold); }

    .brand {
      font-family: Georgia, serif;
      font-weight: 900;
      font-size: 1.35rem;
    }

    .hero {
      padding-top: 56px;
      display: grid;
      gap: 26px;
    }

    .badge {
      color: var(--gold);
      border: 1px solid rgba(212,175,55,.35);
      background: rgba(212,175,55,.1);
      padding: 7px 12px;
      border-radius: 6px;
      display: inline-block;
      width: fit-content;
      font-size: .75rem;
      font-weight: 900;
      text-transform: uppercase;
    }

    h1 {
      font-family: Georgia, serif;
      font-size: clamp(2.1rem, 5vw, 3.6rem);
      line-height: 1.08;
    }

    p { color: var(--muted); }

    .grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 18px;
      margin-top: 30px;
    }

    @media (min-width: 760px) {
      .grid { grid-template-columns: repeat(3, 1fr); }
    }

    .card {
      background: var(--card);
      border: 1px solid var(--border);
      border-left: 4px solid var(--gold);
      border-radius: 10px;
      padding: 22px;
    }

    .cta {
      margin-top: 34px;
      background: var(--gold);
      color: #05070c;
      display: inline-block;
      padding: 15px 22px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 900;
      text-transform: uppercase;
    }

    footer {
      margin-top: 70px;
      border-top: 1px solid var(--border);
      font-size: .78rem;
      color: var(--muted);
    }
  </style>
</head>

<body>
  <header>
    <div class="brand">NATIONAL<span style="color:#d4af37;">LITIGATION</span></div>
    <a href="tel:18005550199">Call 1-800-555-0199</a>
  </header>

  <main>
    <section class="hero">
      <span class="badge">${location} Consumer Resource</span>

      <h1>Roblox Claim Review for Families in ${location}</h1>

      <p>
        Families in <strong>${location}</strong> may request a free review involving Roblox-related
        unauthorized charges, Robux purchase concerns, parental-control issues, refunds, account-safety
        questions, or child online-safety concerns.
      </p>

      <p>
        This page is informational only and does not guarantee compensation, claim acceptance, or legal
        representation. A qualified reviewer may contact you after submission.
      </p>

      <div class="grid">
        <article class="card">
          <h3>Unauthorized Charges</h3>
          <p>Review purchases, subscriptions, Robux spending, or account charges that may not have been clearly authorized.</p>
        </article>

        <article class="card">
          <h3>Parental Controls</h3>
          <p>Document concerns involving account safeguards, age settings, purchase approval, or refund difficulty.</p>
        </article>

        <article class="card">
          <h3>Child Safety</h3>
          <p>Submit concerns involving unsafe interactions, content exposure, or moderation-related platform issues.</p>
        </article>
      </div>

      <a class="cta" href="/#intakeForm">Start Free Review</a>
    </section>
  </main>

  <footer>
    <p>
      Attorney Advertising. This page is a legal intake resource and does not create an attorney-client relationship.
      Prior results do not guarantee future outcomes.
    </p>
    <p>
      <a href="/privacy-policy.html">Privacy Policy</a> &middot;
      <a href="/terms-of-service.html">Terms</a> &middot;
      <a href="/tcpa-consent.html">TCPA Consent</a> &middot;
      <a href="/sitemap.xml">Sitemap</a>
    </p>
  </footer>
</body>
</html>`;
}

function sitemap(urls) {
  const items = urls.map(url => `
  <url>
    <loc>${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>${url.includes("/geo/") ? "0.75" : "1.0"}</priority>
  </url>`).join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${items}
</urlset>`;
}

const root = process.cwd();
const geoDir = path.join(root, "geo");
fs.mkdirSync(geoDir, { recursive: true });

for (const slug of pages) {
  fs.writeFileSync(path.join(geoDir, `${slug}.html`), geoPage(slug));
}

const rootUrls = [
  `${DOMAIN}/`,
  `${DOMAIN}/thank-you.html`,
  `${DOMAIN}/privacy-policy.html`,
  `${DOMAIN}/terms-of-service.html`,
  `${DOMAIN}/tcpa-consent.html`,
  `${DOMAIN}/attorney-advertising.html`,
  `${DOMAIN}/ad-compliance.html`
];

const geoUrls = pages.map(slug => `${DOMAIN}/geo/${slug}.html`);

fs.writeFileSync(
  path.join(root, "sitemap.xml"),
  sitemap([...rootUrls, ...geoUrls])
);

fs.writeFileSync(
  path.join(root, "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${DOMAIN}/sitemap.xml\n`
);

console.log(`Generated ${pages.length} geo pages.`);
console.log(`Generated sitemap with ${rootUrls.length + geoUrls.length} URLs.`);
console.log(`Generated robots.txt.`);
