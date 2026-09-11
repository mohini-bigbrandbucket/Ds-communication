// Central navigation config — single source of truth for the navbar & footer.
// Add a new page later by adding a route in App.jsx and (if it belongs
// in the main nav) an entry here.

export const primaryNav = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Track Application", to: "/track-application" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Partner With Us", to: "/partner-with-us" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export const utilityLinks = [
  { label: "Customer Login", to: "/login/customer" },
  { label: "Partner Login", to: "/login/partner" },
];

export const topBarLeft = [
  { label: "Apply Online", to: "/services" },
  { label: "Upload Documents", to: "/track-application" },
  { label: "Secure Payments", to: "/services" },
  { label: "Live Application Tracking", to: "/track-application" },
];

export const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Partner With Us", to: "/partner-with-us" },
      { label: "Contact", to: "/contact" },
      { label: "Careers", to: "/careers" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Government & Certificates", to: "/services/government-certificates" },
      { label: "Business & Tax", to: "/services/business-tax" },
      { label: "RTO & Vehicle", to: "/services/rto-vehicle" },
      { label: "Finance & Insurance", to: "/services/finance-insurance" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Track Application", to: "/track-application" },
      { label: "FAQs", to: "/contact#faq" },
      { label: "WhatsApp Support", to: "https://wa.me/" },
      { label: "Service Guides", to: "/how-it-works" },
    ],
  },
];

export const legalLinks = [
  { label: "Privacy Policy", to: "/legal/privacy-policy" },
  { label: "Terms & Conditions", to: "/legal/terms" },
  { label: "Refund & Cancellation Policy", to: "/legal/refund-policy" },
  { label: "Service Disclaimer", to: "/legal/service-disclaimer" },
];
