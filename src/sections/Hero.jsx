import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImage from "../assets/hero1.jpeg";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden bg-navy-900 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* readability overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/70 to-navy-950/20" />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="max-w-xl">
          <p className="text-sm font-medium text-brand-300">
            Your Trusted Digital Service Partner
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl sm:leading-[1.1] lg:text-5xl">
            Government &amp; Digital Services, Made Simple.
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/70 sm:mt-5 sm:text-base">
            Apply online, upload documents, pay securely, and track every
            application — government, business, tax, insurance and digital
            services, all in one place.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
            <Link
              to="/services"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-500 transition-colors sm:flex-none"
            >
              Explore Services
            </Link>
            <Link
              to="/track-application"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition-colors sm:flex-none"
            >
              Track Application
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}