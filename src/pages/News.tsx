import PageHero from "../components/PageHero";
import FadeUp from "../components/FadeUp";
import { Link } from "react-router";

const articles = [
  {
    tag: "ANNOUNCEMENT", date: "August 2026", featured: true,
    title: "Ocean City Marathon 2026 Date Confirmed: 14 November",
    excerpt: "Plus One Events Solutions confirms the third edition of the Ocean City Community Marathon will take place on 14 November 2026 at Coco Beach, Dar es Salaam. Expected participation of 3,000+ runners, families, corporates and youth groups.",
    img: "https://images.unsplash.com/photo-1774050021111-8118f1e3c013?w=900&h=600&fit=crop&auto=format",
  },
  {
    tag: "CAUSE", date: "August 2026", featured: false,
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
    title: "Race Categories and Registration Details — Coming Soon",
    excerpt: "Official race categories for the 2026 edition will be confirmed shortly. Stay tuned for full registration details, distances, and entry fees.",
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
        section="News & Announcements"
        title="LATEST FROM<br /><span style='color:var(--color-aqua)'>OCEAN CITY.</span>"
        subtitle="Updates, announcements, and stories from the Ocean City Community Marathon."
        img="https://images.unsplash.com/photo-1439405326854-014607f694d7?w=1600&h=900&fit=crop&auto=format"
        imgAlt="Ocean at golden hour"
      />

      {/* Featured */}
      {featured && (
        <section className="py-16 lg:py-24 bg-[var(--color-ocean-950)]">
          <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
            <FadeUp>
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <div className="overflow-hidden bg-[var(--color-ocean-900)] aspect-video lg:aspect-[3/2]">
                  <img src={featured.img} alt={featured.title} className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700" />
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <span className="font-wide text-[var(--color-aqua)] text-[9px] tracking-[0.35em] uppercase">{featured.tag}</span>
                    <span className="font-wide text-white/30 text-[9px] tracking-[0.2em] uppercase">{featured.date}</span>
                    <span className="font-wide text-[9px] tracking-[0.2em] uppercase px-3 py-1 bg-[var(--color-ocean-400)] text-white">FEATURED</span>
                  </div>
                  <h2 className="font-display text-white text-2xl lg:text-4xl tracking-[0.02em] uppercase mb-5" style={{ fontWeight: 900 }}>{featured.title}</h2>
                  <p className="font-body text-white/50 text-base leading-relaxed" style={{ fontWeight: 300 }}>{featured.excerpt}</p>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>
      )}

      {/* Grid */}
      <section className="py-16 lg:py-24 bg-[var(--color-ocean-900)]">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-8">
            {rest.map(({ tag, date, title, excerpt, img }, i) => (
              <FadeUp key={title} delay={i * 80}>
                <article className="group cursor-pointer">
                  <div className="aspect-video overflow-hidden bg-[var(--color-ocean-800)] mb-5">
                    <img src={img} alt={title} className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-600" />
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-wide text-[var(--color-aqua)] text-[9px] tracking-[0.3em] uppercase">{tag}</span>
                    <span className="font-wide text-white/28 text-[9px] tracking-[0.2em] uppercase">{date}</span>
                  </div>
                  <h3 className="font-display text-white text-xl lg:text-2xl tracking-[0.02em] uppercase mb-3 group-hover:text-[var(--color-aqua)] transition-colors duration-300" style={{ fontWeight: 800 }}>{title}</h3>
                  <p className="font-body text-white/38 text-sm leading-relaxed" style={{ fontWeight: 300 }}>{excerpt}</p>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Follow CTA */}
      <section className="py-16 bg-[var(--color-ocean-950)] text-center">
        <FadeUp>
          <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
            <p className="font-wide text-white/40 text-[11px] tracking-[0.25em] uppercase mb-4">Stay Updated</p>
            <h3 className="font-display text-white text-2xl lg:text-4xl mb-8" style={{ fontWeight: 900 }}>FOLLOW @OCEANCITYMARATHON</h3>
            <a href="https://instagram.com/oceancitymarathon" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-display text-[13px] tracking-[0.15em] uppercase border border-[var(--color-aqua)] text-[var(--color-aqua)] hover:bg-[var(--color-aqua)] hover:text-white px-8 py-4 transition-all duration-300"
              style={{ fontWeight: 700 }}>
              INSTAGRAM →
            </a>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
