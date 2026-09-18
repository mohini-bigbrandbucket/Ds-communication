import Reveal from "../components/Reveal";

const STATS = [
  { value: "5M+", label: "Happy Customers" },
  { value: "50+", label: "Services Offered" },
  { value: "24/7", label: "Support Availability" },
  { value: "4.6/5", label: "Average Rating" },
];

export default function AboutStats() {
  return (
    <section className="relative bg-navy-900 py-14 sm:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 sm:grid-cols-4">
        {STATS.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 100}>
            <div className="text-center">
              <p className="text-3xl font-bold text-white sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-white/60 sm:text-sm">
                {stat.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}