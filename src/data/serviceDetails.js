// Content for individual service detail pages (src/pages/ServiceDetail.jsx).
// Each entry is keyed by the same slug used in services.js / the route
// "/services/:slug". Add a new service by adding an entry here — the page
// itself doesn't need to change.

import {
  FileText,
  FileEdit,
  RefreshCcw,
  ClipboardList,
  UploadCloud,
  Wallet,
  Search,
} from "lucide-react";

const defaultTimeline = [
  {
    title: "Document Review",
    description: "We review your documents for accuracy.",
  },
  {
    title: "Application Preparation",
    description: "We prepare and file your application.",
  },
  {
    title: "Status Updates",
    description: "We provide real-time updates on your application.",
  },
];

const defaultProcess = [
  {
    icon: ClipboardList,
    title: "Share Details",
    description: "Tell us about your needs and personal details.",
  },
  {
    icon: UploadCloud,
    title: "Upload Documents",
    description: "Upload the required documents securely.",
  },
  {
    icon: Wallet,
    title: "Secure Payment",
    description: "Pay the assistance fee safely and securely.",
  },
  {
    icon: Search,
    title: "Track Application",
    description: "We process and keep you updated at every step.",
  },
];

export const serviceDetails = {
  "pan-card": {
    category: "PAN, GST & Tax",
    categoryTo: "/services/business-tax",
    title: "PAN Card Services",
    summary:
      "Get guided assistance for new PAN applications, PAN corrections and PAN reprints — from document review to application tracking.",
    options: [
      {
        icon: FileText,
        title: "New PAN Card",
        description: "Apply for a new PAN card for individuals or entities.",
      },
      {
        icon: FileEdit,
        title: "PAN Correction",
        description: "Correct or update details on your existing PAN card.",
      },
      {
        icon: RefreshCcw,
        title: "PAN Reprint",
        description: "Request a reprint of your existing PAN card.",
      },
    ],
    requirements: [
      "Aadhaar Card",
      "Address Proof",
      "Date of Birth Proof",
      "Passport-size Photograph",
      "Existing PAN Card (for correction/reprint)",
      "Mobile Number and Email ID",
    ],
    timeline: defaultTimeline,
    process: defaultProcess,
    faqs: [
      {
        q: "What documents are required for a PAN card?",
        a: "You'll need Aadhaar Card, address proof, date of birth proof and a passport-size photograph. For corrections or reprints, you'll also need your existing PAN card.",
      },
      {
        q: "Can I correct details on my PAN card?",
        a: "Yes. Choose PAN Correction, upload the supporting documents for the change you need, and we'll file the correction request for you.",
      },
      {
        q: "Can I request a PAN reprint?",
        a: "Yes, if your PAN card is lost, damaged or you simply need another physical copy, choose PAN Reprint and we'll handle the rest.",
      },
      {
        q: "How can I track my PAN application?",
        a: "Once submitted, you can track your application any time from the Track Application page using your application ID.",
      },
    ],
  },
};

export const defaultServiceDetail = {
  category: "Services",
  categoryTo: "/services",
  summary:
    "Get guided assistance for this service — from document review to application tracking.",
  options: [
    {
      icon: FileText,
      title: "New Application",
      description: "Apply for this service for the first time.",
    },
    {
      icon: FileEdit,
      title: "Correction",
      description: "Correct or update details on an existing application.",
    },
    {
      icon: RefreshCcw,
      title: "Reprint / Reissue",
      description: "Request a reprint or reissue of your document.",
    },
  ],
  requirements: [
    "Identity Proof",
    "Address Proof",
    "Passport-size Photograph",
    "Mobile Number and Email ID",
  ],
  timeline: defaultTimeline,
  process: defaultProcess,
  faqs: [
    {
      q: "What documents are required?",
      a: "Requirements vary by service. See the Documents tab above for exactly what you'll need before you start.",
    },
    {
      q: "How can I track my application?",
      a: "Once submitted, you can track your application any time from the Track Application page using your application ID.",
    },
  ],
};

export function getServiceDetail(slug) {
  return serviceDetails[slug] ?? null;
}