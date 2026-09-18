import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Monitor,
  Headphones,
  UserCircle2,
  Users,
} from "lucide-react";

const EASE = "ease-[cubic-bezier(0.22,1,0.36,1)]";

function WhatsAppIcon({ className, strokeWidth = 1.75 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 21l1.3-4.4A8.5 8.5 0 1 1 8.6 19.6Z" />
      <path d="M8.3 8.6c-.2.5-.3 1.3.2 2.3a7 7 0 0 0 4.6 3.6c1 .3 1.7.1 2.2-.2.4-.2.7-.7.8-1.1l.1-.5-2-.9-.5.6c-.1.2-.4.2-.6.1a5 5 0 0 1-2.3-2.1c-.1-.2-.1-.4.1-.6l.5-.5-.8-2-.5-.1c-.4 0-1 .1-1.3.4Z" />
    </svg>
  );
}

const features = [
  {
    icon: ShieldCheck,
    title: "Secure Documents",
    description: "Your documents are encrypted and handled securely.",
  },
  {
    icon: Monitor,
    title: "Online Application",
    description: "Apply online from anywhere, anytime in minutes.",
  },
  {
    icon: Headphones,
    title: "Detailed Tracking",
    description: "Track every step of your application in real-time.",
  },
  {
    icon: UserCircle2,
    title: "Clear Assistance Fees",
    description:
      "Service fees shown separately from government charges, where applicable.",
  },
  {
    icon: WhatsAppIcon,
    title: "WhatsApp Support",
    description: "Get quick updates and support on WhatsApp.",
    iconClass: "text-[#25D366]",
  },
  {
    icon: Users,
    title: "Expert Assistance",
    description: "Experienced team to assist you at every step.",
  },
];

// Fires once when the section scrolls into view — same reveal used across
// the other sections, so the whole page shares one consistent motion language.
function useInView(options) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return;
    }
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, options);

    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
}

function reveal(visible, delayMs = 0) {
  return {
    className: `transition-all duration-[600ms] ${EASE} motion-reduce:transition-none ${
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
    }`,
    style: { transitionDelay: visible ? `${delayMs}ms` : "0ms" },
  };
}

export default function WhyUs() {
  const [sectionRef, visible] = useInView({ threshold: 0.15 });
  const left = reveal(visible);

  return (
    <section ref={sectionRef} className="bg-navy-900">
      <div className="mx-auto max-w-7xl px-6 section-pad">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.4fr] lg:items-center">
          <div style={left.style} className={left.className}>
            <p className="text-base font-semibold text-brand-400">
              Why DS Communication?
            </p>
            <h2 className="mt-2 text-2xl font-bold leading-tight text-white sm:text-[28px]">
              A Simpler, Safer Way to Get Things Done
            </h2>
            <p className="mt-3 max-w-sm text-base leading-relaxed text-white/60">
              From document upload to final delivery, we help you stay
              informed at every step.
            </p>
            <Link
              to="/services"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand-500 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-400 transition-colors"
            >
              Explore Our Services
            </Link>
          </div>

          <div className="grid gap-px overflow-hidden rounded-xl bg-white/10 sm:grid-cols-3">
            {features.map((f, i) => {
              const r = reveal(visible, 200 + i * 90);
              return (
                <div
                  key={f.title}
                  style={r.style}
                  className={`group bg-navy-900 p-5 transition-colors duration-500 hover:bg-white/[0.04] ${r.className}`}
                >
                  <f.icon
                    className={`size-7 transition-transform duration-500 ${EASE} group-hover:scale-110 ${f.iconClass ?? "text-brand-400"}`}
                    strokeWidth={1.75}
                  />
                  <h3 className="mt-3 text-base font-semibold text-white">
                    {f.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/60">
                    {f.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}