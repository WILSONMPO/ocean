import PageHero from "../components/PageHero";
import FadeUp from "../components/FadeUp";

export default function SportsTourism() {
  return (
    <>
      <PageHero
        section="Sports Tourism"
        title="DISCOVER<br />TANZANIA BY<br /><span className='text-cyan-300'>THE OCEAN.</span>"
        subtitle="Combine your marathon experience with East Africa's most breathtaking coastal landscape."
        img="https://images.unsplash.com/photo-1474524955719-b9f87c50ce47?w=1600&h=900&fit=crop&auto=format"
        imgAlt="Dar es Salaam ocean coastline"
      />

      <section className="py-24 lg:py-36 bg-white text-slate-900">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeUp>
              <h2 className="font-display text-slate-900 leading-none mb-8 font-black" style={{ fontSize: "clamp(40px, 5.5vw, 80px)" }}>
                DAR ES SALAAM:<br /><span className="text-sky-600">THE COASTAL CITY</span>
              </h2>
              <p className="font-body text-slate-700 text-base lg:text-xl leading-relaxed mb-5 font-normal">
                Dar es Salaam — the haven of peace — is Tanzania's vibrant coastal metropolis, where warm Indian Ocean waters meet rich culture, dynamic hospitality, and unforgettable sunsets.
              </p>
              <p className="font-body text-slate-600 text-base lg:text-lg leading-relaxed mb-5 font-light">
                The Ocean City Community Marathon offers runners and visitors a unique opportunity to race along the iconic Coco Beach shoreline, experiencing the energy, warmth, and natural beauty of Dar es Salaam.
              </p>
              <p className="font-body text-slate-600 text-base lg:text-lg leading-relaxed font-light">
                From post-race ocean dips to coastal dining, cultural landmarks, and island excursions to Bongoyo and Mbudya, Ocean City is an unforgettable sports tourism destination.
              </p>
            </FadeUp>

            <FadeUp delay={150}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "Coco Beach", label: "Race Hub Location" },
                  { num: "Indian Ocean", label: "Coastal Race Route" },
                  { num: "Bahari Tour", label: "Elite Experience" },
                  { num: "Dar es Salaam", label: "Host Destination" },
                ].map(({ num, label }) => (
                  <div key={label} className="border-2 border-sky-200 bg-sky-50/60 rounded-2xl p-6 shadow-sm hover:border-sky-400 transition-colors">
                    <div className="font-display text-sky-600 text-2xl lg:text-3xl mb-2 font-black uppercase">{num}</div>
                    <div className="font-wide text-slate-700 text-[10px] tracking-[0.2em] uppercase font-extrabold">{label}</div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Bahari Tour Announcement */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-sky-600 via-cyan-600 to-sky-700 text-white relative overflow-hidden shadow-inner">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 text-center relative z-10">
          <FadeUp>
            <div className="font-wide text-[11px] text-cyan-100 tracking-[0.35em] uppercase mb-6 font-bold bg-sky-900/40 px-4 py-1.5 rounded-full w-fit mx-auto border border-cyan-200/30">EXCLUSIVE EXPERIENCE</div>
            <h2 className="font-display text-white leading-none font-black drop-shadow-md" style={{ fontSize: "clamp(32px, 5vw, 72px)" }}>
              BAHARI TOUR — AN ELITE EXPERIENCE FOR INTERNATIONAL RUNNERS
            </h2>
            <p className="font-body text-cyan-100 text-base lg:text-xl leading-relaxed max-w-2xl mx-auto mt-6 font-normal">
              Full details of the exclusive Bahari Tour experience for international runners will be announced shortly.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-sky-50/60 to-white border-t border-sky-200">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <FadeUp>
            <h2 className="font-display text-slate-900 leading-none mb-12 font-black" style={{ fontSize: "clamp(36px, 5vw, 68px)" }}>
              HIGHLIGHTS OF <span className="text-sky-600">DAR ES SALAAM</span>
            </h2>
          </FadeUp>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "COCO BEACH SHORELINE",
                desc: "The heartbeat of the race. Run with sea breezes and ocean views stretching to the horizon.",
                img: "https://images.unsplash.com/photo-1773864051846-a26915bb3019?w=600&h=400&fit=crop&auto=format",
              },
              {
                title: "ISLAND EXCURSIONS",
                desc: "Explore nearby marine reserves — Bongoyo and Mbudya Islands — just a short boat trip from the mainland.",
                img: "https://images.unsplash.com/photo-1439405326854-014607f694d7?w=600&h=400&fit=crop&auto=format",
              },
              {
                title: "SWAHILI HOSPITALITY",
                desc: "Experience the legendary warmth, cuisine, and vibrant energy of Tanzanian culture.",
                img: "https://images.unsplash.com/photo-1474524955719-b9f87c50ce47?w=600&h=400&fit=crop&auto=format",
              },
            ].map(({ title, desc, img }, i) => (
              <FadeUp key={title} delay={i * 80}>
                <div className="bg-white rounded-2xl border-2 border-sky-200 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-video overflow-hidden bg-sky-100">
                    <img src={img} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <div className="font-display text-slate-900 text-xl lg:text-2xl tracking-[0.05em] uppercase mb-3 font-extrabold">{title}</div>
                    <p className="font-body text-slate-600 text-sm leading-relaxed font-light">{desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="font-display text-slate-900 text-3xl lg:text-5xl leading-none mb-4 font-black">
              PLAN YOUR MARATHON TRIP
            </h3>
            <p className="font-body text-slate-600 text-base leading-relaxed max-w-md mx-auto mb-8 font-normal">
              Register via WhatsApp (+255 613 786 110) and connect with our team for event information.
            </p>
            <a href="https://wa.me/255613786110?text=Hello%2C%20I%20want%20to%20register%20for%20the%20Ocean%20City%20Community%20Marathon%202026."
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-display text-[15px] tracking-[0.15em] uppercase bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-10 py-5 transition-all duration-300 font-extrabold shadow-md rounded-lg"
              style={{ clipPath: "polygon(10px 0,100% 0,calc(100% - 10px) 100%,0 100%)" }}>
              💬 REGISTER VIA WHATSAPP (+255 613 786 110)
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
