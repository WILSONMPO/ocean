import { Link } from "react-router";
import PageHero from "../components/PageHero";
import FadeUp from "../components/FadeUp";

export default function Marathon() {
  return (
    <>
      <PageHero
        section="The Marathon"
        title="AN EVENT.<br />A MOVEMENT.<br /><span style='color:var(--color-aqua)'>A NATION.</span>"
        subtitle="14 November 2026 · Coco Beach, Dar es Salaam, Tanzania"
        img="https://images.unsplash.com/photo-1774050021111-8118f1e3c013?w=1600&h=900&fit=crop&auto=format"
        imgAlt="Marathon runners at the finish"
        cta={{ label: "REGISTER TO RUN", to: "/registration" }}
      />

      {/* About */}
      <section className="py-24 lg:py-36 bg-[var(--color-ocean-950)]">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <FadeUp>
              <h2 className="font-display text-white leading-none mb-8" style={{ fontWeight: 900, fontSize: "clamp(40px, 5vw, 72px)" }}>
                ABOUT THE<br />MARATHON
              </h2>
              <p className="font-body text-white/55 text-base lg:text-lg leading-relaxed mb-5" style={{ fontWeight: 300 }}>
                The Ocean City Community Marathon is Tanzania's premier coastal marathon event, staged along the breathtaking shores of Coco Beach, Dar es Salaam. Now in its third edition, the marathon has evolved from a powerful local debut into a platform for athletic excellence, community health, and national pride.
              </p>
              <p className="font-body text-white/55 text-base lg:text-lg leading-relaxed mb-5" style={{ fontWeight: 300 }}>
                The event is organised by Plus One Events Solutions / Plus One Sports Agency, with a vision to grow the marathon into an internationally recognised sporting experience that showcases Tanzania on the world stage.
              </p>
              <p className="font-body text-white/55 text-base lg:text-lg leading-relaxed" style={{ fontWeight: 300 }}>
                Beyond the finish line, every edition of Ocean City Marathon carries a social mission — investing in the wellbeing of children, families, and communities across Tanzania.
              </p>
            </FadeUp>

            <FadeUp delay={150}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "3,000+", label: "Expected Runners" },
                  { num: "III", label: "Third Edition" },
                  { num: "14 NOV", label: "Race Day 2026" },
                  { num: "300", label: "Children Supported" },
                ].map(({ num, label }) => (
                  <div key={label} className="border border-white/8 p-6 lg:p-8">
                    <div className="font-display text-[var(--color-aqua)] leading-none mb-2" style={{ fontWeight: 900, fontSize: "clamp(36px, 4vw, 56px)" }}>{num}</div>
                    <div className="font-wide text-white/40 text-[11px] tracking-[0.2em] uppercase">{label}</div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Theme */}
      <section className="py-20 lg:py-28 bg-[var(--color-ocean-400)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 40px)" }} />
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 text-center relative z-10">
          <FadeUp>
            <div className="font-wide text-[10px] text-white/60 tracking-[0.35em] uppercase mb-6">2026 THEME</div>
            <h2 className="font-display text-white leading-none" style={{ fontWeight: 900, fontSize: "clamp(32px, 5vw, 72px)" }}>
              "RUN FOR HEALTH, RUN FOR NATION —<br />EMPOWERING YOUTH, ONE STEP AT A TIME"
            </h2>
          </FadeUp>
        </div>
      </section>

      {/* Event Facts */}
      <section className="py-24 lg:py-32 bg-[var(--color-ocean-900)]">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <FadeUp>
            <h2 className="font-display text-white leading-none mb-14" style={{ fontWeight: 900, fontSize: "clamp(36px, 5vw, 68px)" }}>
              EVENT DETAILS
            </h2>
          </FadeUp>
          <div className="grid lg:grid-cols-2 gap-0">
            {[
              { label: "DATE", value: "14 November 2026" },
              { label: "LOCATION", value: "Coco Beach, Dar es Salaam, Tanzania" },
              { label: "ORGANISER", value: "Plus One Events Solutions / Plus One Sports Agency" },
              { label: "EXPECTED RUNNERS", value: "3,000+" },
              { label: "PARTICIPANTS", value: "Runners, Families, Corporates, Youth Groups" },
              { label: "CONTACT", value: "+255 613 786 110" },
            ].map(({ label, value }, i) => (
              <FadeUp key={label} delay={i * 60}>
                <div className="flex gap-8 py-6 border-t border-white/8">
                  <div className="font-wide text-[10px] text-[var(--color-aqua)] tracking-[0.25em] uppercase w-32 shrink-0 pt-1">{label}</div>
                  <div className="font-body text-white/75 text-base" style={{ fontWeight: 300 }}>{value}</div>
                </div>
              </FadeUp>
            ))}
            <div className="border-t border-white/8 lg:col-span-2" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--color-ocean-950)] text-center">
        <FadeUp>
          <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
            <h3 className="font-display text-white text-3xl lg:text-5xl leading-none mb-8" style={{ fontWeight: 900 }}>READY TO RUN?</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/registration"
                className="inline-flex font-display text-[14px] tracking-[0.15em] uppercase bg-[var(--color-ocean-400)] hover:bg-[var(--color-aqua)] text-white px-10 py-4 transition-all duration-300"
                style={{ fontWeight: 800, clipPath: "polygon(10px 0,100% 0,calc(100% - 10px) 100%,0 100%)" }}>
                REGISTER NOW
              </Link>
              <Link to="/race"
                className="inline-flex font-display text-[14px] tracking-[0.12em] uppercase border border-white/25 hover:border-white/55 text-white/65 hover:text-white px-10 py-4 transition-all duration-300"
                style={{ fontWeight: 600 }}>
                VIEW RACE CATEGORIES
              </Link>
            </div>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
