import { LayoutList, ListChecks, FileText, Workflow, CircleHelp } from "lucide-react";

const tabs = [
  { label: "Overview", href: "#overview", icon: LayoutList },
  { label: "Service Options", href: "#options", icon: ListChecks },
  { label: "Documents", href: "#documents", icon: FileText },
  { label: "Process", href: "#process", icon: Workflow },
  { label: "FAQs", href: "#faqs", icon: CircleHelp },
];

export default function ServiceContent() {
  return (
    <nav
      id="overview"
      className="sticky top-16 z-30 scroll-mt-32 border-b border-line bg-white/95 backdrop-blur"
    >
      <div className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-6">
        {tabs.map((tab, i) => (
          <a
            key={tab.label}
            href={tab.href}
            className={`flex items-center gap-1.5 whitespace-nowrap border-b-2 px-4 py-3.5 text-sm font-medium transition-colors ${
              i === 0
                ? "border-brand-600 text-brand-600"
                : "border-transparent text-ink-400 hover:text-navy-900"
            }`}
          >
            <tab.icon className="size-4" />
            {tab.label}
          </a>
        ))}
      </div>
    </nav>
  );
}