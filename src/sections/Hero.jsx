import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImage from "../assets/hero1.jpeg";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[100dvh] items-center overflow-hidden bg-navy-900 bg-cover bg-center bg-no-repeat sm:min-h-[calc(100vh-4rem)]"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* readability overlay */}
      <div className="absolute inset-0 bg-navy-950/80 sm:bg-gradient-to-r sm:from-navy-950/90 sm:via-navy-950/70 sm:to-navy-950/20" />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-md sm:max-w-xl lg:max-w-2xl">
          <p className="text-xs text-white font-medium text-brand-300 sm:text-sm">
            Your Trusted Digital Service Partner
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-[1.2] tracking-tight text-white sm:mt-4 sm:text-4xl sm:leading-[1.1] md:text-5xl lg:text-6xl">
            Government &amp; Digital Services, Made Simple.
          </h1>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70 sm:mt-5 sm:max-w-lg sm:text-base lg:max-w-xl">
            Apply online, upload documents, pay securely, and track every
            application — government, business, tax, insurance and digital
            services, all in one place.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
            <Link
              to="/services"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-500 sm:w-auto sm:flex-1 sm:py-2.5 md:flex-none"
            >
              Explore Services
            </Link>
            <Link
              to="/track-application"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:w-auto sm:flex-1 sm:py-2.5 md:flex-none"
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