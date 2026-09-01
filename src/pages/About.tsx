import { Link } from "react-router";
import PageHero from "../components/PageHero";
import FadeUp from "../components/FadeUp";

export default function About() {
  return (
    <>
      <PageHero
        section="About"
        title="BORN IN<br />DAR ES SALAAM.<br /><span className='text-cyan-300'>BUILT FOR THE WORLD.</span>"
        subtitle="Ocean City Community Marathon — Tanzania's premier coastal marathon."
        img="https://images.unsplash.com/photo-1439405326854-014607f694d7?w=1600&h=900&fit=crop&auto=format"
        imgAlt="Ocean at golden hour"
      />

      <section className="py-24 lg:py-36 bg-white text-slate-900">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <FadeUp>
              <h2 className="font-display text-slate-900 leading-none mb-8 font-black" style={{ fontSize: "clamp(36px, 5vw, 72px)" }}>
                OUR <span className="text-sky-600">STORY</span>
              </h2>
              <p className="font-body text-slate-700 text-base lg:text-xl leading-relaxed mb-5 font-normal">
                The Ocean City Community Marathon was born from a belief that sport has the power to transform lives, build communities, and put Tanzania on the world stage.
              </p>
              <p className="font-body text-slate-600 text-base lg:text-lg leading-relaxed mb-5 font-light">
                Launched in 2021 by Plus One Events Solutions, the marathon has grown from an ambitious debut into one of East Africa's most anticipated sporting events — staged along the stunning coastline of Coco Beach, Dar es Salaam.
              </p>
              <p className="font-body text-slate-600 text-base lg:text-lg leading-relaxed font-light">
                Our vision is clear: to grow Ocean City Marathon into an internationally recognised, world-class event that celebrates Tanzania's athletes, communities, natural beauty, and social ambition.
              </p>
            </FadeUp>

            <FadeUp delay={150}>
              <h2 className="font-display text-slate-900 leading-none mb-8 font-black" style={{ fontSize: "clamp(36px, 5vw, 72px)" }}>
                THE <span className="text-sky-600">ORGANISER</span>
              </h2>
              <p className="font-body text-slate-700 text-base lg:text-xl leading-relaxed mb-5 font-normal">
                <strong className="text-sky-900 font-bold bg-sky-100 px-2 py-0.5 rounded">Plus One Events Solutions / Plus One Sports Agency</strong> is the organising body behind the Ocean City Community Marathon.
              </p>
              <p className="font-body text-slate-600 text-base lg:text-lg leading-relaxed mb-8 font-light">
                We are committed to producing world-class sporting events that reflect Tanzania's ambition, celebrate our communities, and create lasting social impact.
              </p>
              <div className="space-y-3 bg-sky-50/80 p-6 rounded-2xl border border-sky-200">
                <a href="http://plusoneventz.com" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 font-wide text-[13px] text-sky-600 tracking-[0.15em] hover:text-sky-800 transition-colors font-extrabold">
                  <span className="text-sky-600">→</span> plusoneventz.com
                </a>
                <a href="tel:+255613786110"
                  className="flex items-center gap-3 font-wide text-[13px] text-slate-800 tracking-[0.15em] hover:text-sky-600 transition-colors font-bold">
                  <span className="text-sky-600">→</span> +255 613 786 110
                </a>
                <a href="https://instagram.com/oceancitymarathon" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 font-wide text-[13px] text-slate-800 tracking-[0.15em] hover:text-sky-600 transition-colors font-bold">
                  <span className="text-sky-600">→</span> @oceancitymarathon
                </a>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-sky-600 via-cyan-600 to-sky-700 text-white relative overflow-hidden shadow-inner">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 text-center relative z-10">
          <FadeUp>
            <div className="font-wide text-[11px] text-cyan-100 tracking-[0.35em] uppercase mb-6 font-bold bg-sky-900/40 px-4 py-1.5 rounded-full w-fit mx-auto border border-cyan-200/30">Our Ambition</div>
            <h2 className="font-display text-white leading-none font-black drop-shadow-md" style={{ fontSize: "clamp(28px, 4.5vw, 68px)" }}>
              TO JOIN THE COMPANY OF BERLIN,<br />LONDON, NEW YORK AND BOSTON —<br />ONE STEP AT A TIME.
            </h2>
            <p className="font-body text-cyan-100 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto mt-8 font-normal">
              We present this as an ambition — built through dedication, community, and the growing recognition of Tanzanian athletics on the world stage.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-sky-50 to-white border-t border-sky-200 text-center">
        <FadeUp>
          <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/255613786110?text=Hello%2C%20I%20want%20to%20register%20for%20the%20Ocean%20City%20Community%20Marathon%202026."
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-display text-[15px] tracking-[0.15em] uppercase bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-10 py-5 transition-all duration-300 font-extrabold shadow-md rounded-lg"
                style={{ clipPath: "polygon(10px 0,100% 0,calc(100% - 10px) 100%,0 100%)" }}>
                💬 REGISTER VIA WHATSAPP (+255 613 786 110)
              </a>
              <Link to="/contact"
                className="inline-flex font-display text-[14px] tracking-[0.12em] uppercase border-2 border-sky-400 hover:bg-sky-50 text-sky-700 px-10 py-5 transition-all duration-300 font-bold rounded-lg">
                GET IN TOUCH
              </Link>
            </div>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
