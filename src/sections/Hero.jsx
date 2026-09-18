import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "../assets/hero.png";

const STATIC_PART = "Government";
const TYPED_PART = " & Digital Services, Made Simple.";

function useTypewriter(text, { typeSpeed = 120, deleteSpeed = 60, pauseAfterType = 1800, pauseAfterDelete = 500 } = {}) {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState("typing"); // "typing" | "pausedTyped" | "deleting" | "pausedDeleted"

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setCount(text.length);
      setPhase("pausedTyped");
      return;
    }

    let timer;

    if (phase === "typing") {
      if (count < text.length) {
        timer = setTimeout(() => setCount((c) => c + 1), typeSpeed);
      } else {
        timer = setTimeout(() => setPhase("pausedTyped"), pauseAfterType);
      }
    } else if (phase === "pausedTyped") {
      timer = setTimeout(() => setPhase("deleting"), pauseAfterType);
    } else if (phase === "deleting") {
      if (count > 0) {
        timer = setTimeout(() => setCount((c) => c - 1), deleteSpeed);
      } else {
        timer = setTimeout(() => setPhase("pausedDeleted"), pauseAfterDelete);
      }
    } else if (phase === "pausedDeleted") {
      timer = setTimeout(() => setPhase("typing"), pauseAfterDelete);
    }

    return () => clearTimeout(timer);
  }, [phase, count, text, typeSpeed, deleteSpeed, pauseAfterType, pauseAfterDelete]);

  return { typed: text.slice(0, count), typing: phase === "typing" || phase === "deleting" };
}

function GoogleGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="size-5">
      <path fill="#4285F4" d="M23.52 12.27c0-.85-.08-1.66-.22-2.45H12v4.64h6.47a5.53 5.53 0 0 1-2.4 3.63v3h3.88c2.27-2.09 3.57-5.17 3.57-8.82Z" />
      <path fill="#34A853" d="M12 24c3.24 0 5.96-1.07 7.95-2.91l-3.88-3c-1.08.72-2.46 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.27v3.1A12 12 0 0 0 12 24Z" />
      <path fill="#FBBC05" d="M5.27 14.28A7.2 7.2 0 0 1 4.89 12c0-.79.14-1.56.38-2.28v-3.1H1.27A12 12 0 0 0 0 12c0 1.94.46 3.77 1.27 5.38l4-3.1Z" />
      <path fill="#EA4335" d="M12 4.75c1.76 0 3.35.61 4.6 1.8l3.44-3.44C17.95 1.19 15.24 0 12 0A12 12 0 0 0 1.27 6.62l4 3.1C6.22 6.86 8.87 4.75 12 4.75Z" />
    </svg>
  );
}

const REVIEWER_COLORS = ["bg-brand-400", "bg-sky-400", "bg-emerald-400"];

// Shared entrance treatment: hidden state → revealed state, staggered per
// element via `delay`. One orchestrated reveal on load, nothing looping.
function reveal(mounted, delay = "") {
  return `transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${delay} ${
    mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
  }`;
}

export default function Hero() {
  const { typed, typing } = useTypewriter(TYPED_PART);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="relative flex min-h-[380px] items-center overflow-hidden bg-navy-900 sm:min-h-[520px] lg:min-h-[85vh]">
      {/* Background photo: slow continuous zoom-out from load, purely decorative */}
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[6000ms] ease-out motion-reduce:transition-none motion-reduce:scale-100 ${
          mounted ? "scale-100" : "scale-110"
        }`}
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* readability overlay */}
      <div className="absolute inset-0 bg-navy-950/70 sm:bg-navy-950/60" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-4 pb-10 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto flex max-w-md flex-col items-center text-center sm:max-w-xl lg:max-w-2xl">
          {/* Google rating badge */}
          <div
            className={`inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 backdrop-blur-sm sm:px-4 sm:py-2 ${reveal(mounted)}`}
          >
            <GoogleGlyph />
            <div className="flex -space-x-2">
              {REVIEWER_COLORS.map((color, i) => (
                <span
                  key={i}
                  className={`size-5 rounded-full border-2 border-navy-900 ${color} sm:size-6`}
                />
              ))}
            </div>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="size-3 fill-amber-400 text-amber-400 sm:size-3.5"
                />
              ))}
            </div>
            <span className="text-xs font-semibold text-white sm:text-sm">4.6/5</span>
            <span className="text-xs text-white/70 sm:text-sm">(10k+ Reviews)</span>
          </div>

          <h1
            className={`mt-4 min-h-[3.6em] text-[28px] font-bold leading-[1.2] tracking-tight text-white sm:mt-6 sm:min-h-[2.3em] sm:text-4xl sm:leading-[1.15] md:text-5xl lg:text-6xl [text-shadow:0_2px_12px_rgba(0,0,0,0.5)] ${reveal(mounted, "delay-150")}`}
          >
            {STATIC_PART}
            {typed}
            <span
              aria-hidden="true"
              className={`ml-1 inline-block h-[0.9em] w-[3px] translate-y-[0.08em] bg-sky-300 align-middle ${
                !typing ? "animate-pulse" : ""
              }`}
            />
            <span className="sr-only">{STATIC_PART}{TYPED_PART}</span>
          </h1>

          <p
            className={`mt-4 flex max-w-md flex-wrap items-center justify-center gap-x-1.5 gap-y-2 text-sm leading-relaxed text-white/90 sm:mt-6 sm:max-w-lg sm:text-base lg:max-w-xl [text-shadow:0_1px_8px_rgba(0,0,0,0.5)] ${reveal(mounted, "delay-300")}`}
          >
            <span>Apply online, upload documents, and track every application, the</span>
            <span className="inline-flex items-center rounded-full bg-brand-600 px-3 py-1 text-xs font-bold text-white sm:text-sm">
              100% Online
            </span>
            <span>way. Trusted by thousands. Backed by real experts.</span>
          </p>

          <div
            className={`mt-5 flex flex-row flex-wrap justify-center gap-2 sm:mt-8 sm:gap-3 ${reveal(mounted, "delay-500")}`}
          >
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-brand-600 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-brand-500 sm:px-6 sm:py-3 sm:text-sm"
            >
              Explore Services
            </Link>

            <Link
              to="/track-application"
              className="group inline-flex items-center justify-center gap-1.5 rounded-lg border border-white/30 bg-white/10 px-4 py-2.5 text-xs font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:px-6 sm:py-3 sm:text-sm"
            >
              Track Application
              <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1 sm:size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}