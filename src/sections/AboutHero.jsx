import { Sparkles, Users } from "lucide-react";
import Reveal from "../components/Reveal";
import team from "../assets/team.avif";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-brand-50 to-brand-100">
      {/* ambient background glow, purely decorative */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 size-72 rounded-full bg-brand-200/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 bottom-0 size-96 rounded-full bg-brand-300/30 blur-3xl"
      />

      <div className="relative z-20 mx-auto grid max-w-7xl items-center gap-8 px-6 pt-16 pb-24 sm:pt-20 sm:pb-32 lg:grid-cols-[1fr_1.2fr] lg:gap-12 lg:pt-16 lg:pb-40">
        {/* Left: copy */}
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-xs font-semibold text-brand-600 shadow-sm">
            <Sparkles className="size-3.5" />
            OUR STORY
          </span>

          <h1 className="mt-4 text-5xl font-bold leading-[1.05] tracking-tight text-navy-900 sm:text-6xl lg:text-[3.75rem]">
            About <span className="text-brand-600">Us</span>
          </h1>

          <p className="mt-3 text-xl font-semibold text-navy-800">
            Simple, transparent, reliable
          </p>
          <p className="mt-2 max-w-md text-base leading-relaxed text-ink-600">
            We&apos;re on a mission to make government and digital services
            easy for everyone, everywhere.
          </p>

          <div className="mt-4 h-1 w-16 rounded-full bg-brand-600" />
        </Reveal>

        {/* Right: illustration */}
        <Reveal delay={150}>
          <div className="relative mx-auto w-full max-w-2xl">
            {/* pulsing glow blobs behind the card, brand-blue to match the theme */}
            <div
              aria-hidden="true"
              className="animate-glow-pulse absolute -inset-8 -z-10 rounded-[3rem] bg-brand-300/40 blur-2xl sm:-inset-10"
            />
            <div
              aria-hidden="true"
              className="animate-glow-pulse absolute -bottom-10 -right-10 -z-10 size-48 rounded-full bg-brand-400/30 blur-3xl [animation-delay:1.2s]"
            />

            {/* gently floating card */}
            <div className="animate-float-y flex items-center justify-center overflow-hidden rounded-3xl bg-white p-4 shadow-2xl ring-1 ring-line sm:p-6">
              <img
                src={team}
                alt="Our team"
                className="mx-auto h-auto max-h-[300px] w-auto object-contain sm:max-h-[340px]"
              />
            </div>

            {/* decorative sparkles */}
            <Sparkles
              aria-hidden="true"
              className="animate-sparkle absolute -left-3 top-6 size-6 text-brand-400 sm:-left-6"
            />
            <Sparkles
              aria-hidden="true"
              className="animate-sparkle absolute right-10 -top-4 size-4 text-brand-300 [animation-delay:1.1s]"
            />

            {/* floating badge */}
            <div className="animate-pop-in absolute -bottom-6 -right-4 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-lg ring-1 ring-line sm:-right-8">
              <span className="flex size-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                <Users className="size-4" />
              </span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-400">
                  Trusted By
                </p>
                <p className="text-sm font-bold text-navy-900">5M+ Users</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* bottom wave divider */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-10 leading-[0]">
        <svg
          viewBox="0 0 1440 120"
          className="h-14 w-full sm:h-20 lg:h-28"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            className="text-white"
            d="M0,55 C480,-10 960,150 1440,40 L1440,120 L0,120 Z"
          />
        </svg>
      </div>
    </section>
  );
}