import { useState } from "react";
import { MessageSquare, Send, CheckCircle2 } from "lucide-react";
import Reveal from "../components/Reveal";

// lucide-react no longer ships brand/social icons, so these are small
// inline SVGs instead (kept minimal, currentColor so they inherit styling).
function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-7.5H16l.5-3.5h-3V7.7c0-1 .3-1.7 1.8-1.7H16.5V2.8C16 2.7 14.9 2.6 13.7 2.6c-2.6 0-4.4 1.6-4.4 4.5V10H6.8v3.5h2.5V21h4.2Z" />
    </svg>
  );
}
function TwitterIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.5 6.2c-.6.3-1.3.5-2 .6.7-.4 1.3-1.2 1.5-2-.7.4-1.5.7-2.3.9a3.6 3.6 0 0 0-6.1 3.3A10.2 10.2 0 0 1 4 4.9a3.6 3.6 0 0 0 1.1 4.8c-.6 0-1.1-.2-1.6-.4v.1c0 1.8 1.3 3.3 2.9 3.6-.5.1-1 .2-1.6.1.4 1.4 1.8 2.5 3.4 2.5A7.3 7.3 0 0 1 3 16.9a10.2 10.2 0 0 0 5.6 1.6c6.7 0 10.3-5.5 10.3-10.3v-.5c.7-.5 1.3-1.1 1.6-1.9Z" />
    </svg>
  );
}
function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3.25a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.44 20h-3.37v-5.9c0-1.4-.03-3.2-1.95-3.2-1.96 0-2.26 1.53-2.26 3.1V20H9.5V8.5h3.24v1.57h.05c.45-.85 1.56-1.75 3.2-1.75 3.43 0 4.06 2.26 4.06 5.2V20Z" />
    </svg>
  );
}
function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.7" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

const SOCIALS = [
  { icon: FacebookIcon, href: "https://facebook.com", label: "Facebook" },
  { icon: TwitterIcon, href: "https://twitter.com", label: "Twitter" },
  { icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: InstagramIcon, href: "https://instagram.com", label: "Instagram" },
];

const MAP_SRC =
  "https://www.google.com/maps?q=Plot%20No.%2076%20D%2C%20Udyog%20Vihar%20Phase-4%2C%20Gurgaon%2C%20Haryana%20122001&output=embed";

const inputClass =
  "w-full rounded-lg border border-line bg-white px-3.5 py-2 text-sm text-navy-900 placeholder:text-ink-400 transition-all duration-200 focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-100 focus:scale-[1.01]";

export default function ContactFormMap() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Full name is required";
    if (!form.email.trim()) next.email = "Email address is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email";
    if (!form.phone.trim()) next.phone = "Phone number is required";
    if (!form.subject.trim()) next.subject = "Subject is required";
    if (!form.message.trim()) next.message = "Please describe your query";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    // Wire this up to your backend / email service here.
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <section className="relative overflow-hidden bg-brand-50/40">
      {/* subtle ambient glow, matches the hero for continuity */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-10 size-64 rounded-full bg-brand-200/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 bottom-0 size-72 rounded-full bg-brand-300/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-14 sm:py-16">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-7">
          {/* Form card */}
          <Reveal>
            <div className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-line transition-shadow duration-300 hover:shadow-lg">
              <div className="relative overflow-hidden bg-gradient-to-r from-brand-600 to-navy-800 px-5 py-4 sm:px-6 sm:py-5">
                {/* thin accent sweep, echoes the info cards above */}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-white/60 transition-transform duration-500 group-hover:scale-x-100"
                />
                <div className="flex items-center gap-2 text-white">
                  <MessageSquare className="size-4 animate-pulse" />
                  <h2 className="text-base font-semibold sm:text-lg">Send us a Message</h2>
                </div>
                <p className="mt-1 text-xs text-white/80 sm:text-sm">
                  Fill out the form below and we&apos;ll get back to you shortly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5 px-5 py-5 sm:px-6 sm:py-6">
                <div>
                  <label htmlFor="name" className="mb-1 block text-xs font-medium text-navy-900 sm:text-sm">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    className={inputClass}
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="mb-1 block text-xs font-medium text-navy-900 sm:text-sm">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="mb-1 block text-xs font-medium text-navy-900 sm:text-sm">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex overflow-hidden rounded-lg border border-line transition-all duration-200 focus-within:border-brand-500 focus-within:ring-4 focus-within:ring-brand-100">
                    <span className="flex items-center gap-1 bg-brand-50 px-3 text-sm font-medium text-navy-900">
                      🇮🇳 +91
                    </span>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="XXXXX XXXXX"
                      className="w-full px-3.5 py-2 text-sm text-navy-900 placeholder:text-ink-400 focus:outline-none"
                    />
                  </div>
                  {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="subject" className="mb-1 block text-xs font-medium text-navy-900 sm:text-sm">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="e.g. Document Assistance"
                    className={inputClass}
                  />
                  {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="mb-1 block text-xs font-medium text-navy-900 sm:text-sm">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    maxLength={200}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your query..."
                    className={`resize-none ${inputClass}`}
                  />
                  <div className="mt-1 flex items-center justify-between">
                    {errors.message ? (
                      <p className="text-xs text-red-500">{errors.message}</p>
                    ) : (
                      <span />
                    )}
                    <span className="text-xs text-ink-400">{form.message.length}/200</span>
                  </div>
                </div>

                {submitted && (
                  <div className="animate-pop-in flex items-center gap-2 rounded-lg bg-emerald-50 px-3.5 py-2.5 text-sm font-medium text-emerald-700">
                    <CheckCircle2 className="size-4 shrink-0" />
                    Thanks! Your message has been sent — we&apos;ll be in touch shortly.
                  </div>
                )}

                <button
                  type="submit"
                  className="group/btn relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-500 hover:shadow-md active:scale-[0.98]"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 -translate-x-full bg-white/15 transition-transform duration-500 group-hover/btn:translate-x-full"
                  />
                  <Send className="relative size-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  <span className="relative">Send Message</span>
                </button>
              </form>
            </div>
          </Reveal>

          {/* Map + socials */}
          <Reveal delay={150}>
            <div className="flex h-full flex-col gap-5">
              <div className="overflow-hidden rounded-2xl shadow-sm ring-1 ring-line transition-shadow duration-300 hover:shadow-lg">
                <iframe
                  title="DS Communication location"
                  src={MAP_SRC}
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block h-[260px] w-full sm:h-[300px]"
                />
              </div>

              <div className="rounded-2xl border border-line bg-white p-5 text-center shadow-sm transition-shadow duration-300 hover:shadow-lg">
                <p className="text-sm font-semibold text-navy-900">
                  Connect with us on social media
                </p>
                <div className="mt-3.5 flex justify-center gap-3">
                  {SOCIALS.map(({ icon: Icon, href, label }, i) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      style={{ transitionDelay: `${i * 40}ms` }}
                      className="flex size-9 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-brand-600 hover:text-white hover:shadow-md"
                    >
                      <Icon className="size-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}