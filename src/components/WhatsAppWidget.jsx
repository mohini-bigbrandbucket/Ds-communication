import { useState } from "react";
import { X, User, Phone } from "lucide-react";

const WHATSAPP_NUMBER = "91XXXXXXXXXX"; // TODO: replace with your WhatsApp business number (with country code, no + or spaces)

function WhatsAppIcon({ className }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden>
      <path d="M16.02 4C9.4 4 4.02 9.36 4.02 15.98c0 2.16.57 4.26 1.65 6.11L4 28l6.06-1.6a12.02 12.02 0 0 0 5.96 1.58h.01c6.62 0 12-5.36 12-11.98C28.03 9.36 22.65 4 16.02 4Zm0 21.9h-.01a9.9 9.9 0 0 1-5.05-1.39l-.36-.21-3.6.95.96-3.5-.24-.36a9.86 9.86 0 0 1-1.52-5.31c0-5.46 4.45-9.9 9.92-9.9 2.65 0 5.14 1.03 7.01 2.9a9.83 9.83 0 0 1 2.9 6.99c0 5.47-4.45 9.83-10.01 9.83Zm5.44-7.39c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.24-.46-2.36-1.46-.87-.78-1.46-1.74-1.63-2.04-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.09 3.2 5.07 4.48.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const isValid = name.trim().length > 0 && phone.trim().length === 10;

  function handleSubmit(e) {
    e.preventDefault();
    if (!isValid) return;

    const message = `Hi, I'm ${name.trim()}. I'd like to connect with an expert. My number is +91 ${phone.trim()}.`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noreferrer");
    setOpen(false);
    setName("");
    setPhone("");
  }

  return (
    <>
      {/* Sticky floating button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Connect with our expert professionals on WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-xl shadow-emerald-900/25 ring-4 ring-emerald-600/15 transition-transform hover:scale-105 hover:bg-emerald-500 sm:bottom-6 sm:right-6"
      >
        <WhatsAppIcon className="size-7" />
        <span className="sr-only">Chat on WhatsApp</span>
      </button>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/50 px-4 backdrop-blur-[2px]"
          onClick={() => setOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="whatsapp-form-title"
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[360px] overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-black/5"
          >
            {/* Header */}
            <div className="relative px-6 pb-2 pt-6">
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full text-ink-400 transition-colors hover:bg-ink-50 hover:text-navy-900"
              >
                <X className="size-4.5" />
              </button>

              <span className="flex size-12 items-center justify-center rounded-2xl bg-emerald-50">
                <WhatsAppIcon className="size-6 text-emerald-600" />
              </span>

              <h2
                id="whatsapp-form-title"
                className="mt-4 max-w-[85%] text-xl font-bold leading-snug text-navy-900"
              >
                Talk to an expert
              </h2>
              <p className="mt-1 text-sm text-ink-500">
                Share your details and we'll reach out on WhatsApp in minutes.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 px-6 pb-6 pt-5">
              <div>
                <label
                  htmlFor="wa-name"
                  className="mb-1.5 block text-xs font-medium text-ink-500"
                >
                  Name
                </label>
                <div className="flex items-center gap-2.5 rounded-xl border border-line bg-ink-50/40 px-3.5 py-3 transition-colors focus-within:border-emerald-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-emerald-500/10">
                  <User className="size-4 shrink-0 text-ink-400" strokeWidth={1.75} />
                  <input
                    id="wa-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    required
                    className="w-full bg-transparent text-sm text-navy-900 placeholder:text-ink-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="wa-phone"
                  className="mb-1.5 block text-xs font-medium text-ink-500"
                >
                  Phone number
                </label>
                <div className="flex items-center gap-2.5 rounded-xl border border-line bg-ink-50/40 px-3.5 py-3 transition-colors focus-within:border-emerald-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-emerald-500/10">
                  <Phone className="size-4 shrink-0 text-ink-400" strokeWidth={1.75} />
                  <span className="shrink-0 border-r border-line pr-2.5 text-sm text-navy-900">
                    +91
                  </span>
                  <input
                    id="wa-phone"
                    type="tel"
                    inputMode="numeric"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                    placeholder="10-digit number"
                    required
                    maxLength={10}
                    className="w-full bg-transparent text-sm text-navy-900 placeholder:text-ink-400 focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={!isValid}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition-colors hover:bg-emerald-500 disabled:cursor-not-allowed disabled:bg-emerald-600/40 disabled:shadow-none"
              >
                <WhatsAppIcon className="size-4.5" />
                Continue on WhatsApp
              </button>

              <p className="text-center text-[11px] leading-relaxed text-ink-400">
                We'll only use this to contact you on WhatsApp. No spam.
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}