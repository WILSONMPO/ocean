import { Link } from "react-router";
import PageHero from "../components/PageHero";
import FadeUp from "../components/FadeUp";

export default function Marathon() {
  return (
    <>
      <PageHero
        section="The Marathon"
        title="AN EVENT.<br />A MOVEMENT.<br /><span className='text-cyan-300'>A NATION.</span>"
        subtitle="12 December 2026 · Coco Beach, Dar es Salaam, Tanzania"
        img="https://images.unsplash.com/photo-1774050021111-8118f1e3c013?w=1600&h=900&fit=crop&auto=format"
        imgAlt="Marathon runners at the finish"
        cta={{ label: "REGISTER TO RUN", to: "/registration" }}
      />

      {/* About */}
      <section className="py-24 lg:py-36 bg-white text-slate-900">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <FadeUp>
              <h2 className="font-display text-slate-900 leading-none mb-8 font-black" style={{ fontSize: "clamp(40px, 5vw, 72px)" }}>
                ABOUT THE<br /><span className="text-sky-600">MARATHON</span>
              </h2>
              <p className="font-body text-slate-700 text-base lg:text-lg leading-relaxed mb-5 font-normal">
                The Ocean City Community Marathon is Tanzania's premier coastal marathon event, staged along the breathtaking shores of Coco Beach, Dar es Salaam. Now in its third edition, the marathon has evolved from a powerful local debut into a platform for athletic excellence, community health, and national pride.
              </p>
              <p className="font-body text-slate-600 text-base lg:text-lg leading-relaxed mb-5 font-light">
                The event is organised by Plus One Events Solutions / Plus One Sports Agency, with a vision to grow the marathon into an internationally recognised sporting experience that showcases Tanzania on the world stage.
              </p>
              <p className="font-body text-slate-600 text-base lg:text-lg leading-relaxed font-light">
                Beyond the finish line, every edition of Ocean City Marathon carries a social mission — investing in the wellbeing of children, families, and communities across Tanzania.
              </p>
            </FadeUp>

            <FadeUp delay={150}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "3,000+", label: "Expected Runners" },
                  { num: "III", label: "Third Edition" },
                  { num: "12 DEC", label: "Race Day 2026" },
                  { num: "300", label: "Children Supported" },
                ].map(({ num, label }) => (
                  <div key={label} className="border-2 border-sky-200 bg-sky-50/60 rounded-xl p-6 lg:p-8 shadow-sm hover:border-sky-400 transition-colors">
                    <div className="font-display text-sky-600 leading-none mb-2 font-black" style={{ fontSize: "clamp(36px, 4vw, 56px)" }}>{num}</div>
                    <div className="font-wide text-slate-700 text-[11px] tracking-[0.2em] uppercase font-extrabold">{label}</div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Theme */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-sky-600 via-cyan-600 to-sky-700 text-white relative overflow-hidden shadow-inner">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 text-center relative z-10">
          <FadeUp>
            <div className="font-wide text-[11px] text-cyan-100 tracking-[0.35em] uppercase mb-6 font-bold bg-sky-900/40 px-4 py-1 rounded-full w-fit mx-auto border border-cyan-200/30">2026 THEME</div>
            <h2 className="font-display text-white leading-none font-black drop-shadow-md" style={{ fontSize: "clamp(32px, 5vw, 72px)" }}>
              "RUN FOR HEALTH, RUN FOR NATION —<br />EMPOWERING YOUTH, ONE STEP AT A TIME"
            </h2>
          </FadeUp>
        </div>
      </section>

      {/* Event Facts */}
      <section className="py-24 lg:py-32 bg-sky-50/50 border-t border-sky-200">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <FadeUp>
            <h2 className="font-display text-slate-900 leading-none mb-14 font-black" style={{ fontSize: "clamp(36px, 5vw, 68px)" }}>
              EVENT <span className="text-sky-600">DETAILS</span>
            </h2>
          </FadeUp>
          <div className="grid lg:grid-cols-2 gap-4">
            {[
              { label: "DATE", value: "12 December 2026" },
              { label: "LOCATION", value: "Coco Beach, Dar es Salaam, Tanzania" },
              { label: "ORGANISER", value: "Plus One Events Solutions / Plus One Sports Agency" },
              { label: "EXPECTED RUNNERS", value: "3,000+" },
              { label: "PARTICIPANTS", value: "Runners, Families, Corporates, Youth Groups" },
              { label: "CONTACT", value: "+255 613 786 110" },
            ].map(({ label, value }, i) => (
              <FadeUp key={label} delay={i * 60}>
                <div className="flex gap-8 py-5 px-6 border border-sky-200 bg-white rounded-xl shadow-xs">
                  <div className="font-wide text-[11px] text-sky-600 tracking-[0.25em] uppercase w-36 shrink-0 pt-1 font-extrabold">{label}</div>
                  <div className="font-body text-slate-800 text-base font-semibold">{value}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-sky-200 text-center">
        <FadeUp>
          <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
            <h3 className="font-display text-slate-900 text-3xl lg:text-5xl leading-none mb-8 font-black">READY TO RUN?</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/255613786110?text=Hello%2C%20I%20want%20to%20register%20for%20the%20Ocean%20City%20Community%20Marathon%202026."
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-display text-[15px] tracking-[0.15em] uppercase bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white px-10 py-5 transition-all duration-300 font-extrabold shadow-md rounded-lg"
                style={{ clipPath: "polygon(10px 0,100% 0,calc(100% - 10px) 100%,0 100%)" }}>
                💬 REGISTER VIA WHATSAPP (+255 613 786 110)
              </a>
              <Link to="/race"
                className="inline-flex font-display text-[14px] tracking-[0.12em] uppercase border-2 border-sky-400 hover:bg-sky-50 text-sky-700 px-10 py-5 transition-all duration-300 font-bold rounded-lg">
                VIEW RACE CATEGORIES
              </Link>
            </div>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
