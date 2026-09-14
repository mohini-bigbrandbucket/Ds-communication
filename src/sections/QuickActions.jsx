import {
  Smartphone,
  Lock,
  Radar,
  Headphones,
} from "lucide-react";

const features = [
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
<div className="relative z-10 mx-auto -mt-6 max-w-4xl px-4 sm:-mt-10 sm:px-6 lg:-mt-12 lg:px-8">
<div className="rounded-2xl border border-line bg-white shadow-lg shadow-navy-900/15 sm:shadow-xl sm:shadow-navy-900/20">
        {/* MOBILE: 2x2 grid, icon-on-top card style */}
        <div className="grid grid-cols-2 gap-4 p-5 pb-8 sm:hidden">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center gap-2 text-center"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                <feature.icon className="size-5" strokeWidth={1.75} />
              </span>
              <span className="flex flex-col gap-0.5">
                <span className="text-[13px] font-semibold leading-tight text-navy-900">
                  {feature.title}
                </span>
                <span className="text-[11px] leading-tight text-ink-600">
                  {feature.subtitle}
                </span>
              </span>
            </div>
          ))}
        </div>

        {/* DESKTOP / TABLET: horizontal row, icon-left-text-right */}
        <div className="hidden sm:flex sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-6 sm:gap-y-4 sm:px-6 sm:py-6 lg:flex-nowrap lg:gap-x-4">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-center gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                <feature.icon className="size-5" strokeWidth={1.75} />
              </span>
              <span className="flex flex-col">
                <span className="text-sm font-semibold leading-tight text-navy-900">
                  {feature.title}
                </span>
                <span className="mt-0.5 text-xs leading-tight text-ink-600">
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