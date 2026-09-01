import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--color-ocean-950)] flex items-center justify-center px-6 text-center">
      <div>
        <div className="font-display text-white/8 leading-none mb-4" style={{ fontWeight: 900, fontSize: "clamp(120px, 20vw, 240px)" }}>
          404
        </div>
        <div className="font-display text-white text-4xl lg:text-6xl leading-none mb-4 -mt-16" style={{ fontWeight: 900 }}>PAGE NOT FOUND</div>
        <p className="font-body text-white/40 text-base mb-10" style={{ fontWeight: 300 }}>The page you're looking for doesn't exist.</p>
        <Link to="/"
          className="inline-flex font-display text-[13px] tracking-[0.15em] uppercase bg-[var(--color-ocean-400)] hover:bg-[var(--color-aqua)] text-white px-8 py-4 transition-all duration-300"
          style={{ fontWeight: 800, clipPath: "polygon(8px 0,100% 0,calc(100% - 8px) 100%,0 100%)" }}>
          BACK TO HOME
        </Link>
      </div>
    </div>
  );
}
