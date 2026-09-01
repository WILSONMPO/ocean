import { Outlet } from "react-router";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Root() {
  return (
    <div className="grain min-h-screen bg-slate-50 text-slate-900">
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

