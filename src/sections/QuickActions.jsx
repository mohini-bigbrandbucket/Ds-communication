import {
  Plus,
  Smartphone,
  Lock,
  Radar,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: Plus,
    title: "50+ Services",
    subtitle: "All in one place",
  },
  {
    icon: Smartphone,
    title: "100% Online Process",
    subtitle: "Quick & hassle-free",
  },
  {
    icon: Lock,
    title: "Secure Payments",
    subtitle: "Your data is protected",
  },
  {
    icon: Radar,
    title: "Application Tracking",
    subtitle: "Real-time updates",
  },
  {
    icon: Headphones,
    title: "Expert Assistance",
    subtitle: "Always here to help",
  },
];

export default function TrustFeatures() {
  return (
    <div className="relative z-10 mx-auto mt-6 max-w-7xl px-4 sm:-mt-10 sm:px-6 lg:-mt-12 lg:px-8">
      <div className="rounded-2xl border border-line bg-white shadow-md shadow-navy-900/5 sm:shadow-xl sm:shadow-navy-900/10">
        <div className="flex flex-col divide-y divide-line px-5 py-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-6 sm:gap-y-4 sm:divide-y-0 sm:px-8 sm:py-7 lg:flex-nowrap lg:gap-x-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex items-center gap-3 py-3.5 sm:py-0"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600 sm:size-10">
                <feature.icon className="size-4 sm:size-5" strokeWidth={1.75} />
              </span>
              <span className="flex flex-col">
                <span className="text-sm font-semibold text-navy-900 leading-tight">
                  {feature.title}
                </span>
                <span className="text-xs text-ink-600 leading-tight mt-0.5">
                  {feature.subtitle}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}