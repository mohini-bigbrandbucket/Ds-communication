import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronUp } from "lucide-react";
import { serviceCategories } from "../data/services";

const badgeStyles = [
  "bg-sky-50 text-sky-600",
  "bg-emerald-50 text-emerald-600",
  "bg-amber-50 text-amber-600",
  "bg-violet-50 text-violet-600",
];

const MOBILE_VISIBLE_COUNT = 4;

export default function ServiceCategories() {
  const [showAll, setShowAll] = useState(false);

  const visibleCategories = showAll
    ? serviceCategories
    : serviceCategories.slice(0, MOBILE_VISIBLE_COUNT);

  const hasMore = serviceCategories.length > MOBILE_VISIBLE_COUNT;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16">

        {/* ===================== MOBILE-ONLY VERSION ===================== */}
        <div className="sm:hidden">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-navy-900">
              Browse by Category
            </h2>
            {hasMore && (
              <button
                type="button"
                onClick={() => setShowAll((prev) => !prev)}
                className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600"
              >
                {showAll ? "Show Less" : "View All"}
                {showAll ? (
                  <ChevronUp className="size-3.5" />
                ) : (
                  <ArrowRight className="size-3.5" />
                )}
              </button>
            )}
          </div>

          <div className="mt-5 flex flex-col gap-3">
            {visibleCategories.map((cat, i) => (
              <Link
                key={cat.title}
                to={cat.to}
                className="flex items-center gap-3.5 rounded-2xl border border-line bg-white p-4 shadow-sm active:bg-brand-50/40"
              >
                <span
                  className={`flex size-12 shrink-0 items-center justify-center rounded-xl ${
                    badgeStyles[i % badgeStyles.length]
                  }`}
                >
                  <cat.icon className="size-6" strokeWidth={1.75} />
                </span>

                <span className="flex flex-col">
                  <span className="text-[15px] font-semibold text-navy-900 leading-tight">
                    {cat.title}
                  </span>
                  <span className="mt-1 inline-flex items-center gap-1 text-[13px] font-medium text-brand-600">
                    {cat.count ?? `${cat.items.length}+`} Services
                    <ArrowRight className="size-3.5" />
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* ===================== DESKTOP / TABLET VERSION (unchanged) ===================== */}
        <div className="hidden sm:block">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-brand-600 sm:text-sm">
                Browse by Category
              </p>
              <h2 className="mt-2 text-2xl font-bold text-navy-900 sm:text-3xl">
                Explore Services by Category
              </h2>
            </div>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {serviceCategories.map((cat) => (
              <Link
                key={cat.title}
                to={cat.to}
                className="group flex flex-col rounded-xl border border-line bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-900/5"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <cat.icon className="size-5" strokeWidth={1.75} />
                </span>

                <h3 className="mt-4 text-base font-semibold text-navy-900">
                  {cat.title}
                </h3>

                <ul className="mt-3 flex-1 space-y-1.5">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-[13px] leading-snug text-ink-600"
                    >
                      <span className="mt-[7px] size-1 shrink-0 rounded-full bg-ink-400" />
                      {item}
                    </li>
                  ))}
                </ul>

                <span className="mt-4 inline-flex items-center gap-1 border-t border-line pt-3.5 text-[13px] font-semibold text-brand-600">
                  View All Services
                  <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}