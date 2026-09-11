import { Link } from "react-router-dom";
import { ArrowRight, Rocket } from "lucide-react";

export default function ServiceContact({ title }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-14">
        <div className="flex flex-col items-center justify-between gap-5 rounded-xl bg-brand-50 p-7 sm:flex-row">
          <div className="flex items-center gap-4">
            <span className="flex size-12 items-center justify-center rounded-full bg-brand-600 text-white">
              <Rocket className="size-5.5" />
            </span>
            <div>
              <p className="text-lg font-bold text-navy-900">
                Ready to Start Your {title}?
              </p>
              <p className="mt-0.5 text-sm text-ink-600">
                Start your application with expert guidance and hassle-free support.
              </p>
            </div>
          </div>
          <Link
            to="/get-started"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-brand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-500 transition-colors"
          >
            Start Application
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}