import Hero from "../sections/Hero";
import QuickActions from "../sections/QuickActions";
import ServiceCategories from "../sections/ServiceCategories";
import PopularServices from "../sections/PopularServices";
import HowItWorks from "../sections/HowItWorks";
import WhyUs from "../sections/WhyUs";
import UpdatesResources from "../sections/UpdatesResources";
import Testimonials from "../sections/Testimonials";
import FAQ from "../sections/FAQ";
import TrackApplication from "../sections/TrackApplication";
import Reveal from "../components/Reveal";

export default function Home() {
  return (
    <>
      <Hero />
      <QuickActions />
      <Reveal><ServiceCategories /></Reveal>
      {/* <Reveal><PopularServices /></Reveal> */}
      <Reveal><HowItWorks /></Reveal>
      <Reveal><TrackApplication /></Reveal>
      <Reveal><WhyUs /></Reveal>
      {/* <Reveal><UpdatesResources /></Reveal> */}
      <Reveal><Testimonials /></Reveal>
      <Reveal><FAQ /></Reveal>
    </>
  );
}