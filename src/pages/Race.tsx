import { Link } from "react-router";
import PageHero from "../components/PageHero";
import FadeUp from "../components/FadeUp";

export default function Race() {
  const races = [
    {
      km: "21", label: "HALF MARATHON", target: "THE COMPETITIVE RUNNER",
      desc: "The premium race. A test of endurance, strategy, and speed along Dar es Salaam's breathtaking coastline. For runners seeking a serious personal challenge on one of East Africa's most scenic courses.",
      img: "https://images.unsplash.com/photo-1746046318047-4e4860c53aca?w=900&h=600&fit=crop&auto=format",
      placeholder: true,
    },
    {
      km: "10", label: "ROAD RACE", target: "THE CHALLENGER",
      desc: "A powerful mid-distance test. Perfect for those stepping up their race experience — or pushing for a new personal best. Experience the energy of Ocean City with every stride.",
      img: "https://images.unsplash.com/photo-1774050250283-2444f7d634d5?w=900&h=600&fit=crop&auto=format",
      placeholder: true,
    },
    {
      km: "5", label: "COMMUNITY RUN", target: "EVERYONE",
      desc: "For everyone. Families, first-timers, youth groups, and corporate teams. This is where community becomes movement — and every step counts toward the 300 children goal.",
      img: "https://images.unsplash.com/photo-1459183885421-5cc683b8dbba?w=900&h=600&fit=crop&auto=format",
      placeholder: true,
    },
  ];

  return (
    <>
      <PageHero
        section="Race Categories"
        title="CHOOSE YOUR<br />DISTANCE."
        subtitle="Race categories subject to official confirmation. Registration opening soon."
        img="https://images.unsplash.com/photo-1774050250283-2444f7d634d5?w=1600&h=900&fit=crop&auto=format"
        imgAlt="Marathon runners"
        cta={{ label: "REGISTER TO RUN", to: "/registration" }}
      />

      <section className="py-24 lg:py-36 bg-[var(--color-ocean-950)]">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="space-y-24 lg:space-y-36">
            {races.map(({ km, label, target, desc, img, placeholder }, i) => (
              <FadeUp key={km}>
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <div className="relative overflow-hidden bg-[var(--color-ocean-900)] aspect-video lg:aspect-[4/3]">
                    <img src={img} alt={label} className="w-full h-full object-cover opacity-70 hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(2,11,24,0.4) 0%, transparent 60%)" }} />
                    {placeholder && (
                      <div className="absolute top-4 left-4 bg-[var(--color-ocean-950)]/80 px-3 py-1.5">
                        <span className="font-wide text-[9px] text-white/50 tracking-[0.25em] uppercase">Placeholder Category</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="font-wide text-[10px] text-[var(--color-aqua)] tracking-[0.35em] uppercase mb-6">FOR {target}</div>
                    <div className="font-display text-white leading-none mb-2 num-glow" style={{ fontWeight: 900, fontSize: "clamp(80px, 10vw, 136px)" }}>{km}</div>
                    <div className="font-display text-[var(--color-aqua)] text-2xl lg:text-3xl tracking-[0.08em] uppercase mb-6" style={{ fontWeight: 700 }}>KM — {label}</div>
                    <p className="font-body text-white/55 text-base lg:text-lg leading-relaxed mb-8" style={{ fontWeight: 300 }}>{desc}</p>
                    <div className="flex items-center gap-4 p-4 border border-white/8 mb-8">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0"><circle cx="10" cy="10" r="9" stroke="rgba(255,255,255,0.3)" strokeWidth="1" /><path d="M10 6V10L13 13" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" /></svg>
                      <div>
                        <div className="font-wide text-[10px] text-white/35 tracking-[0.2em] uppercase">Registration Status</div>
                        <div className="font-wide text-white/65 text-sm tracking-[0.1em]">Coming Soon · Details to be announced</div>
                      </div>
                    </div>
                    <Link to="/registration"
                      className="inline-flex items-center gap-3 font-display text-[13px] tracking-[0.15em] uppercase bg-[var(--color-ocean-400)] hover:bg-[var(--color-aqua)] text-white px-8 py-4 transition-all duration-300"
                      style={{ fontWeight: 800, clipPath: "polygon(8px 0,100% 0,calc(100% - 8px) 100%,0 100%)" }}>
                      REGISTER INTEREST
                    </Link>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Race day info */}
      <section className="py-20 lg:py-28 bg-[var(--color-ocean-900)]">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <FadeUp>
            <h2 className="font-display text-white leading-none mb-12" style={{ fontWeight: 900, fontSize: "clamp(36px, 5vw, 68px)" }}>RACE DAY INFORMATION</h2>
          </FadeUp>
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              { icon: "📅", label: "Date", value: "14 November 2026" },
              { icon: "📍", label: "Location", value: "Coco Beach, Dar es Salaam" },
              { icon: "⏰", label: "Start Time", value: "To be announced" },
              { icon: "🏅", label: "Prize Money", value: "To be announced" },
              { icon: "📋", label: "Registration", value: "Coming soon" },
              { icon: "🤝", label: "Categories", value: "Subject to confirmation" },
            ].map(({ icon, label, value }) => (
              <FadeUp key={label}>
                <div className="border border-white/8 p-6">
                  <div className="text-2xl mb-3">{icon}</div>
                  <div className="font-wide text-[10px] text-[var(--color-aqua)] tracking-[0.25em] uppercase mb-1">{label}</div>
                  <div className="font-body text-white/65 text-base" style={{ fontWeight: 300 }}>{value}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
