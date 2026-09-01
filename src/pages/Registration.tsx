import { useState } from "react";
import PageHero from "../components/PageHero";
import FadeUp from "../components/FadeUp";

export default function Registration() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "", country: "",
    dob: "", gender: "", category: "", tshirt: "", emergency: "", emergencyPhone: "",
    terms: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (k: string, v: string | boolean) => setForm((f) => ({ ...f, [k]: v }));

  const buildWhatsAppUrl = () => {
    const details = [
      "Hello! I want to register for the Ocean City Community Marathon 2026.",
      "",
      "*Runner Details:*",
      `- *Name:* ${form.firstName} ${form.lastName}`.trim(),
      form.email ? `- *Email:* ${form.email}` : "",
      form.phone ? `- *Phone:* ${form.phone}` : "",
      form.country ? `- *Country:* ${form.country}` : "",
      form.category ? `- *Category:* ${form.category.toUpperCase()}` : "",
      form.tshirt ? `- *T-Shirt:* ${form.tshirt}` : "",
    ].filter(Boolean).join("\n");

    return `https://wa.me/255613786110?text=${encodeURIComponent(details)}`;
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setSubmitted(true);
      window.open(buildWhatsAppUrl(), "_blank");
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[var(--color-ocean-950)] flex items-center justify-center px-6 py-24">
        <div className="text-center max-w-lg">
          <div className="font-display text-[var(--color-aqua)] num-glow" style={{ fontWeight: 900, fontSize: "96px" }}>✓</div>
          <h2 className="font-display text-white text-4xl lg:text-6xl leading-none mb-6" style={{ fontWeight: 900 }}>
            REDIRECTING TO<br /><span className="text-emerald-400">WHATSAPP...</span>
          </h2>
          <p className="font-body text-white/60 text-base leading-relaxed mb-8" style={{ fontWeight: 300 }}>
            Thank you for registering! We are redirecting you to our official WhatsApp admin (+255 613 786 110) to finalize your registration.
          </p>
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-display text-[14px] tracking-[0.15em] uppercase bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 transition-all duration-300 mb-6"
            style={{ fontWeight: 800, clipPath: "polygon(10px 0,100% 0,calc(100% - 10px) 100%,0 100%)" }}
          >
            💬 OPEN WHATSAPP CHAT NOW (+255 613 786 110)
          </a>
          <div className="font-wide text-[var(--color-aqua)] text-[11px] tracking-[0.25em] uppercase">14 November 2026 · Dar es Salaam, Tanzania</div>
        </div>
      </div>
    );
  }

  return (
    <>
      <PageHero
        section="Registration"
        title="REGISTER<br />TO RUN."
        subtitle="14 November 2026 · Coco Beach, Dar es Salaam · Instant Registration via WhatsApp +255 613 786 110."
        img="https://images.unsplash.com/photo-1766066015228-9f99d6dfae5a?w=1600&h=900&fit=crop&auto=format"
        imgAlt="Marathon start line"
      />

      {/* Direct WhatsApp Banner */}
      <div className="bg-emerald-950/80 border-b border-emerald-500/30 py-5 px-6">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <div>
              <div className="font-display text-white text-base lg:text-lg uppercase" style={{ fontWeight: 800 }}>FAST REGISTRATION VIA WHATSAPP</div>
              <div className="font-wide text-emerald-200/70 text-xs" style={{ fontWeight: 300 }}>Register directly with our admin number: +255 613 786 110</div>
            </div>
          </div>
          <a
            href="https://wa.me/255613786110?text=Hello%2C%20I%20want%20to%20register%20for%20the%20Ocean%20City%20Community%20Marathon%202026."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-display text-[13px] tracking-[0.15em] uppercase bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 transition-all duration-300 shrink-0"
            style={{ fontWeight: 800, clipPath: "polygon(8px 0,100% 0,calc(100% - 8px) 100%,0 100%)" }}
          >
            💬 REGISTER ON WHATSAPP (+255 613 786 110)
          </a>
        </div>
      </div>

      {/* Notice banner */}
      <div className="bg-[var(--color-ocean-400)] py-4 px-6">
        <div className="max-w-screen-xl mx-auto flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-white animate-pulse shrink-0" />
          <p className="font-wide text-white text-[11px] tracking-[0.2em] uppercase">
            Official race categories, distances, and entry fees are to be announced. Register your interest below and we will send you directly to WhatsApp admin.
          </p>
        </div>
      </div>

      <section className="py-24 lg:py-36 bg-[var(--color-ocean-950)]">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <FadeUp>
                {/* Step indicators */}
                <div className="flex items-center gap-3 mb-12">
                  {["PERSONAL DETAILS", "RACE CATEGORY", "CONFIRMATION"].map((label, i) => (
                    <div key={label} className="flex items-center gap-3">
                      <div className={`flex items-center gap-2 ${i + 1 <= step ? "text-white" : "text-white/25"}`}>
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-display shrink-0 transition-all duration-300 ${i + 1 < step ? "bg-[var(--color-aqua)]" : i + 1 === step ? "border border-[var(--color-aqua)] text-[var(--color-aqua)]" : "border border-white/15"}`}
                          style={{ fontWeight: 800 }}>{i + 1 < step ? "✓" : i + 1}</div>
                        <span className="hidden sm:block font-wide text-[9px] tracking-[0.2em] uppercase">{label}</span>
                      </div>
                      {i < 2 && <div className={`flex-1 h-[1px] w-8 ${i + 1 < step ? "bg-[var(--color-aqua)]" : "bg-white/10"}`} />}
                    </div>
                  ))}
                </div>

                <form onSubmit={handleNext}>
                  {step === 1 && (
                    <div className="space-y-5">
                      <h3 className="font-display text-white text-2xl lg:text-3xl uppercase mb-8" style={{ fontWeight: 900 }}>PERSONAL DETAILS</h3>
                      <div className="grid sm:grid-cols-2 gap-5">
                        {[
                          { key: "firstName", label: "FIRST NAME", type: "text", placeholder: "First name" },
                          { key: "lastName", label: "LAST NAME", type: "text", placeholder: "Last name" },
                          { key: "email", label: "EMAIL ADDRESS", type: "email", placeholder: "your@email.com" },
                          { key: "phone", label: "PHONE NUMBER", type: "tel", placeholder: "+255 6XX XXX XXX" },
                          { key: "country", label: "COUNTRY", type: "text", placeholder: "Tanzania" },
                          { key: "dob", label: "DATE OF BIRTH", type: "date", placeholder: "" },
                        ].map(({ key, label, type, placeholder }) => (
                          <div key={key}>
                            <label className="font-wide text-[9px] text-white/35 tracking-[0.3em] uppercase block mb-2">{label} *</label>
                            <input type={type} placeholder={placeholder} value={form[key as keyof typeof form] as string}
                              onChange={(e) => update(key, e.target.value)} required
                              className="w-full bg-transparent border border-white/12 hover:border-white/25 focus:border-[var(--color-aqua)]/60 text-white placeholder:text-white/22 font-body text-sm px-4 py-3.5 outline-none transition-colors"
                              style={{ fontWeight: 300 }} />
                          </div>
                        ))}
                      </div>
                      <div>
                        <label className="font-wide text-[9px] text-white/35 tracking-[0.3em] uppercase block mb-2">GENDER *</label>
                        <select value={form.gender} onChange={(e) => update("gender", e.target.value)} required
                          className="w-full bg-[var(--color-ocean-950)] border border-white/12 hover:border-white/25 focus:border-[var(--color-aqua)]/60 text-white/70 font-body text-sm px-4 py-3.5 outline-none transition-colors appearance-none"
                          style={{ fontWeight: 300 }}>
                          <option value="">Select gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other / Prefer not to say</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-6">
                      <h3 className="font-display text-white text-2xl lg:text-3xl uppercase mb-8" style={{ fontWeight: 900 }}>RACE CATEGORY</h3>
                      <div className="p-4 border border-[var(--color-aqua)]/20 bg-[var(--color-ocean-900)]/40 mb-6">
                        <span className="font-wide text-[10px] text-[var(--color-aqua)] tracking-[0.25em] uppercase">Note: </span>
                        <span className="font-body text-white/45 text-xs" style={{ fontWeight: 300 }}>
                          Race categories and distances are subject to official confirmation. Your preference will be noted when messaging admin on WhatsApp.
                        </span>
                      </div>
                      {[
                        { val: "21km", label: "21 KM — HALF MARATHON", sub: "For the competitive runner" },
                        { val: "10km", label: "10 KM — ROAD RACE", sub: "For the challenger" },
                        { val: "5km", label: "5 KM — COMMUNITY RUN", sub: "For everyone" },
                      ].map(({ val, label, sub }) => (
                        <label key={val} className={`flex items-center gap-5 p-5 border cursor-pointer transition-all duration-200 ${form.category === val ? "border-[var(--color-aqua)] bg-[var(--color-ocean-900)]/40" : "border-white/10 hover:border-white/25"}`}>
                          <input type="radio" name="category" value={val} checked={form.category === val} onChange={(e) => update("category", e.target.value)} required className="accent-[var(--color-aqua)]" />
                          <div>
                            <div className="font-display text-white text-lg tracking-[0.05em] uppercase" style={{ fontWeight: 800 }}>{label}</div>
                            <div className="font-wide text-white/40 text-[10px] tracking-[0.2em] uppercase">{sub}</div>
                          </div>
                        </label>
                      ))}
                      <div className="mt-4">
                        <label className="font-wide text-[9px] text-white/35 tracking-[0.3em] uppercase block mb-2">T-SHIRT SIZE</label>
                        <select value={form.tshirt} onChange={(e) => update("tshirt", e.target.value)}
                          className="w-full bg-[var(--color-ocean-950)] border border-white/12 hover:border-white/25 focus:border-[var(--color-aqua)]/60 text-white/70 font-body text-sm px-4 py-3.5 outline-none transition-colors appearance-none"
                          style={{ fontWeight: 300 }}>
                          <option value="">Select size (if applicable)</option>
                          {["XS", "S", "M", "L", "XL", "XXL"].map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-6">
                      <h3 className="font-display text-white text-2xl lg:text-3xl uppercase mb-8" style={{ fontWeight: 900 }}>CONFIRMATION</h3>
                      <div className="border border-white/8 p-6 space-y-4">
                        {[
                          { label: "Name", val: `${form.firstName} ${form.lastName}` },
                          { label: "Email", val: form.email },
                          { label: "Phone", val: form.phone },
                          { label: "Country", val: form.country },
                          { label: "Category", val: form.category ? form.category.toUpperCase() : "—" },
                        ].map(({ label, val }) => (
                          <div key={label} className="flex gap-4">
                            <span className="font-wide text-[10px] text-white/30 tracking-[0.2em] uppercase w-24 shrink-0 pt-0.5">{label}</span>
                            <span className="font-body text-white/70 text-sm" style={{ fontWeight: 300 }}>{val}</span>
                          </div>
                        ))}
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        {[
                          { key: "emergency", label: "EMERGENCY CONTACT NAME", placeholder: "Full name" },
                          { key: "emergencyPhone", label: "EMERGENCY CONTACT PHONE", placeholder: "+255 6XX XXX XXX" },
                        ].map(({ key, label, placeholder }) => (
                          <div key={key}>
                            <label className="font-wide text-[9px] text-white/35 tracking-[0.3em] uppercase block mb-2">{label} *</label>
                            <input type="text" placeholder={placeholder} value={form[key as keyof typeof form] as string}
                              onChange={(e) => update(key, e.target.value)} required
                              className="w-full bg-transparent border border-white/12 hover:border-white/25 focus:border-[var(--color-aqua)]/60 text-white placeholder:text-white/22 font-body text-sm px-4 py-3.5 outline-none transition-colors"
                              style={{ fontWeight: 300 }} />
                          </div>
                        ))}
                      </div>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" checked={form.terms} onChange={(e) => update("terms", e.target.checked)} required className="accent-[var(--color-aqua)] mt-1" />
                        <span className="font-body text-white/45 text-sm leading-relaxed" style={{ fontWeight: 300 }}>
                          I understand that submitting will open WhatsApp chat with +255 613 786 110 to complete registration with Plus One Events Solutions.
                        </span>
                      </label>
                    </div>
                  )}

                  <div className="flex items-center gap-4 mt-10">
                    {step > 1 && (
                      <button type="button" onClick={() => setStep(step - 1)}
                        className="font-wide text-[12px] text-white/40 hover:text-white tracking-[0.2em] uppercase transition-colors px-6 py-4 border border-white/10 hover:border-white/25">
                        ← BACK
                      </button>
                    )}
                    <button type="submit"
                      className="flex-1 font-display text-[14px] tracking-[0.15em] uppercase bg-emerald-600 hover:bg-emerald-500 text-white py-4 transition-all duration-300 flex items-center justify-center gap-2"
                      style={{ fontWeight: 800, clipPath: "polygon(10px 0,100% 0,calc(100% - 10px) 100%,0 100%)" }}>
                      {step < 3 ? "CONTINUE →" : "💬 REGISTER VIA WHATSAPP (+255 613 786 110)"}
                    </button>
                  </div>
                </form>
              </FadeUp>
            </div>

            {/* Sidebar */}
            <FadeUp delay={150} className="space-y-6">
              <div className="border border-white/8 p-6">
                <div className="font-display text-[var(--color-aqua)] text-5xl lg:text-6xl leading-none mb-2" style={{ fontWeight: 900 }}>14</div>
                <div className="font-wide text-white/50 text-[11px] tracking-[0.2em] uppercase">NOVEMBER 2026</div>
                <div className="w-full h-[1px] bg-white/8 my-4" />
                <div className="font-wide text-white/45 text-[11px] tracking-[0.15em] uppercase mb-1">Coco Beach</div>
                <div className="font-body text-white/35 text-sm" style={{ fontWeight: 300 }}>Dar es Salaam, Tanzania</div>
              </div>

              <div className="border border-white/8 p-6 space-y-4">
                <div className="font-wide text-[10px] text-white/30 tracking-[0.3em] uppercase mb-2">Race Categories</div>
                {[
                  { km: "21", label: "Half Marathon" },
                  { km: "10", label: "Road Race" },
                  { km: "5", label: "Community Run" },
                ].map(({ km, label }) => (
                  <div key={km} className="flex items-center gap-4">
                    <span className="font-display text-[var(--color-aqua)] text-2xl" style={{ fontWeight: 900 }}>{km}</span>
                    <div>
                      <div className="font-wide text-white/55 text-[11px] tracking-[0.1em] uppercase">KM</div>
                      <div className="font-body text-white/35 text-xs" style={{ fontWeight: 300 }}>{label} · Register via WhatsApp</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border border-emerald-500/30 bg-emerald-950/30 p-6">
                <div className="font-wide text-[10px] text-emerald-400 tracking-[0.3em] uppercase mb-3">WhatsApp Admin</div>
                <p className="font-body text-white/50 text-sm leading-relaxed mb-4" style={{ fontWeight: 300 }}>Contact admin directly for registration assistance or enquiries.</p>
                <a href="https://wa.me/255613786110?text=Hello%2C%20I%20need%20assistance%20registering%20for%20the%20Ocean%20City%20Marathon." target="_blank" rel="noopener noreferrer" className="block font-wide text-[13px] text-emerald-400 tracking-[0.15em] hover:text-white transition-colors">
                  💬 +255 613 786 110
                </a>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}

