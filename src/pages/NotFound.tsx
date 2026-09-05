import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-6 text-center">
      <div>
        <div className="font-display text-white/10 leading-none mb-4" style={{ fontWeight: 900, fontSize: "clamp(120px, 20vw, 240px)" }}>
          404
        </div>
        <div className="font-display text-white text-4xl lg:text-6xl leading-none mb-4 -mt-16 font-black">PAGE NOT FOUND</div>
        <p className="font-body text-slate-300 text-base mb-10 font-light">The page you're looking for doesn't exist.</p>
        <Link to="/"
          className="inline-flex font-display text-[14px] tracking-[0.15em] uppercase bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-500 hover:to-cyan-500 text-white px-8 py-4 transition-all duration-300 font-extrabold shadow-lg rounded-md"
          style={{ clipPath: "polygon(8px 0,100% 0,calc(100% - 8px) 100%,0 100%)" }}>
          BACK TO HOME
        </Link>
      </div>
    </div>
  );
}

