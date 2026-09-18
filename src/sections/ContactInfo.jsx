import { useEffect, useState } from "react";
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";

const CARDS = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["Plot No. 76 D, Udyog Vihar", "Phase-4, Gurgaon, Haryana", "- 122001, India"],
    action: {
      label: "Get Directions",
      href: "https://maps.google.com/?q=Plot+No.+76+D,+Udyog+Vihar+Phase-4,+Gurgaon,+Haryana+122001",
    },
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+91-8448445049", "+91-124-1234567"],
    action: { label: "Call Now", href: "tel:+918448445049" },
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["info@dscommunication.com", "support@dscommunication.com"],
    action: { label: "Send Email", href: "mailto:info@dscommunication.com" },
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Monday - Friday", "(10:00 AM - 7:30 PM)", "Saturday - Sunday (Closed)"],
    action: null,
  },
];

// Small, genuinely useful touch for a contact page: a live "open / closed"
// indicator computed from the working hours above (Mon–Fri, 10:00–19:30).
function useIsOpenNow() {
  const [isOpen, setIsOpen] = useState(null);

  useEffect(() => {
    const check = () => {
      const now = new Date();
      const day = now.getDay(); // 0 = Sun ... 6 = Sat
      const minutes = now.getHours() * 60 + now.getMinutes();
      const isWeekday = day >= 1 && day <= 5;
      const withinHours = minutes >= 10 * 60 && minutes <= 19 * 60 + 30;
      setIsOpen(isWeekday && withinHours);
    };
    check();
    const id = setInterval(check, 60 * 1000);
    return () => clearInterval(id);
  }, []);

  return isOpen;
}

export default function ContactInfo() {
  const isOpen = useIsOpenNow();

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 section-pad">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map(({ icon: Icon, title, lines, action }, i) => (
            <Reveal key={title} delay={i * 100}>
              <div className="group relative flex h-full flex-col items-center overflow-hidden rounded-2xl border border-line bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-100">
                {/* top accent bar that sweeps in on hover */}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-400 via-brand-600 to-brand-400 transition-transform duration-500 group-hover:scale-x-100"
                />

                {/* icon with pulsing ring + rotate/scale pop on hover */}
                <span className="relative flex size-14 items-center justify-center">
                  <span className="absolute inset-0 scale-100 rounded-full bg-brand-50 transition-transform duration-300 group-hover:scale-110" />
                  <span className="absolute inset-0 scale-100 animate-glow-pulse rounded-full bg-brand-200/0 group-hover:bg-brand-200/60" />
                  <span className="relative flex size-12 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white">
                    <Icon className="size-5" />
                  </span>
                </span>

                <h3 className="mt-4 flex items-center gap-1.5 text-base font-semibold text-navy-900">
                  {title}
                  {title === "Working Hours" && isOpen !== null && (
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                        isOpen
                          ? "bg-emerald-50 text-emerald-600"
                          : "bg-ink-400/10 text-ink-500"
                      }`}
                    >
                      <span
                        className={`size-1.5 rounded-full ${
                          isOpen ? "animate-pulse bg-emerald-500" : "bg-ink-400"
                        }`}
                      />
                      {isOpen ? "Open now" : "Closed"}
                    </span>
                  )}
                </h3>

                <div className="mt-2 space-y-0.5 text-sm text-ink-600">
                  {lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>

                {action && (
                  <a
                    href={action.href}
                    target={action.label === "Get Directions" ? "_blank" : undefined}
                    rel={action.label === "Get Directions" ? "noreferrer" : undefined}
                    className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand-600 opacity-0 transition-all duration-300 group-hover:opacity-100 hover:text-brand-500"
                  >
                    {action.label}
                    <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}