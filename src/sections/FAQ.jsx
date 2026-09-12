import { useState } from "react";
import { Plus, X } from "lucide-react";

const faqs = [
  {
    q: "What is DS Communications?",
    a: "DS Communication is a digital service partner that helps you apply for government, business, tax, insurance and other everyday services online — with document upload, secure payments and live tracking in one place.",
  },
  {
    q: "How can I track my application?",
    a: "Use the Track Application page and your application ID to see the current stage of your request, from submission through to certificate delivery.",
  },
  {
    q: "What documents do I need?",
    a: "Requirements vary by service. Each service page lists the exact documents you'll need before you start your application.",
  },
  {
    q: "How are service fees charged?",
    a: "Our assistance fee is always shown separately from any government or third-party charges, so you know exactly what you're paying for.",
  },
  {
    q: "How long does processing take?",
    a: "Processing time depends on the service and the issuing authority. You'll see an estimated timeline before you submit your application.",
  },
  {
    q: "How can I get support?",
    a: "Reach us anytime over WhatsApp Support, or visit the Contact page for phone and email options.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="bg-white border-t border-line">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-2xl font-bold text-navy-900 sm:text-[28px]">
          Frequently Asked Questions
        </h2>

        <div className="mt-8 grid gap-x-10 gap-y-1 lg:grid-cols-2">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.q} className="border-b border-line py-4">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-medium text-navy-900">
                    {faq.q}
                  </span>
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                    {isOpen ? (
                      <X className="size-3.5" />
                    ) : (
                      <Plus className="size-3.5" />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <p className="mt-3 max-w-lg text-base leading-relaxed text-ink-600">
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
