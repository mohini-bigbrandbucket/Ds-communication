import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck } from "lucide-react";
import heroImage from "../assets/hero1.jpeg";

const STATIC_PART = "Government";
const TYPED_PART = " & Digital Services, Made Simple.";

function useTypewriter(text, speed = 120, startDelay = 300) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setCount(text.length);
      setDone(true);
      return;
    }

    let i = 0;
    let interval;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setCount(i);
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return { typed: text.slice(0, count), done };
}

export default function Hero() {
  const { typed, done } = useTypewriter(TYPED_PART);

  return (
    <section
      className="relative flex min-h-[380px] items-center overflow-hidden bg-navy-900 bg-cover bg-center bg-no-repeat sm:min-h-[520px] lg:min-h-[85vh] lg:items-start"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* readability overlay */}
      <div className="absolute inset-0 bg-navy-950/70 sm:bg-gradient-to-r sm:from-navy-950/70 sm:via-navy-950/40 sm:to-transparent" />
      <div className="relative mx-auto w-full max-w-7xl px-4 pt-4 pb-10 sm:px-6 sm:py-20 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="max-w-md sm:max-w-xl lg:max-w-2xl">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-1.5 rounded-full border border-brand-400/30 bg-brand-400/10 px-3 py-1 backdrop-blur-sm sm:gap-2 sm:px-3 sm:py-1.5">
            <ShieldCheck className="size-3 shrink-0 text-sky-300 sm:size-4" />
            <p className="text-[10px] font-semibold uppercase leading-tight tracking-wide text-sky-300 sm:text-xs sm:tracking-wider md:text-sm">
              Your Trusted Digital Service Partner
            </p>
          </div>

          <h1 className="mt-3 min-h-[3.6em] text-[28px] font-bold leading-[1.2] tracking-tight text-white sm:mt-4 sm:min-h-[2.3em] sm:text-4xl sm:leading-[1.15] md:text-5xl lg:text-6xl [text-shadow:0_2px_12px_rgba(0,0,0,0.5)]">
            {STATIC_PART}
            {typed}
            <span
              aria-hidden="true"
              className={`ml-1 inline-block h-[0.9em] w-[3px] translate-y-[0.08em] bg-sky-300 align-middle ${
                done ? "animate-pulse" : ""
              }`}
            />
            <span className="sr-only">{STATIC_PART}{TYPED_PART}</span>
          </h1>

          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/90 sm:mt-5 sm:max-w-lg sm:text-base lg:max-w-xl [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]">
            Apply online, upload documents, pay securely, and track every
            application — government, business, tax, insurance and digital
            services, all in one place.
          </p>

          <div className="mt-5 flex flex-row flex-wrap gap-2 sm:mt-8 sm:gap-3">
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-brand-600 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-brand-500 sm:px-6 sm:py-3 sm:text-sm"
            >
              Explore Services
            </Link>

            <Link
              to="/track-application"
              className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-white/30 bg-white/10 px-4 py-2.5 text-xs font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:px-6 sm:py-3 sm:text-sm"
            >
              Track Application
              <ArrowRight className="size-3.5 sm:size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}