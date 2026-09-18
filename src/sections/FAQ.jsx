import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
    <section id="faq" className="border-t border-line bg-white">
      <div className="mx-auto max-w-7xl px-6 section-pad">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          {/* Left: heading + support blurb */}
          <div>
            <h2 className="text-3xl font-extrabold leading-tight text-navy-900 sm:text-[34px]">
              Frequently <span className="text-brand-600">asked</span>
              <br />
              questions
            </h2>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-600 sm:text-base">
              Check out our FAQs or talk to a live customer care specialist
              by{" "}
              <a href="tel:" className="text-brand-600 underline underline-offset-2">
                phone
              </a>
              ,{" "}
              <a href="#" className="text-brand-600 underline underline-offset-2">
                chat
              </a>
              , or{" "}
              <a href="mailto:" className="text-brand-600 underline underline-offset-2">
                email
              </a>
              .
            </p>
          </div>

          {/* Right: accordion cards */}
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={faq.q}
                  className="rounded-xl border border-line bg-white transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-semibold text-navy-900 sm:text-base">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`size-4 shrink-0 text-brand-600 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <p className="px-5 pb-4 text-sm leading-relaxed text-ink-600 sm:text-base">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}