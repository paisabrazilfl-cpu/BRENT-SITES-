/**
 * Site-wide configuration shared across all pages.
 * Centralizes brand, contact, and intake settings so they can be
 * updated in one place rather than across every generated page.
 */
window.SITE_CONFIG = {
  brand: "NATIONAL LITIGATION",
  phoneDisplay: "1-800-555-0199",
  phoneHref: "tel:18005550199",
  // Intake is handled by the hosted Velocity embed on index.html:
  //   https://mtosvelocity-api.onrender.com/api/web-forms/roblox/embed.js
  // This endpoint is no longer used by the homepage form; kept for reference.
  intakeEndpoint: "",
  thankYouUrl: "/thank-you.html"
};
