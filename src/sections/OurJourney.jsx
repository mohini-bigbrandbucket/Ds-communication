import Reveal from "../components/Reveal";

const MILESTONES = [
  {
    year: "2018",
    title: "The Beginning",
    description:
      "Started as a small PAN Card assistance service, helping our first few hundred customers.",
  },
  {
    year: "2020",
    title: "Going Digital",
    description:
      "Launched our online application tracking system, cutting processing confusion for thousands.",
  },
  {
    year: "2022",
    title: "Expanding Services",
    description:
      "Grew beyond PAN Cards into a full suite of government and digital document services.",
  },
  {
    year: "2024",
    title: "Crossing Milestones",
    description:
      "Reached 5M+ happy customers, backed by a dedicated 24/7 support team.",
  },
  {
    year: "2026",
    title: "Where We Are Today",
    description:
      "A trusted platform serving thousands daily, with new services added every year.",
  },
];

export default function OurJourney() {
  return (
    <section className="relative bg-brand-50/40 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full border border-line bg-white px-4 py-1.5 text-xs font-semibold text-brand-600">
              SINCE 2018
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Our Journey
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink-600">
              From a small idea to a platform trusted by millions.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-14">
          {/* vertical line */}
          <div
            aria-hidden="true"
            className="absolute left-4 top-0 h-full w-px bg-line sm:left-1/2 sm:-translate-x-1/2"
          />

          <div className="space-y-10">
            {MILESTONES.map((milestone, i) => {
              const isLeft = i % 2 === 0;
              return (
                <Reveal key={milestone.year} delay={i * 100}>
                  <div
                    className={`relative flex flex-col gap-4 pl-12 sm:grid sm:grid-cols-2 sm:gap-8 sm:pl-0 ${
                      isLeft ? "" : "sm:[&>*:first-child]:order-2"
                    }`}
                  >
                    {/* dot on the line */}
                    <span
                      aria-hidden="true"
                      className="absolute left-4 top-1 size-3 -translate-x-1/2 rounded-full border-2 border-white bg-brand-600 shadow ring-2 ring-brand-200 sm:left-1/2"
                    />

                    <div
                      className={`rounded-2xl bg-white p-6 shadow-sm ring-1 ring-line ${
                        isLeft ? "sm:text-right" : ""
                      }`}
                    >
                      <span className="text-sm font-bold text-brand-600">
                        {milestone.year}
                      </span>
                      <h3 className="mt-1 text-lg font-bold text-navy-900">
                        {milestone.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-600">
                        {milestone.description}
                      </p>
                    </div>
                    <div />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}