import { CircleCheck, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { topBarLeft } from "../data/nav";

export default function TopBar() {
  return (
    <div className="hidden md:block bg-brand-50 border-b border-line">
      <div className="mx-auto max-w-7xl px-6 h-10 flex items-center justify-between text-sm text-ink-600">
        <ul className="flex items-center gap-6">
          {topBarLeft.map((item) => (
            <li key={item.label}>
              <Link
                to={item.to}
                className="flex items-center gap-1.5 hover:text-brand-600 transition-colors"
              >
                <CircleCheck className="size-4 text-brand-500" strokeWidth={2} />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href="https://wa.me/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
        >
          <MessageCircle className="size-4" strokeWidth={2} />
          WhatsApp Support
        </a>
      </div>
    </div>
  );
}
