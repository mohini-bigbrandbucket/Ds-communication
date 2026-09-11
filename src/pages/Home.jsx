import Hero from "../sections/Hero";
import QuickActions from "../sections/QuickActions";
import ServiceSearch from "../sections/ServiceSearch";
import ServiceCategories from "../sections/ServiceCategories";
import PopularServices from "../sections/PopularServices";
import HowItWorks from "../sections/HowItWorks";
import WhyUs from "../sections/WhyUs";
import UpdatesResources from "../sections/UpdatesResources";
import Testimonials from "../sections/Testimonials";
import FAQ from "../sections/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <QuickActions />
      <ServiceSearch />
      <ServiceCategories />
      <PopularServices />
      <HowItWorks />
      <WhyUs />
      <UpdatesResources />
      <Testimonials />
      <FAQ />
    </>
  );
}
