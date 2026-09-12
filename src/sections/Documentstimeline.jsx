import { FileCheck2, CircleDot } from "lucide-react";

export default function DocumentsTimeline({ requirements, timeline }) {
  return (
    <section id="documents" className="scroll-mt-32 bg-brand-50/60">
  <div className="mx-auto max-w-7xl px-6 section-pad">        <div className="rounded-xl border border-line bg-white p-7">
          <h2 className="text-lg font-bold text-navy-900">
            What You Need to Apply
          </h2>
          <ul className="mt-4 space-y-3">
            {requirements.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-brand-50 text-brand-600">
                  <FileCheck2 className="size-4" />
                </span>
                <span className="text-sm text-ink-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-line bg-white p-7">
          <h2 className="text-lg font-bold text-navy-900">
            Estimated Timeline
          </h2>
          <ul className="mt-4 space-y-5">
            {timeline.map((step, i) => (
              <li key={step.title} className="flex gap-3">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-600 text-xs font-semibold text-white">
                  {i + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy-900">
                    {step.title}
                  </p>
                  <p className="mt-0.5 text-sm leading-relaxed text-ink-600">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-5 flex items-center gap-1.5 rounded-lg bg-brand-50 px-3 py-2 text-xs text-ink-400">
            <CircleDot className="size-3.5 shrink-0" />
            Timeline varies by application and authority review.
          </p>
        </div>
      </div>
    </section>
  );
}