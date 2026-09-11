import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function ServiceFaqs({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faqs" className="scroll-mt-32 bg-brand-50/60">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="text-center text-2xl font-bold text-navy-900 sm:text-[28px]">
          Frequently Asked Questions
        </h2>

        <div className="mt-8 divide-y divide-line rounded-xl border border-line bg-white">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.q}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                >
                  <span className="text-sm font-medium text-navy-900">
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <Minus className="size-4 shrink-0 text-brand-600" />
                  ) : (
                    <Plus className="size-4 shrink-0 text-ink-400" />
                  )}
                </button>
                {isOpen && (
                  <p className="px-6 pb-4 text-sm leading-relaxed text-ink-600">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}