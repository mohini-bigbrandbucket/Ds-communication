import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { serviceCategories } from "../data/services";

export default function ServiceCategories() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">
          Explore Services by Category
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {serviceCategories.map((cat) => (
            <div
              key={cat.title}
              className="flex flex-col rounded-lg border border-line p-5 transition-colors hover:border-brand-300"
            >
              <div className="flex items-center gap-2.5">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-md border border-line text-brand-600">
                  <cat.icon className="size-4.5" />
                </span>
                <h3 className="text-sm font-semibold text-navy-900">
                  {cat.title}
                </h3>
              </div>

              <ul className="mt-3.5 flex-1 list-disc space-y-1 pl-4 marker:text-ink-400">
                {cat.items.map((item) => (
                  <li key={item} className="text-[13px] leading-snug text-ink-600">
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                to={cat.to}
                className="mt-3.5 inline-flex items-center gap-1 text-[13px] font-semibold text-brand-600 hover:text-brand-700"
              >
                View All Services
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}