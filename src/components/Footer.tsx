import { Link } from "react-router";

export default function Footer() {
  const navLinks = [
    { label: "Home", to: "/" },
    { label: "The Marathon", to: "/marathon" },
    { label: "Race", to: "/race" },
    { label: "Cause", to: "/cause" },
    { label: "Sports Tourism", to: "/sports-tourism" },
    { label: "Sponsors", to: "/sponsors" },
    { label: "News", to: "/news" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <footer className="bg-gradient-to-b from-sky-50 via-sky-100/60 to-cyan-100/50 border-t border-sky-200 text-slate-900">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-4 gap-12 lg:gap-16">
          <div className="lg:col-span-2">
            <div className="font-display text-slate-900 leading-none mb-3"
              style={{ fontWeight: 900, fontSize: "clamp(28px, 4vw, 48px)" }}>
              OCEAN CITY<br /><span className="text-sky-600">MARATHON</span>
            </div>
            <div className="font-wide text-sky-700 text-[10px] tracking-[0.3em] uppercase mb-6 font-extrabold bg-sky-200/60 px-3 py-1 rounded-full w-fit border border-sky-300">
              Community Marathon 2026
            </div>
            <p className="font-body text-slate-700 text-sm leading-relaxed max-w-sm mb-8 font-normal">
              12 December 2026 · Coco Beach, Dar es Salaam, Tanzania.<br />
              Organised by Plus One Events Solutions / Plus One Sports Agency.
            </p>
            <div className="font-display text-sky-800 text-lg lg:text-xl tracking-[0.08em] uppercase font-extrabold">
              RUN FOR HEALTH. RUN FOR NATION.
            </div>
          </div>

          <div>
            <div className="font-wide text-[10px] text-sky-800 tracking-[0.3em] uppercase mb-6 font-bold">Navigation</div>
            <ul className="space-y-3">
              {navLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to}
                    className="font-wide text-[12px] text-slate-700 tracking-[0.12em] hover:text-sky-600 transition-colors duration-200 uppercase font-semibold">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-wide text-[10px] text-sky-800 tracking-[0.3em] uppercase mb-6 font-bold">Contact</div>
            <div className="space-y-3 mb-8">
              <a href="tel:+255613786110"
                className="block font-wide text-[13px] text-slate-800 hover:text-sky-600 transition-colors tracking-[0.1em] font-bold">
                +255 613 786 110
              </a>
              <a href="http://plusoneventz.com" target="_blank" rel="noopener noreferrer"
                className="block font-wide text-[12px] text-slate-700 hover:text-sky-600 transition-colors tracking-[0.1em] font-medium">
                plusoneventz.com
              </a>
              <a href="https://instagram.com/oceancitymarathon" target="_blank" rel="noopener noreferrer"
                className="block font-wide text-[12px] text-sky-600 tracking-[0.1em] font-bold hover:text-sky-800">
                @oceancitymarathon
              </a>
            </div>
            <div className="font-wide text-[10px] text-sky-800 tracking-[0.3em] uppercase mb-4 font-bold">Social</div>
            <div className="flex gap-3">
              {[
                { s: "IG", href: "https://instagram.com/oceancitymarathon", label: "Instagram" },
                { s: "FB", href: "#", label: "Facebook" },
                { s: "TT", href: "#", label: "TikTok" },
                { s: "YT", href: "#", label: "YouTube" },
              ].map(({ s, href, label }) => (
                <a key={s} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="font-display text-[11px] text-slate-700 hover:text-sky-600 tracking-[0.15em] transition-all duration-200 border border-sky-300 bg-white hover:border-sky-600 w-9 h-9 flex items-center justify-center shadow-xs rounded-md font-bold">
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-sky-200 max-w-screen-xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row justify-between gap-2 bg-sky-100/40">
        <span className="font-wide text-[10px] text-slate-600 tracking-[0.2em] uppercase font-semibold">
          © 2026 Plus One Events Solutions. All rights reserved.
        </span>
        <span className="font-wide text-[10px] text-slate-600 tracking-[0.2em] uppercase font-semibold">
          Ocean City Community Marathon — Dar es Salaam, Tanzania
        </span>
      </div>
    </footer>
  );
}
