import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function RelatedServices({ categoryLabel, categoryTo, services }) {
  if (!services || services.length === 0) return null;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-bold text-navy-900 sm:text-[28px]">
            Related Services{categoryLabel ? ` in ${categoryLabel}` : ""}
          </h2>
          {categoryTo && (
            <Link
              to={categoryTo}
              className="hidden shrink-0 items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700 sm:inline-flex"
            >
              View All
              <ArrowRight className="size-4" />
            </Link>
          )}
        </div>

        <div className="mt-6 flex gap-4 overflow-x-auto pb-2">
          {services.map((service) => (
            <Link
              key={service.to}
              to={service.to}
              className="flex min-w-[180px] shrink-0 flex-col gap-2 rounded-xl border border-line p-5 hover:border-brand-300 transition-colors"
            >
              <span className="text-sm font-semibold text-navy-900">
                {service.title}
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-brand-600">
                View Details
                <ArrowRight className="size-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}