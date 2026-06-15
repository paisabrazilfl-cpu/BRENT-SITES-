import fs from "fs";
import path from "path";

const DOMAIN = process.env.SITE_DOMAIN || "https://yourlegaldomain.com";

function legalPage(slug, title, bodyHtml) {
  const url = `${DOMAIN}/${slug}.html`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title} | National Litigation</title>
  <meta name="description" content="${title} for the National Litigation Roblox claim review intake resource." />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="${url}" />
  <script src="/assets/site-config.js"></script>
  <style>
    :root {
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
      line-height: 1.7;
    }
    header, main, footer { max-width: 860px; margin: auto; padding: 24px 20px; }
    header { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border); }
    a { color: var(--gold); }
    .brand { font-family: Georgia, serif; font-weight: 900; font-size: 1.35rem; }
    main { padding-top: 48px; }
    h1 { font-family: Georgia, serif; font-size: clamp(1.9rem, 4vw, 2.8rem); margin-bottom: 8px; }
    h2 { font-family: Georgia, serif; font-size: 1.3rem; margin: 28px 0 8px; }
    p, li { color: var(--muted); margin-bottom: 12px; }
    ul { padding-left: 22px; }
    .updated { color: var(--muted); font-size: .85rem; margin-bottom: 24px; }
    footer { margin-top: 64px; border-top: 1px solid var(--border); font-size: .78rem; color: var(--muted); }
  </style>
</head>
<body>
  <header>
    <div class="brand"><a href="/" style="text-decoration:none;color:var(--text);">NATIONAL<span style="color:#d4af37;">LITIGATION</span></a></div>
    <a href="tel:18005550199">Call 1-800-555-0199</a>
  </header>
  <main>
    <h1>${title}</h1>
    <p class="updated">Last updated: ${new Date().toISOString().slice(0, 10)}</p>
    ${bodyHtml}
  </main>
  <footer>
    <p>
      Attorney Advertising. This page is a legal intake resource and does not create an attorney-client relationship.
      Prior results do not guarantee future outcomes. The content on this site is for general informational purposes
      only and is not legal advice.
    </p>
    <p>
      <a href="/privacy-policy.html">Privacy Policy</a> &middot;
      <a href="/terms-of-service.html">Terms</a> &middot;
      <a href="/tcpa-consent.html">TCPA Consent</a> &middot;
      <a href="/attorney-advertising.html">Attorney Advertising</a> &middot;
      <a href="/ad-compliance.html">Ad Compliance</a> &middot;
      <a href="/sitemap.xml">Sitemap</a>
    </p>
  </footer>
