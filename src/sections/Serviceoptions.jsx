import { useState } from "react";

export default function ServiceOptions({ title, options }) {
  const [selected, setSelected] = useState(0);

  return (
    <section id="options" className="scroll-mt-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="text-center text-2xl font-bold text-navy-900 sm:text-[28px]">
          {title}
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {options.map((option, i) => {
            const isSelected = selected === i;
            return (
              <button
                key={option.title}
                type="button"
                onClick={() => setSelected(i)}
                className={`flex flex-col items-start gap-3 rounded-xl border p-6 text-left transition-colors ${
                  isSelected
                    ? "border-brand-400 bg-brand-50"
                    : "border-line hover:border-brand-300"
                }`}
              >
                <div className="flex w-full items-start justify-between gap-3">
                  <span className="flex size-11 items-center justify-center rounded-lg bg-white text-brand-600 shadow-sm">
                    <option.icon className="size-5.5" />
                  </span>
                  <span
                    aria-hidden
                    className={`mt-1 flex size-4.5 shrink-0 items-center justify-center rounded-full border-2 ${
                      isSelected
                        ? "border-brand-600"
                        : "border-line"
                    }`}
                  >
                    {isSelected && (
                      <span className="size-2 rounded-full bg-brand-600" />
                    )}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-navy-900">
                  {option.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-600">
                  {option.description}
                </p>
                <p className="mt-1 text-xs text-ink-400">
                  Assistance fee shown before payment
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}