import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h);
    h();
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const links = [
    { label: "THE MARATHON", to: "/marathon" },
    { label: "RACE", to: "/race" },
    { label: "CAUSE", to: "/cause" },
    { label: "SPORTS TOURISM", to: "/sports-tourism" },
    { label: "SPONSORS", to: "/sponsors" },
    { label: "NEWS", to: "/news" },
  ];

  const isHome = location.pathname === "/";

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled || !isHome ? "rgba(2,11,24,0.97)" : "transparent",
        backdropFilter: scrolled || !isHome ? "blur(14px)" : "none",
        borderBottom: scrolled || !isHome ? "1px solid rgba(26,117,204,0.12)" : "none",
      }}
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20">
        <Link to="/" className="flex flex-col leading-none group">
          <span className="font-display text-white text-xl lg:text-2xl group-hover:text-[var(--color-aqua)] transition-colors duration-300"
            style={{ fontWeight: 900, letterSpacing: "0.1em" }}>
            OCEAN CITY
          </span>
          <span className="font-wide text-[var(--color-aqua)] text-[9px] lg:text-[10px] tracking-[0.3em] uppercase"
            style={{ fontWeight: 500 }}>
            COMMUNITY MARATHON
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {links.map(({ label, to }) => (
            <Link key={to} to={to}
              className={`font-wide text-[11px] tracking-[0.18em] uppercase transition-colors duration-200 ${
                location.pathname === to ? "text-[var(--color-aqua)]" : "text-white/60 hover:text-white"
              }`}>
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link to="/registration"
            className="hidden sm:inline-flex font-display text-[12px] tracking-[0.15em] uppercase bg-[var(--color-ocean-400)] hover:bg-[var(--color-aqua)] text-white px-6 py-2.5 transition-all duration-300"
            style={{ fontWeight: 800, clipPath: "polygon(8px 0,100% 0,calc(100% - 8px) 100%,0 100%)" }}>
            REGISTER
          </Link>
          <button onClick={() => setOpen(!open)} className="lg:hidden text-white p-2" aria-label="Toggle menu">
            <div className="flex flex-col gap-[5px]">
              <span className={`block h-[2px] bg-white transition-all duration-300 ${open ? "w-5 rotate-45 translate-y-[7px]" : "w-6"}`} />
              <span className={`block h-[2px] bg-white transition-all duration-300 ${open ? "opacity-0 w-0" : "w-4"}`} />
              <span className={`block h-[2px] bg-white transition-all duration-300 ${open ? "w-5 -rotate-45 -translate-y-[7px]" : "w-6"}`} />
            </div>
          </button>
        </div>
      </div>

      <div
        className="lg:hidden overflow-hidden transition-all duration-500"
        style={{ maxHeight: open ? "600px" : "0", background: "rgba(2,11,24,0.99)", borderTop: open ? "1px solid rgba(255,255,255,0.06)" : "none" }}
      >
        <div className="px-6 py-6 flex flex-col gap-1">
          {links.map(({ label, to }) => (
            <Link key={to} to={to}
              className={`font-wide text-[13px] tracking-[0.2em] uppercase py-4 border-b border-white/5 transition-colors ${
                location.pathname === to ? "text-[var(--color-aqua)]" : "text-white/70"
              }`}>
              {label}
            </Link>
          ))}
          <Link to="/about" className="font-wide text-[13px] tracking-[0.2em] uppercase py-4 border-b border-white/5 text-white/70">ABOUT</Link>
          <Link to="/contact" className="font-wide text-[13px] tracking-[0.2em] uppercase py-4 border-b border-white/5 text-white/70">CONTACT</Link>
          <Link to="/registration"
            className="font-display text-[14px] tracking-[0.15em] uppercase bg-[var(--color-ocean-400)] text-white text-center py-4 mt-4 transition-colors hover:bg-[var(--color-aqua)]"
            style={{ fontWeight: 800 }}>
            REGISTER TO RUN
          </Link>
        </div>
      </div>
    </nav>
  );
}
