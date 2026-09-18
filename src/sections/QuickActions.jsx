const stats = [
  { value: "350+", label: "Verified CA's" },
  { value: "500+", label: "Legal Professionals" },
  { value: "5 Lakh+", label: "Business Served" },
  { value: "1 Lakh+", label: "Company Registered" },
];

export default function NumbersJourney() {
  return (
    <section className="relative z-10 bg-navy-950">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <h2 className="text-xl font-extrabold text-white sm:text-2xl">
          The Numbers Behind the Journey
        </h2>

        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 sm:mt-10 sm:grid-cols-4 sm:gap-x-0">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col gap-1.5 sm:px-6 ${
                i !== 0 ? "sm:border-l sm:border-white/10" : ""
              }`}
            >
              <span className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                {stat.value}
              </span>
              <span className="text-xs font-medium leading-tight text-brand-400 sm:text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}