</body>
</html>`;
}

const docs = {
  "privacy-policy": {
    title: "Privacy Policy",
    body: `
    <p>This Privacy Policy explains how National Litigation ("we," "us," or "our") collects, uses, and shares information when you visit this website or submit an intake form.</p>
    <h2>Information We Collect</h2>
    <p>When you submit the review request form, we collect information you provide, such as your name, email address, phone number, state, and a description of your concern. We may also collect technical data such as IP address, browser type, and pages visited.</p>
    <h2>How We Use Information</h2>
    <ul>
      <li>To evaluate and respond to your claim review request;</li>
      <li>To contact you by phone, email, or text about your inquiry;</li>
      <li>To connect you with a qualified reviewer or attorney where appropriate;</li>
      <li>To operate, maintain, and improve this website.</li>
    </ul>
    <h2>How We Share Information</h2>
    <p>We may share submitted information with attorneys, law firms, or service providers who assist in reviewing your inquiry. We do not sell your personal information.</p>
    <h2>Your Choices</h2>
    <p>You may request access to, correction of, or deletion of your information, and you may opt out of further contact at any time by replying STOP to text messages or contacting us using the phone number above.</p>
    <h2>Data Retention &amp; Security</h2>
    <p>We retain submitted information as long as reasonably necessary to fulfill the purposes described above and apply reasonable safeguards to protect it.</p>
    <h2>Contact</h2>
    <p>For privacy questions, call 1-800-555-0199.</p>`
  },
  "terms-of-service": {
    title: "Terms of Service",
    body: `
    <p>By accessing or using this website, you agree to these Terms of Service. If you do not agree, please do not use the site.</p>
    <h2>No Legal Advice</h2>
    <p>The content on this site is provided for general informational purposes only and does not constitute legal advice. No attorney-client relationship is created by visiting this site or submitting a form.</p>
    <h2>No Guarantee of Outcome</h2>
    <p>Submitting an intake form does not guarantee that a claim will be accepted, that you will be represented, or that any compensation will be available. Prior results do not guarantee future outcomes.</p>
    <h2>Eligibility</h2>
    <p>You must be at least 18 years old and legally able to enter into agreements to submit a form. Information about minors should be submitted only by a parent or legal guardian.</p>
    <h2>Accuracy of Information</h2>
    <p>You agree to provide accurate and complete information. We are not responsible for decisions made based on inaccurate submissions.</p>
    <h2>Limitation of Liability</h2>
    <p>To the fullest extent permitted by law, we are not liable for any indirect, incidental, or consequential damages arising from your use of this site.</p>
    <h2>Changes</h2>
    <p>We may update these Terms at any time. Continued use of the site constitutes acceptance of the updated Terms.</p>`
  },
  "tcpa-consent": {
    title: "TCPA Consent",
    body: `
    <p>By submitting your information through the review request form and checking the consent box, you provide your express written consent under the Telephone Consumer Protection Act (TCPA) to be contacted by National Litigation and its partner attorneys, law firms, and service providers.</p>
    <h2>What You Consent To</h2>
    <ul>
      <li>Contact by telephone call, text message (SMS/MMS), or email at the number and address you provide;</li>
      <li>Contact using automatic telephone dialing systems, prerecorded or artificial voice messages, and automated text messaging;</li>
      <li>Contact even if your number is listed on a federal or state Do-Not-Call registry.</li>
    </ul>
    <h2>Not a Condition of Service</h2>
    <p>Your consent is not a condition of purchasing any goods or services and is not required to receive a claim review. You may decline automated contact and still request a review by calling 1-800-555-0199.</p>
    <h2>Message &amp; Data Rates</h2>
    <p>Message and data rates may apply. Message frequency varies. Reply STOP to opt out of text messages at any time, or reply HELP for help.</p>
    <h2>Revoking Consent</h2>
    <p>You may revoke this consent at any time by replying STOP to a text message, asking to be removed during a call, or contacting us at the number above.</p>`
  },
  "attorney-advertising": {
    title: "Attorney Advertising Notice",
    body: `
    <p>This website constitutes attorney advertising. The information presented should not be construed to be formal legal advice nor the formation of a lawyer/client relationship.</p>
    <h2>No Representation Guarantee</h2>
    <p>This site is a legal intake resource that gathers information from individuals who may have potential consumer claims. Submitting information does not guarantee that any attorney will accept your case or that you will recover any compensation.</p>
    <h2>Prior Results</h2>
    <p>Prior results do not guarantee a similar outcome. Each case is different and must be evaluated on its own facts and applicable law.</p>
    <h2>Jurisdiction</h2>
    <p>Attorneys are licensed only in the jurisdictions in which they practice. Cases may be referred to or co-counseled with other qualified attorneys. The choice of a lawyer is an important decision and should not be based solely on advertisements.</p>`
  },
  "ad-compliance": {
    title: "Advertising Compliance",
    body: `
    <p>We are committed to advertising that is truthful, not misleading, and compliant with applicable federal and state rules, including FTC guidance and state bar advertising rules.</p>
    <h2>Independent Resource</h2>
    <p>National Litigation is a marketing and intake resource. We are not a law firm and do not provide legal services or legal advice. Inquiries may be forwarded to independent, licensed attorneys.</p>
    <h2>No Affiliation With Roblox</h2>
    <p>This website is not affiliated with, endorsed by, or sponsored by Roblox Corporation. "Roblox" and "Robux" are trademarks of their respective owner and are used here only to describe the subject matter of potential consumer concerns.</p>
    <h2>Testimonials &amp; Claims</h2>
    <p>Any testimonials or statements do not constitute a guarantee, warranty, or prediction regarding the outcome of any matter. Results described are not typical and depend on the specific facts of each situation.</p>
    <h2>Reporting Concerns</h2>
    <p>If you believe any content on this site is inaccurate or misleading, contact us at 1-800-555-0199 so we can review it.</p>`
  }
};

const root = process.cwd();

for (const [slug, doc] of Object.entries(docs)) {
  fs.writeFileSync(path.join(root, `${slug}.html`), legalPage(slug, doc.title, doc.body));
}

// Thank-you page
const thankYou = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Thank You | National Litigation</title>
  <meta name="robots" content="noindex, follow" />
  <link rel="canonical" href="${DOMAIN}/thank-you.html" />
  <script src="/assets/site-config.js"></script>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background: radial-gradient(circle at top left, #172554, #090d16 38%, #05070c);
      color: #f3f4f6; font-family: Inter, Arial, sans-serif; line-height: 1.7;
      min-height: 100vh; display: grid; place-items: center; text-align: center; padding: 24px;
    }
    .box { max-width: 560px; }
    .badge { color: #d4af37; border: 1px solid rgba(212,175,55,.35); background: rgba(212,175,55,.1);
      padding: 7px 12px; border-radius: 6px; display: inline-block; font-size: .75rem; font-weight: 900; text-transform: uppercase; }
    h1 { font-family: Georgia, serif; font-size: clamp(2rem, 5vw, 3rem); margin: 20px 0 12px; }
    p { color: #9ca3af; margin-bottom: 16px; }
    a.cta { background: #d4af37; color: #05070c; display: inline-block; padding: 14px 22px;
      border-radius: 8px; text-decoration: none; font-weight: 900; text-transform: uppercase; margin-top: 8px; }
    a { color: #d4af37; }
  </style>
</head>
<body>
  <div class="box">
    <span class="badge">Submission Received</span>
    <h1>Thank You</h1>
    <p>Your request for a free Roblox claim review has been received. A qualified reviewer may contact you using the information you provided.</p>
    <p>Submitting this form does not create an attorney-client relationship and does not guarantee that a claim will be accepted or that compensation will be available.</p>
    <a class="cta" href="/">Return Home</a>
    <p style="margin-top:24px;font-size:.85rem;">Need to speak with someone now? <a href="tel:18005550199">Call 1-800-555-0199</a></p>
  </div>
</body>
</html>`;

fs.writeFileSync(path.join(root, "thank-you.html"), thankYou);

console.log(`Generated ${Object.keys(docs).length} legal pages and thank-you.html.`);
