import { Link } from "react-router";
import PageHero from "../components/PageHero";
import FadeUp from "../components/FadeUp";

export default function About() {
  return (
    <>
      <PageHero
        section="About"
        title="BORN IN<br />DAR ES SALAAM.<br /><span style='color:var(--color-aqua)'>BUILT FOR THE WORLD.</span>"
        subtitle="Ocean City Community Marathon — Tanzania's premier coastal marathon."
        img="https://images.unsplash.com/photo-1439405326854-014607f694d7?w=1600&h=900&fit=crop&auto=format"
        imgAlt="Ocean at golden hour"
      />

      <section className="py-24 lg:py-36 bg-[var(--color-ocean-950)]">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <FadeUp>
              <h2 className="font-display text-white leading-none mb-8" style={{ fontWeight: 900, fontSize: "clamp(36px, 5vw, 72px)" }}>
                OUR STORY
              </h2>
              <p className="font-body text-white/55 text-base lg:text-xl leading-relaxed mb-5" style={{ fontWeight: 300 }}>
                The Ocean City Community Marathon was born from a belief that sport has the power to transform lives, build communities, and put Tanzania on the world stage.
              </p>
              <p className="font-body text-white/55 text-base lg:text-lg leading-relaxed mb-5" style={{ fontWeight: 300 }}>
                Launched in 2021 by Plus One Events Solutions, the marathon has grown from an ambitious debut into one of East Africa's most anticipated sporting events — staged along the stunning coastline of Coco Beach, Dar es Salaam.
              </p>
              <p className="font-body text-white/55 text-base lg:text-lg leading-relaxed" style={{ fontWeight: 300 }}>
                Our vision is clear: to grow Ocean City Marathon into an internationally recognised, world-class event that celebrates Tanzania's athletes, communities, natural beauty, and social ambition.
              </p>
            </FadeUp>

            <FadeUp delay={150}>
              <h2 className="font-display text-white leading-none mb-8" style={{ fontWeight: 900, fontSize: "clamp(36px, 5vw, 72px)" }}>
                THE ORGANISER
              </h2>
              <p className="font-body text-white/55 text-base lg:text-xl leading-relaxed mb-5" style={{ fontWeight: 300 }}>
                <strong className="text-white font-normal">Plus One Events Solutions / Plus One Sports Agency</strong> is the organising body behind the Ocean City Community Marathon.
              </p>
              <p className="font-body text-white/55 text-base lg:text-lg leading-relaxed mb-8" style={{ fontWeight: 300 }}>
                We are committed to producing world-class sporting events that reflect Tanzania's ambition, celebrate our communities, and create lasting social impact.
              </p>
              <div className="space-y-3">
                <a href="http://plusoneventz.com" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 font-wide text-[12px] text-[var(--color-aqua)] tracking-[0.15em] hover:text-white transition-colors">
                  <span className="text-[var(--color-aqua)]">→</span> plusoneventz.com
                </a>
                <a href="tel:+255613786110"
                  className="flex items-center gap-3 font-wide text-[12px] text-white/55 tracking-[0.15em] hover:text-white transition-colors">
                  <span className="text-[var(--color-aqua)]">→</span> +255 613 786 110
                </a>
                <a href="https://instagram.com/oceancitymarathon" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 font-wide text-[12px] text-white/55 tracking-[0.15em] hover:text-[var(--color-aqua)] transition-colors">
                  <span className="text-[var(--color-aqua)]">→</span> @oceancitymarathon
                </a>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 lg:py-28 bg-[var(--color-ocean-400)] relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 text-center relative z-10">
          <FadeUp>
            <div className="font-wide text-[10px] text-white/55 tracking-[0.35em] uppercase mb-6">Our Ambition</div>
            <h2 className="font-display text-white leading-none" style={{ fontWeight: 900, fontSize: "clamp(28px, 4.5vw, 68px)" }}>
              TO JOIN THE COMPANY OF BERLIN,<br />LONDON, NEW YORK AND BOSTON —<br />ONE STEP AT A TIME.
            </h2>
            <p className="font-body text-white/65 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto mt-8" style={{ fontWeight: 300 }}>
              We present this as an ambition — built through dedication, community, and the growing recognition of Tanzanian athletics on the world stage.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--color-ocean-950)] text-center">
        <FadeUp>
          <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/registration"
                className="inline-flex font-display text-[14px] tracking-[0.15em] uppercase bg-[var(--color-ocean-400)] hover:bg-[var(--color-aqua)] text-white px-10 py-4 transition-all duration-300"
                style={{ fontWeight: 800, clipPath: "polygon(10px 0,100% 0,calc(100% - 10px) 100%,0 100%)" }}>
                REGISTER TO RUN
              </Link>
              <Link to="/contact"
                className="inline-flex font-display text-[14px] tracking-[0.12em] uppercase border border-white/25 hover:border-white/55 text-white/65 hover:text-white px-10 py-4 transition-all duration-300"
                style={{ fontWeight: 600 }}>
                GET IN TOUCH
              </Link>
            </div>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
