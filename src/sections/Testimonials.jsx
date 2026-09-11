const reviews = [
  {
    initials: "AS",
    name: "Aisha S.",
    role: "Verified Buyer",
    rating: 5,
    quote:
      "This completely simplified our workflow. Setup took minutes and the results were immediate.",
  },
  {
    initials: "RK",
    name: "Ravi K.",
    role: "Small Business Owner",
    rating: 5,
    quote:
      "Great value for the price. Support was quick to respond whenever I had questions.",
  },
  {
    initials: "MP",
    name: "Maria P.",
    role: "Verified Buyer",
    rating: 4,
    quote:
      "Solid product overall. A couple of minor rough edges, but nothing that outweighs the benefits.",
  },
  {
    initials: "SJ",
    name: "Sam J.",
    role: "Team Lead",
    rating: 5,
    quote:
      "Our team adopted it in a single afternoon. It just works the way you'd expect it to.",
  },
  {
    initials: "PK",
    name: "Priya K.",
    role: "Verified Buyer",
    rating: 5,
    quote:
      "Exactly what we needed. Clean, fast, and reliable — highly recommend it.",
  },
  {
    initials: "NB",
    name: "Noah B.",
    role: "Freelancer",
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
          className={`size-3.5 ${i < count ? "fill-brand-500" : "fill-line"}`}
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
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-lg font-bold text-navy-900">
            What Our Customers Say
          </h2>
          <p className="text-xs text-ink-400">
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.initials}
              className="flex flex-col gap-3 rounded-xl bg-white border border-line px-5 py-6"
            >
              <Stars count={review.rating} />
              <p className="text-sm text-ink-600 leading-relaxed">
                "{review.quote}"
              </p>
              <div className="mt-auto flex items-center gap-3 pt-2">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-semibold text-brand-600">
                  {review.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy-900">
                    {review.name}
                  </p>
                  <p className="text-xs text-ink-400">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}