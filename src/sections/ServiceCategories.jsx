import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronUp } from "lucide-react";
import { serviceCategories } from "../data/services";

const EASE = "ease-[cubic-bezier(0.22,1,0.36,1)]";
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
          <p className="text-xs font-bold uppercase tracking-wide text-brand-600">
            Service Directory
          </p>
          <h2 className="mt-1 text-2xl font-bold leading-tight text-navy-900">
            Explore Services <span className="text-brand-600">by Category</span>
          </h2>
          <p className="mt-1.5 text-sm text-ink-600">
            Find the right service with clear guidance at every step.
          </p>

          <div className="mt-5 flex flex-col gap-3">
            {visibleCategories.map((cat) => (
              <Link
                key={cat.title}
                to={cat.to}
                className="flex flex-col gap-3 rounded-2xl border border-line bg-white p-5 shadow-sm transition-colors duration-300 active:bg-brand-50/40"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <cat.icon className="size-5.5" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="text-[15px] font-semibold text-navy-900">
                    {cat.title}
                  </p>
                  <p className="mt-1 text-[13px] leading-relaxed text-ink-600">
                    {cat.items.join(", ")}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-[13px] font-semibold text-brand-600">
                  Explore Category
                  <ArrowRight className="size-3.5" />
                </span>
              </Link>
            ))}
          </div>

          {hasMore && (
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-xl border border-line py-3 text-sm font-semibold text-brand-600 transition-colors duration-300 active:bg-brand-50/40"
            >
              {showAll ? "Show Less" : "View All Categories"}
              {showAll ? (
                <ChevronUp className="size-3.5" />
              ) : (
                <ArrowRight className="size-3.5" />
              )}
            </button>
          )}
        </div>

        {/* ===================== DESKTOP / TABLET VERSION ===================== */}
        <div className="hidden sm:block">
          <p className="text-xs font-bold uppercase tracking-wide text-brand-600 sm:text-sm">
            Service Directory
          </p>
          <h2 className="mt-2 text-2xl font-bold text-navy-900 sm:text-3xl">
            Explore Services <span className="text-brand-600">by Category</span>
          </h2>
          <p className="mt-1.5 text-sm text-ink-600">
            Find the right service with clear guidance at every step.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {serviceCategories.map((cat) => (
              <Link
                key={cat.title}
                to={cat.to}
                className={`group flex flex-col rounded-xl border border-line bg-white p-5 shadow-sm transition-all duration-[900ms] ${EASE} hover:-translate-y-1 hover:border-navy-900 hover:bg-navy-900 hover:shadow-2xl hover:shadow-navy-900/25`}
              >
                <span
                  className={`flex size-11 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 transition-colors duration-[900ms] ${EASE} group-hover:bg-white/10 group-hover:text-white`}
                >
                  <cat.icon className="size-5" strokeWidth={1.75} />
                </span>

                <h3
                  className={`mt-4 text-base font-semibold text-navy-900 transition-colors duration-[900ms] ${EASE} group-hover:text-white`}
                >
                  {cat.title}
                </h3>

                <ul className="mt-3 flex-1 space-y-1.5">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className={`flex items-start gap-2 text-[13px] leading-snug text-ink-600 transition-colors duration-[900ms] ${EASE} group-hover:text-white/60`}
                    >
                      <span
                        className={`mt-[7px] size-1 shrink-0 rounded-full bg-ink-400 transition-colors duration-[900ms] ${EASE} group-hover:bg-white/40`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                {cat.badge && (
                  <span
                    className={`mt-3.5 inline-flex w-fit items-center rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-medium text-brand-600 transition-colors duration-[900ms] ${EASE} group-hover:bg-white/10 group-hover:text-white`}
                  >
                    {cat.badge}
                  </span>
                )}

                <span
                  className={`mt-3.5 inline-flex items-center gap-1 border-t border-line pt-3.5 text-[13px] font-semibold text-brand-600 transition-colors duration-[900ms] ${EASE} group-hover:border-white/10 group-hover:text-white`}
                >
                  Explore Category
                  <ArrowRight
                    className={`size-3.5 transition-transform duration-[900ms] ${EASE} group-hover:translate-x-1`}
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}