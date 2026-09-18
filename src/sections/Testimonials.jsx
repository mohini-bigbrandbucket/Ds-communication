import { useEffect, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";

const reviews = [
  {
    initials: "AS",
    name: "Aisha S.",
    rating: 5,
    quote:
      "This completely simplified our workflow. Setup took minutes and the results were immediate.",
  },
  {
    initials: "RK",
    name: "Ravi K.",
    rating: 5,
    quote:
      "Great value for the price. Support was quick to respond whenever I had questions.",
  },
  {
    initials: "MP",
    name: "Maria P.",
    rating: 4,
    quote:
      "Solid product overall. A couple of minor rough edges, but nothing that outweighs the benefits.",
  },
  {
    initials: "SJ",
    name: "Sam J.",
    rating: 5,
    quote:
      "Our team adopted it in a single afternoon. It just works the way you'd expect it to.",
  },
  {
    initials: "PK",
    name: "Priya K.",
    rating: 5,
    quote:
      "Exactly what we needed. Clean, fast, and reliable — highly recommend it.",
  },
  {
    initials: "NB",
    name: "Noah B.",
    rating: 4,
    quote:
      "Does what it promises. Pricing is fair and onboarding was painless.",
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`size-3.5 ${i < count ? "fill-amber-400" : "fill-line"}`}
        >
          <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.9l-5.2 2.61.99-5.79-4.21-4.1 5.82-.85z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review }) {
  return (
    <div className="flex h-full flex-col gap-3 rounded-2xl border border-line bg-white px-6 py-6">
      <Stars count={review.rating} />

      <p className="text-sm leading-relaxed text-navy-900">
        &ldquo;{review.quote}&rdquo;
      </p>

      <div className="mt-auto flex items-center gap-3 pt-3">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-navy-900 text-xs font-semibold text-white">
          {review.initials}
        </span>
        <div>
          <p className="text-sm font-bold text-navy-900">{review.name}</p>
          <p className="flex items-center gap-1 text-xs font-medium text-emerald-600">
            <CheckCircle2 className="size-3.5" />
            Verified Google Review
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [perView, setPerView] = useState(3);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Responsive cards-per-view: 1 on mobile, 2 on tablet, 3 on desktop
  useEffect(() => {
    const updatePerView = () => {
      if (window.innerWidth < 640) setPerView(1);
      else if (window.innerWidth < 1024) setPerView(2);
      else setPerView(3);
    };
    updatePerView();
    window.addEventListener("resize", updatePerView);
    return () => window.removeEventListener("resize", updatePerView);
  }, []);

  // Extra copies at the end so the track can slide seamlessly, then jump back
  const slides = [...reviews, ...reviews.slice(0, perView)];

  const trackRef = useRef(null);
  const [instant, setInstant] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => i + 1);
    }, 3500);
    return () => clearInterval(id);
  }, [paused]);

  useEffect(() => {
    if (index === reviews.length) {
      // once the clone slide has fully scrolled into view, snap back silently
      const timeout = setTimeout(() => {
        setInstant(true);
        setIndex(0);
      }, 600); // matches transition duration below
      return () => clearTimeout(timeout);
    }
    if (instant) {
      const raf = requestAnimationFrame(() => setInstant(false));
      return () => cancelAnimationFrame(raf);
    }
  }, [index, instant]);

  return (
    <section className="border-t border-line bg-white">
      <div className="mx-auto max-w-7xl px-6 section-pad">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold leading-tight text-navy-900 sm:text-[28px]">
            50,000+ Founders Across India Trust RegisterKaro
          </h2>
          <p className="mt-3 text-sm text-ink-600 sm:text-base">
            Follow the example of genuine Google reviews before making your decision.
          </p>
        </div>

        <div
          className="mt-10 overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            ref={trackRef}
            className={`flex ${instant ? "" : "transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)]"}`}
            style={{
              transform: `translateX(-${(index * 100) / perView}%)`,
            }}
          >
            {slides.map((review, i) => (
              <div
                key={`${review.initials}-${i}`}
                className="shrink-0 px-2.5"
                style={{ width: `${100 / perView}%` }}
              >
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>

        {/* dots */}
        <div className="mt-6 flex justify-center gap-1.5">
          {reviews.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => {
                setInstant(false);
                setIndex(i);
              }}
              className={`h-1.5 rounded-full transition-all ${
                index % reviews.length === i
                  ? "w-6 bg-brand-600"
                  : "w-1.5 bg-brand-600/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}