import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import ComingSoon from "./pages/ComingSoon";
import NotFound from "./pages/NotFound";
import Service from "./pages/Service";
import ServiceDetail from "./pages/ServiceDetail";
import Contact from "./pages/Contact";
import About from "./pages/AboutUs";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="/services" element={<Service />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />

        <Route
          path="/track-application"
          element={<ComingSoon title="Track Application" />}
        />
        <Route
          path="/how-it-works"
          element={<ComingSoon title="How It Works" />}
        />
        <Route
          path="/partner-with-us"
          element={<ComingSoon title="Partner With Us" />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<ComingSoon title="Careers" />} />
        <Route
          path="/get-started"
          element={<ComingSoon title="Get Started" />}
        />
        <Route
          path="/login/customer"
          element={<ComingSoon title="Customer Login" />}
        />

        <Route
          path="/legal/privacy-policy"
          element={<ComingSoon title="Privacy Policy" />}
        />
        <Route
          path="/legal/terms"
          element={<ComingSoon title="Terms & Conditions" />}
        />
        <Route
          path="/legal/refund-policy"
          element={<ComingSoon title="Refund & Cancellation Policy" />}
        />
        <Route
          path="/legal/service-disclaimer"
          element={<ComingSoon title="Service Disclaimer" />}
        />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}