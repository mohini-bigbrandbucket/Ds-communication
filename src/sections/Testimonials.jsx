const initials = ["AS", "RK", "MP", "SJ", "PK", "NB"];

export default function Testimonials() {
  return (
    <section className="bg-brand-50/60 border-t border-line">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-lg font-bold text-navy-900">
            What Our Customers Say
          </h2>
          <p className="text-xs text-ink-400">
            Use verified customer reviews with permission at launch.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-4 sm:grid-cols-6">
          {initials.map((initial) => (
            <div
              key={initial}
              className="flex flex-col items-center gap-3 rounded-xl bg-white border border-line px-3 py-6"
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-brand-100 text-sm font-semibold text-brand-600">
                {initial}
              </span>
              <div className="h-2 w-16 rounded-full bg-line" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
