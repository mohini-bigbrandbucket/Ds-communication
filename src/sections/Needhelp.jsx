import { Headset, MessageCircle, PhoneCall } from "lucide-react";

export default function NeedHelp({ title }) {
  return (
    <section className="bg-white">
 <div className="mx-auto max-w-7xl px-6 section-pad">        <div className="flex flex-col items-center justify-between gap-5 rounded-xl border border-line bg-brand-50/60 p-6 sm:flex-row">
          <div className="flex items-center gap-4">
            <span className="flex size-11 items-center justify-center rounded-full bg-white text-brand-600 shadow-sm">
              <Headset className="size-5" />
            </span>
            <div>
              <p className="text-base font-semibold text-navy-900">
                Need help with {title}?
              </p>
              <p className="text-sm text-ink-600">
                Our experts are here to help you every step of the way.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
         <a   
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-500 transition-colors"
            >
              <MessageCircle className="size-4" />
              WhatsApp Us
            </a>
            
           <a   href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-white px-4 py-2.5 text-sm font-semibold text-navy-900 hover:border-brand-300 transition-colors"
            >
              <PhoneCall className="size-4" />
              Request a Callback
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}