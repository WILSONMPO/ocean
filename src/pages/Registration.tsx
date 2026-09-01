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
      <div className="min-h-screen bg-gradient-to-b from-sky-50 via-cyan-50/50 to-white flex items-center justify-center px-6 py-24 text-slate-900">
        <div className="text-center max-w-lg bg-white p-10 rounded-2xl border-2 border-sky-200 shadow-2xl">
          <div className="font-display text-emerald-600 num-glow" style={{ fontWeight: 900, fontSize: "96px" }}>✓</div>
          <h2 className="font-display text-slate-900 text-4xl lg:text-6xl leading-none mb-6 font-black">
            REDIRECTING TO<br /><span className="text-emerald-600">WHATSAPP...</span>
          </h2>
          <p className="font-body text-slate-600 text-base leading-relaxed mb-8 font-normal">
            Thank you for registering! We are redirecting you to our official WhatsApp admin (+255 613 786 110) to finalize your registration.
          </p>
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-display text-[14px] tracking-[0.15em] uppercase bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-8 py-4 transition-all duration-300 mb-6 shadow-lg font-extrabold rounded-lg"
            style={{ clipPath: "polygon(10px 0,100% 0,calc(100% - 10px) 100%,0 100%)" }}
          >
            💬 OPEN WHATSAPP CHAT NOW (+255 613 786 110)
          </a>
          <div className="font-wide text-sky-600 text-[11px] tracking-[0.25em] uppercase font-extrabold bg-sky-50 py-2 px-4 rounded-full border border-sky-200">12 December 2026 · Dar es Salaam, Tanzania</div>
        </div>
      </div>
    );
  }

  return (
    <>
      <PageHero
        section="Registration"
        title="REGISTER<br /><span className='text-cyan-300'>TO RUN.</span>"
        subtitle="12 December 2026 · Coco Beach, Dar es Salaam · Instant Registration via WhatsApp +255 613 786 110."
        img="https://images.unsplash.com/photo-1766066015228-9f99d6dfae5a?w=1600&h=900&fit=crop&auto=format"
        imgAlt="Marathon start line"
      />

      {/* Direct WhatsApp Banner */}
      <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-100 border-b-2 border-emerald-300 py-5 px-6">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 animate-pulse shrink-0 shadow-sm" />
            <div>
              <div className="font-display text-slate-900 text-base lg:text-lg uppercase font-black">FAST REGISTRATION VIA WHATSAPP</div>
              <div className="font-wide text-emerald-900 text-xs font-semibold">Register directly with our admin number: +255 613 786 110</div>
            </div>
          </div>
          <a
            href="https://wa.me/255613786110?text=Hello%2C%20I%20want%20to%20register%20for%20the%20Ocean%20City%20Community%20Marathon%202026."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-display text-[13px] tracking-[0.15em] uppercase bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-6 py-3 transition-all duration-300 shrink-0 font-extrabold shadow-md rounded-lg"
            style={{ clipPath: "polygon(8px 0,100% 0,calc(100% - 8px) 100%,0 100%)" }}
          >
            💬 REGISTER ON WHATSAPP (+255 613 786 110)
          </a>
        </div>
      </div>

      <section className="py-24 lg:py-36 bg-gradient-to-b from-sky-50/60 to-white text-slate-900">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Form Column */}
            <div className="lg:col-span-8">
              <FadeUp>
                {/* Stepper Header */}
                <div className="flex items-center justify-between mb-10 pb-6 border-b-2 border-sky-200">
                  {["01 Personal Details", "02 Category", "03 Confirm"].map((title, i) => (
                    <div key={title} className="flex items-center gap-2">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-display text-sm font-extrabold ${
                        step === i + 1 ? "bg-sky-600 text-white shadow-md" : step > i + 1 ? "bg-emerald-500 text-white" : "bg-sky-100 text-sky-700 border border-sky-300"
                      }`}>
                        {step > i + 1 ? "✓" : i + 1}
                      </div>
                      <span className={`font-wide text-xs tracking-[0.1em] uppercase hidden sm:inline ${
                        step === i + 1 ? "text-sky-600 font-extrabold" : "text-slate-500 font-semibold"
                      }`}>{title}</span>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleNext} className="bg-white p-8 lg:p-10 rounded-2xl border-2 border-sky-200 shadow-xl">
                  {step === 1 && (
                    <div className="space-y-6">
                      <h3 className="font-display text-slate-900 text-2xl lg:text-3xl uppercase mb-8 font-black">PERSONAL DETAILS</h3>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="font-wide text-[10px] text-slate-700 tracking-[0.2em] uppercase block mb-2 font-extrabold">FIRST NAME *</label>
                          <input type="text" required value={form.firstName} onChange={(e) => update("firstName", e.target.value)}
                            placeholder="First Name" className="w-full bg-sky-50/50 border-2 border-sky-200 focus:border-sky-600 text-slate-900 placeholder:text-slate-400 font-body text-sm px-4 py-3.5 outline-none transition-colors rounded-lg font-medium" />
                        </div>
                        <div>
                          <label className="font-wide text-[10px] text-slate-700 tracking-[0.2em] uppercase block mb-2 font-extrabold">LAST NAME *</label>
                          <input type="text" required value={form.lastName} onChange={(e) => update("lastName", e.target.value)}
                            placeholder="Last Name" className="w-full bg-sky-50/50 border-2 border-sky-200 focus:border-sky-600 text-slate-900 placeholder:text-slate-400 font-body text-sm px-4 py-3.5 outline-none transition-colors rounded-lg font-medium" />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="font-wide text-[10px] text-slate-700 tracking-[0.2em] uppercase block mb-2 font-extrabold">PHONE NUMBER *</label>
                          <input type="tel" required value={form.phone} onChange={(e) => update("phone", e.target.value)}
                            placeholder="+255..." className="w-full bg-sky-50/50 border-2 border-sky-200 focus:border-sky-600 text-slate-900 placeholder:text-slate-400 font-body text-sm px-4 py-3.5 outline-none transition-colors rounded-lg font-medium" />
                        </div>
                        <div>
                          <label className="font-wide text-[10px] text-slate-700 tracking-[0.2em] uppercase block mb-2 font-extrabold">EMAIL ADDRESS</label>
                          <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)}
                            placeholder="your@email.com" className="w-full bg-sky-50/50 border-2 border-sky-200 focus:border-sky-600 text-slate-900 placeholder:text-slate-400 font-body text-sm px-4 py-3.5 outline-none transition-colors rounded-lg font-medium" />
                        </div>
                      </div>
                      <div>
                        <label className="font-wide text-[10px] text-slate-700 tracking-[0.2em] uppercase block mb-2 font-extrabold">COUNTRY *</label>
                        <input type="text" required value={form.country} onChange={(e) => update("country", e.target.value)}
                          placeholder="e.g. Tanzania" className="w-full bg-sky-50/50 border-2 border-sky-200 focus:border-sky-600 text-slate-900 placeholder:text-slate-400 font-body text-sm px-4 py-3.5 outline-none transition-colors rounded-lg font-medium" />
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-6">
                      <h3 className="font-display text-slate-900 text-2xl lg:text-3xl uppercase mb-8 font-black">RACE CATEGORY</h3>
                      <div className="grid gap-4">
                        {[
                          { id: "21k", km: "21KM", label: "HALF MARATHON", desc: "For competitive endurance runners" },
                          { id: "10k", km: "10KM", label: "ROAD RACE", desc: "For challengers stepping up performance" },
                          { id: "5k", km: "5KM", label: "COMMUNITY RUN", desc: "For families, first-timers & groups" },
                        ].map(({ id, km, label, desc }) => (
                          <label key={id} onClick={() => update("category", id)}
                            className={`flex items-center gap-4 p-5 rounded-xl border-2 cursor-pointer transition-all ${
                              form.category === id ? "border-sky-600 bg-sky-50/80 shadow-md" : "border-sky-200 hover:border-sky-400 bg-white"
                            }`}>
                            <input type="radio" name="category" checked={form.category === id} onChange={() => {}} className="accent-sky-600" />
                            <div className="font-display text-sky-600 text-3xl font-black">{km}</div>
                            <div>
                              <div className="font-display text-slate-900 text-lg tracking-[0.05em] uppercase font-black">{label}</div>
                              <div className="font-body text-slate-600 text-xs font-medium">{desc}</div>
                            </div>
                          </label>
                        ))}
                      </div>
                      <div>
                        <label className="font-wide text-[10px] text-slate-700 tracking-[0.2em] uppercase block mb-2 font-extrabold">T-SHIRT SIZE *</label>
                        <select required value={form.tshirt} onChange={(e) => update("tshirt", e.target.value)}
                          className="w-full bg-sky-50/50 border-2 border-sky-200 focus:border-sky-600 text-slate-900 font-body text-sm px-4 py-3.5 outline-none transition-colors rounded-lg font-bold">
                          <option value="">Select T-Shirt Size</option>
                          <option value="S">S - Small</option>
                          <option value="M">M - Medium</option>
                          <option value="L">L - Large</option>
                          <option value="XL">XL - Extra Large</option>
                          <option value="XXL">XXL - Double Extra Large</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-6">
                      <h3 className="font-display text-slate-900 text-2xl lg:text-3xl uppercase mb-8 font-black">CONFIRMATION</h3>
                      <div className="p-6 bg-sky-50 rounded-xl border border-sky-200 space-y-3 font-body text-sm">
                        <div><strong className="text-sky-900">Name:</strong> {form.firstName} {form.lastName}</div>
                        <div><strong className="text-sky-900">Phone:</strong> {form.phone}</div>
                        <div><strong className="text-sky-900">Category:</strong> {form.category.toUpperCase()}</div>
                        <div><strong className="text-sky-900">T-Shirt Size:</strong> {form.tshirt}</div>
                        <div><strong className="text-sky-900">Race Date:</strong> 12 December 2026</div>
                      </div>
                      <p className="font-body text-slate-600 text-sm font-normal">
                        Clicking below will launch WhatsApp with your pre-filled details to complete registration with our admin team.
                      </p>
                    </div>
                  )}

                  <div className="flex items-center gap-4 mt-8 pt-6 border-t border-sky-100">
                    {step > 1 && (
                      <button type="button" onClick={() => setStep(step - 1)}
                        className="font-wide text-[12px] text-slate-700 hover:text-sky-600 tracking-[0.2em] uppercase transition-colors px-6 py-4 border-2 border-sky-200 hover:border-sky-400 rounded-lg font-bold">
                        ← BACK
                      </button>
                    )}
                    <button type="submit"
                      className="flex-1 font-display text-[14px] tracking-[0.15em] uppercase bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white py-4 transition-all duration-300 flex items-center justify-center gap-2 font-extrabold shadow-md rounded-lg"
                      style={{ clipPath: "polygon(10px 0,100% 0,calc(100% - 10px) 100%,0 100%)" }}>
                      {step < 3 ? "CONTINUE →" : "💬 REGISTER VIA WHATSAPP (+255 613 786 110)"}
                    </button>
                  </div>
                </form>
              </FadeUp>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <FadeUp delay={150} className="space-y-6">
                <div className="border-2 border-sky-300 bg-gradient-to-b from-sky-50 to-cyan-50/70 rounded-2xl p-6 shadow-md">
                  <div className="font-display text-sky-600 text-5xl lg:text-6xl leading-none mb-2 font-black num-glow-blue">12</div>
                  <div className="font-wide text-slate-800 text-[11px] tracking-[0.2em] uppercase font-extrabold">DECEMBER 2026</div>
                  <div className="w-full h-[2px] bg-sky-200 my-4" />
                  <div className="font-wide text-sky-900 text-[11px] tracking-[0.15em] uppercase mb-1 font-extrabold">Coco Beach</div>
                  <div className="font-body text-slate-700 text-sm font-medium">Dar es Salaam, Tanzania</div>
                </div>

                <div className="border-2 border-sky-200 bg-white rounded-2xl p-6 space-y-4 shadow-sm">
                  <div className="font-wide text-[10px] text-sky-700 tracking-[0.3em] uppercase mb-2 font-bold">Race Categories</div>
                  {[
                    { km: "21", label: "Half Marathon" },
                    { km: "10", label: "Road Race" },
                    { km: "5", label: "Community Run" },
                  ].map(({ km, label }) => (
                    <div key={km} className="flex items-center gap-4 border-b border-sky-100 pb-3 last:border-0 last:pb-0">
                      <span className="font-display text-sky-600 text-2xl font-black">{km}</span>
                      <div>
                        <div className="font-wide text-slate-900 text-[11px] tracking-[0.1em] uppercase font-bold">KM</div>
                        <div className="font-body text-slate-600 text-xs font-normal">{label} · Register via WhatsApp</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-2 border-emerald-200 bg-emerald-50 rounded-2xl p-6 shadow-sm">
                  <div className="font-wide text-[10px] text-emerald-800 tracking-[0.3em] uppercase mb-3 font-bold">WhatsApp Admin</div>
                  <p className="font-body text-slate-700 text-sm leading-relaxed mb-4 font-normal">Contact admin directly for registration assistance or enquiries.</p>
                  <a href="https://wa.me/255613786110?text=Hello%2C%20I%20need%20assistance%20registering%20for%20the%20Ocean%20City%20Marathon." target="_blank" rel="noopener noreferrer" className="block font-wide text-[13px] text-emerald-700 tracking-[0.15em] hover:text-emerald-900 transition-colors font-extrabold">
                    💬 +255 613 786 110
                  </a>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
