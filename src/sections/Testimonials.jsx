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
          className={`size-4 ${i < count ? "fill-amber-400" : "fill-line"}`}
        >
          <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.9l-5.2 2.61.99-5.79-4.21-4.1 5.82-.85z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-brand-50/60 border-t border-line">
      <div className="mx-auto max-w-7xl px-6 section-pad">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-lg font-bold text-navy-900">
            What Our Customers Say
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.initials}
              className="flex flex-col gap-4 rounded-2xl bg-white border border-line/70 px-6 py-7 shadow-sm"
            >
              <Stars count={review.rating} />

              <p className="text-[15px] italic leading-relaxed text-navy-900">
                &ldquo;{review.quote}&rdquo;
              </p>

              <div className="mt-auto flex items-center gap-3 pt-2">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-navy-900 text-xs font-semibold text-white">
                  {review.initials}
                </span>
                <div>
                  <p className="text-sm font-bold text-navy-900">
                    {review.name}
                  </p>
                  <p className="flex items-center gap-1 text-xs font-medium text-emerald-600">
                    <CheckCircle2 className="size-3.5" />
                    Verified Google Review
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}