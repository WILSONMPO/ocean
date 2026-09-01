import { Link } from "react-router";
import PageHero from "../components/PageHero";
import FadeUp from "../components/FadeUp";

export default function Cause() {
  return (
    <>
      <PageHero
        section="The Cause"
        title="EVERY STEP<br />CAN CHANGE<br /><span className='text-cyan-300'>A LIFE.</span>"
        subtitle="The 2026 Ocean City Community Marathon aims to provide health insurance for 300 orphaned children."
        img="https://images.unsplash.com/photo-1524603642524-b02ea114f009?w=1600&h=900&fit=crop&auto=format"
        imgAlt="Children running together"
        cta={{ label: "RUN FOR A CAUSE", to: "/registration" }}
      />

      {/* The mission */}
      <section className="py-24 lg:py-36 bg-white text-slate-900">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <FadeUp>
              <h2 className="font-display text-slate-900 leading-none mb-8 font-black" style={{ fontSize: "clamp(40px, 5.5vw, 80px)" }}>
                THE 2026<br /><span className="text-sky-600">SOCIAL MISSION</span>
              </h2>
              <p className="font-body text-slate-700 text-base lg:text-xl leading-relaxed mb-6 font-normal">
                Sport has the power to change lives — and the Ocean City Community Marathon is proof. The 2026 edition carries a mission beyond athletic achievement: to provide health insurance coverage for <strong className="text-sky-900 font-bold bg-sky-100 px-2 py-0.5 rounded">300 orphaned children</strong> across Tanzania.
              </p>
              <p className="font-body text-slate-600 text-base lg:text-lg leading-relaxed mb-6 font-light">
                Health is a fundamental right. Yet thousands of children in Tanzania live without access to basic healthcare. Through the generosity of our runners, sponsors, and community, we are turning athletic ambition into real-world impact.
              </p>
              <p className="font-body text-slate-600 text-base lg:text-lg leading-relaxed mb-10 font-light">
                Every kilometre run, every registration completed, every sponsorship secured — all contribute to the fund that will protect 300 children with the health coverage they deserve.
              </p>
            </FadeUp>

            <FadeUp delay={150}>
              <div className="space-y-6">
                {[
                  { num: "300", label: "CHILDREN", desc: "Orphaned children to receive health insurance coverage through the 2026 marathon fund." },
                  { num: "1", label: "COMMUNITY", desc: "One united community — runners, families, corporates, and youth — moving for a shared purpose." },
                  { num: "∞", label: "PURPOSE", desc: "A movement with an ambition that extends beyond any single finish line." },
                ].map(({ num, label, desc }) => (
                  <div key={label} className="border-l-4 border-sky-600 pl-6 py-4 bg-sky-50/70 rounded-r-2xl border-y border-r border-sky-200 shadow-sm">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="font-display text-sky-600 font-black" style={{ fontSize: "clamp(36px, 4vw, 56px)" }}>{num}</span>
                      <span className="font-wide text-sky-900 text-[11px] tracking-[0.25em] uppercase font-extrabold">{label}</span>
                    </div>
                    <p className="font-body text-slate-600 text-sm leading-relaxed font-light">{desc}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Impact quote */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-sky-600 via-cyan-600 to-sky-700 text-white relative overflow-hidden shadow-inner">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 text-center relative z-10">
          <FadeUp>
            <div className="font-display text-white/30 text-8xl lg:text-[140px] leading-none font-black font-serif">"</div>
            <blockquote className="font-display text-white leading-tight -mt-8 lg:-mt-14 font-extrabold drop-shadow-md" style={{ fontSize: "clamp(24px, 3.5vw, 52px)" }}>
              RUNNING IS NOT JUST A SPORT.<br />IT IS A VEHICLE FOR CHANGE.
            </blockquote>
            <p className="font-wide text-cyan-100 text-[11px] tracking-[0.3em] uppercase mt-6 font-bold bg-sky-900/40 px-4 py-1.5 rounded-full w-fit mx-auto border border-cyan-200/30">
              Ocean City Community Marathon 2026
            </p>
          </FadeUp>
        </div>
      </section>

      {/* How to help */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-sky-50/60 to-white border-t border-sky-200">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <FadeUp>
            <h2 className="font-display text-slate-900 leading-none mb-14 font-black" style={{ fontSize: "clamp(36px, 5vw, 68px)" }}>
              HOW YOU CAN <span className="text-sky-600">HELP</span>
            </h2>
          </FadeUp>
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                num: "01", title: "RUN", desc: "Register to run in the marathon. Every entry directly contributes to the health fund. Choose your distance — 5K, 10K, or 21K.",
                cta: "REGISTER TO RUN", to: "/registration", external: false,
              },
              {
                num: "02", title: "SPONSOR", desc: "Partner with the marathon as a corporate sponsor. Your brand investment funds health coverage for children while reaching 3,000+ runners.",
                cta: "BECOME A SPONSOR", to: "/sponsors", external: false,
              },
              {
                num: "03", title: "SHARE", desc: "Spread the word. Follow and share @oceancitymarathon on social media. Every conversation amplifies the mission.",
                cta: "FOLLOW ON INSTAGRAM", to: "https://instagram.com/oceancitymarathon", external: true,
              },
            ].map(({ num, title, desc, cta, to, external }) => (
              <FadeUp key={num}>
                <div className="border-2 border-sky-200 bg-white rounded-2xl p-8 h-full flex flex-col shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="font-display text-sky-300 text-5xl lg:text-6xl mb-4 font-black">{num}</div>
                  <div className="font-display text-sky-600 text-2xl lg:text-3xl tracking-[0.05em] uppercase mb-4 font-extrabold">{title}</div>
                  <p className="font-body text-slate-600 text-sm leading-relaxed mb-8 flex-1 font-light">{desc}</p>
                  {external ? (
                    <a href={to} target="_blank" rel="noopener noreferrer"
                      className="font-wide text-[11px] text-sky-600 hover:text-sky-800 tracking-[0.2em] uppercase font-bold border-b-2 border-sky-300 pb-1 w-fit">
                      {cta} →
                    </a>
                  ) : (
                    <Link to={to}
                      className="font-wide text-[11px] text-sky-600 hover:text-sky-800 tracking-[0.2em] uppercase font-bold border-b-2 border-sky-300 pb-1 w-fit">
                      {cta} →
                    </Link>
                  )}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
