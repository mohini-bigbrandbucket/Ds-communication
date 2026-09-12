import { Link } from "react-router-dom";
import { MessageCircle, ArrowRight } from "lucide-react";
import Logo from "./Logo";
import { legalLinks } from "../data/nav";

export default function Footer() {
  return (
    <footer>
   {/* CTA Bar */}
<div className="bg-navy-900">
  <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-6 py-6 text-center sm:flex-row sm:justify-between sm:gap-4 sm:px-6 sm:py-2.5 sm:text-left">

    <p className="text-[15px] font-semibold leading-snug text-white sm:text-sm sm:font-medium">
      Your Documents, Applications & Payments — All in One Place.
    </p>

    <Link
      to="/get-started"
      className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-400 sm:w-fit sm:px-4 sm:py-1.5"
    >
      Start Your Application
      <ArrowRight className="size-4" />
    </Link>

  </div>
</div>

      {/* Main footer */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 sm:px-6 sm:py-6 lg:pr-20">
          
          {/* ===== MOBILE-ONLY LAYOUT ===== */}
          <div className="flex flex-col items-center text-center sm:hidden">
            <Logo />

            <p className="mt-2 max-w-[220px] text-xs leading-relaxed text-ink-500">
              Your Trusted Digital &amp; Government Service Partner
            </p>

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-600"
            >
              <MessageCircle className="size-3.5" />
              WhatsApp Support
            </a>

            <div className="mt-6 grid w-full grid-cols-2 gap-x-4 gap-y-3 border-t border-line pt-6">
              {legalLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="text-xs text-ink-500 transition-colors hover:text-brand-600"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <p className="mt-6 border-t border-line pt-5 text-[11px] text-ink-400">
              © 2026 DS Communication. All rights reserved.
            </p>
          </div>

          {/* ===== TABLET / DESKTOP LAYOUT ===== */}
          <div className="hidden sm:grid sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-6">
            <Logo />

            <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
              {legalLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="whitespace-nowrap text-xs text-ink-500 transition-colors hover:text-brand-600"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-1.5 text-xs font-medium text-emerald-600 hover:text-emerald-700"
            >
              <MessageCircle className="size-3.5" />
              WhatsApp Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}