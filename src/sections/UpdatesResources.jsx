import { Link } from "react-router-dom";
import {
  Bell,
  ChevronRight,
  FileStack,
  BookOpenText,
  CircleHelp,
  Headset,
} from "lucide-react";

const updates = [
  {
    title: "Your GST application is at Document Verification.",
    time: "Just now",
  },
  {
    title: "Your PAN application has been submitted successfully.",
    time: "10 minutes ago",
  },
];

const resources = [
  {
    icon: FileStack,
    title: "Required Documents",
    description: "See documents needed for each service.",
    to: "/how-it-works",
  },
  {
    icon: BookOpenText,
    title: "Service Guides",
    description: "Step-by-step guides for easy application.",
    to: "/how-it-works",
  },
  {
    icon: CircleHelp,
    title: "FAQ",
    description: "Find answers to common questions.",
    to: "/contact#faq",
  },
  {
    icon: Headset,
    title: "Support",
    description: "We're here to help you anytime.",
    to: "/contact",
  },
];

export default function UpdatesResources() {
  return (
    <section className="bg-white border-t border-line">
   <div className="mx-auto max-w-7xl px-6 section-pad">        <div>
          <h2 className="text-base font-bold text-navy-900">
            Application Updates
          </h2>
          <ul className="mt-3 divide-y divide-line rounded-xl border border-line">
            {updates.map((update) => (
              <li
                key={update.title}
                className="flex items-center justify-between gap-4 px-4 py-3.5"
              >
                <div className="flex items-start gap-2.5">
                  <Bell className="mt-0.5 size-4 shrink-0 text-brand-600" />
                  <div>
                    <p className="text-sm text-navy-900">{update.title}</p>
                    <p className="mt-0.5 text-xs text-ink-400">{update.time}</p>
                  </div>
                </div>
                <ChevronRight className="size-4 shrink-0 text-ink-400" />
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-base font-bold text-navy-900">
            Helpful Resources
          </h2>
          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {resources.map((r) => (
              <Link
                key={r.title}
                to={r.to}
                className="rounded-xl border border-line p-3.5 hover:border-brand-300 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                    <r.icon className="size-4" />
                  </span>
                  <span className="text-sm font-semibold text-navy-900">
                    {r.title}
                  </span>
                </span>
                <p className="mt-2 text-xs leading-relaxed text-ink-600">
                  {r.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}