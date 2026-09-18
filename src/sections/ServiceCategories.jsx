import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronUp } from "lucide-react";
import { serviceCategories } from "../data/services";

const EASE = "ease-[cubic-bezier(0.22,1,0.36,1)]";
const MOBILE_VISIBLE_COUNT = 4;

// Sequence: brand-blue, near-black, light — each card trends toward a single
// unified "active" dark-navy hover, except the near-black card, which lights
// up brand-blue instead (it can't get any darker). Same hover language for
// every card, so the feedback always reads as deliberate, not accidental.
const VARIANTS = [
  {
    card: "bg-brand-600 border border-brand-600 shadow-brand-600/10 hover:bg-navy-950 hover:border-navy-950 hover:shadow-navy-950/30",
    heading: "text-white",
    body: "text-white/70 group-hover:text-white/55",
    iconWrap: "bg-white/15 text-white group-hover:bg-white/10",
    badge: "bg-white/15 text-white group-hover:bg-white/10",
    cta: "text-white",
  },
  {
    card: "bg-navy-950 border border-navy-950 shadow-navy-950/10 hover:bg-brand-600 hover:border-brand-600 hover:shadow-brand-600/30",
    heading: "text-white",
    body: "text-white/55 group-hover:text-white/80",
    iconWrap: "bg-white/10 text-white group-hover:bg-white/20",
    badge: "bg-white/10 text-white group-hover:bg-white/20",
    cta: "text-white",
  },
  {
    card: "bg-white border border-line hover:bg-navy-950 hover:border-navy-950 hover:shadow-navy-950/30",
    heading: "text-navy-900 group-hover:text-white",
    body: "text-ink-600 group-hover:text-white/60",
    iconWrap: "bg-navy-900/5 text-navy-900 group-hover:bg-white/10 group-hover:text-white",
    badge: "bg-navy-900/5 text-navy-900 group-hover:bg-white/10 group-hover:text-white",
    cta: "text-navy-900 group-hover:text-white",
  },
];

// Fires once when the section scrolls into view — used to trigger the
// reveal instead of animating on page load, since this grid sits below
// the fold.
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

function CategoryCard({ cat, variant, visible, delayMs }) {
  return (
    <Link
      to={cat.to}
      style={{ transitionDelay: visible ? `${delayMs}ms` : "0ms" }}
      className={`group relative flex min-h-[240px] flex-col overflow-hidden rounded-2xl p-5 shadow-sm transition-all duration-[500ms] ${EASE} motion-reduce:transition-none hover:-translate-y-1 hover:shadow-xl ${variant.card} ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <h3 className={`text-xl font-semibold leading-snug transition-colors duration-[500ms] ${EASE} ${variant.heading}`}>
        {cat.title}
      </h3>

      <p className={`mt-2 text-[13px] leading-relaxed transition-colors duration-[500ms] ${EASE} ${variant.body}`}>
        {cat.items.join(", ")}
      </p>

      <span
        className={`mt-4 inline-flex w-fit items-center gap-1 text-[13px] font-semibold transition-colors duration-[500ms] ${EASE} ${variant.cta}`}
      >
        Explore Category
        <ArrowRight
          className={`size-3.5 transition-transform duration-[500ms] ${EASE} group-hover:translate-x-1`}
        />
      </span>

      <div className="mt-auto flex items-end justify-between pt-6">
        <span
          className={`flex size-12 shrink-0 items-center justify-center rounded-xl transition-colors duration-[500ms] ${EASE} ${variant.iconWrap}`}
        >
          <cat.icon className="size-6" strokeWidth={1.5} />
        </span>

        {cat.badge && (
          <span
            className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium transition-colors duration-[500ms] ${EASE} ${variant.badge}`}
          >
            {cat.badge}
          </span>
        )}
      </div>
    </Link>
  );
}

export default function ServiceCategories() {
  const [showAll, setShowAll] = useState(false);
  const [sectionRef, visible] = useInView({ threshold: 0.15 });

  const visibleCategories = showAll
    ? serviceCategories
    : serviceCategories.slice(0, MOBILE_VISIBLE_COUNT);

  const hasMore = serviceCategories.length > MOBILE_VISIBLE_COUNT;

  return (
    <section ref={sectionRef} className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16">
        <div
          className={`transition-all duration-700 ${EASE} motion-reduce:transition-none ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-xs font-bold uppercase tracking-wide text-brand-600 sm:text-sm">
            Service Directory
          </p>
          <h2 className="mt-2 text-2xl font-bold leading-tight text-navy-900 sm:text-3xl">
            Explore Services <span className="text-brand-600">by Category</span>
          </h2>
          <p className="mt-1.5 text-sm text-ink-600">
            Find the right service with clear guidance at every step.
          </p>
        </div>

        {/* Mobile: capped list + expand */}
        <div className="mt-5 grid grid-cols-1 gap-3 sm:hidden">
          {visibleCategories.map((cat, i) => (
            <CategoryCard
              key={cat.title}
              cat={cat}
              variant={VARIANTS[i % VARIANTS.length]}
              visible={visible}
              delayMs={150 + i * 90}
            />
          ))}
        </div>

        {hasMore && (
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-xl border border-line py-3 text-sm font-semibold text-brand-600 transition-colors duration-300 active:bg-brand-50/40 sm:hidden"
          >
            {showAll ? "Show Less" : "View All Categories"}
            {showAll ? (
              <ChevronUp className="size-3.5" />
            ) : (
              <ArrowRight className="size-3.5" />
            )}
          </button>
        )}

        {/* Desktop / tablet: full grid, every card visible */}
        <div className="mt-8 hidden gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-4">
          {serviceCategories.map((cat, i) => (
            <CategoryCard
              key={cat.title}
              cat={cat}
              variant={VARIANTS[i % VARIANTS.length]}
              visible={visible}
              delayMs={150 + i * 70}
            />
          ))}
        </div>
      </div>
    </section>
  );
}