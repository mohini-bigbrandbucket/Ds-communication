import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="text-sm font-semibold text-brand-600">404</p>
        <h1 className="mt-2 text-3xl font-bold text-navy-900">
          Page not found
        </h1>
        <p className="mt-3 text-sm text-ink-600">
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}
