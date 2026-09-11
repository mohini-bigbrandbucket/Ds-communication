import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function ComingSoon({ title }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="text-sm font-semibold text-brand-600">
          Page in progress
        </p>
        <h1 className="mt-2 text-3xl font-bold text-navy-900">{title}</h1>
        <p className="mt-3 text-sm leading-relaxed text-ink-600">
          This page hasn't been built yet — we'll fill it in next.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700"
        >
          <ArrowLeft className="size-4" />
          Back to home
        </Link>
      </div>
    </section>
  );
}
