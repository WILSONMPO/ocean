import { Link } from "react-router";
import PageHero from "../components/PageHero";
import FadeUp from "../components/FadeUp";

export default function Race() {
  const races = [
    {
      km: "21", label: "HALF MARATHON", target: "THE COMPETITIVE RUNNER",
      desc: "The premium race. A test of endurance, strategy, and speed along Dar es Salaam's breathtaking coastline. For runners seeking a serious personal challenge on one of East Africa's most scenic courses.",
      img: "https://images.unsplash.com/photo-1746046318047-4e4860c53aca?w=900&h=600&fit=crop&auto=format",
    },
    {
      km: "10", label: "ROAD RACE", target: "THE CHALLENGER",
      desc: "A powerful mid-distance test. Perfect for those stepping up their race experience — or pushing for a new personal best. Experience the energy of Ocean City with every stride.",
      img: "https://images.unsplash.com/photo-1774050250283-2444f7d634d5?w=900&h=600&fit=crop&auto=format",
    },
    {
      km: "5", label: "COMMUNITY RUN", target: "EVERYONE",
      desc: "For everyone. Families, first-timers, youth groups, and corporate teams. This is where community becomes movement — and every step counts toward the 300 children goal.",
      img: "https://images.unsplash.com/photo-1459183885421-5cc683b8dbba?w=900&h=600&fit=crop&auto=format",
    },
  ];

  return (
    <>
      <PageHero
        section="Race Categories"
        title="CHOOSE YOUR<br /><span className='text-cyan-300'>DISTANCE.</span>"
        subtitle="12 December 2026 · Coco Beach, Dar es Salaam · Instant Registration via WhatsApp +255 613 786 110."
        img="https://images.unsplash.com/photo-1774050250283-2444f7d634d5?w=1600&h=900&fit=crop&auto=format"
        imgAlt="Marathon runners"
        cta={{ label: "REGISTER TO RUN", to: "/registration" }}
      />

      <section className="py-24 lg:py-36 bg-white text-slate-900">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="space-y-24 lg:space-y-36">
            {races.map(({ km, label, target, desc, img }, i) => (
              <FadeUp key={km}>
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <div className="relative overflow-hidden rounded-2xl bg-sky-100 shadow-xl aspect-video lg:aspect-[4/3] border-4 border-sky-100">
                    <img src={img} alt={label} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div>
                    <div className="font-wide text-[11px] text-sky-700 tracking-[0.35em] uppercase mb-4 font-bold bg-sky-100 px-3 py-1 rounded-md w-fit border border-sky-200">FOR {target}</div>
                    <div className="font-display text-sky-600 leading-none mb-2 font-black" style={{ fontSize: "clamp(80px, 10vw, 136px)" }}>{km}</div>
                    <div className="font-display text-slate-900 text-2xl lg:text-3xl tracking-[0.08em] uppercase mb-6 font-extrabold">{km} KM — {label}</div>
                    <p className="font-body text-slate-700 text-base lg:text-lg leading-relaxed mb-8 font-normal">{desc}</p>
                    <div className="flex items-center gap-4 p-5 border-2 border-emerald-200 bg-emerald-50 rounded-xl mb-8 shadow-xs">
                      <div className="text-2xl">💬</div>
                      <div>
                        <div className="font-wide text-[10px] text-emerald-800 tracking-[0.2em] uppercase font-bold">Registration via WhatsApp</div>
                        <div className="font-wide text-slate-800 text-sm tracking-[0.05em] font-bold">Instant Registration with Admin: +255 613 786 110</div>
                      </div>
                    </div>
                    <a href="https://wa.me/255613786110?text=Hello%2C%20I%20want%20to%20register%20for%20the%20Ocean%20City%20Community%20Marathon%202026."
                      target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 font-display text-[14px] tracking-[0.15em] uppercase bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-8 py-4 transition-all duration-300 font-extrabold shadow-md rounded-lg"
                      style={{ clipPath: "polygon(8px 0,100% 0,calc(100% - 8px) 100%,0 100%)" }}>
                      💬 REGISTER VIA WHATSAPP (+255 613 786 110)
                    </a>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Race day info */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-sky-50 to-white border-t border-sky-200">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <FadeUp>
            <h2 className="font-display text-slate-900 leading-none mb-12 font-black" style={{ fontSize: "clamp(36px, 5vw, 68px)" }}>RACE DAY <span className="text-sky-600">INFORMATION</span></h2>
          </FadeUp>
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              { icon: "📅", label: "Date", value: "12 December 2026" },
              { icon: "📍", label: "Location", value: "Coco Beach, Dar es Salaam" },
              { icon: "⏰", label: "Start Time", value: "06:00 AM EAT" },
              { icon: "🏅", label: "Prizes & Medals", value: "Available for all finishers" },
              { icon: "📋", label: "Registration", value: "Open via WhatsApp (+255 613 786 110)" },
              { icon: "🤝", label: "Distances", value: "21KM Half Marathon · 10KM Road Race · 5KM Run" },
            ].map(({ icon, label, value }) => (
              <FadeUp key={label}>
                <div className="border-2 border-sky-200 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-3">{icon}</div>
                  <div className="font-wide text-[10px] text-sky-600 tracking-[0.25em] uppercase mb-1 font-bold">{label}</div>
                  <div className="font-body text-slate-800 text-base font-semibold">{value}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
