/**
 * Site-wide configuration shared across all pages.
 * Centralizes brand, contact, and intake settings so they can be
 * updated in one place rather than across every generated page.
 */
window.SITE_CONFIG = {
  brand: "NATIONAL LITIGATION",
  phoneDisplay: "1-800-555-0199",
  phoneHref: "tel:18005550199",
  // Where the intake form posts (Abby CRM web-form endpoint).
  // Leaving this empty keeps the form in client-side demo mode.
  intakeEndpoint: "https://abby-crm.com/api/web-forms/roblox",
  thankYouUrl: "/thank-you.html"
};
