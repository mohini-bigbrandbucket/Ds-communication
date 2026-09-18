import Reveal from "../components/Reveal";

export default function AboutIntro() {
  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <h2 className="text-center text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            About <span className="text-brand-600">Us</span>
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 space-y-6 text-base leading-relaxed text-ink-600 sm:text-[17px]">
            <p>
              Our vision is to make government and digital services truly
              accessible — neutral, affordable, and available to every
              citizen. We are building a platform where applying for
              essential documents is simple, transparent, and stress-free.
            </p>

            <p>
              Every citizen should be empowered to understand their rights
              and the process behind every application they file. A
              transparent service ecosystem helps individuals and businesses
              avoid delays, confusion, and unnecessary rejections. Innovation
              and technology fuel our mission of zero friction and hundred
              percent clarity.
            </p>

            <p>
              Powered by smart technology, we provide 24/7 authentic and
              confidential support, with real document review and accurate
              processing. Everything is offered at an affordable cost and
              available on demand, backed by real people and reliable
              systems.
            </p>

            <p>
              We are striving to bring down delays and confusion across the
              country to zero, helping citizens move faster and with more
              confidence. As a platform, we aim to make every process more
              transparent and every applicant more informed about their
              rights.
            </p>

            <p className="font-semibold text-navy-800">
              A made-in-India, made-for-India platform, we are a team of
              passionate professionals, engineers, and domain experts
              building the future of accessible digital services in India.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}