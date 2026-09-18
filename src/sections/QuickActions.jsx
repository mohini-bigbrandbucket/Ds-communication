import { useEffect, useRef, useState } from "react";

const EASE = "ease-[cubic-bezier(0.22,1,0.36,1)]";

const stats = [
  { value: "350+", label: "Verified CA's" },
  { value: "500+", label: "Legal Professionals" },
  { value: "5 Lakh+", label: "Business Served" },
  { value: "1 Lakh+", label: "Company Registered" },
];

// Fires once when the section scrolls into view, matching the reveal used
// on the category grid and How It Works sections.
function useInView(options) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return;
    }
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, options);

    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
}

function reveal(visible, delayMs = 0) {
  return {
    className: `transition-all duration-[600ms] ${EASE} motion-reduce:transition-none ${
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
    }`,
    style: { transitionDelay: visible ? `${delayMs}ms` : "0ms" },
  };
}

// Mobile-only: fade in from the side rather than up, so the ledger rows
// read as a distinct treatment from the up-and-in used everywhere else.
function revealRow(visible, delayMs = 0) {
  return {
    className: `transition-all duration-[550ms] ${EASE} motion-reduce:transition-none ${
      visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3"
    }`,
    style: { transitionDelay: visible ? `${delayMs}ms` : "0ms" },
  };
}

export default function NumbersJourney() {
  const [sectionRef, visible] = useInView({ threshold: 0.15 });
  const header = reveal(visible);

  return (
    <section ref={sectionRef} className="relative z-10 bg-navy-950">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div style={header.style} className={header.className}>
          <p className="text-xs font-bold uppercase tracking-wide text-brand-400 sm:text-sm">
            Track Record
          </p>
          <h2 className="mt-2 text-2xl font-bold leading-tight text-white sm:text-3xl">
            The Numbers Behind the Journey
          </h2>
        </div>

        {/* ===================== MOBILE-ONLY: ledger rows ===================== */}
        <div className="mt-7 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03] px-5 sm:hidden">
          {stats.map((stat, i) => {
            const r = revealRow(visible, 150 + i * 90);
            return (
              <div
                key={stat.label}
                style={r.style}
                className={`flex items-baseline justify-between gap-4 py-4 ${r.className}`}
              >
                <span className="text-sm font-medium leading-snug text-white/60">
                  {stat.label}
                </span>
                <span className="shrink-0 text-2xl font-extrabold leading-none text-white">
                  {stat.value}
                </span>
              </div>
            );
          })}
        </div>

        {/* ===================== DESKTOP / TABLET: divided row ===================== */}
        <div className="mt-8 hidden gap-x-6 gap-y-8 sm:mt-10 sm:grid sm:grid-cols-4 sm:gap-x-0">
          {stats.map((stat, i) => {
            const r = reveal(visible, 150 + i * 100);
            return (
              <div
                key={stat.label}
                style={r.style}
                className={`flex flex-col gap-1.5 sm:px-6 ${
                  i !== 0 ? "sm:border-l sm:border-white/10" : ""
                } ${r.className}`}
              >
                <span className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                  {stat.value}
                </span>
                <span className="text-xs font-medium leading-tight text-brand-400 sm:text-sm">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}