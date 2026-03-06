import { Outlet } from "react-router";
import Navigation from "./Navigation";
import CursorEffect from "./CursorEffect";
import ScrollToTop from "./ScrollToTop";

export default function Root() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8D7DA] via-[#F5E6E8] to-[#F0DFE1]">
      <ScrollToTop />
      <CursorEffect />
      <Navigation />
      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
}