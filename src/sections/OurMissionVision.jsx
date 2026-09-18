import { Eye, Target } from "lucide-react";
import Reveal from "../components/Reveal";

export default function OurMissionVision() {
  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Vision card */}
          <Reveal>
            <div className="group h-full rounded-3xl bg-white p-8 shadow-sm ring-1 ring-line transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:ring-brand-200">
              <span className="inline-flex size-14 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white">
                <Eye className="size-6" />
              </span>
              <h3 className="mt-6 text-2xl font-bold text-navy-900">
                Our Vision
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink-600">
                Every citizen should be empowered to understand their rights
                and responsibilities. A transparent, accessible service
                ecosystem will help individuals and businesses avoid delays
                and confusion. Innovation and technology shall fuel the
                mission of zero friction and hundred percent clarity.
              </p>
            </div>
          </Reveal>

          {/* Mission card */}
          <Reveal delay={150}>
            <div className="group h-full rounded-3xl bg-white p-8 shadow-sm ring-1 ring-line transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:ring-brand-200">
              <span className="inline-flex size-14 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white">
                <Target className="size-6" />
              </span>
              <h3 className="mt-6 text-2xl font-bold text-navy-900">
                Our Mission
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink-600">
                Powered by smart technology, we provide 24/7 authentic and
                confidential support, with real document review and
                processing accuracy. Everything is affordable and available
                on demand, backed by real people and reliable systems.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}