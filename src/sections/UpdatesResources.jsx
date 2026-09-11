import { Link } from "react-router-dom";
import {
  ChevronRight,
  FileStack,
  BookOpenText,
  CircleHelp,
  Headset,
} from "lucide-react";

const updates = [
  {
    title: "Your GST application is at Document Verification.",
    time: "2 hours ago",
  },
  {
    title: "Your PAN application has been submitted successfully.",
    time: "1 day ago",
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
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-lg font-bold text-navy-900">
            Application Updates
          </h2>
          <ul className="mt-4 divide-y divide-line rounded-xl border border-line">
            {updates.map((update) => (
              <li
                key={update.title}
                className="flex items-center justify-between gap-4 px-4 py-4"
              >
                <div>
                  <p className="text-base text-navy-900">{update.title}</p>
                  <p className="mt-0.5 text-sm text-ink-400">{update.time}</p>
                </div>
                <ChevronRight className="size-4 shrink-0 text-ink-400" />
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold text-navy-900">
            Helpful Resources
          </h2>
          <div className="mt-4 grid grid-cols-2 gap-4">
            {resources.map((r) => (
              <Link
                key={r.title}
                to={r.to}
                className="rounded-xl border border-line p-4 hover:border-brand-300 transition-colors"
              >
                <span className="flex size-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <r.icon className="size-5" />
                </span>
                <h3 className="mt-3 text-base font-semibold text-navy-900">
                  {r.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-600">
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
