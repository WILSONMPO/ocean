import { Link } from "react-router";
import PageHero from "../components/PageHero";
import FadeUp from "../components/FadeUp";

export default function SportsTourism() {
  return (
    <>
      <PageHero
        section="Sports Tourism"
        title="SPORTS ×<br />TOURISM ×<br /><span style='color:var(--color-aqua)'>TANZANIA.</span>"
        subtitle="Ocean City Marathon is a flagship platform for Tanzania's sports tourism ambitions."
        img="https://images.unsplash.com/photo-1607949666679-73bbe2fb26a4?w=1600&h=900&fit=crop&auto=format"
        imgAlt="Tanzania beach"
        cta={{ label: "REGISTER TO RUN", to: "/registration" }}
      />

      {/* Run by the ocean */}
      <section className="py-24 lg:py-36 bg-[var(--color-ocean-950)]">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeUp>
              <h2 className="font-display text-white leading-none mb-8" style={{ fontWeight: 900, fontSize: "clamp(40px, 5.5vw, 80px)" }}>
                RUN BY<br />THE OCEAN.
              </h2>
              <p className="font-body text-white/55 text-base lg:text-xl leading-relaxed mb-6" style={{ fontWeight: 300 }}>
                Dar es Salaam is one of Africa's most vibrant coastal cities — and Coco Beach offers one of the continent's most breathtaking marathon routes. The Indian Ocean stretches to the horizon as runners push through every kilometre.
              </p>
              <p className="font-body text-white/55 text-base lg:text-lg leading-relaxed mb-6" style={{ fontWeight: 300 }}>
                Ocean City Marathon is more than a race. It is a destination experience — combining world-class sport with the extraordinary natural beauty, culture, and warmth of Tanzania.
              </p>
              <p className="font-body text-white/55 text-base lg:text-lg leading-relaxed" style={{ fontWeight: 300 }}>
                We are committed to promoting Tanzania's natural and cultural resources, marine tourism, and ocean conservation through the power of sport.
              </p>
            </FadeUp>

            <FadeUp delay={150}>
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2 aspect-video overflow-hidden bg-[var(--color-ocean-900)]">
                  <img src="https://images.unsplash.com/photo-1474524955719-b9f87c50ce47?w=900&h=500&fit=crop&auto=format" alt="Golden hour ocean" className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="aspect-square overflow-hidden bg-[var(--color-ocean-900)]">
                  <img src="https://images.unsplash.com/photo-1625151012343-00d17ffb40dd?w=400&h=400&fit=crop&auto=format" alt="Tanzania coast" className="w-full h-full object-cover opacity-75 hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="aspect-square overflow-hidden bg-[var(--color-ocean-900)]">
                  <img src="https://images.unsplash.com/photo-1607949666679-73bbe2fb26a4?w=400&h=400&fit=crop&auto=format" alt="East Africa beach" className="w-full h-full object-cover opacity-75 hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Bahari Tour */}
      <section className="py-24 lg:py-36 bg-[var(--color-ocean-900)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "radial-gradient(circle at 70% 50%, var(--color-aqua) 0%, transparent 60%)" }} />
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 relative z-10">
          <FadeUp>
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-[1px] bg-[var(--color-aqua)]" />
                <span className="font-wide text-[10px] text-[var(--color-aqua)] tracking-[0.35em] uppercase">Exclusive Programme</span>
              </div>
              <h2 className="font-display text-white leading-none mb-8" style={{ fontWeight: 900, fontSize: "clamp(52px, 8vw, 112px)" }}>
                BAHARI<br />TOUR
              </h2>
              <p className="font-body text-white/55 text-base lg:text-xl leading-relaxed mb-6" style={{ fontWeight: 300 }}>
                For international elite runners, the Ocean City Marathon introduces <strong className="text-white font-normal">Bahari Tour</strong> — a curated, exclusive journey through Tanzania's most extraordinary ocean and cultural landscapes.
              </p>
              <p className="font-body text-white/55 text-base lg:text-lg leading-relaxed mb-10" style={{ fontWeight: 300 }}>
                More than a race package, Bahari Tour positions Tanzania as a world-class destination for sports tourism — combining athletic excellence with immersive cultural and natural experiences. Details to be announced.
              </p>
              <div className="inline-flex items-center gap-3 px-6 py-3 border border-white/10">
                <div className="w-2 h-2 rounded-full bg-[var(--color-aqua)] animate-pulse" />
                <span className="font-wide text-white/45 text-[11px] tracking-[0.25em] uppercase">Bahari Tour Details — Coming Soon</span>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Why Dar */}
      <section className="py-20 lg:py-28 bg-[var(--color-ocean-950)]">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <FadeUp>
            <h2 className="font-display text-white leading-none mb-12" style={{ fontWeight: 900, fontSize: "clamp(36px, 5vw, 68px)" }}>
              WHY DAR ES SALAAM?
            </h2>
          </FadeUp>
          <div className="grid lg:grid-cols-4 gap-5">
            {[
              { title: "THE OCEAN", desc: "Run alongside the Indian Ocean on one of East Africa's most beautiful coastal routes." },
              { title: "THE CITY", desc: "Tanzania's commercial heart — vibrant, energetic, and growing on the world stage." },
              { title: "THE CULTURE", desc: "Rich Swahili heritage, warm community spirit, and a city alive with music, food, and art." },
              { title: "THE CLIMATE", desc: "November's coastal climate creates ideal conditions for marathon running and outdoor experience." },
            ].map(({ title, desc }, i) => (
              <FadeUp key={title} delay={i * 80}>
                <div className="border-t-2 border-[var(--color-aqua)]/30 pt-6">
                  <div className="font-display text-white text-xl lg:text-2xl tracking-[0.05em] uppercase mb-3" style={{ fontWeight: 800 }}>{title}</div>
                  <p className="font-body text-white/45 text-sm leading-relaxed" style={{ fontWeight: 300 }}>{desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--color-ocean-900)] text-center">
        <FadeUp>
          <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
            <h3 className="font-display text-white text-3xl lg:text-5xl leading-none mb-4" style={{ fontWeight: 900 }}>
              EXPERIENCE TANZANIA.<br />THROUGH RUNNING.
            </h3>
            <p className="font-body text-white/45 text-base mb-10 max-w-xl mx-auto" style={{ fontWeight: 300 }}>
              Join 3,000+ runners at one of East Africa's most scenic marathon routes this November.
            </p>
            <Link to="/registration"
              className="inline-flex font-display text-[14px] tracking-[0.15em] uppercase bg-[var(--color-ocean-400)] hover:bg-[var(--color-aqua)] text-white px-10 py-4 transition-all duration-300"
              style={{ fontWeight: 800, clipPath: "polygon(10px 0,100% 0,calc(100% - 10px) 100%,0 100%)" }}>
              REGISTER TO RUN
            </Link>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
