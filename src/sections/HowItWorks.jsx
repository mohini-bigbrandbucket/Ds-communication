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
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:items-center">
          <div>
            <p className="text-base font-semibold text-brand-600">
              How It Works
            </p>
            <h2 className="mt-2 text-2xl font-bold leading-tight text-navy-900 sm:text-[28px]">
              Start Your Application in 6 Simple Steps
            </h2>
            <p className="mt-3 max-w-sm text-base leading-relaxed text-ink-600">
              A guided, secure process from service selection to document
              delivery.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="rounded-xl border border-line bg-brand-50/40 p-5"
              >
                <div className="flex items-center gap-2">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-white text-brand-600 shadow-sm">
                    <step.icon className="size-4.5" />
                  </span>
                  <span className="text-lg font-bold text-brand-200">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
