import { useState, useEffect } from "react";
import { Link } from "react-router";
import FadeUp from "../components/FadeUp";

function useCountdown(target: Date) {
  const calc = () => {
    const diff = target.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

const pad = (n: number, len = 2) => String(n).padStart(len, "0");

/* ── Hero ─────────────────────────────────────────────── */
function Hero() {
  const race = new Date("2026-11-14T06:00:00+03:00");
  const { days, hours, minutes, seconds } = useCountdown(race);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <div className="absolute inset-0 bg-[var(--color-ocean-950)]">
        <img
          src="https://images.unsplash.com/photo-1773864051846-a26915bb3019?w=1800&h=1100&fit=crop&auto=format"
          alt="Coastal highway at dawn"
          className="w-full h-full object-cover opacity-40"
          style={{ objectPosition: "center 38%" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(170deg, rgba(2,11,24,0.75) 0%, rgba(2,11,24,0.25) 45%, rgba(2,11,24,0.88) 85%, #020b18 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(2,11,24,0.65) 0%, transparent 55%)" }} />
      </div>

      {/* top edge */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-aqua)]/50 to-transparent" />

      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-screen-xl mx-auto px-6 lg:px-10 pt-28 pb-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-[1px] bg-[var(--color-aqua)]" />
          <span className="font-wide text-[10px] text-[var(--color-aqua)] tracking-[0.35em] uppercase">Ocean City Community Marathon · Tanzania</span>
        </div>

        <h1 className="font-display text-white leading-none mb-4" style={{ fontWeight: 900, fontSize: "clamp(58px, 11vw, 152px)", letterSpacing: "-0.01em" }}>
          OCEAN CITY<br />
          <span style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.25)", color: "transparent" }}>MARATHON</span>
        </h1>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-2 mb-8">
          <span className="font-wide text-white/90 text-base lg:text-xl tracking-[0.2em]" style={{ fontWeight: 300 }}>14 NOVEMBER 2026</span>
          <span className="w-[1px] h-5 bg-white/20 hidden sm:block" />
          <span className="font-wide text-white/55 text-base lg:text-xl tracking-[0.15em]" style={{ fontWeight: 300 }}>DAR ES SALAAM, TANZANIA</span>
        </div>

        <p className="font-display text-[var(--color-aqua)] text-2xl lg:text-4xl tracking-[0.08em] uppercase mb-12" style={{ fontWeight: 700 }}>
          RUN FOR HEALTH. RUN FOR NATION.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-16">
          <Link to="/registration"
            className="inline-flex items-center gap-3 font-display text-[15px] tracking-[0.15em] uppercase bg-[var(--color-ocean-400)] hover:bg-[var(--color-aqua)] text-white px-8 py-4 transition-all duration-300"
            style={{ fontWeight: 800, clipPath: "polygon(10px 0,100% 0,calc(100% - 10px) 100%,0 100%)" }}>
            REGISTER TO RUN
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M3 7.5H12M12 7.5L7.5 3M12 7.5L7.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
          </Link>
          <Link to="/marathon"
            className="inline-flex items-center gap-3 font-display text-[15px] tracking-[0.12em] uppercase border border-white/25 hover:border-white/60 text-white/75 hover:text-white px-8 py-4 transition-all duration-300"
            style={{ fontWeight: 600 }}>
            EXPLORE THE MARATHON
          </Link>
          <Link to="/sponsors"
            className="inline-flex items-center font-wide text-[11px] tracking-[0.2em] uppercase text-white/40 hover:text-[var(--color-aqua)] transition-colors duration-200 pt-1">
            BECOME A SPONSOR →
          </Link>
        </div>

        {/* Countdown */}
        <div className="grid grid-cols-4 gap-3 sm:gap-8 lg:gap-14 max-w-2xl">
          {[
            { val: days, label: "DAYS", len: 3 },
            { val: hours, label: "HRS", len: 2 },
            { val: minutes, label: "MIN", len: 2 },
            { val: seconds, label: "SEC", len: 2 },
          ].map(({ val, label, len }) => (
            <div key={label} className="flex flex-col items-start">
              <div className="font-display text-white leading-none tabular-nums num-glow"
                style={{ fontWeight: 900, fontSize: "clamp(36px, 6.5vw, 92px)", letterSpacing: "-0.02em" }}>
                {pad(val, len)}
              </div>
              <div className="font-wide text-[var(--color-aqua)] text-[9px] lg:text-[11px] tracking-[0.3em] mt-1 opacity-80">{label}</div>
              <div className="w-full h-[1px] bg-white/10 mt-2" />
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 flex flex-col items-center pb-8 gap-2">
        <div className="w-[1px] h-10 bg-gradient-to-b from-transparent to-white/25" />
        <span className="font-wide text-[9px] text-white/35 tracking-[0.35em] uppercase">SCROLL TO DISCOVER</span>
      </div>
    </section>
  );
}

/* ── Marquee ──────────────────────────────────────────── */
function Marquee() {
  const items = ["OCEAN CITY MARATHON 2026", "14 NOVEMBER", "DAR ES SALAAM", "RUN FOR HEALTH", "RUN FOR NATION", "COCO BEACH", "TANZANIA", "3,000+ RUNNERS", "PLUS ONE SPORTS AGENCY"];
  return (
    <div className="overflow-hidden bg-[var(--color-ocean-400)] py-3">
      <div className="marquee-inner">
        {[...items, ...items].map((t, i) => (
          <div key={i} className="flex items-center gap-6 px-6">
            <span className="font-display text-white text-[11px] tracking-[0.28em] uppercase whitespace-nowrap" style={{ fontWeight: 700 }}>{t}</span>
            <span className="text-white/35 text-xs">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Event Intro ──────────────────────────────────────── */
function EventIntro() {
  return (
    <section className="py-24 lg:py-36 bg-[var(--color-ocean-950)]">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeUp>
            <div className="flex items-center gap-4 mb-8">
              <span className="font-wide text-[10px] text-[var(--color-aqua)] tracking-[0.35em] uppercase">01 — The Marathon</span>
            </div>
            <h2 className="font-display text-white leading-none mb-8" style={{ fontWeight: 900, fontSize: "clamp(44px, 6.5vw, 92px)" }}>
              RUN FOR<br /><span className="text-[var(--color-aqua)]">HEALTH.</span><br />
              RUN FOR<br /><span style={{ WebkitTextStroke: "1px rgba(255,255,255,0.25)", color: "transparent" }}>NATION.</span>
            </h2>
            <p className="font-body text-white/55 text-base lg:text-lg leading-relaxed mb-5" style={{ fontWeight: 300 }}>
              The Ocean City Community Marathon is more than a race. It is a declaration — a collective act of perseverance, health, and national pride played out along the ocean shores of Dar es Salaam.
            </p>
            <p className="font-body text-white/55 text-base lg:text-lg leading-relaxed mb-10" style={{ fontWeight: 300 }}>
              Uniting 3,000+ runners, families, corporates, and youth groups, the 2026 marathon celebrates athletic ambition, community bonds, and Tanzania's extraordinary coastal landscape.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {[{ num: "3K+", label: "Runners Expected" }, { num: "300", label: "Children Supported" }, { num: "III", label: "Third Edition" }].map(({ num, label }) => (
                <div key={label} className="border-t border-white/10 pt-4">
                  <div className="font-display text-white text-3xl lg:text-5xl" style={{ fontWeight: 900 }}>{num}</div>
                  <div className="font-wide text-white/35 text-[10px] tracking-[0.2em] uppercase mt-1">{label}</div>
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={180}>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden bg-[var(--color-ocean-900)]">
                <img
                  src="https://images.unsplash.com/photo-1774050021111-8118f1e3c013?w=800&h=1000&fit=crop&auto=format"
                  alt="Runners crossing the finish line"
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-[var(--color-ocean-400)] px-6 py-4">
                <div className="font-display text-white text-base tracking-[0.1em] uppercase" style={{ fontWeight: 800 }}>EMPOWERING YOUTH</div>
                <div className="font-wide text-white/65 text-[10px] tracking-[0.2em] uppercase">One Step at a Time</div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ── Race Distances (preview) ─────────────────────────── */
function RacePreview() {
  const races = [
    { km: "21", label: "HALF MARATHON", target: "THE COMPETITIVE RUNNER", img: "https://images.unsplash.com/photo-1746046318047-4e4860c53aca?w=600&h=800&fit=crop&auto=format" },
    { km: "10", label: "ROAD RACE", target: "THE CHALLENGER", img: "https://images.unsplash.com/photo-1774050250283-2444f7d634d5?w=600&h=800&fit=crop&auto=format" },
    { km: "5", label: "COMMUNITY RUN", target: "EVERYONE", img: "https://images.unsplash.com/photo-1459183885421-5cc683b8dbba?w=600&h=800&fit=crop&auto=format" },
  ];

  return (
    <section className="py-24 lg:py-36 bg-[var(--color-ocean-900)]">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <FadeUp>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-wide text-[10px] text-[var(--color-aqua)] tracking-[0.35em] uppercase">03 — Race Categories</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
            <h2 className="font-display text-white leading-none" style={{ fontWeight: 900, fontSize: "clamp(44px, 6.5vw, 96px)" }}>
              CHOOSE YOUR<br />DISTANCE.
            </h2>
            <p className="font-body text-white/40 max-w-xs text-sm leading-relaxed" style={{ fontWeight: 300 }}>
              Race categories subject to official confirmation. Registration details coming soon.
            </p>
          </div>
        </FadeUp>

        <div className="grid lg:grid-cols-3 gap-5">
          {races.map(({ km, label, target, img }, i) => (
            <FadeUp key={km} delay={i * 100}>
              <div className="group relative overflow-hidden cursor-pointer" style={{ aspectRatio: "3/4" }}>
                <div className="absolute inset-0 bg-[var(--color-ocean-800)]">
                  <img src={img} alt={label} className="w-full h-full object-cover opacity-45 group-hover:opacity-65 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(2,11,24,1) 0%, rgba(2,11,24,0.25) 60%, transparent 100%)" }} />
                </div>
                <div className="relative z-10 h-full flex flex-col justify-between p-8">
                  <div className="font-wide text-[10px] text-[var(--color-aqua)] tracking-[0.3em] uppercase">FOR {target}</div>
                  <div>
                    <div className="font-display text-white leading-none num-glow" style={{ fontWeight: 900, fontSize: "clamp(80px, 10vw, 120px)" }}>{km}</div>
                    <div className="font-display text-[var(--color-aqua)] text-xl tracking-[0.1em] uppercase mb-5" style={{ fontWeight: 700 }}>KM — {label}</div>
                    <Link to="/race" className="inline-flex items-center gap-2 font-wide text-[11px] tracking-[0.2em] uppercase text-white/60 hover:text-[var(--color-aqua)] transition-colors border-b border-white/15 pb-1">
                      VIEW DETAILS →
                    </Link>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Social Impact (preview) ──────────────────────────── */
function ImpactPreview() {
  return (
    <section className="py-24 lg:py-40 bg-[var(--color-ocean-950)] relative overflow-hidden">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] opacity-5 rounded-full"
        style={{ background: "radial-gradient(circle, var(--color-aqua) 0%, transparent 70%)", transform: "translate(30%, -50%)" }} />

      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeUp>
            <div className="relative">
              <div className="aspect-square overflow-hidden bg-[var(--color-ocean-900)]">
                <img
                  src="https://images.unsplash.com/photo-1524603642524-b02ea114f009?w=700&h=700&fit=crop&auto=format"
                  alt="Children running together"
                  className="w-full h-full object-cover opacity-80"
                  style={{ objectPosition: "center top" }}
                />
              </div>
              <div className="absolute -right-4 lg:-right-10 bottom-8 bg-[var(--color-ocean-400)] p-6 lg:p-8">
                <div className="font-display text-white leading-none" style={{ fontWeight: 900, fontSize: "68px" }}>300</div>
                <div className="font-wide text-white/80 text-[11px] tracking-[0.25em] uppercase mt-1">CHILDREN</div>
                <div className="w-10 h-[1px] bg-white/25 my-3" />
                <div className="font-wide text-white/55 text-[10px] tracking-[0.18em] uppercase">Health Insurance<br />Coverage Goal</div>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={200}>
            <div className="flex items-center gap-4 mb-8">
              <span className="font-wide text-[10px] text-[var(--color-aqua)] tracking-[0.35em] uppercase">04 — The Cause</span>
            </div>
            <h2 className="font-display text-white leading-none mb-8" style={{ fontWeight: 900, fontSize: "clamp(40px, 5.5vw, 80px)" }}>
              EVERY STEP<br />CAN CHANGE<br /><span className="text-[var(--color-aqua)]">A LIFE.</span>
            </h2>
            <p className="font-body text-white/55 text-base lg:text-lg leading-relaxed mb-6" style={{ fontWeight: 300 }}>
              The 2026 Ocean City Community Marathon carries a mission beyond finishing lines. Every registration, every sponsor, every step contributes toward a singular, urgent goal.
            </p>
            <p className="font-body text-white/55 text-base lg:text-lg leading-relaxed mb-10" style={{ fontWeight: 300 }}>
              We aim to provide <strong className="text-white font-normal">health insurance coverage for 300 orphaned children</strong> — giving them the protection and dignity every child deserves.
            </p>
            <Link to="/cause"
              className="inline-flex items-center gap-3 font-display text-[13px] tracking-[0.15em] uppercase border border-[var(--color-aqua)] text-[var(--color-aqua)] hover:bg-[var(--color-aqua)] hover:text-white px-8 py-3.5 transition-all duration-300"
              style={{ fontWeight: 700 }}>
              LEARN MORE ABOUT THE CAUSE
            </Link>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ── Why Run ──────────────────────────────────────────── */
function WhyRun() {
  const reasons = [
    { num: "01", title: "HEALTH", desc: "Running is the most powerful act you can take for your physical and mental wellbeing." },
    { num: "02", title: "COMMUNITY", desc: "3,000 runners, one city. Experience the collective energy of a nation moving together." },
    { num: "03", title: "PURPOSE", desc: "Your steps fund health coverage for 300 children beyond the finish line." },
    { num: "04", title: "SPORT", desc: "Test yourself on one of East Africa's most scenic coastal race courses." },
    { num: "05", title: "NATION", desc: "Run with pride for Tanzania. Carry the flag every kilometre along Coco Beach." },
  ];

  return (
    <section className="py-24 lg:py-36 bg-[var(--color-ocean-900)]">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <FadeUp>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-wide text-[10px] text-[var(--color-aqua)] tracking-[0.35em] uppercase">05 — Why Run?</span>
          </div>
          <h2 className="font-display text-white leading-none mb-14" style={{ fontWeight: 900, fontSize: "clamp(44px, 6.5vw, 96px)" }}>
            FIVE REASONS<br /><span style={{ WebkitTextStroke: "1px rgba(255,255,255,0.25)", color: "transparent" }}>TO RACE.</span>
          </h2>
        </FadeUp>
        <div>
          {reasons.map(({ num, title, desc }, i) => (
            <FadeUp key={num} delay={i * 70}>
              <div className="group flex gap-8 lg:gap-14 items-start py-8 border-t border-white/8 hover:border-[var(--color-aqua)]/25 transition-colors duration-300">
                <div className="font-display text-white/18 group-hover:text-[var(--color-aqua)]/35 transition-colors duration-300 shrink-0 leading-none"
                  style={{ fontWeight: 900, fontSize: "clamp(28px, 3.5vw, 56px)" }}>
                  {num}
                </div>
                <div className="flex-1 pt-1">
                  <div className="font-display text-white text-xl lg:text-3xl tracking-[0.04em] uppercase mb-2" style={{ fontWeight: 800 }}>{title}</div>
                  <p className="font-body text-white/45 text-sm lg:text-base leading-relaxed max-w-xl" style={{ fontWeight: 300 }}>{desc}</p>
                </div>
                <div className="hidden lg:block shrink-0 font-wide text-[var(--color-aqua)]/0 group-hover:text-[var(--color-aqua)]/55 transition-all duration-300 text-xl mt-2">→</div>
              </div>
            </FadeUp>
          ))}
          <div className="border-t border-white/8" />
        </div>
      </div>
    </section>
  );
}

/* ── Ocean City ───────────────────────────────────────── */
function OceanCity() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[65vh] lg:h-[90vh] flex items-end">
        <div className="absolute inset-0 bg-[var(--color-ocean-950)]">
          <img
            src="https://images.unsplash.com/photo-1474524955719-b9f87c50ce47?w=1800&h=1100&fit=crop&auto=format"
            alt="Ocean shoreline at golden hour"
            className="w-full h-full object-cover opacity-55"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(2,11,24,1) 0%, rgba(2,11,24,0.15) 55%, rgba(2,11,24,0.45) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-10 pb-16 lg:pb-24 w-full">
          <FadeUp>
            <div className="flex items-center gap-4 mb-6">
              <span className="font-wide text-[10px] text-[var(--color-aqua)] tracking-[0.35em] uppercase">06 — Dar es Salaam</span>
            </div>
            <h2 className="font-display text-white leading-none" style={{ fontWeight: 900, fontSize: "clamp(52px, 9.5vw, 136px)" }}>
              RUN BY<br />THE OCEAN.
            </h2>
            <div className="flex items-center gap-6 mt-6">
              <div>
                <div className="font-display text-[var(--color-aqua)] text-xl lg:text-2xl tracking-[0.08em] uppercase" style={{ fontWeight: 700 }}>Coco Beach</div>
                <div className="font-wide text-white/45 text-[11px] tracking-[0.25em] uppercase">Dar es Salaam, Tanzania</div>
              </div>
              <div className="w-[1px] h-10 bg-white/15" />
              <Link to="/sports-tourism" className="hidden lg:block font-wide text-[11px] text-white/35 hover:text-[var(--color-aqua)] tracking-[0.2em] uppercase transition-colors">
                EXPLORE SPORTS TOURISM →
              </Link>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ── Legacy ───────────────────────────────────────────── */
function Legacy() {
  const milestones = [
    { year: "2021", title: "FIRST MARATHON", desc: "The inaugural Ocean City Community Marathon. Toyota Passo vehicles awarded to 21km winners. TZS 25.1M in prizes distributed to 18 winners." },
    { year: "2024", title: "SECOND EDITION", desc: "Broader community reach, stronger corporate partnerships. Ocean City cements its identity as Tanzania's premier coastal marathon." },
    { year: "2026", title: "THIRD OCEAN CITY MARATHON", desc: "3,000+ runners. 300 children supported. A movement that has become the heartbeat of Dar es Salaam sport.", highlight: true },
    { year: "FUTURE", title: "A WORLD-CLASS TANZANIAN MARATHON", desc: "The ambition: grow toward the prestige of Berlin, London, New York, and Boston. One step at a time.", future: true },
  ];

  return (
    <section className="py-24 lg:py-36 bg-[var(--color-ocean-950)]">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <FadeUp>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-wide text-[10px] text-[var(--color-aqua)] tracking-[0.35em] uppercase">08 — Legacy</span>
          </div>
          <h2 className="font-display text-white leading-none mb-14" style={{ fontWeight: 900, fontSize: "clamp(44px, 6.5vw, 96px)" }}>
            A LEGACY<br /><span style={{ WebkitTextStroke: "1px rgba(255,255,255,0.25)", color: "transparent" }}>IN MOTION.</span>
          </h2>
        </FadeUp>

        <div className="relative">
          <div className="absolute left-0 lg:left-[190px] top-0 bottom-0 w-[1px] bg-white/8" />
          <div className="space-y-0">
            {milestones.map(({ year, title, desc, highlight, future }, i) => (
              <FadeUp key={year} delay={i * 90}>
                <div className="flex gap-8 lg:gap-12 items-start py-10 border-t border-white/5">
                  <div className="shrink-0 w-24 lg:w-44">
                    <div className={`font-display leading-none ${future ? "text-[var(--color-aqua)] text-base tracking-[0.08em]" : highlight ? "text-white" : "text-white/30"}`}
                      style={{ fontWeight: 900, fontSize: future ? undefined : "clamp(26px, 3.5vw, 48px)" }}>
                      {year}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className={`font-display text-xl lg:text-3xl tracking-[0.04em] uppercase mb-3 ${highlight ? "text-[var(--color-aqua)]" : "text-white"}`}
                      style={{ fontWeight: 800 }}>{title}</div>
                    <p className="font-body text-white/45 text-sm lg:text-base leading-relaxed max-w-xl" style={{ fontWeight: 300 }}>{desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
            <div className="border-t border-white/5" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Athletes ─────────────────────────────────────────── */
function Athletes() {
  return (
    <section className="py-24 lg:py-36 bg-[var(--color-ocean-900)]">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <FadeUp>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-wide text-[10px] text-[var(--color-aqua)] tracking-[0.35em] uppercase">09 — Elite Athletes</span>
          </div>
          <h2 className="font-display text-white leading-none mb-14" style={{ fontWeight: 900, fontSize: "clamp(44px, 6.5vw, 96px)" }}>
            CHAMPIONS<br /><span style={{ WebkitTextStroke: "1px rgba(255,255,255,0.25)", color: "transparent" }}>OF OCEAN CITY.</span>
          </h2>
        </FadeUp>
        <div className="grid lg:grid-cols-2 gap-6">
          {[
            { name: "FELIX SIMBU", role: "ELITE ATHLETE", tag: "OCEAN CITY MARATHON", img: "https://images.unsplash.com/photo-1766066015228-9f99d6dfae5a?w=800&h=550&fit=crop&auto=format" },
            { name: "FAILUNA ABDI MATANGA", role: "ELITE ATHLETE", tag: "OCEAN CITY MARATHON", img: "https://images.unsplash.com/photo-1746046489457-9628dc3b8a1f?w=800&h=550&fit=crop&auto=format" },
          ].map(({ name, role, tag, img }) => (
            <FadeUp key={name} delay={100}>
              <div className="group relative overflow-hidden" style={{ aspectRatio: "3/2" }}>
                <div className="absolute inset-0 bg-[var(--color-ocean-800)]">
                  <img src={img} alt={name} className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(2,11,24,0.92) 0%, rgba(2,11,24,0.25) 100%)" }} />
                </div>
                <div className="relative z-10 h-full flex flex-col justify-end p-8">
                  <div className="font-wide text-[var(--color-aqua)] text-[10px] tracking-[0.3em] uppercase mb-2">{tag}</div>
                  <h3 className="font-display text-white text-2xl lg:text-4xl tracking-[0.03em] uppercase mb-1" style={{ fontWeight: 900 }}>{name}</h3>
                  <div className="font-wide text-white/45 text-[11px] tracking-[0.2em] uppercase">{role}</div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Sponsors Preview ─────────────────────────────────── */
function SponsorsPreview() {
  const packages = [
    { tier: "TANZANITE", price: "TZS 125M", color: "var(--color-aqua)" },
    { tier: "GOLD", price: "TZS 100M", color: "#f5c842" },
    { tier: "SILVER", price: "TZS 75M", color: "#c0c0c0" },
    { tier: "BRONZE", price: "TZS 50M", color: "#cd7f32" },
    { tier: "SPOTBUY", price: "TZS 20M", color: "rgba(255,255,255,0.4)" },
  ];

  return (
    <section className="py-24 lg:py-36 bg-[var(--color-ocean-950)]">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <FadeUp>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-wide text-[10px] text-[var(--color-aqua)] tracking-[0.35em] uppercase">10 — Sponsorship</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-8">
            <div>
              <h2 className="font-display text-white leading-none mb-3" style={{ fontWeight: 900, fontSize: "clamp(40px, 5.5vw, 84px)" }}>
                PARTNER WITH<br />THE MOVEMENT.
              </h2>
              <p className="font-body text-white/45 text-base leading-relaxed max-w-lg" style={{ fontWeight: 300 }}>
                Put your brand at the heart of Tanzania's next great sporting experience.
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <Link to="/sponsors"
                className="inline-flex items-center justify-center gap-3 font-display text-[13px] tracking-[0.15em] uppercase bg-[var(--color-ocean-400)] hover:bg-[var(--color-aqua)] text-white px-8 py-4 transition-all duration-300"
                style={{ fontWeight: 800 }}>
                VIEW ALL PACKAGES
              </Link>
              <Link to="/contact" className="font-wide text-[11px] text-white/35 tracking-[0.2em] uppercase text-center hover:text-white/65 transition-colors">
                BECOME A PARTNER →
              </Link>
            </div>
          </div>
        </FadeUp>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
          {packages.map(({ tier, price, color }, i) => (
            <FadeUp key={tier} delay={i * 70}>
              <div className="group border border-white/8 hover:border-white/25 p-6 flex flex-col gap-4 transition-all duration-300 hover:bg-white/4">
                <div className="w-8 h-[2px]" style={{ background: color }} />
                <div className="font-display text-white text-xl lg:text-2xl tracking-[0.06em] uppercase" style={{ fontWeight: 900 }}>{tier}</div>
                <div className="font-wide text-[11px] tracking-[0.12em] uppercase" style={{ color }}>{price}</div>
                <div className="font-wide text-[10px] text-white/25 group-hover:text-[var(--color-aqua)] tracking-[0.2em] uppercase transition-colors mt-auto">ENQUIRE →</div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── News Preview ─────────────────────────────────────── */
function NewsPreview() {
  const articles = [
    {
      tag: "ANNOUNCEMENT", date: "AUG 2026",
      title: "Ocean City Marathon 2026 Date Confirmed: 14 November",
      excerpt: "Plus One Events Solutions confirms the third edition at Coco Beach, Dar es Salaam.",
      img: "https://images.unsplash.com/photo-1774050021111-8118f1e3c013?w=600&h=400&fit=crop&auto=format",
    },
    {
      tag: "CAUSE", date: "AUG 2026",
      title: "2026 Marathon to Fund Health Insurance for 300 Children",
      excerpt: "Every step fuels our goal to provide health insurance coverage for 300 orphaned children across Tanzania.",
      img: "https://images.unsplash.com/photo-1459183885421-5cc683b8dbba?w=600&h=400&fit=crop&auto=format",
    },
    {
      tag: "SPORTS TOURISM", date: "COMING SOON",
      title: "Bahari Tour: An Elite Experience for International Runners",
      excerpt: "Details of the exclusive Bahari Tour for international elite athletes will be announced soon.",
      img: "https://images.unsplash.com/photo-1474524955719-b9f87c50ce47?w=600&h=400&fit=crop&auto=format",
    },
  ];

  return (
    <section className="py-24 lg:py-36 bg-[var(--color-ocean-900)]">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <FadeUp>
          <div className="flex items-center justify-between mb-14">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="font-wide text-[10px] text-[var(--color-aqua)] tracking-[0.35em] uppercase">11 — News</span>
              </div>
              <h2 className="font-display text-white leading-none" style={{ fontWeight: 900, fontSize: "clamp(40px, 5.5vw, 84px)" }}>
                LATEST FROM<br />OCEAN CITY.
              </h2>
            </div>
            <Link to="/news" className="hidden lg:inline-flex font-wide text-[11px] text-white/35 tracking-[0.2em] uppercase hover:text-white/65 transition-colors">
              ALL NEWS →
            </Link>
          </div>
        </FadeUp>

        <div className="grid lg:grid-cols-3 gap-8">
          {articles.map(({ tag, date, title, excerpt, img }, i) => (
            <FadeUp key={title} delay={i * 90}>
              <article className="group cursor-pointer">
                <div className="aspect-video overflow-hidden bg-[var(--color-ocean-900)] mb-5">
                  <img src={img} alt={title} className="w-full h-full object-cover opacity-65 group-hover:opacity-90 group-hover:scale-105 transition-all duration-600" />
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
  );
}

/* ── Instagram ────────────────────────────────────────── */
function Instagram() {
  const imgs = [
    { src: "https://images.unsplash.com/photo-1774050021111-8118f1e3c013?w=500&h=500&fit=crop&auto=format", big: true },
    { src: "https://images.unsplash.com/photo-1774050250283-2444f7d634d5?w=300&h=300&fit=crop&auto=format", big: false },
    { src: "https://images.unsplash.com/photo-1459183885421-5cc683b8dbba?w=300&h=300&fit=crop&auto=format", big: false },
    { src: "https://images.unsplash.com/photo-1474524955719-b9f87c50ce47?w=300&h=300&fit=crop&auto=format", big: false },
    { src: "https://images.unsplash.com/photo-1625151012343-00d17ffb40dd?w=300&h=300&fit=crop&auto=format", big: false },
    { src: "https://images.unsplash.com/photo-1439405326854-014607f694d7?w=300&h=300&fit=crop&auto=format", big: false },
    { src: "https://images.unsplash.com/photo-1607949666679-73bbe2fb26a4?w=300&h=300&fit=crop&auto=format", big: false },
  ];

  return (
    <section className="py-24 lg:py-32 bg-[var(--color-ocean-950)]">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <FadeUp>
          <div className="text-center mb-12">
            <div className="font-wide text-[10px] text-[var(--color-aqua)] tracking-[0.35em] uppercase mb-4">12 — Follow the Journey</div>
            <h2 className="font-display text-white leading-none mb-3" style={{ fontWeight: 900, fontSize: "clamp(36px, 5vw, 72px)" }}>FOLLOW THE JOURNEY.</h2>
            <a href="https://instagram.com/oceancitymarathon" target="_blank" rel="noopener noreferrer"
              className="font-wide text-white/40 text-[12px] tracking-[0.25em] hover:text-[var(--color-aqua)] transition-colors uppercase">
              @oceancitymarathon
            </a>
          </div>
        </FadeUp>
        <FadeUp delay={100}>
          <div className="grid grid-cols-3 lg:grid-cols-4 gap-2 mb-8">
            {imgs.map(({ src, big }, i) => (
              <div key={i} className={`overflow-hidden bg-[var(--color-ocean-800)] aspect-square group cursor-pointer ${big ? "col-span-2 row-span-2" : ""}`}>
                <img src={src} alt={`Ocean City Marathon ${i + 1}`}
                  className="w-full h-full object-cover opacity-65 group-hover:opacity-95 group-hover:scale-105 transition-all duration-500" />
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="https://instagram.com/oceancitymarathon" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-display text-[13px] tracking-[0.15em] uppercase border border-white/25 hover:border-[var(--color-aqua)] text-white/65 hover:text-[var(--color-aqua)] px-8 py-4 transition-all duration-300"
              style={{ fontWeight: 700 }}>
              FOLLOW @OCEANCITYMARATHON
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ── Final CTA ────────────────────────────────────────── */
function FinalCTA() {
  return (
    <section className="relative overflow-hidden min-h-[85vh] flex items-center">
      <div className="absolute inset-0 bg-[var(--color-ocean-950)]">
        <img
          src="https://images.unsplash.com/photo-1746046318047-4e4860c53aca?w=1800&h=1100&fit=crop&auto=format"
          alt="Runners at finish"
          className="w-full h-full object-cover opacity-28"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(2,11,24,0.96) 0%, rgba(7,32,57,0.65) 100%)" }} />
        <div className="absolute bottom-0 right-0 w-96 h-96 opacity-8 rounded-full"
          style={{ background: "radial-gradient(circle, var(--color-aqua) 0%, transparent 70%)", transform: "translate(30%, 30%)" }} />
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-10 py-24 lg:py-36 text-center w-full">
        <FadeUp>
          <div className="font-wide text-[10px] text-[var(--color-aqua)] tracking-[0.35em] uppercase mb-8">13 — Register Now</div>
          <h2 className="font-display text-white leading-none mb-6" style={{ fontWeight: 900, fontSize: "clamp(44px, 9vw, 128px)" }}>
            YOUR NEXT<br />FINISH LINE<br /><span className="text-[var(--color-aqua)]">STARTS HERE.</span>
          </h2>
          <div className="flex items-center justify-center gap-6 mb-12 mt-6">
            <span className="font-display text-white/55 text-xl lg:text-3xl tracking-[0.08em] uppercase" style={{ fontWeight: 700 }}>14 NOVEMBER 2026</span>
            <span className="w-[1px] h-7 bg-white/18" />
            <span className="font-wide text-white/35 text-sm lg:text-xl tracking-[0.12em] uppercase">Dar es Salaam, Tanzania</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link to="/registration"
              className="inline-flex items-center gap-3 font-display text-[15px] tracking-[0.15em] uppercase bg-[var(--color-ocean-400)] hover:bg-[var(--color-aqua)] text-white px-10 py-5 transition-all duration-300"
              style={{ fontWeight: 800, clipPath: "polygon(12px 0,100% 0,calc(100% - 12px) 100%,0 100%)" }}>
              REGISTER TO RUN
            </Link>
            <Link to="/sponsors"
              className="inline-flex items-center gap-3 font-display text-[15px] tracking-[0.12em] uppercase border border-white/25 hover:border-[var(--color-aqua)] text-white/65 hover:text-[var(--color-aqua)] px-10 py-5 transition-all duration-300"
              style={{ fontWeight: 600 }}>
              BECOME A SPONSOR
            </Link>
          </div>
          <p className="font-wide text-white/25 text-[11px] tracking-[0.2em] uppercase mt-10">
            Registration details · WhatsApp +255 613 786 110 · plusoneventz.com
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <EventIntro />
      <RacePreview />
      <ImpactPreview />
      <WhyRun />
      <OceanCity />
      <Legacy />
      <Athletes />
      <SponsorsPreview />
      <NewsPreview />
      <Instagram />
      <FinalCTA />
    </>
  );
}
