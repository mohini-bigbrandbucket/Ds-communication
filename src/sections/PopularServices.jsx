import { Link } from "react-router-dom";
import {
  IdCard,
  Building2,
  Receipt,
  Leaf,
  FileText,
  FileEdit,
  ArrowRight,
} from "lucide-react";
import { popularServices } from "../data/services";

const icons = [IdCard, Building2, Receipt, Leaf, FileText, FileEdit];

export default function PopularServices() {
  return (
    <section className="bg-brand-50/60">
     <div className="mx-auto max-w-7xl px-6 section-pad">
        <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">
          Popular Services
        </h2>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {popularServices.map((service, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={service.title}
                className="flex flex-col items-center gap-3 rounded-xl bg-white border border-line px-4 py-7 text-center"
              >
                <span className="flex size-12 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                  <Icon className="size-6" />
                </span>
                <span className="text-base font-semibold text-navy-900">
                  {service.title}
                </span>
                <Link
                  to={service.to}
                  className="inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:text-brand-700"
                >
                  Start Application
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
