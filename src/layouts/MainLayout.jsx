import { Outlet } from "react-router-dom";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <TopBar />
    
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
