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
  const race = new Date("2026-12-12T06:00:00+03:00");
  const { days, hours, minutes, seconds } = useCountdown(race);

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-sky-950 via-sky-900 to-cyan-950 pt-24 lg:pt-28 pb-16">
      {/* Background ocean image preserved as requested */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1773864051846-a26915bb3019?w=1800&h=1100&fit=crop&auto=format"
          alt="Coastal highway at dawn"
          className="w-full h-full object-cover opacity-50 mix-blend-overlay"
          style={{ objectPosition: "center 38%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-sky-950/90 via-sky-900/60 to-cyan-900/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400/20 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & Countdown */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[3px] bg-gradient-to-r from-sky-400 to-cyan-300 rounded-full" />
              <span className="font-wide text-[11px] text-cyan-300 tracking-[0.35em] uppercase font-bold bg-sky-900/60 px-3 py-1 rounded-full border border-sky-400/30 backdrop-blur-xs">
                Ocean City Community Marathon · Tanzania
              </span>
            </div>

            <h1 className="font-display text-white leading-[0.92] mb-6 drop-shadow-md" style={{ fontWeight: 900, fontSize: "clamp(38px, 6.5vw, 96px)", letterSpacing: "-0.01em" }}>
              OCEAN CITY<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-cyan-200 to-white drop-shadow-sm">
                COMMUNITY MARATHON
              </span><br />
              <span className="text-stroke-light">2026</span>
            </h1>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6">
              <span className="font-wide text-sky-100 text-sm lg:text-lg tracking-[0.2em] font-semibold bg-sky-800/40 px-3 py-1 rounded border border-sky-400/20">
                12 DECEMBER 2026
              </span>
              <span className="w-[1px] h-5 bg-sky-300/40 hidden sm:block" />
              <span className="font-wide text-cyan-200 text-sm lg:text-lg tracking-[0.15em] font-medium">DAR ES SALAAM, TANZANIA</span>
            </div>

            <p className="font-display text-cyan-300 text-xl lg:text-3xl tracking-[0.08em] uppercase mb-8 font-bold drop-shadow-sm">
              RUN FOR HEALTH. RUN FOR NATION.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a href="https://wa.me/255613786110?text=Hello%2C%20I%20want%20to%20register%20for%20the%20Ocean%20City%20Community%20Marathon%202026."
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-display text-[15px] tracking-[0.15em] uppercase bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white px-8 py-4 transition-all duration-300 shadow-lg shadow-emerald-900/50 font-extrabold"
                style={{ clipPath: "polygon(10px 0,100% 0,calc(100% - 10px) 100%,0 100%)" }}>
                💬 REGISTER VIA WHATSAPP
              </a>
              <Link to="/marathon"
                className="inline-flex items-center gap-3 font-display text-[15px] tracking-[0.12em] uppercase border-2 border-sky-300/70 hover:border-white bg-sky-900/40 hover:bg-sky-800/60 text-white px-8 py-4 transition-all duration-300 font-bold backdrop-blur-xs">
                EXPLORE MARATHON
              </Link>
            </div>

            {/* Countdown */}
            <div className="grid grid-cols-4 gap-3 sm:gap-6 max-w-lg">
              {[
                { val: days, label: "DAYS", len: 3 },
                { val: hours, label: "HRS", len: 2 },
                { val: minutes, label: "MIN", len: 2 },
                { val: seconds, label: "SEC", len: 2 },
              ].map(({ val, label, len }) => (
                <div key={label} className="flex flex-col items-start bg-sky-900/40 border border-sky-400/30 p-3 rounded-lg backdrop-blur-xs shadow-md">
                  <div className="font-display text-white leading-none tabular-nums num-glow font-black"
                    style={{ fontSize: "clamp(30px, 4vw, 56px)", letterSpacing: "-0.02em" }}>
                    {pad(val, len)}
                  </div>
                  <div className="font-wide text-cyan-300 text-[10px] tracking-[0.3em] mt-1 font-bold">{label}</div>
                  <div className="w-full h-[2px] bg-gradient-to-r from-sky-400 to-transparent mt-2" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Alphonce Simbu Image Card */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 opacity-80 blur-lg animate-pulse" />
              <div className="relative overflow-hidden rounded-2xl border-2 border-sky-200 bg-gradient-to-b from-sky-900 to-slate-900 shadow-2xl">
                <img
                  src="/simbu.png"
                  alt="Alphonce Simbu — Tanzanian Elite Athlete"
                  className="w-full h-[400px] lg:h-[480px] object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-950 via-sky-950/30 to-transparent" />
                
                <div className="absolute top-4 right-4 bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-4 py-1.5 text-[10px] font-wide tracking-[0.25em] uppercase font-bold shadow-lg rounded-full border border-white/30">
                  ELITE ATHLETE
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 backdrop-blur-xs bg-sky-950/40 border-t border-sky-400/20">
                  <div className="font-wide text-cyan-300 text-[11px] tracking-[0.3em] uppercase font-bold mb-1">TANZANIA CHAMPION</div>
                  <div className="font-display text-white text-3xl lg:text-4xl font-extrabold leading-none uppercase mb-2">
                    ALPHONCE SIMBU
                  </div>
                  <p className="font-body text-sky-100 text-xs leading-relaxed font-light">
                    World Athletics Medalist & Tanzanian Marathon Icon inspiring thousands at the 2026 Ocean City Community Marathon.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Marquee ──────────────────────────────────────────── */
function Marquee() {
  const items = ["OCEAN CITY COMMUNITY MARATHON 2026", "12 DECEMBER", "DAR ES SALAAM", "RUN FOR HEALTH", "RUN FOR NATION", "COCO BEACH", "TANZANIA", "3,000+ RUNNERS", "PLUS ONE SPORTS AGENCY"];
  return (
    <div className="overflow-hidden bg-gradient-to-r from-sky-600 via-cyan-600 to-sky-700 py-4 shadow-md border-y border-sky-400/40">
      <div className="marquee-inner">
        {[...items, ...items].map((t, i) => (
          <div key={i} className="flex items-center gap-6 px-6">
            <span className="font-display text-white text-[13px] tracking-[0.3em] uppercase whitespace-nowrap font-extrabold drop-shadow-xs">{t}</span>
            <span className="text-cyan-200 text-sm">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Event Intro ──────────────────────────────────────── */
function EventIntro() {
  return (
    <section className="py-24 lg:py-36 bg-gradient-to-b from-white via-sky-50/50 to-white text-slate-900 relative">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeUp>
            <div className="flex items-center gap-4 mb-6">
              <span className="font-wide text-[11px] text-sky-600 tracking-[0.35em] uppercase font-bold bg-sky-100/80 px-3 py-1 rounded-md border border-sky-200">01 — The Marathon</span>
            </div>
            <h2 className="font-display text-slate-900 leading-none mb-8 font-black" style={{ fontSize: "clamp(42px, 6vw, 88px)" }}>
              RUN FOR<br /><span className="text-sky-600">HEALTH.</span><br />
              RUN FOR<br /><span className="text-stroke">NATION.</span>
            </h2>
            <p className="font-body text-slate-700 text-base lg:text-lg leading-relaxed mb-5 font-normal">
              The Ocean City Community Marathon is more than a race. It is a declaration — a collective act of perseverance, health, and national pride played out along the ocean shores of Dar es Salaam.
            </p>
            <p className="font-body text-slate-600 text-base lg:text-lg leading-relaxed mb-10 font-light">
              Uniting 3,000+ runners, families, corporates, and youth groups, the 2026 marathon celebrates athletic ambition, community bonds, and Tanzania's extraordinary coastal landscape.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {[{ num: "3K+", label: "Runners Expected" }, { num: "300", label: "Children Supported" }, { num: "III", label: "Third Edition" }].map(({ num, label }) => (
                <div key={label} className="border-t-2 border-sky-500 pt-4 bg-white/80 p-4 rounded-b-lg shadow-sm border-x border-b border-sky-100">
                  <div className="font-display text-sky-600 text-3xl lg:text-5xl font-black">{num}</div>
                  <div className="font-wide text-slate-600 text-[10px] tracking-[0.2em] uppercase mt-1 font-bold">{label}</div>
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={180}>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-sky-100 shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1774050021111-8118f1e3c013?w=800&h=1000&fit=crop&auto=format"
                  alt="Runners crossing the finish line"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-gradient-to-r from-sky-600 to-cyan-600 text-white px-6 py-4 shadow-xl rounded-lg border border-white/20">
                <div className="font-display text-white text-lg tracking-[0.1em] uppercase font-black">EMPOWERING YOUTH</div>
                <div className="font-wide text-cyan-100 text-[10px] tracking-[0.2em] uppercase font-semibold">One Step at a Time</div>
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
    <section className="py-24 lg:py-36 bg-sky-50/70 border-y border-sky-200 relative">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 relative z-10">
        <FadeUp>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-wide text-[11px] text-sky-700 tracking-[0.35em] uppercase font-bold bg-white px-3 py-1 rounded-md border border-sky-200 shadow-xs">03 — Race Categories</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
            <h2 className="font-display text-slate-900 leading-none font-black" style={{ fontSize: "clamp(42px, 6vw, 92px)" }}>
              CHOOSE YOUR<br /><span className="text-sky-600">DISTANCE.</span>
            </h2>
            <p className="font-body text-slate-700 max-w-xs text-sm leading-relaxed font-normal bg-white p-4 rounded-xl border border-sky-100 shadow-xs">
              Official race distances and entry registration via WhatsApp +255 613 786 110.
            </p>
          </div>
        </FadeUp>

        <div className="grid lg:grid-cols-3 gap-8">
          {races.map(({ km, label, target, img }, i) => (
            <FadeUp key={km} delay={i * 100}>
              <div className="group relative overflow-hidden rounded-2xl bg-white border-2 border-sky-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1" style={{ aspectRatio: "3/4" }}>
                <div className="absolute inset-0 bg-sky-950">
                  <img src={img} alt={label} className="w-full h-full object-cover opacity-70 group-hover:opacity-85 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(3, 105, 161, 0.95) 0%, rgba(2, 132, 199, 0.4) 60%, transparent 100%)" }} />
                </div>
                <div className="relative z-10 h-full flex flex-col justify-between p-8">
                  <div className="font-wide text-[10px] text-cyan-200 tracking-[0.3em] uppercase font-bold bg-sky-900/70 px-3 py-1 rounded-full border border-cyan-300/30 w-fit backdrop-blur-xs">FOR {target}</div>
                  <div>
                    <div className="font-display text-white leading-none num-glow font-black drop-shadow-md" style={{ fontSize: "clamp(70px, 9vw, 110px)" }}>{km}</div>
                    <div className="font-display text-cyan-200 text-xl tracking-[0.1em] uppercase mb-5 font-extrabold">{km} KM — {label}</div>
                    <Link to="/race" className="inline-flex items-center gap-2 font-wide text-[11px] tracking-[0.2em] uppercase text-white hover:text-cyan-200 transition-colors border-b-2 border-cyan-300 pb-1 font-bold">
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
    <section className="py-24 lg:py-36 bg-white text-slate-900 relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeUp>
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl bg-sky-50 shadow-2xl border-4 border-sky-100">
                <img
                  src="https://images.unsplash.com/photo-1524603642524-b02ea114f009?w=700&h=700&fit=crop&auto=format"
                  alt="Children running together"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center top" }}
                />
              </div>
              <div className="absolute -right-4 lg:-right-10 bottom-8 bg-gradient-to-br from-sky-600 via-sky-700 to-blue-800 text-white p-6 lg:p-8 shadow-2xl rounded-2xl border-2 border-white/20">
                <div className="font-display text-white leading-none font-black" style={{ fontSize: "64px" }}>300</div>
                <div className="font-wide text-cyan-200 text-[11px] tracking-[0.25em] uppercase mt-1 font-bold">CHILDREN</div>
                <div className="w-10 h-[2px] bg-white/40 my-3" />
                <div className="font-wide text-white/90 text-[10px] tracking-[0.18em] uppercase font-semibold">Health Insurance<br />Coverage Goal</div>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={200}>
            <div className="flex items-center gap-4 mb-6">
              <span className="font-wide text-[11px] text-sky-700 tracking-[0.35em] uppercase font-bold bg-sky-100 px-3 py-1 rounded-md border border-sky-200">04 — The Cause</span>
            </div>
            <h2 className="font-display text-slate-900 leading-none mb-8 font-black" style={{ fontSize: "clamp(38px, 5vw, 76px)" }}>
              EVERY STEP<br />CAN CHANGE<br /><span className="text-sky-600">A LIFE.</span>
            </h2>
            <p className="font-body text-slate-700 text-base lg:text-lg leading-relaxed mb-6 font-normal">
              The 2026 Ocean City Community Marathon carries a mission beyond finishing lines. Every registration, every sponsor, every step contributes toward a singular, urgent goal.
            </p>
            <p className="font-body text-slate-600 text-base lg:text-lg leading-relaxed mb-10 font-light">
              We aim to provide <strong className="text-sky-900 font-semibold bg-sky-100 px-2 py-0.5 rounded">health insurance coverage for 300 orphaned children</strong> — giving them the protection and dignity every child deserves.
            </p>
            <Link to="/cause"
              className="inline-flex items-center gap-3 font-display text-[14px] tracking-[0.15em] uppercase bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-500 hover:to-cyan-500 text-white px-8 py-4 transition-all duration-300 shadow-lg shadow-sky-600/30 font-extrabold rounded-lg">
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
    <section className="py-24 lg:py-36 bg-gradient-to-b from-sky-50/60 to-white border-t border-sky-200 relative">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 relative z-10">
        <FadeUp>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-wide text-[11px] text-sky-700 tracking-[0.35em] uppercase font-bold bg-white px-3 py-1 rounded-md border border-sky-200 shadow-xs">05 — Why Run?</span>
          </div>
          <h2 className="font-display text-slate-900 leading-none mb-14 font-black" style={{ fontSize: "clamp(42px, 6vw, 92px)" }}>
            FIVE REASONS<br /><span className="text-sky-600">TO RACE.</span>
          </h2>
        </FadeUp>
        <div>
          {reasons.map(({ num, title, desc }, i) => (
            <FadeUp key={num} delay={i * 70}>
              <div className="group flex gap-8 lg:gap-14 items-start py-8 border-t border-sky-200 hover:border-sky-500 transition-colors duration-300 bg-white/70 hover:bg-white p-6 rounded-xl my-2 shadow-xs hover:shadow-md">
                <div className="font-display text-sky-400 group-hover:text-sky-600 transition-colors duration-300 shrink-0 leading-none font-black"
                  style={{ fontSize: "clamp(28px, 3.5vw, 56px)" }}>
                  {num}
                </div>
                <div className="flex-1 pt-1">
                  <div className="font-display text-slate-900 text-xl lg:text-3xl tracking-[0.04em] uppercase mb-2 font-extrabold">{title}</div>
                  <p className="font-body text-slate-600 text-sm lg:text-base leading-relaxed max-w-xl font-light">{desc}</p>
                </div>
                <div className="hidden lg:block shrink-0 text-sky-600 opacity-0 group-hover:opacity-100 transition-all duration-300 text-xl mt-2 font-bold">→</div>
              </div>
            </FadeUp>
          ))}
          <div className="border-t border-sky-200" />
        </div>
      </div>
    </section>
  );
}

/* ── Ocean City ───────────────────────────────────────── */
function OceanCity() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[60vh] lg:h-[80vh] flex items-end">
        <div className="absolute inset-0 bg-sky-950">
          <img
            src="https://images.unsplash.com/photo-1474524955719-b9f87c50ce47?w=1800&h=1100&fit=crop&auto=format"
            alt="Ocean shoreline at golden hour"
            className="w-full h-full object-cover opacity-65"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(3,105,161,0.95) 0%, rgba(2,132,199,0.3) 60%, transparent 100%)" }} />
        </div>
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-10 pb-16 lg:pb-24 w-full">
          <FadeUp>
            <div className="flex items-center gap-4 mb-6">
              <span className="font-wide text-[11px] text-cyan-200 tracking-[0.35em] uppercase font-bold bg-sky-900/60 px-3 py-1 rounded-full border border-cyan-300/30 backdrop-blur-xs">06 — Dar es Salaam</span>
            </div>
            <h2 className="font-display text-white leading-none font-black drop-shadow-md" style={{ fontSize: "clamp(48px, 9vw, 128px)" }}>
              RUN BY<br />THE OCEAN.
            </h2>
            <div className="flex items-center gap-6 mt-6">
              <div>
                <div className="font-display text-cyan-200 text-xl lg:text-2xl tracking-[0.08em] uppercase font-extrabold">Coco Beach</div>
                <div className="font-wide text-sky-100 text-[11px] tracking-[0.25em] uppercase font-semibold">Dar es Salaam, Tanzania</div>
              </div>
              <div className="w-[1px] h-10 bg-white/30" />
              <Link to="/sports-tourism" className="hidden lg:block font-wide text-[11px] text-white hover:text-cyan-200 tracking-[0.2em] uppercase transition-colors bg-sky-800/50 px-4 py-2 rounded.lg border border-white/20">
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
    <section className="py-24 lg:py-36 bg-white text-slate-900 relative">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 relative z-10">
        <FadeUp>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-wide text-[11px] text-sky-700 tracking-[0.35em] uppercase font-bold bg-sky-100 px-3 py-1 rounded-md border border-sky-200">08 — Legacy</span>
          </div>
          <h2 className="font-display text-slate-900 leading-none mb-14 font-black" style={{ fontSize: "clamp(42px, 6vw, 92px)" }}>
            A LEGACY<br /><span className="text-sky-600">IN MOTION.</span>
          </h2>
        </FadeUp>

        <div className="relative">
          <div className="absolute left-0 lg:left-[190px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-sky-400 via-cyan-400 to-sky-200" />
          <div className="space-y-0">
            {milestones.map(({ year, title, desc, highlight, future }, i) => (
              <FadeUp key={year} delay={i * 90}>
                <div className={`flex gap-8 lg:gap-12 items-start py-10 border-t border-sky-100 ${highlight ? "bg-sky-50/80 p-6 rounded-2xl border-2 border-sky-300 shadow-md" : ""}`}>
                  <div className="shrink-0 w-24 lg:w-44">
                    <div className={`font-display leading-none ${future ? "text-sky-600 text-base tracking-[0.08em] font-bold" : highlight ? "text-sky-700 font-black" : "text-sky-400 font-bold"}`}
                      style={{ fontSize: future ? undefined : "clamp(26px, 3.5vw, 48px)" }}>
                      {year}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className={`font-display text-xl lg:text-3xl tracking-[0.04em] uppercase mb-3 ${highlight ? "text-sky-800 font-black" : "text-slate-900 font-extrabold"}`}>
                      {title}
                    </div>
                    <p className="font-body text-slate-600 text-sm lg:text-base leading-relaxed max-w-xl font-light">{desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
            <div className="border-t border-sky-200" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Athletes ─────────────────────────────────────────── */
function Athletes() {
  return (
    <section className="py-24 lg:py-36 bg-gradient-to-b from-sky-50 to-white border-t border-sky-200 relative">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 relative z-10">
        <FadeUp>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-wide text-[11px] text-sky-700 tracking-[0.35em] uppercase font-bold bg-white px-3 py-1 rounded-md border border-sky-200 shadow-xs">09 — Elite Athletes</span>
          </div>
          <h2 className="font-display text-slate-900 leading-none mb-14 font-black" style={{ fontSize: "clamp(42px, 6vw, 92px)" }}>
            CHAMPIONS<br /><span className="text-sky-600">OF OCEAN CITY.</span>
          </h2>
        </FadeUp>
        <div className="grid lg:grid-cols-2 gap-8">
          {[
            { name: "ALPHONCE SIMBU", role: "ELITE ATHLETE & MARATHON CHAMPION", tag: "OCEAN CITY MARATHON", img: "/simbu.png" },
            { name: "FAILUNA ABDI MATANGA", role: "ELITE ATHLETE", tag: "OCEAN CITY MARATHON", img: "https://images.unsplash.com/photo-1746046489457-9628dc3b8a1f?w=800&h=550&fit=crop&auto=format" },
          ].map(({ name, role, tag, img }) => (
            <FadeUp key={name} delay={100}>
              <div className="group relative overflow-hidden rounded-2xl bg-sky-950 shadow-xl border-2 border-sky-300/40" style={{ aspectRatio: "3/2" }}>
                <div className="absolute inset-0 bg-sky-950">
                  <img src={img} alt={name} className="w-full h-full object-cover opacity-75 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 object-top" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(3,105,161,0.9) 0%, rgba(2,132,199,0.3) 100%)" }} />
                </div>
                <div className="relative z-10 h-full flex flex-col justify-end p-8">
                  <div className="font-wide text-cyan-300 text-[10px] tracking-[0.3em] uppercase mb-2 font-bold bg-sky-900/60 px-3 py-1 rounded-full w-fit border border-cyan-300/30">{tag}</div>
                  <h3 className="font-display text-white text-2xl lg:text-4xl tracking-[0.03em] uppercase mb-1 font-extrabold drop-shadow-sm">{name}</h3>
                  <div className="font-wide text-sky-100 text-[11px] tracking-[0.2em] uppercase font-semibold">{role}</div>
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
    { tier: "TANZANITE", price: "TZS 125M", color: "#0284c7" },
    { tier: "GOLD", price: "TZS 100M", color: "#d97706" },
    { tier: "SILVER", price: "TZS 75M", color: "#0284c7" },
    { tier: "BRONZE", price: "TZS 50M", color: "#0ea5e9" },
    { tier: "SPOTBUY", price: "TZS 20M", color: "#0284c7" },
  ];

  return (
    <section className="py-24 lg:py-36 bg-white text-slate-900 relative">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 relative z-10">
        <FadeUp>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-wide text-[11px] text-sky-700 tracking-[0.35em] uppercase font-bold bg-sky-100 px-3 py-1 rounded-md border border-sky-200">10 — Sponsorship</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-8">
            <div>
              <h2 className="font-display text-slate-900 leading-none mb-3 font-black" style={{ fontSize: "clamp(38px, 5vw, 80px)" }}>
                PARTNER WITH<br /><span className="text-sky-600">THE MOVEMENT.</span>
              </h2>
              <p className="font-body text-slate-600 text-base leading-relaxed max-w-lg font-light">
                Put your brand at the heart of Tanzania's next great sporting experience.
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <Link to="/sponsors"
                className="inline-flex items-center justify-center gap-3 font-display text-[13px] tracking-[0.15em] uppercase bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-500 hover:to-cyan-500 text-white px-8 py-4 transition-all duration-300 shadow-md font-extrabold rounded-lg">
                VIEW ALL PACKAGES
              </Link>
              <Link to="/contact" className="font-wide text-[11px] text-sky-700 tracking-[0.2em] uppercase text-center hover:text-sky-900 transition-colors font-bold">
                BECOME A PARTNER →
              </Link>
            </div>
          </div>
        </FadeUp>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {packages.map(({ tier, price, color }, i) => (
            <FadeUp key={tier} delay={i * 70}>
              <div className="group border-2 border-sky-200 bg-gradient-to-b from-sky-50/60 to-white hover:bg-white hover:border-sky-500 p-6 flex flex-col gap-4 transition-all duration-300 rounded-xl shadow-xs hover:shadow-lg hover:-translate-y-1">
                <div className="w-8 h-[4px] rounded-full" style={{ background: color }} />
                <div className="font-display text-slate-900 text-xl lg:text-2xl tracking-[0.06em] uppercase font-black">{tier}</div>
                <div className="font-wide text-[13px] tracking-[0.12em] uppercase font-extrabold" style={{ color }}>{price}</div>
                <div className="font-wide text-[10px] text-sky-600 group-hover:text-sky-800 tracking-[0.2em] uppercase transition-colors mt-auto font-bold">ENQUIRE →</div>
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
      tag: "ANNOUNCEMENT", date: "DEC 2026",
      title: "Ocean City Marathon 2026 Date Confirmed: 12 December",
      excerpt: "Plus One Events Solutions confirms the third edition at Coco Beach, Dar es Salaam.",
      img: "https://images.unsplash.com/photo-1774050021111-8118f1e3c013?w=600&h=400&fit=crop&auto=format",
    },
    {
      tag: "CAUSE", date: "DEC 2026",
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
    <section className="py-24 lg:py-36 bg-gradient-to-b from-sky-50/70 to-white border-t border-sky-200 relative">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 relative z-10">
        <FadeUp>
          <div className="flex items-center justify-between mb-14">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="font-wide text-[11px] text-sky-700 tracking-[0.35em] uppercase font-bold bg-white px-3 py-1 rounded-md border border-sky-200 shadow-xs">11 — News</span>
              </div>
              <h2 className="font-display text-slate-900 leading-none font-black" style={{ fontSize: "clamp(38px, 5vw, 80px)" }}>
                LATEST FROM<br /><span className="text-sky-600">OCEAN CITY.</span>
              </h2>
            </div>
            <Link to="/news" className="hidden lg:inline-flex font-wide text-[11px] text-sky-700 tracking-[0.2em] uppercase hover:text-sky-900 transition-colors font-bold bg-white px-4 py-2 rounded-md border border-sky-200">
              ALL NEWS →
            </Link>
          </div>
        </FadeUp>

        <div className="grid lg:grid-cols-3 gap-8">
          {articles.map(({ tag, date, title, excerpt, img }, i) => (
            <FadeUp key={title} delay={i * 90}>
              <article className="group cursor-pointer bg-white p-6 rounded-2xl border-2 border-sky-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video overflow-hidden rounded-xl bg-sky-100 mb-5">
                  <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-600" />
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-wide text-sky-600 text-[10px] tracking-[0.3em] uppercase font-bold bg-sky-100 px-2.5 py-0.5 rounded">{tag}</span>
                  <span className="font-wide text-slate-500 text-[10px] tracking-[0.2em] uppercase font-semibold">{date}</span>
                </div>
                <h3 className="font-display text-slate-900 text-xl lg:text-2xl tracking-[0.02em] uppercase mb-3 group-hover:text-sky-600 transition-colors duration-300 font-extrabold">{title}</h3>
                <p className="font-body text-slate-600 text-sm leading-relaxed font-light">{excerpt}</p>
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
    <section className="py-24 lg:py-32 bg-white text-slate-900 relative">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 relative z-10">
        <FadeUp>
          <div className="text-center mb-12">
            <div className="font-wide text-[11px] text-sky-700 tracking-[0.35em] uppercase mb-4 font-bold bg-sky-100 px-3 py-1 rounded-md border border-sky-200 w-fit mx-auto">12 — Follow the Journey</div>
            <h2 className="font-display text-slate-900 leading-none mb-3 font-black" style={{ fontSize: "clamp(36px, 5vw, 72px)" }}>FOLLOW THE JOURNEY.</h2>
            <a href="https://instagram.com/oceancitymarathon" target="_blank" rel="noopener noreferrer"
              className="font-wide text-sky-600 text-[13px] tracking-[0.25em] hover:text-sky-800 transition-colors uppercase font-bold">
              @oceancitymarathon
            </a>
          </div>
        </FadeUp>
        <FadeUp delay={100}>
          <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {imgs.map(({ src, big }, i) => (
              <div key={i} className={`overflow-hidden rounded-xl bg-sky-100 aspect-square group cursor-pointer border border-sky-200 shadow-sm hover:shadow-md ${big ? "col-span-2 row-span-2" : ""}`}>
                <img src={src} alt={`Ocean City Marathon ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="https://instagram.com/oceancitymarathon" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-display text-[13px] tracking-[0.15em] uppercase border-2 border-sky-500 hover:bg-sky-600 text-sky-700 hover:text-white px-8 py-4 transition-all duration-300 font-extrabold rounded-lg shadow-sm">
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
    <section className="relative overflow-hidden min-h-[75vh] flex items-center bg-gradient-to-br from-sky-950 via-sky-900 to-cyan-950">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1746046318047-4e4860c53aca?w=1800&h=1100&fit=crop&auto=format"
          alt="Runners at finish"
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-sky-950/95 via-sky-900/80 to-cyan-950/90" />
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-10 py-24 lg:py-32 text-center w-full">
        <FadeUp>
          <div className="font-wide text-[11px] text-cyan-300 tracking-[0.35em] uppercase mb-6 font-bold bg-sky-900/60 px-4 py-1.5 rounded-full border border-cyan-300/30 w-fit mx-auto backdrop-blur-xs">13 — Register Now</div>
          <h2 className="font-display text-white leading-none mb-6 font-black drop-shadow-md" style={{ fontSize: "clamp(42px, 8vw, 116px)" }}>
            YOUR NEXT<br />FINISH LINE<br /><span className="text-cyan-300">STARTS HERE.</span>
          </h2>
          <div className="flex items-center justify-center gap-6 mb-10 mt-6">
            <span className="font-display text-white text-xl lg:text-3xl tracking-[0.08em] uppercase font-bold bg-sky-800/50 px-4 py-1 rounded-md border border-sky-400/30">12 DECEMBER 2026</span>
            <span className="w-[1px] h-7 bg-sky-300/40" />
            <span className="font-wide text-cyan-100 text-sm lg:text-xl tracking-[0.12em] uppercase font-medium">Dar es Salaam, Tanzania</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <a href="https://wa.me/255613786110?text=Hello%2C%20I%20want%20to%20register%20for%20the%20Ocean%20City%20Community%20Marathon%202026."
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-display text-[15px] tracking-[0.15em] uppercase bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white px-10 py-5 transition-all duration-300 shadow-xl shadow-emerald-950/50 font-extrabold"
              style={{ clipPath: "polygon(12px 0,100% 0,calc(100% - 12px) 100%,0 100%)" }}>
              💬 REGISTER VIA WHATSAPP (+255 613 786 110)
            </a>
            <Link to="/sponsors"
              className="inline-flex items-center gap-3 font-display text-[15px] tracking-[0.12em] uppercase border-2 border-sky-300/70 hover:border-white bg-sky-900/40 text-white px-10 py-5 transition-all duration-300 font-bold backdrop-blur-xs">
              BECOME A SPONSOR
            </Link>
          </div>
          <p className="font-wide text-cyan-200 text-[11px] tracking-[0.2em] uppercase mt-10 font-semibold">
            Registration details · WhatsApp +255 613 786 110 · plusoneventz.com
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="relative">
      {/* Requirement 2: Fixed background picture of Simbu overlaid with ocean theme visible as user scrolls down */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden" 
        aria-hidden="true"
      >
        {/* Subtle Ocean Light & Cyan Gradient Backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-200/25 via-cyan-100/10 to-transparent" />
        
        {/* Alphonce Simbu Watermark Background aligned right/center */}
        <div className="absolute right-0 bottom-0 top-0 w-full max-w-4xl opacity-15 mix-blend-multiply flex items-center justify-end pr-4 lg:pr-16">
          <img 
            src="/simbu.png" 
            alt="" 
            className="h-[85vh] object-contain object-right filter contrast-125 saturate-125 transition-opacity duration-1000"
          />
        </div>

        {/* Dynamic Light Blue Overlay Shader */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-100/30 via-transparent to-cyan-100/30" />
      </div>

      <div className="relative z-10">
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
      </div>
    </div>
  );
}
