// src/pages/Service.jsx  (brand new file — this is the /services catalog page)
import ServiceSearch from "../sections/ServiceSearch";
import ServiceCategories from "../sections/ServiceCategories";
import PopularServices from "../sections/PopularServices";

export default function Service() {
  return (
    <main className="services-catalog-page">
      <section className="bg-brand-50">
        <div className="mx-auto max-w-7xl px-6 py-14 text-center">
          <h1 className="text-3xl font-bold text-navy-900 sm:text-4xl">
            All Services
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-base text-ink-600">
            Browse every service we offer, or search for exactly what you need.
          </p>
        </div>
      </section>

      <ServiceSearch />
      <ServiceCategories />
      <PopularServices />
    </main>
  );
}