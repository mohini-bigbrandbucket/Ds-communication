import {
  ListChecks,
  FileEdit,
  UploadCloud,
  CreditCard,
  ShieldCheck,
  Download,
} from "lucide-react";

const steps = [
  {
    icon: ListChecks,
    title: "Select Service",
    description: "Choose the service you need.",
  },
  {
    icon: FileEdit,
    title: "Enter Details",
    description: "Fill in the simple online form.",
  },
  {
    icon: UploadCloud,
    title: "Upload Documents",
    description: "Upload required documents securely.",
  },
  {
    icon: CreditCard,
    title: "Make Payment",
    description: "Pay securely through multiple options.",
  },
  {
    icon: ShieldCheck,
    title: "Verification & Processing",
    description: "We verify and process your application.",
  },
  {
    icon: Download,
    title: "Track & Download",
    description: "Track status and download documents.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-brand-50/40">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.35fr_0.65fr] lg:items-center">

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

            {/* =====================================================
                DOTTED CONNECTOR — flow:
                01 → 02 → 03
                              ↓
                04 ← 05 ← 06
                ===================================================== */}
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
            {/* STEP CARDS */}
            <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {steps.map((step, i) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.title}
                    className="rounded-xl border border-line bg-white p-5 shadow-sm"
                  >
                    {/* ICON + NUMBER */}
                    <div className="flex items-center gap-2.5">
                      <span className="flex size-12 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                        <Icon
                          className="size-6"
                          strokeWidth={1.75}
                        />
                      </span>

                      <span className="text-xl font-bold text-brand-600">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* TITLE */}
                    <h3 className="mt-3 text-base font-semibold text-navy-900">
                      {step.title}
                    </h3>

                    {/* DESCRIPTION */}
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