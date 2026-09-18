import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal";

export default function AboutCta() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-16 sm:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-brand-500/20 blur-3xl"
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to get started?
          </h2>
          <p className="mt-3 text-base leading-relaxed text-white/70 sm:text-lg">
            Explore our services or reach out — our team is here to help.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-500"
            >
              Explore Services
              <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              Contact Us
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}