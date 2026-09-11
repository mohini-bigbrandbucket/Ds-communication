import { Link } from "react-router-dom";
import { ChevronRight, ArrowRight, PhoneCall, User, Fingerprint } from "lucide-react";

export default function ServiceHero({ service, categoryLabel, categoryTo, title, summary }) {
  return (
    <section className="overflow-x-hidden bg-brand-50">
      <div className="mx-auto w-full max-w-7xl min-w-0 px-4 pt-6 sm:px-6">
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

      <div className="mx-auto grid w-full max-w-7xl min-w-0 gap-8 px-4 py-10 sm:px-6 sm:py-16 lg:grid-cols-[0.4fr_0.6fr] lg:items-center lg:gap-12">
        <div className="min-w-0">
          <p className="text-sm font-medium text-brand-600">
            {categoryLabel}
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-[1.15] tracking-tight text-navy-900 sm:text-4xl sm:leading-[1.1] lg:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink-600 sm:mt-5 sm:text-base">
            {summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
            <Link
              to="/get-started"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-500 transition-colors sm:flex-none"
            >
              Start Application
              <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-line bg-white px-5 py-2.5 text-sm font-semibold text-navy-900 hover:border-brand-300 transition-colors sm:flex-none"
            >
              <PhoneCall className="size-4" />
              Talk to an Expert
            </Link>
          </div>
        </div>

        <div className="relative mx-auto hidden aspect-[4/3] w-full max-w-md lg:block">
          {/* back card */}
          <div className="absolute left-0 top-2 h-[56%] w-[70%] rounded-2xl border border-line bg-white p-4 shadow-lg">
            <div className="flex gap-1">
              <div className="h-1.5 flex-1 rounded-full bg-orange-400" />
              <div className="h-1.5 flex-1 rounded-full bg-slate-200" />
              <div className="h-1.5 flex-1 rounded-full bg-emerald-500" />
            </div>
            <div className="mt-4 flex items-start gap-3">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-200">
                <User className="size-8" />
              </span>
              <div className="mt-1 flex-1 space-y-2">
                <div className="h-2 w-full rounded-full bg-line" />
                <div className="h-2 w-4/5 rounded-full bg-line" />
                <div className="h-2 w-3/5 rounded-full bg-line" />
              </div>
            </div>
          </div>

          {/* front card */}
          <div className="absolute bottom-2 right-0 h-[62%] w-[75%] rotate-[3deg] rounded-2xl bg-gradient-to-br from-brand-500 via-brand-700 to-navy-900 p-4 text-white shadow-xl">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold tracking-wide text-white/80">
                ID DOCUMENT
              </p>
              <Fingerprint className="size-5 text-white/50" />
            </div>
            <div className="mt-4 space-y-2">
              <div className="h-2 w-1/3 rounded-full bg-white/25" />
              <div className="h-2 w-2/3 rounded-full bg-white/40" />
              <div className="h-2 w-1/3 rounded-full bg-white/25" />
              <div className="h-2 w-1/2 rounded-full bg-white/40" />
            </div>
            <div className="mt-4 flex items-end justify-between">
              <div className="h-2 w-1/4 rounded-full bg-white/25" />
              <span className="flex size-10 items-center justify-center rounded-md bg-white/10 text-white/70">
                <User className="size-5" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}