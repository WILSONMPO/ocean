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
    <footer className="bg-[var(--color-ocean-950)] border-t border-white/8">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-4 gap-12 lg:gap-16">
          <div className="lg:col-span-2">
            <div className="font-display text-white leading-none mb-3"
              style={{ fontWeight: 900, fontSize: "clamp(28px, 4vw, 48px)" }}>
              OCEAN CITY<br />MARATHON
            </div>
            <div className="font-wide text-[var(--color-aqua)] text-[10px] tracking-[0.3em] uppercase mb-6" style={{ fontWeight: 500 }}>
              Community Marathon 2026
            </div>
            <p className="font-body text-white/35 text-sm leading-relaxed max-w-sm mb-8" style={{ fontWeight: 300 }}>
              14 November 2026 · Coco Beach, Dar es Salaam, Tanzania.<br />
              Organised by Plus One Events Solutions / Plus One Sports Agency.
            </p>
            <div className="font-display text-[var(--color-aqua)] text-lg lg:text-xl tracking-[0.08em] uppercase"
              style={{ fontWeight: 700 }}>
              RUN FOR HEALTH. RUN FOR NATION.
            </div>
          </div>

          <div>
            <div className="font-wide text-[10px] text-white/25 tracking-[0.3em] uppercase mb-6">Navigation</div>
            <ul className="space-y-3">
              {navLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to}
                    className="font-wide text-[12px] text-white/45 tracking-[0.12em] hover:text-white transition-colors duration-200 uppercase">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-wide text-[10px] text-white/25 tracking-[0.3em] uppercase mb-6">Contact</div>
            <div className="space-y-3 mb-8">
              <a href="tel:+255613786110"
                className="block font-wide text-[13px] text-white/55 hover:text-white transition-colors tracking-[0.1em]">
                +255 613 786 110
              </a>
              <a href="http://plusoneventz.com" target="_blank" rel="noopener noreferrer"
                className="block font-wide text-[12px] text-white/55 hover:text-[var(--color-aqua)] transition-colors tracking-[0.1em]">
                plusoneventz.com
              </a>
              <a href="https://instagram.com/oceancitymarathon" target="_blank" rel="noopener noreferrer"
                className="block font-wide text-[12px] text-[var(--color-aqua)] tracking-[0.1em]">
                @oceancitymarathon
              </a>
            </div>
            <div className="font-wide text-[10px] text-white/25 tracking-[0.3em] uppercase mb-4">Social</div>
            <div className="flex gap-3">
              {[
                { s: "IG", href: "https://instagram.com/oceancitymarathon", label: "Instagram" },
                { s: "FB", href: "#", label: "Facebook" },
                { s: "TT", href: "#", label: "TikTok" },
                { s: "YT", href: "#", label: "YouTube" },
              ].map(({ s, href, label }) => (
                <a key={s} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="font-display text-[11px] text-white/40 hover:text-[var(--color-aqua)] tracking-[0.15em] transition-all duration-200 border border-white/10 hover:border-[var(--color-aqua)]/40 w-9 h-9 flex items-center justify-center">
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 max-w-screen-xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row justify-between gap-2">
        <span className="font-wide text-[10px] text-white/18 tracking-[0.2em] uppercase">
          © 2026 Plus One Events Solutions. All rights reserved.
        </span>
        <span className="font-wide text-[10px] text-white/18 tracking-[0.2em] uppercase">
          Ocean City Community Marathon — Dar es Salaam, Tanzania
        </span>
      </div>
    </footer>
  );
}
