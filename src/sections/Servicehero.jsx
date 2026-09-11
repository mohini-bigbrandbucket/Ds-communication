import { Link } from "react-router-dom";
import { ChevronRight, ArrowRight, PhoneCall, FileText } from "lucide-react";

export default function ServiceHero({ service, categoryLabel, categoryTo, title, summary }) {
  return (
    <section className="bg-brand-50">
      <div className="mx-auto max-w-7xl px-6 pt-6">
        <nav className="flex flex-wrap items-center gap-1.5 text-xs text-ink-400">
          <Link to="/" className="hover:text-brand-600">
            Home
          </Link>
          <ChevronRight className="size-3.5" />
          <Link to="/services" className="hover:text-brand-600">
            Services
          </Link>
          <ChevronRight className="size-3.5" />
          <Link to={categoryTo} className="hover:text-brand-600">
            {categoryLabel}
          </Link>
          <ChevronRight className="size-3.5" />
          <span className="text-ink-600">{title}</span>
        </nav>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-10 grid gap-10 lg:grid-cols-2 lg:items-center lg:py-14">
        <div>
          <p className="text-sm font-semibold text-brand-600">
            {categoryLabel}
          </p>
          <h1 className="mt-2 text-3xl font-bold leading-tight text-navy-900 sm:text-4xl">
            {title}
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-600">
            {summary}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/get-started"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-500 transition-colors"
            >
              Start Application
              <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-white px-5 py-3 text-sm font-semibold text-navy-900 hover:border-brand-300 transition-colors"
            >
              <PhoneCall className="size-4" />
              Talk to an Expert
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="rounded-2xl bg-navy-900 p-7 text-white shadow-xl shadow-navy-900/20">
            <span className="flex size-12 items-center justify-center rounded-xl bg-white/10 text-brand-400">
              <FileText className="size-6" />
            </span>
            <p className="mt-5 text-lg font-semibold">{title}</p>
            <p className="mt-1 text-sm text-white/60">
              Documents · Payment · Tracking, all in one flow.
            </p>
            <div className="mt-6 h-px w-full bg-white/10" />
            <div className="mt-5 grid grid-cols-3 gap-3">
              {["Apply", "Verify", "Deliver"].map((label) => (
                <div
                  key={label}
                  className="rounded-lg bg-white/5 py-3 text-center text-xs font-medium text-white/70"
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}