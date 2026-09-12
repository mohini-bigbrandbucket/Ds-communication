import { useState } from "react";
import { Search, CheckCircle2, User } from "lucide-react";

const timeline = [
  {
    label: "Submitted",
    timestamp: "12 Jan 2026, 10:24 AM",
    status: "done",
  },
  {
    label: "Documents Verified",
    timestamp: "14 Jan 2026, 04:15 PM",
    status: "done",
  },
  {
    label: "Processing",
    timestamp: "In Progress",
    status: "current",
  },
  {
    label: "Approved",
    timestamp: "Pending",
    status: "pending",
  },
  {
    label: "Completed",
    timestamp: "Pending",
    status: "pending",
  },
];

function TimelineDot({ status }) {
  if (status === "done") {
    return (
      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white lg:size-7">
        <CheckCircle2 className="size-4 lg:size-4.5" strokeWidth={2} />
      </span>
    );
  }
  if (status === "current") {
    return (
      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-600 ring-4 ring-brand-100 lg:size-7">
        <span className="size-2 rounded-full bg-white" />
      </span>
    );
  }
  return (
    <span className="flex size-6 shrink-0 items-center justify-center rounded-full border-2 border-line bg-white lg:size-7">
      <span className="size-2 rounded-full bg-ink-300" />
    </span>
  );
}

export default function TrackApplication() {
  const [applicationId, setApplicationId] = useState("");

  return (
    <section className="bg-brand-50/40">
 <div className="mx-auto max-w-7xl px-4 section-pad sm:px-6">        <div className="lg:grid lg:grid-cols-[0.42fr_0.58fr] lg:items-start lg:gap-14">

          {/* LEFT: intro + search */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-brand-600 sm:text-sm">
              Application Status
            </p>
            <h2 className="mt-2 text-xl font-bold text-navy-900 sm:text-2xl lg:text-3xl">
              Track Your Application
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-600 lg:text-base">
              Enter your application ID to see real-time status — from
              submission to final delivery.
            </p>

            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row lg:flex-col">
              <input
                type="text"
                value={applicationId}
                onChange={(e) => setApplicationId(e.target.value)}
                placeholder="Enter Application ID"
                className="w-full rounded-lg border border-line bg-white px-4 py-2.5 text-sm text-navy-900 placeholder:text-ink-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100 sm:flex-1 lg:py-3"
              />
              <button
                type="button"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-500 lg:py-3"
              >
                <Search className="size-4" />
                Track Status
              </button>
            </div>

            <p className="mt-3 text-xs text-ink-500">
              You'll find your application ID in the confirmation email or SMS
              sent after submission.
            </p>
          </div>

          {/* RIGHT: result card */}
          <div className="mt-8 lg:mt-0">
            <div className="rounded-2xl border border-line bg-white p-5 shadow-sm sm:max-w-xl sm:p-6 lg:max-w-none lg:p-8 lg:shadow-lg lg:shadow-navy-900/5">
              <div className="flex items-start justify-between gap-3 border-b border-line pb-4 lg:pb-5">
                <div>
                  <p className="text-sm font-semibold text-navy-900 lg:text-base">
                    Application #DSC-2026-10248
                  </p>
                  <p className="mt-0.5 text-xs text-ink-600 lg:text-sm">
                    PAN Card Application
                  </p>
                </div>
                <span className="shrink-0 rounded-full bg-sky-50 px-2.5 py-1 text-[11px] font-semibold text-sky-600 lg:px-3 lg:py-1.5 lg:text-xs">
                  Processing
                </span>
              </div>

              <div className="mt-5 flex flex-col lg:mt-6">
                {timeline.map((step, i) => {
                  const isLast = i === timeline.length - 1;
                  const isPending = step.status === "pending";
                  return (
                    <div key={step.label} className="flex gap-3 lg:gap-4">
                      <div className="flex flex-col items-center">
                        <TimelineDot status={step.status} />
                        {!isLast && (
                          <span
                            className={`mt-1 w-px flex-1 ${
                              step.status === "done"
                                ? "bg-emerald-300"
                                : "bg-line"
                            }`}
                          />
                        )}
                      </div>
                      <div
                        className={`flex flex-1 items-center justify-between ${
                          isLast ? "pb-1" : "pb-5 lg:pb-6"
                        }`}
                      >
                        <p
                          className={`text-sm font-semibold lg:text-[15px] ${
                            isPending ? "text-ink-400" : "text-navy-900"
                          }`}
                        >
                          {step.label}
                        </p>
                        <p
                          className={`text-xs lg:text-sm ${
                            isPending ? "text-ink-400" : "text-ink-600"
                          }`}
                        >
                          {step.timestamp}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-2 flex items-start gap-2.5 rounded-lg bg-brand-50/60 p-3 lg:p-4">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
                  <User className="size-3.5" strokeWidth={2} />
                </span>
                <p className="text-xs leading-relaxed text-ink-700 lg:text-sm">
                  Your application is currently being processed. We will
                  notify you once it is completed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}