import { Link } from "react-router";
import PageHero from "../components/PageHero";
import FadeUp from "../components/FadeUp";

const packages = [
  {
    tier: "TANZANITE",
    price: "TZS 125,000,000",
    color: "var(--color-aqua)",
    tagline: "TITLE PARTNER",
    benefits: [
      "Title naming rights across all event platforms",
      "Primary logo on all event communications",
      "Exclusive broadcast and media visibility",
      "VIP hospitality for key personnel",
      "Full digital brand integration",
      "Exclusive athlete/race branding rights",
      "Press conference and launch presence",
      "Social media featuring and activation",
    ],
  },
  {
    tier: "GOLD",
    price: "TZS 100,000,000",
    color: "#f5c842",
    tagline: "PREMIUM PARTNER",
    benefits: [
      "Prominent logo across all event platforms",
      "Digital and physical brand exposure",
      "Broadcast visibility package",
      "VIP hospitality access",
      "Social media integration",
      "Race-day brand activation zone",
      "Post-event media coverage inclusion",
    ],
  },
  {
    tier: "SILVER",
    price: "TZS 75,000,000",
    color: "#c0c0c0",
    tagline: "ASSOCIATE PARTNER",
    benefits: [
      "Logo on event communications and digital channels",
      "Event-day brand presence",
      "Social media brand features",
      "Race-day exposure",
      "Partner recognition in event media",
    ],
  },
  {
    tier: "BRONZE",
    price: "TZS 50,000,000",
    color: "#cd7f32",
    tagline: "SUPPORTING PARTNER",
    benefits: [
      "Brand placement on key event assets",
      "Community channel presence",
      "Event-day acknowledgement",
      "Social media recognition",
    ],
  },
  {
    tier: "SPOTBUY",
    price: "TZS 20,000,000",
    color: "rgba(255,255,255,0.5)",
    tagline: "TARGETED ELEMENT",
    benefits: [
      "Single targeted sponsorship opportunity",
      "Specific asset or element branding",
      "Tailored to brand objectives",
    ],
  },
];

export default function Sponsors() {
  return (
    <>
      <PageHero
        section="Sponsorship"
        title="PARTNER WITH<br />THE MOVEMENT."
        subtitle="Put your brand at the heart of Tanzania's next great sporting experience."
        img="https://images.unsplash.com/photo-1774050021111-8118f1e3c013?w=1600&h=900&fit=crop&auto=format"
        imgAlt="Marathon event"
        cta={{ label: "BECOME A PARTNER", to: "/contact" }}
      />

      {/* Intro */}
      <section className="py-24 lg:py-36 bg-[var(--color-ocean-950)]">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <FadeUp>
              <h2 className="font-display text-white leading-none mb-8" style={{ fontWeight: 900, fontSize: "clamp(36px, 5vw, 72px)" }}>
                WHY SPONSOR<br />OCEAN CITY<br /><span className="text-[var(--color-aqua)]">MARATHON?</span>
              </h2>
              <p className="font-body text-white/55 text-base lg:text-lg leading-relaxed mb-5" style={{ fontWeight: 300 }}>
                Ocean City Marathon puts your brand at the intersection of sport, community, health, and social impact — reaching 3,000+ runners, families, corporates, and youth groups in one of Africa's fastest-growing cities.
              </p>
              <p className="font-body text-white/55 text-base lg:text-lg leading-relaxed" style={{ fontWeight: 300 }}>
                Sponsoring Ocean City Marathon means joining a movement that is not just about racing — it is about building a healthier, stronger Tanzania. Your brand becomes part of that story.
              </p>
            </FadeUp>
            <FadeUp delay={150}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "3,000+", label: "Direct Audience" },
                  { num: "5+", label: "Media Channels" },
                  { num: "300", label: "Children Impacted" },
                  { num: "14 NOV", label: "Race Day 2026" },
                ].map(({ num, label }) => (
                  <div key={label} className="border border-white/8 p-6">
                    <div className="font-display text-[var(--color-aqua)] text-3xl lg:text-5xl mb-2" style={{ fontWeight: 900 }}>{num}</div>
                    <div className="font-wide text-white/40 text-[10px] tracking-[0.2em] uppercase">{label}</div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 lg:py-36 bg-[var(--color-ocean-900)]">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <FadeUp>
            <h2 className="font-display text-white leading-none mb-14" style={{ fontWeight: 900, fontSize: "clamp(36px, 5vw, 72px)" }}>
              SPONSORSHIP<br />PACKAGES
            </h2>
          </FadeUp>

          <div className="space-y-5">
            {packages.map(({ tier, price, color, tagline, benefits }, i) => (
              <FadeUp key={tier} delay={i * 80}>
                <div className="group border border-white/8 hover:border-white/20 transition-all duration-300">
                  <div className="grid lg:grid-cols-3 gap-0">
                    {/* Left: tier info */}
                    <div className="p-8 border-b lg:border-b-0 lg:border-r border-white/8">
                      <div className="w-10 h-[2px] mb-6" style={{ background: color }} />
                      <div className="font-display text-white text-3xl lg:text-4xl tracking-[0.06em] uppercase mb-2" style={{ fontWeight: 900 }}>{tier}</div>
                      <div className="font-wide text-[10px] tracking-[0.25em] uppercase mb-4" style={{ color }}>{tagline}</div>
                      <div className="font-display text-white/70 text-xl lg:text-2xl tracking-[0.04em]" style={{ fontWeight: 700 }}>{price}</div>
                    </div>
                    {/* Right: benefits */}
                    <div className="lg:col-span-2 p-8">
                      <div className="font-wide text-[10px] text-white/28 tracking-[0.3em] uppercase mb-5">Package Includes</div>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {benefits.map((b) => (
                          <li key={b} className="flex items-start gap-3">
                            <span className="text-[var(--color-aqua)] text-xs mt-[2px] shrink-0">✦</span>
                            <span className="font-body text-white/50 text-sm leading-relaxed" style={{ fontWeight: 300 }}>{b}</span>
                          </li>
                        ))}
                      </ul>
                      <Link to="/contact"
                        className="inline-flex items-center gap-2 font-wide text-[11px] tracking-[0.2em] uppercase text-white/35 hover:text-[var(--color-aqua)] transition-colors border-b border-white/12 hover:border-[var(--color-aqua)]/40 pb-1 mt-6">
                        ENQUIRE ABOUT {tier} →
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-[var(--color-ocean-950)] text-center">
        <FadeUp>
          <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
            <h3 className="font-display text-white text-3xl lg:text-5xl leading-none mb-6" style={{ fontWeight: 900 }}>
              READY TO PARTNER?
            </h3>
            <p className="font-body text-white/45 text-base mb-10 max-w-xl mx-auto" style={{ fontWeight: 300 }}>
              Contact Plus One Events Solutions to discuss sponsorship opportunities and customised partnership packages.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact"
                className="inline-flex font-display text-[14px] tracking-[0.15em] uppercase bg-[var(--color-ocean-400)] hover:bg-[var(--color-aqua)] text-white px-10 py-4 transition-all duration-300"
                style={{ fontWeight: 800, clipPath: "polygon(10px 0,100% 0,calc(100% - 10px) 100%,0 100%)" }}>
                CONTACT US NOW
              </Link>
              <a href="tel:+255613786110"
                className="inline-flex font-display text-[14px] tracking-[0.12em] uppercase border border-white/25 hover:border-white/55 text-white/65 hover:text-white px-10 py-4 transition-all duration-300"
                style={{ fontWeight: 600 }}>
                +255 613 786 110
              </a>
            </div>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
