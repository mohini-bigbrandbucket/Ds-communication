import { ShieldCheck, Zap, Users, Handshake } from "lucide-react";
import Reveal from "../components/Reveal";

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Trust & Security",
    description:
      "Your documents and data are handled with strict privacy and security standards at every step.",
  },
  {
    icon: Zap,
    title: "Speed & Simplicity",
    description:
      "No jargon, no unnecessary steps — just a clear path from application to approval.",
  },
  {
    icon: Users,
    title: "People First",
    description:
      "Real support from real people, whenever you need help understanding your application.",
  },
  {
    icon: Handshake,
    title: "Reliability",
    description:
      "Thousands of applications processed with consistent accuracy and on-time delivery.",
  },
];

export default function OurValues() {
  return (
    <section className="relative bg-brand-50/40 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full border border-line bg-white px-4 py-1.5 text-xs font-semibold text-brand-600">
              WHAT WE STAND FOR
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink-600">
              The principles that guide how we build and support our services.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value, i) => (
            <Reveal key={value.title} delay={i * 100}>
              <div className="h-full rounded-2xl bg-white p-6 shadow-sm ring-1 ring-line transition-shadow hover:shadow-md">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-100 text-brand-600">
                  <value.icon className="size-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-navy-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {value.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}