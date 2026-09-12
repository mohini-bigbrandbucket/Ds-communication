import {
  ListChecks,
  FileEdit,
  UploadCloud,
  CreditCard,
  ShieldCheck,
  Download,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    icon: ListChecks,
    title: "Select Service",
    shortLabel: "Select",
    description: "Choose the service you need.",
  },
  {
    icon: FileEdit,
    title: "Enter Details",
    shortLabel: "Enter",
    description: "Fill in the simple online form.",
  },
  {
    icon: UploadCloud,
    title: "Upload Documents",
    shortLabel: "Upload",
    description: "Upload required documents securely.",
  },
  {
    icon: CreditCard,
    title: "Make Payment",
    shortLabel: "Pay",
    description: "Pay securely through multiple options.",
  },
  {
    icon: ShieldCheck,
    title: "Verification & Processing",
    shortLabel: "Verify",
    description: "We verify and process your application.",
  },
  {
    icon: Download,
    title: "Track & Download",
    shortLabel: "Track",
    description: "Track status and download documents.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-brand-50/40">
 <div className="mx-auto max-w-7xl px-4 section-pad sm:px-6">
        {/* ===================== MOBILE-ONLY COMPACT VERSION ===================== */}
     {/* ===================== MOBILE-ONLY COMPACT VERSION ===================== */}
<div className="sm:hidden">
  <h2 className="text-xl font-bold text-navy-900">How It Works</h2>

  <div className="mt-6 -mx-4 overflow-x-auto px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
    <div className="flex w-max items-start">
      {steps.map((step, i) => (
        <div key={step.title} className="flex items-start">
          <div className="flex w-14 flex-col items-center gap-2 text-center">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
              <step.icon className="size-5" strokeWidth={1.75} />
            </span>
            <span className="text-xs font-semibold text-navy-900 leading-tight">
              {step.shortLabel}
            </span>
          </div>

          {i !== steps.length - 1 && (
            <ArrowRight className="mx-1.5 mt-4 size-4 shrink-0 text-brand-300" />
          )}
        </div>
      ))}
    </div>
  </div>

  <Link
    to="/services"
    className="mt-7 flex w-full items-center justify-center gap-2 rounded-lg bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-500"
  >
    Start Your Application
    <ArrowRight className="size-4" />
  </Link>
</div>

        {/* ===================== DESKTOP / TABLET VERSION (unchanged) ===================== */}
        <div className="hidden gap-10 sm:grid lg:grid-cols-[0.35fr_0.65fr] lg:items-center">

          {/* LEFT CONTENT */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-brand-600 sm:text-sm">
              How It Works
            </p>

            <h2 className="mt-2 text-2xl font-bold leading-tight text-navy-900 sm:text-[28px]">
              Start Your Application in 6 Simple Steps
            </h2>

            <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-600 sm:text-base">
              A guided, secure process from service selection to document
              delivery.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative pr-4 lg:pr-6">
            <svg
              className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="
                  M 31 20 L 35 20
                  M 65 20 L 69 20
                  M 90 23 L 95 23 A 3 3 0 0 1 98 26 L 98 56 A 3 3 0 0 1 95 59 L 90 59
                  M 65 62 L 69 62
                  M 31 62 L 35 62
                "
                stroke="#60a5fa"
                strokeWidth="1.6"
                vectorEffect="non-scaling-stroke"
                strokeLinecap="round"
                strokeDasharray="0.4 5"
              />
            </svg>

            <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {steps.map((step, i) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.title}
                    className="rounded-xl border border-line bg-white p-5 shadow-sm"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="flex size-12 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                        <Icon className="size-6" strokeWidth={1.75} />
                      </span>
                      <span className="text-xl font-bold text-brand-600">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="mt-3 text-base font-semibold text-navy-900">
                      {step.title}
                    </h3>

                    <p className="mt-1 text-sm leading-relaxed text-ink-600">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}