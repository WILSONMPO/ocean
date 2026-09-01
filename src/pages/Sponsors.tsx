import { Link } from "react-router";
import PageHero from "../components/PageHero";
import FadeUp from "../components/FadeUp";

export default function Sponsors() {
  const packages = [
    {
      tier: "TANZANITE", price: "TZS 125,000,000", color: "#0284c7", highlight: true,
      perks: ["Title partner branding on all materials & race bibs", "Exclusive start & finish line branding", "VIP stage presence & trophy presentation", "Primary logo on all media, TV & digital campaigns", "Complimentary entries for 50 corporate runners"],
    },
    {
      tier: "GOLD", price: "TZS 100,000,000", color: "#d97706", highlight: false,
      perks: ["Major sponsor branding across race course", "Start or finish line banner placement", "Logo on race t-shirts, medals & bibs", "Full page feature in official race program", "Complimentary entries for 30 corporate runners"],
    },
    {
      tier: "SILVER", price: "TZS 75,000,000", color: "#0284c7", highlight: false,
      perks: ["Course branding at key locations & water stations", "Logo on official race website & social media", "Exhibition booth space at Coco Beach event village", "Complimentary entries for 20 corporate runners"],
    },
    {
      tier: "BRONZE", price: "TZS 50,000,000", color: "#0ea5e9", highlight: false,
      perks: ["Branding at water stations & mile markers", "Logo on official event backdrop & digital assets", "Complimentary entries for 10 corporate runners"],
    },
    {
      tier: "SPOTBUY", price: "TZS 20,000,000", color: "#0284c7", highlight: false,
      perks: ["Targeted branding opportunity (water point / mile marker / LED screen)", "Logo inclusion on sponsor wall & website"],
    },
  ];

  return (
    <>
      <PageHero
        section="Sponsorship"
        title="PARTNER WITH<br /><span className='text-cyan-300'>THE MOVEMENT.</span>"
        subtitle="Sponsorship opportunities for the 2026 Ocean City Community Marathon."
        img="https://images.unsplash.com/photo-1751400042022-ae67e0dc06e2?w=1600&h=900&fit=crop&auto=format"
        imgAlt="Corporate runners and sponsors"
        cta={{ label: "BECOME A SPONSOR", to: "/contact" }}
      />

      <section className="py-24 lg:py-36 bg-white text-slate-900">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeUp>
              <h2 className="font-display text-slate-900 leading-none mb-8 font-black" style={{ fontSize: "clamp(36px, 5vw, 72px)" }}>
                WHY SPONSOR<br /><span className="text-sky-600">OCEAN CITY?</span>
              </h2>
              <p className="font-body text-slate-700 text-base lg:text-lg leading-relaxed mb-5 font-normal">
                Ocean City Marathon puts your brand at the intersection of sport, community, health, and social impact — reaching 3,000+ runners, families, corporates, and youth groups in one of Africa's fastest-growing cities.
              </p>
              <p className="font-body text-slate-600 text-base lg:text-lg leading-relaxed font-light">
                Sponsoring Ocean City Marathon means joining a movement that is not just about racing — it is about building a healthier, stronger Tanzania. Your brand becomes part of that story.
              </p>
            </FadeUp>
            <FadeUp delay={150}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "3,000+", label: "Direct Audience" },
                  { num: "5+", label: "Media Channels" },
                  { num: "300", label: "Children Impacted" },
                  { num: "12 DEC", label: "Race Day 2026" },
                ].map(({ num, label }) => (
                  <div key={label} className="border-2 border-sky-200 bg-sky-50/60 rounded-xl p-6 shadow-sm hover:border-sky-400 transition-colors">
                    <div className="font-display text-sky-600 text-3xl lg:text-5xl mb-2 font-black">{num}</div>
                    <div className="font-wide text-slate-700 text-[10px] tracking-[0.2em] uppercase font-bold">{label}</div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 lg:py-36 bg-gradient-to-b from-sky-50/60 to-white border-t border-sky-200">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <FadeUp>
            <h2 className="font-display text-slate-900 leading-none mb-14 font-black" style={{ fontSize: "clamp(36px, 5vw, 72px)" }}>
              SPONSORSHIP<br /><span className="text-sky-600">PACKAGES</span>
            </h2>
          </FadeUp>

          <div className="space-y-6">
            {packages.map(({ tier, price, color, highlight, perks }, i) => (
              <FadeUp key={tier} delay={i * 70}>
                <div className={`p-8 rounded-2xl border-2 transition-all duration-300 ${highlight ? "bg-gradient-to-r from-sky-900 via-sky-800 to-cyan-950 text-white border-cyan-300 shadow-xl" : "bg-white text-slate-900 border-sky-200 shadow-md hover:shadow-lg hover:border-sky-400"
                  }`}>
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
                    <div>
                      <div className="w-12 h-1 mb-2 rounded-full" style={{ background: color }} />
                      <div className={`font-display text-3xl lg:text-4xl tracking-[0.06em] uppercase mb-1 font-black ${highlight ? "text-white" : "text-slate-900"}`}>{tier}</div>
                      <div className="font-wide text-lg lg:text-xl tracking-[0.05em] uppercase font-extrabold" style={{ color: highlight ? "#7dd3fc" : color }}>{price}</div>
                    </div>
                    <Link to="/contact"
                      className={`inline-flex items-center justify-center font-display text-[13px] tracking-[0.15em] uppercase px-8 py-4 transition-all duration-300 font-extrabold rounded-lg ${highlight ? "bg-gradient-to-r from-cyan-400 to-sky-500 hover:from-cyan-300 hover:to-sky-400 text-sky-950 shadow-lg" : "bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-500 hover:to-cyan-500 text-white shadow-md"
                        }`}>
                      ENQUIRE FOR {tier}
                    </Link>
                  </div>
                  <div className="border-t border-sky-200/40 pt-6">
                    <div className={`font-wide text-[10px] tracking-[0.25em] uppercase mb-4 font-bold ${highlight ? "text-cyan-200" : "text-sky-700"}`}>Key Deliverables:</div>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {perks.map((p, j) => (
                        <div key={j} className="flex items-start gap-2.5">
                          <span style={{ color: highlight ? "#7dd3fc" : color }} className="font-bold">✓</span>
                          <span className={`font-body text-sm ${highlight ? "text-sky-100 font-normal" : "text-slate-700 font-normal"}`}>{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Sponsorship */}
      <section className="py-20 bg-white border-t border-sky-200 text-center">
        <FadeUp>
          <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
            <h3 className="font-display text-slate-900 text-3xl lg:text-5xl leading-none mb-6 font-black">NEED A CUSTOM PACKAGE?</h3>
            <p className="font-body text-slate-600 text-base max-w-lg mx-auto mb-8 font-normal">
              We work with corporate partners to tailor sponsorship packages that align precisely with your brand objectives and budget.
            </p>
            <Link to="/contact"
              className="inline-flex items-center gap-3 font-display text-[14px] tracking-[0.15em] uppercase bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-500 hover:to-cyan-500 text-white px-10 py-5 transition-all duration-300 font-extrabold shadow-md rounded-lg">
              CONTACT OUR SPONSORSHIP TEAM
            </Link>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
