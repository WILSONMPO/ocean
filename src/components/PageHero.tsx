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
    <section className="relative min-h-[55vh] lg:min-h-[70vh] flex items-end overflow-hidden">
      <div className="absolute inset-0 bg-[var(--color-ocean-950)]">
        <img
          src={img}
          alt={imgAlt}
          className="w-full h-full object-cover opacity-35"
          style={{ objectPosition: "center 40%" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(2,11,24,0.5) 0%, rgba(2,11,24,0.3) 30%, rgba(2,11,24,0.85) 80%, #020b18 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(2,11,24,0.7) 0%, transparent 60%)" }}
        />
      </div>
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-aqua)]/40 to-transparent" />

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-10 pb-16 lg:pb-24 pt-32 lg:pt-36 w-full">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-8 h-[1px] bg-[var(--color-aqua)]" />
          <span className="font-wide text-[10px] text-[var(--color-aqua)] tracking-[0.35em] uppercase">{section}</span>
        </div>
        <h1
          className="font-display text-white leading-none mb-4"
          style={{ fontWeight: 900, fontSize: "clamp(52px, 9vw, 130px)" }}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        {subtitle && (
          <p className="font-wide text-white/50 text-base lg:text-xl tracking-[0.12em] max-w-xl" style={{ fontWeight: 300 }}>
            {subtitle}
          </p>
        )}
        {cta && (
          <Link
            to={cta.to}
            className="inline-flex items-center gap-3 font-display text-[14px] tracking-[0.15em] uppercase bg-[var(--color-ocean-400)] hover:bg-[var(--color-aqua)] text-white px-8 py-4 transition-all duration-300 mt-8"
            style={{ fontWeight: 800, clipPath: "polygon(10px 0,100% 0,calc(100% - 10px) 100%,0 100%)" }}
          >
            {cta.label}
          </Link>
        )}
      </div>
    </section>
  );
}
