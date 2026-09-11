import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { popularSearches } from "../data/services";

export default function ServiceSearch() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/services?q=${encodeURIComponent(query)}`);
  }

  return (
    <section className="bg-brand-50/60">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-navy-900 sm:text-[28px]">
            Find the Service You Need
          </h2>
          <form onSubmit={handleSubmit} className="mt-6 flex gap-2">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-ink-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search PAN, GST, Udyam, Passport, Insurance, Loan..."
                className="w-full rounded-lg border border-line bg-white py-3.5 pl-11 pr-4 text-base text-navy-900 placeholder:text-ink-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
              />
            </div>
            <button
              type="submit"
              className="shrink-0 rounded-lg bg-brand-600 px-6 py-3.5 text-base font-semibold text-white hover:bg-brand-500 transition-colors"
            >
              Search
            </button>
          </form>

          <div className="mt-4 flex items-center justify-start gap-x-2 gap-y-2 overflow-x-auto whitespace-nowrap px-1 text-base sm:justify-center [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <span className="shrink-0 text-ink-400">Popular Searches</span>
            {popularSearches.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => navigate(item.to)}
                className="shrink-0 rounded-full border border-line bg-white px-3.5 py-1.5 text-sm text-ink-600 hover:border-brand-300 hover:text-brand-600 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}