import { Link } from "react-router-dom";
import { MessageCircle, ArrowRight } from "lucide-react";
import Logo from "./Logo";
import { footerColumns, legalLinks } from "../data/nav";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-base leading-relaxed text-ink-600">
            Your trusted digital service partner for government, business,
            tax, insurance and everyday paperwork — all in one place.
          </p>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-base font-medium text-emerald-600 hover:text-emerald-700"
          >
            <MessageCircle className="size-4" />
            WhatsApp Support
          </a>
        </div>

        {footerColumns.map((col) => (
          <div key={col.title}>
            <h3 className="text-base font-semibold text-navy-900">{col.title}</h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-ink-600 hover:text-brand-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-line">
        <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-ink-400">
            © {new Date().getFullYear()} DS Communication. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-1.5">
            {legalLinks.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="text-xs text-ink-400 hover:text-brand-600 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-navy-900">
        <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-medium text-white">
            Your Documents. Your Applications. One Platform.
          </p>
          <Link
            to="/get-started"
            className="inline-flex w-fit items-center gap-1.5 rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-400 transition-colors"
          >
            Start Your Application
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
