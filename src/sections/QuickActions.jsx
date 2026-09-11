import { Link } from "react-router-dom";
import { FilePlus2, Search, UploadCloud, MessageCircle } from "lucide-react";

const actions = [
  {
    icon: FilePlus2,
    title: "Start Application",
    subtitle: "Apply for a new service",
    to: "/services",
  },
  {
    icon: Search,
    title: "Track Application",
    subtitle: "Track your application status",
    to: "/track-application",
  },
  {
    icon: UploadCloud,
    title: "Upload Documents",
    subtitle: "Upload required documents",
    to: "/track-application",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Support",
    subtitle: "Chat with our support team",
    to: "https://wa.me/",
  },
];

export default function QuickActions() {
  return (
    <section className="bg-brand-50">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-xl border border-line bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-base font-semibold text-navy-900">
            Quick Actions
          </h2>

          <div className="mt-4 grid grid-cols-2 divide-y divide-line rounded-lg border border-line sm:grid-cols-4 sm:divide-x sm:divide-y-0">
            {actions.map((action) => (
              <Link
                key={action.title}
                to={action.to}
                className="group flex flex-col items-center gap-2 px-4 py-6 text-center transition-colors hover:bg-brand-50"
              >
                <action.icon className="size-6 text-brand-600" strokeWidth={1.75} />
                <span className="text-sm font-semibold text-navy-900">
                  {action.title}
                </span>
                <span className="text-xs text-ink-600">{action.subtitle}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}