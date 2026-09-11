import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { primaryNav, utilityLinks } from "../data/nav";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-line">
      <div className="mx-auto max-w-7xl px-6">
        <div className="h-16 flex items-center justify-between gap-6">
          <div className="flex items-center gap-10">
            <Logo />

            <nav className="hidden lg:flex items-center gap-6">
              {primaryNav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `text-sm font-medium whitespace-nowrap transition-colors ${
                      isActive
                        ? "text-brand-600"
                        : "text-ink-600 hover:text-navy-900"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            {utilityLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm text-ink-600 hover:text-navy-900 transition-colors whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/get-started"
              className="rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-500 transition-colors whitespace-nowrap"
            >
              Get Started
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-navy-900"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-line bg-white">
          <nav className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-1">
            {primaryNav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2.5 text-sm font-medium ${
                    isActive
                      ? "bg-brand-50 text-brand-600"
                      : "text-ink-600 hover:bg-brand-50 hover:text-navy-900"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-line pt-3">
              {utilityLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 text-sm text-ink-600"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/get-started"
                onClick={() => setOpen(false)}
                className="mx-3 mt-1 rounded-lg bg-brand-600 px-4 py-2.5 text-center text-sm font-semibold text-white"
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}