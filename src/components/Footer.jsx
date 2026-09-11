import { Link } from "react-router-dom";
import { MessageCircle, ArrowRight } from "lucide-react";
import Logo from "./Logo";
import { legalLinks } from "../data/nav";

export default function Footer() {
  return (
    <footer>
      <div className="bg-navy-900">
        <div className="mx-auto max-w-7xl px-6 py-2.5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-medium text-white">
            Your Documents. Your Applications. One Platform.
          </p>
          <Link
            to="/get-started"
            className="inline-flex w-fit items-center gap-1.5 rounded-lg bg-brand-500 px-4 py-1.5 text-sm font-semibold text-white hover:bg-brand-400 transition-colors"
          >
            Start Your Application
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
      <div className="bg-white h-[75px]">
        <div className="mx-auto max-w-7xl px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Center Links */}
          <ul className="flex items-center gap-x-6">
            {legalLinks.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="text-xs text-ink-500 hover:text-brand-600 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* WhatsApp */}
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600 hover:text-emerald-700"
          >
            <MessageCircle className="size-3.5" />
            WhatsApp Support
          </a>
        </div>
      </div>
    </footer>
  );
}
