import { FileCheck2, Wallet, Clock, CircleHelp } from "lucide-react";

const infoStrip = [
  {
    icon: FileCheck2,
    title: "Required Documents",
    description: "Check the list of documents you need to submit.",
  },
  {
    icon: Wallet,
    title: "Service Assistance Fee",
    description: "Assistance fee shown before payment.",
  },
  {
    icon: Clock,
    title: "Expected Timeline",
    description: "Timeline varies by application.",
  },
  {
    icon: CircleHelp,
    title: "Frequently Asked Questions",
    description: "Find answers to common questions.",
  },
];

export default function ServiceProcess({ process }) {
  return (
    <section id="process" className="scroll-mt-32 bg-white">
  <div className="mx-auto max-w-7xl px-6 section-pad">        <h2 className="text-center text-2xl font-bold text-navy-900 sm:text-[28px]">
          How the Process Works
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <div key={step.title} className="relative flex flex-col items-center text-center">
              <span className="flex size-11 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                {i + 1}
              </span>
              <span className="mt-4 flex size-11 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                <step.icon className="size-5" />
              </span>
              <h3 className="mt-3 text-base font-semibold text-navy-900">
                {step.title}
              </h3>
              <p className="mt-1 max-w-[200px] text-sm leading-relaxed text-ink-600">
                {step.description}
              </p>
              {i < process.length - 1 && (
                <span
                  aria-hidden
                  className="absolute right-[-12px] top-5 hidden h-px w-6 border-t border-dashed border-line sm:block lg:right-[-12px]"
                />
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {infoStrip.map((item) => (
            <div key={item.title} className="flex items-start gap-3 bg-white p-5">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                <item.icon className="size-4.5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-navy-900">
                  {item.title}
                </p>
                <p className="mt-0.5 text-xs leading-relaxed text-ink-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}