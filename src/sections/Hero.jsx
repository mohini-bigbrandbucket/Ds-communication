import { Link } from "react-router-dom";
import { ArrowRight, Check, FileText } from "lucide-react";

const steps = [
  { label: "Submitted", status: "done" },
  { label: "Documents Received", status: "active" },
  { label: "Verification", status: "pending" },
  { label: "Payment Verified", status: "pending" },
  { label: "Processing", status: "pending" },
  { label: "Department Submitted", status: "pending" },
  { label: "Approved", status: "pending" },
  { label: "Certificate Ready", status: "pending" },
  { label: "Completed", status: "pending" },
];

export default function Hero() {
  return (
    <section className="bg-brand-50">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-5 flex flex-col justify-center">
          <p className="text-sm font-medium text-brand-600">
            Your Trusted Digital Service Partner
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-[1.1] tracking-tight text-navy-900 sm:text-5xl">
            Government &amp; Digital Services, Made Simple.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-600">
            Apply online, upload documents, pay securely, and track every
            application — government, business, tax, insurance and digital
            services, all in one place.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-500 transition-colors"
            >
              Explore Services
            </Link>
            <Link
              to="/track-application"
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-white px-5 py-3 text-sm font-semibold text-navy-900 hover:border-brand-300 transition-colors"
            >
              Track Application
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-center rounded-lg bg-navy-900 p-6 text-white shadow-xl shadow-navy-900/20 sm:p-8">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-white">
              Live Application Status
            </p>
            <p className="text-xs text-white/50">ID: DSC2026XXXX</p>
          </div>

          <div className="mt-5 flex items-center gap-3 rounded-xl bg-white/5 p-4">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-500/20 text-brand-400">
              <FileText className="size-5" />
            </span>
            <div>
              <p className="text-xs text-white/50">Application Status</p>
              <p className="text-lg font-semibold text-brand-400 leading-tight">
                Documents Received
              </p>
              <p className="text-xs text-white/50">Current Stage</p>
            </div>
          </div>

          <div className="mt-7">
            <p className="text-xs font-medium text-white/60">
              Application Progress
            </p>
            <div className="mt-4 flex items-start">
              {steps.map((step, i) => (
                <div key={step.label} className="flex flex-1 items-start last:flex-none">
                  <div className="flex flex-col items-center gap-2">
                    <span
                      className={`flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                        step.status === "done"
                          ? "bg-emerald-500 text-white"
                          : step.status === "active"
                          ? "bg-brand-500 text-white"
                          : "bg-white/10 text-white/40"
                      }`}
                    >
                      {step.status === "done" ? (
                        <Check className="size-3.5" strokeWidth={3} />
                      ) : (
                        i + 1
                      )}
                    </span>
                    <span className="block max-w-[52px] text-center text-[10px] leading-tight text-white/50">
                      {step.label}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <span className="mt-3.5 h-px flex-1 bg-white/10" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}