import { Link } from "react-router-dom";
import {
  Lock,
  Globe,
  Activity,
  FileCheck2,
  MessageCircle,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Lock,
    title: "Secure Documents",
    description: "Your documents are encrypted and handled securely.",
  },
  {
    icon: Globe,
    title: "Online Application",
    description: "Apply online from anywhere, anytime in minutes.",
  },
  {
    icon: Activity,
    title: "Detailed Tracking",
    description: "Track every step of your application in real-time.",
  },
  {
    icon: FileCheck2,
    title: "Clear Assistance Fees",
    description: "Service fees shown separately from government charges, where applicable.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Support",
    description: "Get quick updates and support on WhatsApp.",
  },
  {
    icon: Users,
    title: "Expert Assistance",
    description: "Experienced team to assist you at every step.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-navy-900">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.4fr] lg:items-center">
          <div>
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
            {features.map((f) => (
              <div key={f.title} className="bg-navy-900 p-5">
                <span className="flex size-10 items-center justify-center rounded-lg bg-white/5 text-brand-400">
                  <f.icon className="size-5" />
                </span>
                <h3 className="mt-3 text-base font-semibold text-white">
                  {f.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-white/60">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
