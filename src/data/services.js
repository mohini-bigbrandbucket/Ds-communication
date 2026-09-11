import {
  ShieldCheck,
  Building2,
  Car,
  BadgeCheck,
  Scale,
  Landmark,
  Plane,
} from "lucide-react";

export const serviceCategories = [
  {
    icon: ShieldCheck,
    title: "Government & Certificates",
    items: ["Aadhaar Services", "PAN, Voter ID, Income, Domicile", "Caste, EWS"],
    to: "/services/government-certificates",
  },
  {
    icon: Building2,
    title: "Business & Tax",
    items: ["GST, ITR, Udyam, Shop Act", "FSSAI, Company, LLP", "Trademark, IEC"],
    to: "/services/business-tax",
  },
  {
    icon: Car,
    title: "RTO & Vehicle",
    items: ["Driving Licence, RC Services", "Ownership Transfer", "Vehicle Insurance, Challan"],
    to: "/services/rto-vehicle",
  },
  {
    icon: BadgeCheck,
    title: "Passport & Verification",
    items: ["Passport, PCC", "Police Verification"],
    to: "/services/passport-verification",
  },
  {
    icon: Scale,
    title: "Legal Services",
    items: ["Affidavit, Agreement", "Gazette, Notary"],
    to: "/services/legal",
  },
  {
    icon: Landmark,
    title: "Finance & Insurance",
    items: ["Personal Loan, Business Loan", "Home Loan, LAP, Credit Card", "Insurance"],
    to: "/services/finance-insurance",
  },
  {
    icon: Plane,
    title: "Travel",
    items: ["Flight, Train", "Bus, Hotel"],
    to: "/services/travel",
  },
];

export const popularServices = [
  { title: "PAN Card", to: "/services/pan-card" },
  { title: "Udyam Registration", to: "/services/udyam-registration" },
  { title: "GST Registration", to: "/services/gst-registration" },
  { title: "FSSAI License", to: "/services/fssai-license" },
  { title: "ITR Filing", to: "/services/itr-filing" },
  { title: "Gazette Name Change", to: "/services/gazette-name-change" },
];

export const popularSearches = [
  { label: "PAN Card", to: "/services/pan-card" },
  { label: "Udyam", to: "/services/udyam-registration" },
  { label: "GST Registration", to: "/services/gst-registration" },
  { label: "FSSAI", to: "/services/fssai-license" },
  { label: "ITR Filing", to: "/services/itr-filing" },
  { label: "Gazette Name Change", to: "/services/gazette-name-change" },
];
// Groups individual services under their category page (`categoryTo`),
// so the detail page can show "Related Services" without a full rebuild.
export const relatedServicesByCategory = {
  "/services/business-tax": [
    { title: "PAN Card", to: "/services/pan-card" },
    { title: "GST Registration", to: "/services/gst-registration" },
    { title: "Udyam Registration", to: "/services/udyam-registration" },
    { title: "ITR Filing", to: "/services/itr-filing" },
    { title: "FSSAI License", to: "/services/fssai-license" },
  ],
  "/services/legal": [
    { title: "Gazette Name Change", to: "/services/gazette-name-change" },
  ],
  // Add entries for other categories (government-certificates, rto-vehicle,
  // passport-verification, finance-insurance, travel) as you build them out.
};