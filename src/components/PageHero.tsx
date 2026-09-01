import { Link } from "react-router";

interface Props {
  section: string;
  title: string;
  subtitle?: string;
  img: string;
  imgAlt: string;
  cta?: { label: string; to: string };
}

export default function PageHero({ section, title, subtitle, img, imgAlt, cta }: Props) {
  return (
    <section className="relative min-h-[50vh] lg:min-h-[62vh] flex items-end overflow-hidden bg-gradient-to-r from-sky-950 via-sky-900 to-cyan-950">
      <div className="absolute inset-0">
        <img
          src={img}
          alt={imgAlt}
          className="w-full h-full object-cover opacity-45 mix-blend-overlay"
          style={{ objectPosition: "center 40%" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(3,105,161,0.5) 0%, rgba(3,105,161,0.75) 60%, rgba(12,74,110,0.95) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(12,74,110,0.9) 0%, transparent 70%)" }}
        />
      </div>
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-10 pb-16 lg:pb-20 pt-32 lg:pt-36 w-full">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-10 h-[3px] bg-gradient-to-r from-cyan-300 to-sky-400 rounded-full" />
          <span className="font-wide text-[11px] text-cyan-200 tracking-[0.35em] uppercase font-bold bg-sky-900/60 px-3.5 py-1 rounded-full border border-cyan-300/30 backdrop-blur-xs">
            {section}
          </span>
        </div>
        <h1
          className="font-display text-white leading-none mb-4 drop-shadow-md"
          style={{ fontWeight: 900, fontSize: "clamp(48px, 8.5vw, 120px)" }}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        {subtitle && (
          <p className="font-wide text-sky-100 text-base lg:text-xl tracking-[0.1em] max-w-xl font-medium drop-shadow-xs">
            {subtitle}
          </p>
        )}
        {cta && (
          <Link
            to={cta.to}
            className="inline-flex items-center gap-3 font-display text-[14px] tracking-[0.15em] uppercase bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-white px-8 py-4 transition-all duration-300 mt-8 shadow-xl shadow-sky-900/40 font-extrabold rounded-md"
            style={{ clipPath: "polygon(10px 0,100% 0,calc(100% - 10px) 100%,0 100%)" }}
          >
            {cta.label}
          </Link>
        )}
      </div>
    </section>
  );
}
