import { Link } from "react-router-dom";
import { MessageCircle, ArrowRight } from "lucide-react";
import Logo from "./Logo";
import { legalLinks } from "../data/nav";

export default function Footer() {
  return (
    <footer>
      {/* CTA Bar */}
      <div className="bg-navy-900">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-4 py-1.5 text-center sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:text-left">
          <p className="text-sm font-medium text-white">
            Your Documents. Your Applications. One Platform.
          </p>

          <Link
            to="/get-started"
            className="inline-flex w-fit shrink-0 items-center gap-1.5 rounded-lg bg-brand-500 px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-brand-400"
          >
            Start Your Application
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>

   <div className="bg-white">
  <div className="mx-auto flex min-h-[45px] max-w-7xl items-center justify-center gap-4 px-4 py-2 sm:px-6 md:grid md:grid-cols-[auto_1fr_auto] md:gap-6 lg:pr-20">

    {/* Logo */}
    <Logo />

    {/* Center Links */}
    <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
      {legalLinks.map((item) => (
        <li key={item.label}>
          <Link
            to={item.to}
            className="text-xs text-ink-500 transition-colors hover:text-brand-600"
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
      className="inline-flex shrink-0 items-center gap-1.5 text-xs font-medium text-emerald-600 hover:text-emerald-700"
    >
      <MessageCircle className="size-3.5" />
      WhatsApp Support
    </a>

  </div>
</div>
    </footer>
  );
}