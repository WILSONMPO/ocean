import PageHero from "../components/PageHero";
import FadeUp from "../components/FadeUp";
import { Link } from "react-router";

const articles = [
  {
    tag: "ANNOUNCEMENT", date: "December 2026", featured: true,
    title: "Ocean City Marathon 2026 Date Confirmed: 12 December",
    excerpt: "Plus One Events Solutions confirms the third edition of the Ocean City Community Marathon will take place on 12 December 2026 at Coco Beach, Dar es Salaam. Expected participation of 3,000+ runners, families, corporates and youth groups.",
    img: "https://images.unsplash.com/photo-1774050021111-8118f1e3c013?w=900&h=600&fit=crop&auto=format",
  },
  {
    tag: "CAUSE", date: "December 2026", featured: false,
    title: "2026 Marathon to Fund Health Insurance for 300 Orphaned Children",
    excerpt: "This year's event carries a powerful social mission. Every step fuels our goal to provide health insurance coverage for 300 orphaned children across Tanzania.",
    img: "https://images.unsplash.com/photo-1459183885421-5cc683b8dbba?w=600&h=400&fit=crop&auto=format",
  },
  {
    tag: "SPORTS TOURISM", date: "Coming Soon", featured: false,
    title: "Bahari Tour: An Exclusive Experience for International Elite Runners",
    excerpt: "Details of the Bahari Tour curated experience for international elite athletes will be announced soon. Follow @oceancitymarathon for updates.",
    img: "https://images.unsplash.com/photo-1474524955719-b9f87c50ce47?w=600&h=400&fit=crop&auto=format",
  },
  {
    tag: "RACE", date: "Coming Soon", featured: false,
    title: "Race Categories and Registration Details — Open via WhatsApp",
    excerpt: "Official race categories for the 2026 edition are confirmed. Register via WhatsApp (+255 613 786 110) for 21KM, 10KM, and 5KM distances.",
    img: "https://images.unsplash.com/photo-1746046318047-4e4860c53aca?w=600&h=400&fit=crop&auto=format",
  },
  {
    tag: "SPONSORSHIP", date: "Coming Soon", featured: false,
    title: "Sponsorship Packages Now Available — Partner with the Movement",
    excerpt: "Five premium sponsorship packages are available for the 2026 Ocean City Community Marathon, from Tanzanite (TZS 125M) to Spotbuy (TZS 20M). Contact us to enquire.",
    img: "https://images.unsplash.com/photo-1751400042022-ae67e0dc06e2?w=600&h=400&fit=crop&auto=format",
  },
  {
    tag: "LEGACY", date: "August 2026", featured: false,
    title: "A Look Back: The 2021 Inaugural Ocean City Community Marathon",
    excerpt: "The 2021 inaugural marathon awarded Toyota Passo vehicles to the 21km male and female winners, and distributed TZS 25.1 million in prize money to 18 winners — a historic beginning.",
    img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop&auto=format",
  },
];

export default function News() {
  const featured = articles.find((a) => a.featured);
  const rest = articles.filter((a) => !a.featured);

  return (
    <>
      <PageHero
        section="News & Updates"
        title="LATEST FROM<br /><span className='text-cyan-300'>OCEAN CITY.</span>"
        subtitle="Official announcements, cause updates, athlete features, and marathon stories."
        img="https://images.unsplash.com/photo-1774050021111-8118f1e3c013?w=1600&h=900&fit=crop&auto=format"
        imgAlt="Marathon runners"
      />

      <section className="py-24 lg:py-36 bg-gradient-to-b from-sky-50/60 to-white text-slate-900">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          {featured && (
            <FadeUp>
              <div className="mb-16 lg:mb-24 bg-white rounded-2xl border-2 border-sky-200 overflow-hidden shadow-xl">
                <div className="grid lg:grid-cols-12 gap-0 items-center">
                  <div className="lg:col-span-7 aspect-video lg:aspect-[16/10] overflow-hidden bg-sky-100">
                    <img src={featured.img} alt={featured.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="lg:col-span-5 p-8 lg:p-12">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-wide text-sky-600 text-[10px] tracking-[0.3em] uppercase font-bold bg-sky-100 px-3 py-1 rounded-md">{featured.tag}</span>
                      <span className="font-wide text-slate-500 text-[10px] tracking-[0.2em] uppercase font-semibold">{featured.date}</span>
                    </div>
                    <h2 className="font-display text-slate-900 text-3xl lg:text-5xl leading-tight uppercase mb-4 font-black">{featured.title}</h2>
                    <p className="font-body text-slate-600 text-base leading-relaxed mb-6 font-normal">{featured.excerpt}</p>
                  </div>
                </div>
              </div>
            </FadeUp>
          )}

          <div className="grid lg:grid-cols-3 gap-8">
            {rest.map(({ tag, date, title, excerpt, img }, i) => (
              <FadeUp key={title} delay={i * 80}>
                <article className="bg-white p-6 rounded-2xl border-2 border-sky-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                  <div className="aspect-video overflow-hidden rounded-xl bg-sky-100 mb-5">
                    <img src={img} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-wide text-sky-600 text-[10px] tracking-[0.3em] uppercase font-bold bg-sky-100 px-2.5 py-0.5 rounded">{tag}</span>
                    <span className="font-wide text-slate-500 text-[10px] tracking-[0.2em] uppercase font-semibold">{date}</span>
                  </div>
                  <h3 className="font-display text-slate-900 text-xl lg:text-2xl tracking-[0.02em] uppercase mb-3 font-extrabold">{title}</h3>
                  <p className="font-body text-slate-600 text-sm leading-relaxed mb-6 flex-1 font-light">{excerpt}</p>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-sky-50 border-t border-sky-200 text-center">
        <FadeUp>
          <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
            <h3 className="font-display text-slate-900 text-3xl lg:text-5xl leading-none mb-6 font-black">STAY UPDATED</h3>
            <p className="font-body text-slate-600 text-base max-w-md mx-auto mb-8 font-normal">
              Follow @oceancitymarathon on Instagram for live updates, athlete announcements, and race day information.
            </p>
            <a href="https://instagram.com/oceancitymarathon" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-display text-[14px] tracking-[0.15em] uppercase bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-500 hover:to-cyan-500 text-white px-10 py-5 transition-all duration-300 font-extrabold shadow-md rounded-lg">
              FOLLOW @OCEANCITYMARATHON
            </a>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
