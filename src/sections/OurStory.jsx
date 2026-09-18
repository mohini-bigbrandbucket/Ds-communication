import { Building2 } from "lucide-react";
import Reveal from "../components/Reveal";
import Customer from "../assets/Customer.jpg";

export default function OurStory() {
  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative mx-auto w-full max-w-lg">
            <div
              aria-hidden="true"
              className="absolute -inset-6 -z-10 rounded-[3rem] bg-brand-100/60 blur-2xl"
            />
            <div className="overflow-hidden rounded-3xl bg-white p-4 shadow-xl ring-1 ring-line sm:p-6">
              <img
                src={Customer}
                alt="Our team helping a customer"
                className="mx-auto h-auto max-h-[320px] w-auto object-contain"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-brand-50 px-4 py-1.5 text-xs font-semibold text-brand-600">
            <Building2 className="size-3.5" />
            HOW WE STARTED
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-navy-900 sm:text-4xl">
            Built to remove the friction from paperwork
          </h2>

          <p className="mt-4 text-base leading-relaxed text-ink-600">
            We started this platform because applying for essential documents
            shouldn&apos;t mean standing in long queues or getting lost in
            confusing forms. What began as a simple PAN Card assistance
            service has grown into a full platform covering a wide range of
            government and digital services.
          </p>

          <p className="mt-4 text-base leading-relaxed text-ink-600">
            Today, our team works behind the scenes so every application is
            tracked, every document is verified, and every customer gets a
            straight answer — fast.
          </p>
        </Reveal>
      </div>
    </section>
  );
}