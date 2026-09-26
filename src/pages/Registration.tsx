import { useState } from "react";
import { Link } from "react-router";
import PageHero from "../components/PageHero";
import FadeUp from "../components/FadeUp";

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  country: string;
  gender: string;
  dob: string;
  category: "21k" | "10k" | "5k";
  tshirt: string;
  emergencyName: string;
  emergencyPhone: string;
  medicalNotes: string;
  terms: boolean;
}

const CATEGORIES = [
  {
    id: "21k" as const,
    km: "21KM",
    title: "HALF MARATHON",
    badge: "COMPETITIVE RUNNER",
    priceTzs: "TZS 40,000",
    priceUsd: "$25 USD",
    startTime: "06:00 AM",
    description: "The premier coastal distance along Coco Beach and Masaki Peninsula. For seasoned runners seeking a certified, high-energy race.",
    perks: ["Official Dri-Fit Marathon T-shirt", "Custom Finisher Medal", "Electronic Timing Chip & Bib", "8 Coastal Hydration Stations", "Post-Race Swahili Coconut & Breakfast"],
  },
  {
    id: "10k" as const,
    km: "10KM",
    title: "ROAD RACE",
    badge: "THE CHALLENGER",
    priceTzs: "TZS 30,000",
    priceUsd: "$20 USD",
    startTime: "06:30 AM",
    description: "Fast, scenic mid-distance test. Ideal for runners stepping up their pace or setting a personal milestone along the Indian Ocean.",
    perks: ["Official Dri-Fit Marathon T-shirt", "Custom Finisher Medal", "Timing Bib", "4 Coastal Hydration Stations", "Post-Race Refreshments"],
  },
  {
    id: "5k" as const,
    km: "5KM",
    title: "COMMUNITY RUN",
    badge: "EVERYONE & FAMILIES",
    priceTzs: "TZS 20,000",
    priceUsd: "$15 USD",
    startTime: "07:00 AM",
    description: "Open to all! Families, kids, youth clubs, corporate teams, and walkers. Every entry directly supports health insurance for 300 orphans.",
    perks: ["Official Marathon T-shirt", "Finisher Medal", "Commemorative Bib", "Hydration Stations", "Celebration Village Access"],
  },
];

const FAQS = [
  {
    q: "How does the WhatsApp registration process work?",
    a: "After completing your runner details on this form, our system generates an official registration voucher that opens in WhatsApp with our verified Admin (+255 613 786 110). The admin immediately confirms your slot, sends your mobile money Lipa Namba (M-Pesa / Tigo Pesa / Airtel Money), and issues your E-Receipt.",
  },
  {
    q: "Where and when can I collect my Race Kit & Bib?",
    a: "Kit collection will take place at the Ocean City Marathon Village at Coco Beach, Dar es Salaam on Thursday 10 December and Friday 11 December 2026 from 9:00 AM to 6:00 PM. Please present your WhatsApp confirmation or national ID.",
  },
  {
    q: "Can I register a corporate team or group?",
    a: "Yes! For groups of 10 or more runners, corporate packages include discounted bulk fees, branded team bibs, and dedicated tent space. Chat directly with our WhatsApp admin (+255 613 786 110) or mention 'Corporate Team' in your details.",
  },
  {
    q: "Can international runners participate?",
    a: "Absolutely! We welcome international runners from across the world. International payment options via card or bank wire and Bahari Tour hotel packages are coordinated directly through our international desk on WhatsApp.",
  },
];

export default function Registration() {
  const [step, setStep] = useState<number>(1);
  const [copied, setCopied] = useState<boolean>(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    country: "Tanzania",
    gender: "Male",
    dob: "",
    category: "21k",
    tshirt: "L",
    emergencyName: "",
    emergencyPhone: "",
    medicalNotes: "",
    terms: true,
  });
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<string>("");

  const update = <K extends keyof FormData>(k: K, v: FormData[K]) => {
    setForm((prev) => ({ ...prev, [k]: v }));
    setValidationError("");
  };

  const selectedCategory = CATEGORIES.find((c) => c.id === form.category) || CATEGORIES[0];

  const buildWhatsAppText = () => {
    return [
      "🌊 *OCEAN CITY COMMUNITY MARATHON 2026*",
      "📍 *Venue:* Coco Beach, Dar es Salaam | 📅 12 Dec 2026",
      "──────────────────────────────",
      "🏃 *RUNNER REGISTRATION APPLICATION*",
      "",
      `*Name:* ${form.firstName} ${form.lastName}`.trim(),
      `*Phone / WhatsApp:* ${form.phone}`,
      form.email ? `*Email:* ${form.email}` : "",
      `*Country:* ${form.country}`,
      `*Gender:* ${form.gender}`,
      form.dob ? `*DOB:* ${form.dob}` : "",
      "",
      `*Distance:* ${selectedCategory.km} - ${selectedCategory.title}`,
      `*Registration Fee:* ${selectedCategory.priceTzs} (${selectedCategory.priceUsd})`,
      `*T-Shirt Size:* ${form.tshirt}`,
      "",
      form.emergencyName ? `*Emergency Contact:* ${form.emergencyName} (${form.emergencyPhone})` : "",
      form.medicalNotes ? `*Medical Notes:* ${form.medicalNotes}` : "",
      "",
      "✅ *Status:* Ready to complete payment & receive Bib confirmation.",
      "──────────────────────────────",
      "_Sent via oceancitymarathon.com online portal_",
    ]
      .filter((line) => line !== undefined && line !== "")
      .join("\n");
  };

  const buildWhatsAppUrl = () => {
    return `https://wa.me/255613786110?text=${encodeURIComponent(buildWhatsAppText())}`;
  };

  const validateStep = (currentStep: number): boolean => {
    if (currentStep === 1) {
      if (!form.firstName.trim()) {
        setValidationError("Please enter your First Name.");
        return false;
      }
      if (!form.lastName.trim()) {
        setValidationError("Please enter your Last Name.");
        return false;
      }
      if (!form.phone.trim() || form.phone.trim().length < 9) {
        setValidationError("Please enter a valid Phone / WhatsApp number.");
        return false;
      }
      if (!form.country.trim()) {
        setValidationError("Please specify your Country of residence.");
        return false;
      }
    }

    if (currentStep === 2) {
      if (!form.category) {
        setValidationError("Please select your race distance category.");
        return false;
      }
      if (!form.tshirt) {
        setValidationError("Please select your T-Shirt size.");
        return false;
      }
      if (!form.emergencyPhone.trim()) {
        setValidationError("Please provide an Emergency Contact phone number for race safety.");
        return false;
      }
    }

    if (currentStep === 3) {
      if (!form.terms) {
        setValidationError("Please accept the terms and safety waiver to proceed.");
        return false;
      }
    }

    setValidationError("");
    return true;
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(step)) return;

    if (step < 3) {
      setStep((s) => s + 1);
      window.scrollTo({ top: 350, behavior: "smooth" });
    } else {
      setSubmitted(true);
      window.open(buildWhatsAppUrl(), "_blank");
    }
  };

  const handleCopyDetails = () => {
    navigator.clipboard.writeText(buildWhatsAppText());
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-sky-50 via-cyan-50/40 to-white flex items-center justify-center px-6 py-28 text-slate-900">
        <div className="text-center max-w-xl bg-white p-8 lg:p-12 rounded-3xl border-2 border-emerald-300 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500" />

          <div className="w-20 h-20 mx-auto rounded-full bg-emerald-100 border-2 border-emerald-300 flex items-center justify-center font-display text-emerald-600 text-4xl mb-6 shadow-inner animate-bounce">
            ✓
          </div>

          <div className="font-wide text-xs text-emerald-800 tracking-[0.25em] uppercase font-bold bg-emerald-50 border border-emerald-200 py-1.5 px-4 rounded-full w-fit mx-auto mb-4">
            Application Generated Successfully
          </div>

          <h2 className="font-display text-slate-900 text-3xl lg:text-5xl leading-tight mb-4 font-black">
            CONNECTING TO <span className="text-emerald-600">WHATSAPP ADMIN...</span>
          </h2>

          <p className="font-body text-slate-600 text-base leading-relaxed mb-6 font-normal">
            Thank you, <strong className="text-slate-900 font-bold">{form.firstName} {form.lastName}</strong>! Your entry details for the <strong className="text-sky-700 font-bold">{selectedCategory.km} {selectedCategory.title}</strong> have been prepared.
          </p>

          <div className="bg-sky-50/80 border border-sky-200 rounded-2xl p-5 mb-8 text-left space-y-3 font-body text-sm">
            <div className="font-wide text-[11px] text-sky-800 tracking-[0.2em] uppercase font-extrabold border-b border-sky-200 pb-2">
              Next Steps with Admin:
            </div>
            <div className="flex items-start gap-3 text-slate-700">
              <span className="font-display text-sky-600 font-bold text-lg leading-none">1.</span>
              <span>Tap below to open WhatsApp chat with Admin (<strong className="text-slate-900">+255 613 786 110</strong>).</span>
            </div>
            <div className="flex items-start gap-3 text-slate-700">
              <span className="font-display text-sky-600 font-bold text-lg leading-none">2.</span>
              <span>Admin verifies your runner slot and issues your official Lipa Namba reference.</span>
            </div>
            <div className="flex items-start gap-3 text-slate-700">
              <span className="font-display text-sky-600 font-bold text-lg leading-none">3.</span>
              <span>Collect your race kit at Coco Beach on 10–11 December with your digital confirmation voucher.</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 font-display text-[15px] tracking-[0.15em] uppercase bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-8 py-4 transition-all duration-300 shadow-xl shadow-emerald-900/20 font-extrabold rounded-xl"
            >
              💬 OPEN WHATSAPP CHAT NOW
            </a>
            <button
              type="button"
              onClick={handleCopyDetails}
              className="inline-flex items-center justify-center gap-2 font-wide text-xs tracking-[0.1em] uppercase border-2 border-sky-300 hover:bg-sky-50 text-sky-800 px-6 py-4 rounded-xl font-bold transition-all"
            >
              {copied ? "✓ COPIED TO CLIPBOARD" : "📋 COPY DETAILS"}
            </button>
          </div>

          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setStep(1);
            }}
            className="font-wide text-xs text-slate-500 hover:text-sky-600 tracking-[0.15em] uppercase font-semibold underline underline-offset-4"
          >
            ← Register Another Runner
          </button>
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
        img="/images/marathon_19.jpg"
        imgAlt="Ocean City Marathon runners and start line"
      />

      {/* Direct WhatsApp Instant Action Banner */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 text-white py-4 px-6 shadow-md relative z-20">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
            <div>
              <div className="font-display text-white text-base lg:text-lg uppercase tracking-wide font-black">
                FAST REGISTRATION & CORPORATE DESK OPEN
              </div>
              <div className="font-wide text-emerald-100 text-xs font-medium">
                Official Registration Hotline: <strong className="text-white font-bold">+255 613 786 110</strong> (Call / WhatsApp)
              </div>
            </div>
          </div>
          <a
            href="https://wa.me/255613786110?text=Hello%2C%20I%20want%20to%20register%20for%20the%20Ocean%20City%20Community%20Marathon%202026."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-display text-[13px] tracking-[0.15em] uppercase bg-white hover:bg-emerald-50 text-emerald-800 px-6 py-2.5 transition-all duration-300 shrink-0 font-extrabold shadow-md rounded-lg"
          >
            💬 CHAT DIRECTLY WITH ADMIN
          </a>
        </div>
      </div>

      <section className="py-20 lg:py-32 bg-gradient-to-b from-sky-50/60 to-white text-slate-900">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Form Column */}
            <div className="lg:col-span-8">
              <FadeUp>
                {/* Stepper Header */}
                <div className="bg-white p-6 rounded-2xl border-2 border-sky-200 shadow-md mb-8">
                  <div className="flex items-center justify-between">
                    {[
                      { num: 1, title: "Personal Details", sub: "Name & Contact" },
                      { num: 2, title: "Race & Kit", sub: "Category & Shirt" },
                      { num: 3, title: "Review & Confirm", sub: "WhatsApp Voucher" },
                    ].map(({ num, title, sub }) => (
                      <button
                        type="button"
                        key={num}
                        onClick={() => {
                          if (num < step) setStep(num);
                        }}
                        className={`flex items-center gap-3 text-left transition-all ${num <= step ? "cursor-pointer" : "cursor-default opacity-60"
                          }`}
                      >
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center font-display text-base font-extrabold transition-all ${step === num
                              ? "bg-sky-600 text-white shadow-md shadow-sky-600/30 scale-105"
                              : step > num
                                ? "bg-emerald-500 text-white"
                                : "bg-sky-100 text-sky-700 border border-sky-300"
                            }`}
                        >
                          {step > num ? "✓" : num}
                        </div>
                        <div className="hidden sm:block">
                          <div className={`font-wide text-xs tracking-[0.1em] uppercase font-extrabold ${step === num ? "text-sky-600" : "text-slate-700"}`}>
                            {title}
                          </div>
                          <div className="font-body text-[11px] text-slate-500 font-normal">{sub}</div>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-sky-100 h-1.5 rounded-full mt-5 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-sky-600 to-cyan-500 h-full transition-all duration-500"
                      style={{ width: `${(step / 3) * 100}%` }}
                    />
                  </div>
                </div>

                {validationError && (
                  <div className="mb-6 p-4 rounded-xl bg-amber-50 border-2 border-amber-300 text-amber-900 font-body text-sm flex items-center gap-3">
                    <span className="text-xl">⚠️</span>
                    <span className="font-medium">{validationError}</span>
                  </div>
                )}

                <form onSubmit={handleNext} className="bg-white p-8 lg:p-12 rounded-3xl border-2 border-sky-200 shadow-xl">
                  {/* STEP 1: Personal Details */}
                  {step === 1 && (
                    <div className="space-y-6">
                      <div>
                        <span className="font-wide text-[10px] text-sky-600 tracking-[0.3em] uppercase font-bold">Step 01 / 03</span>
                        <h3 className="font-display text-slate-900 text-3xl lg:text-4xl uppercase font-black">
                          RUNNER INFORMATION
                        </h3>
                        <p className="font-body text-slate-600 text-sm mt-1">
                          Please enter your basic information. Your WhatsApp number is where your bib and race kit details will be delivered.
                        </p>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="font-wide text-[10px] text-slate-700 tracking-[0.2em] uppercase block mb-2 font-extrabold">
                            FIRST NAME <span className="text-sky-600">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={form.firstName}
                            onChange={(e) => update("firstName", e.target.value)}
                            placeholder="e.g. Wilson"
                            className="w-full bg-sky-50/50 border-2 border-sky-200 focus:border-sky-600 text-slate-900 placeholder:text-slate-400 font-body text-sm px-4 py-3.5 outline-none transition-colors rounded-xl font-medium"
                          />
                        </div>
                        <div>
                          <label className="font-wide text-[10px] text-slate-700 tracking-[0.2em] uppercase block mb-2 font-extrabold">
                            LAST NAME <span className="text-sky-600">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={form.lastName}
                            onChange={(e) => update("lastName", e.target.value)}
                            placeholder="e.g. Mponz"
                            className="w-full bg-sky-50/50 border-2 border-sky-200 focus:border-sky-600 text-slate-900 placeholder:text-slate-400 font-body text-sm px-4 py-3.5 outline-none transition-colors rounded-xl font-medium"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="font-wide text-[10px] text-slate-700 tracking-[0.2em] uppercase block mb-2 font-extrabold">
                            WHATSAPP / PHONE NUMBER <span className="text-sky-600">*</span>
                          </label>
                          <input
                            type="tel"
                            required
                            value={form.phone}
                            onChange={(e) => update("phone", e.target.value)}
                            placeholder="e.g. +255 712 345 678"
                            className="w-full bg-sky-50/50 border-2 border-sky-200 focus:border-sky-600 text-slate-900 placeholder:text-slate-400 font-body text-sm px-4 py-3.5 outline-none transition-colors rounded-xl font-medium"
                          />
                          <span className="font-body text-[11px] text-slate-500 mt-1 block">
                            Used for instant WhatsApp confirmation and E-Receipt.
                          </span>
                        </div>
                        <div>
                          <label className="font-wide text-[10px] text-slate-700 tracking-[0.2em] uppercase block mb-2 font-extrabold">
                            EMAIL ADDRESS (OPTIONAL)
                          </label>
                          <input
                            type="email"
                            value={form.email}
                            onChange={(e) => update("email", e.target.value)}
                            placeholder="e.g. wilson@example.com"
                            className="w-full bg-sky-50/50 border-2 border-sky-200 focus:border-sky-600 text-slate-900 placeholder:text-slate-400 font-body text-sm px-4 py-3.5 outline-none transition-colors rounded-xl font-medium"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-3 gap-5">
                        <div>
                          <label className="font-wide text-[10px] text-slate-700 tracking-[0.2em] uppercase block mb-2 font-extrabold">
                            COUNTRY OF RESIDENCE <span className="text-sky-600">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={form.country}
                            onChange={(e) => update("country", e.target.value)}
                            placeholder="Tanzania, Kenya, Uganda, etc."
                            className="w-full bg-sky-50/50 border-2 border-sky-200 focus:border-sky-600 text-slate-900 placeholder:text-slate-400 font-body text-sm px-4 py-3.5 outline-none transition-colors rounded-xl font-medium"
                          />
                        </div>
                        <div>
                          <label className="font-wide text-[10px] text-slate-700 tracking-[0.2em] uppercase block mb-2 font-extrabold">
                            GENDER <span className="text-sky-600">*</span>
                          </label>
                          <select
                            value={form.gender}
                            onChange={(e) => update("gender", e.target.value)}
                            className="w-full bg-sky-50/50 border-2 border-sky-200 focus:border-sky-600 text-slate-900 font-body text-sm px-4 py-3.5 outline-none transition-colors rounded-xl font-semibold"
                          >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                        </div>
                        <div>
                          <label className="font-wide text-[10px] text-slate-700 tracking-[0.2em] uppercase block mb-2 font-extrabold">
                            DATE OF BIRTH (OPTIONAL)
                          </label>
                          <input
                            type="date"
                            value={form.dob}
                            onChange={(e) => update("dob", e.target.value)}
                            className="w-full bg-sky-50/50 border-2 border-sky-200 focus:border-sky-600 text-slate-900 font-body text-sm px-4 py-3.5 outline-none transition-colors rounded-xl font-medium"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 2: Category & Runner Kit */}
                  {step === 2 && (
                    <div className="space-y-6">
                      <div>
                        <span className="font-wide text-[10px] text-sky-600 tracking-[0.3em] uppercase font-bold">Step 02 / 03</span>
                        <h3 className="font-display text-slate-900 text-3xl lg:text-4xl uppercase font-black">
                          SELECT DISTANCE & KIT
                        </h3>
                        <p className="font-body text-slate-600 text-sm mt-1">
                          Pick your race distance. All race entries include our official dri-fit marathon shirt, finisher medal, timing bib, and aid station access.
                        </p>
                      </div>

                      <div className="space-y-4">
                        {CATEGORIES.map((cat) => (
                          <div
                            key={cat.id}
                            onClick={() => update("category", cat.id)}
                            className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-200 relative ${form.category === cat.id
                                ? "border-sky-600 bg-sky-50/90 shadow-md ring-2 ring-sky-400/20"
                                : "border-sky-200 hover:border-sky-400 bg-white"
                              }`}
                          >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
                              <div className="flex items-center gap-4">
                                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${form.category === cat.id ? "border-sky-600 bg-sky-600 text-white" : "border-slate-300"
                                  }`}>
                                  {form.category === cat.id && <span className="text-xs">✓</span>}
                                </div>
                                <div>
                                  <div className="flex items-center gap-3">
                                    <span className="font-display text-sky-600 text-3xl font-black">{cat.km}</span>
                                    <span className="font-display text-slate-900 text-xl font-extrabold uppercase">{cat.title}</span>
                                  </div>
                                  <span className="font-wide text-[10px] text-sky-700 tracking-[0.2em] uppercase font-bold bg-sky-100 px-2.5 py-0.5 rounded">
                                    {cat.badge} · Start {cat.startTime}
                                  </span>
                                </div>
                              </div>
                              <div className="text-left sm:text-right">
                                <div className="font-display text-slate-900 text-2xl font-black">{cat.priceTzs}</div>
                                <div className="font-wide text-xs text-slate-500 font-semibold">{cat.priceUsd}</div>
                              </div>
                            </div>

                            <p className="font-body text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                              {cat.description}
                            </p>

                            <div className="flex flex-wrap gap-2 pt-3 border-t border-sky-100">
                              {cat.perks.map((perk) => (
                                <span key={perk} className="font-body text-[11px] text-slate-700 bg-white border border-sky-200 px-2.5 py-1 rounded-md font-medium flex items-center gap-1.5">
                                  <span className="text-sky-600 font-bold">✓</span> {perk}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* T-Shirt and Emergency Contact */}
                      <div className="grid sm:grid-cols-2 gap-5 pt-4 border-t border-sky-100">
                        <div>
                          <label className="font-wide text-[10px] text-slate-700 tracking-[0.2em] uppercase block mb-2 font-extrabold">
                            OFFICIAL T-SHIRT SIZE <span className="text-sky-600">*</span>
                          </label>
                          <select
                            required
                            value={form.tshirt}
                            onChange={(e) => update("tshirt", e.target.value)}
                            className="w-full bg-sky-50/50 border-2 border-sky-200 focus:border-sky-600 text-slate-900 font-body text-sm px-4 py-3.5 outline-none transition-colors rounded-xl font-bold"
                          >
                            <option value="S">S - Small (Chest 36-38")</option>
                            <option value="M">M - Medium (Chest 38-40")</option>
                            <option value="L">L - Large (Chest 40-42")</option>
                            <option value="XL">XL - Extra Large (Chest 42-44")</option>
                            <option value="XXL">XXL - Double Extra Large (Chest 44-46")</option>
                          </select>
                        </div>

                        <div>
                          <label className="font-wide text-[10px] text-slate-700 tracking-[0.2em] uppercase block mb-2 font-extrabold">
                            EMERGENCY CONTACT PHONE <span className="text-sky-600">*</span>
                          </label>
                          <input
                            type="tel"
                            required
                            value={form.emergencyPhone}
                            onChange={(e) => update("emergencyPhone", e.target.value)}
                            placeholder="e.g. +255 754 000 111"
                            className="w-full bg-sky-50/50 border-2 border-sky-200 focus:border-sky-600 text-slate-900 placeholder:text-slate-400 font-body text-sm px-4 py-3.5 outline-none transition-colors rounded-xl font-medium"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="font-wide text-[10px] text-slate-700 tracking-[0.2em] uppercase block mb-2 font-extrabold">
                            EMERGENCY CONTACT NAME (OPTIONAL)
                          </label>
                          <input
                            type="text"
                            value={form.emergencyName}
                            onChange={(e) => update("emergencyName", e.target.value)}
                            placeholder="Name of family member or friend"
                            className="w-full bg-sky-50/50 border-2 border-sky-200 focus:border-sky-600 text-slate-900 placeholder:text-slate-400 font-body text-sm px-4 py-3.5 outline-none transition-colors rounded-xl font-medium"
                          />
                        </div>

                        <div>
                          <label className="font-wide text-[10px] text-slate-700 tracking-[0.2em] uppercase block mb-2 font-extrabold">
                            MEDICAL NOTES / ALLERGIES (OPTIONAL)
                          </label>
                          <input
                            type="text"
                            value={form.medicalNotes}
                            onChange={(e) => update("medicalNotes", e.target.value)}
                            placeholder="e.g. Asthmatic, Penicillin allergy"
                            className="w-full bg-sky-50/50 border-2 border-sky-200 focus:border-sky-600 text-slate-900 placeholder:text-slate-400 font-body text-sm px-4 py-3.5 outline-none transition-colors rounded-xl font-medium"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 3: Review & WhatsApp Confirmation */}
                  {step === 3 && (
                    <div className="space-y-6">
                      <div>
                        <span className="font-wide text-[10px] text-sky-600 tracking-[0.3em] uppercase font-bold">Step 03 / 03</span>
                        <h3 className="font-display text-slate-900 text-3xl lg:text-4xl uppercase font-black">
                          REVIEW & LAUNCH WHATSAPP
                        </h3>
                        <p className="font-body text-slate-600 text-sm mt-1">
                          Review your registration summary below. Clicking submit connects you directly to our verified marathon admin to confirm bib assignment.
                        </p>
                      </div>

                      {/* Official Digital Voucher Card */}
                      <div className="rounded-2xl border-2 border-sky-300 bg-gradient-to-br from-sky-50 via-cyan-50/60 to-white p-6 lg:p-8 shadow-md relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-sky-200/30 rounded-bl-full pointer-events-none" />

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-sky-200 gap-4">
                          <div>
                            <div className="font-wide text-[10px] text-sky-700 tracking-[0.25em] uppercase font-extrabold">
                              Ocean City Community Marathon 2026
                            </div>
                            <div className="font-display text-slate-900 text-2xl lg:text-3xl font-black uppercase">
                              RUNNER ENTRY VOUCHER
                            </div>
                          </div>
                          <div className="bg-sky-600 text-white px-4 py-2 rounded-xl text-center">
                            <div className="font-display text-2xl font-black leading-none">{selectedCategory.km}</div>
                            <div className="font-wide text-[9px] tracking-wider uppercase font-bold">{selectedCategory.title}</div>
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4 py-6 text-sm font-body border-b border-sky-200">
                          <div>
                            <span className="text-slate-500 text-xs block">Runner Name:</span>
                            <span className="font-bold text-slate-900 text-base">{form.firstName} {form.lastName}</span>
                          </div>
                          <div>
                            <span className="text-slate-500 text-xs block">WhatsApp Number:</span>
                            <span className="font-bold text-slate-900 text-base">{form.phone}</span>
                          </div>
                          <div>
                            <span className="text-slate-500 text-xs block">Country & Gender:</span>
                            <span className="font-semibold text-slate-800">{form.country} · {form.gender}</span>
                          </div>
                          <div>
                            <span className="text-slate-500 text-xs block">Selected T-Shirt Size:</span>
                            <span className="font-semibold text-slate-800">{form.tshirt}</span>
                          </div>
                          <div>
                            <span className="text-slate-500 text-xs block">Emergency Contact:</span>
                            <span className="font-semibold text-slate-800">
                              {form.emergencyName ? `${form.emergencyName} (${form.emergencyPhone})` : form.emergencyPhone}
                            </span>
                          </div>
                          <div>
                            <span className="text-slate-500 text-xs block">Entry Fee:</span>
                            <span className="font-bold text-sky-700 text-base">{selectedCategory.priceTzs} ({selectedCategory.priceUsd})</span>
                          </div>
                        </div>

                        <div className="pt-4 flex flex-col sm:flex-row justify-between text-xs text-slate-600 gap-2">
                          <div>📍 Race Hub: Coco Beach, Dar es Salaam</div>
                          <div>📅 Date: Saturday, 12 December 2026</div>
                        </div>
                      </div>

                      {/* Terms Waiver */}
                      <label className="flex items-start gap-3 p-4 rounded-xl border border-sky-200 bg-sky-50/50 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={form.terms}
                          onChange={(e) => update("terms", e.target.checked)}
                          className="mt-1 h-4 w-4 rounded border-sky-300 text-sky-600 focus:ring-sky-500"
                        />
                        <span className="font-body text-xs text-slate-700 leading-relaxed font-normal">
                          I agree to the Ocean City Marathon event rules and health waiver. I declare that I am physically fit to participate in the selected race distance and agree to follow all official race marshal instructions.
                        </span>
                      </label>
                    </div>
                  )}

                  {/* Form Nav Buttons */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 pt-6 border-t border-sky-100">
                    {step > 1 && (
                      <button
                        type="button"
                        onClick={() => {
                          setStep((s) => s - 1);
                          window.scrollTo({ top: 350, behavior: "smooth" });
                        }}
                        className="w-full sm:w-auto font-wide text-[12px] text-slate-700 hover:text-sky-600 tracking-[0.2em] uppercase transition-colors px-6 py-4 border-2 border-sky-200 hover:border-sky-400 rounded-xl font-bold"
                      >
                        ← BACK
                      </button>
                    )}
                    <button
                      type="submit"
                      className="w-full flex-1 font-display text-[15px] tracking-[0.15em] uppercase bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white py-4 px-8 transition-all duration-300 flex items-center justify-center gap-2 font-extrabold shadow-lg shadow-emerald-900/20 rounded-xl"
                    >
                      {step < 3 ? "CONTINUE TO NEXT STEP →" : "💬 COMPLETE REGISTRATION VIA WHATSAPP (+255 613 786 110)"}
                    </button>
                  </div>
                </form>
              </FadeUp>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <FadeUp delay={100}>
                {/* Event Summary Card */}
                <div className="border-2 border-sky-300 bg-gradient-to-b from-sky-50 via-cyan-50/70 to-white rounded-3xl p-6 lg:p-8 shadow-md">
                  <div className="font-wide text-sky-800 text-[11px] tracking-[0.25em] uppercase font-extrabold mb-1">
                    RACE DAY
                  </div>
                  <div className="font-display text-sky-600 text-5xl lg:text-6xl leading-none mb-1 font-black num-glow-blue">
                    12 DEC
                  </div>
                  <div className="font-wide text-slate-800 text-xs tracking-[0.15em] uppercase font-bold">
                    2026 · DAR ES SALAAM
                  </div>
                  <div className="w-full h-[2px] bg-sky-200 my-4" />
                  <div className="space-y-2 text-sm font-body text-slate-700">
                    <div>📍 <strong>Venue:</strong> Coco Beach, Toure Drive</div>
                    <div>⏰ <strong>First Wave:</strong> 06:00 AM EAT</div>
                    <div>🏆 <strong>Award Ceremony:</strong> 09:30 AM EAT</div>
                  </div>
                </div>

                {/* Instant WhatsApp Support Card */}
                <div className="border-2 border-emerald-300 bg-emerald-50/90 rounded-3xl p-6 shadow-md">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-wide text-[10px] text-emerald-800 tracking-[0.25em] uppercase font-extrabold">
                      Live Registration Desk
                    </span>
                  </div>
                  <div className="font-display text-slate-900 text-2xl font-black uppercase mb-2">
                    NEED HELP REGISTERING?
                  </div>
                  <p className="font-body text-slate-700 text-xs leading-relaxed mb-4">
                    Our team is on standby to assist with single entries, corporate teams, international payments, and questions.
                  </p>
                  <a
                    href="https://wa.me/255613786110?text=Hello%2C%20I%20need%20assistance%20registering%20for%20the%20Ocean%20City%20Marathon."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center font-display text-sm tracking-[0.12em] uppercase bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3.5 px-4 rounded-xl font-extrabold hover:from-emerald-500 hover:to-teal-500 transition-all shadow-md"
                  >
                    💬 CHAT ON WHATSAPP (+255 613 786 110)
                  </a>
                </div>

                {/* Payment Methods */}
                <div className="border-2 border-sky-200 bg-white rounded-3xl p-6 shadow-sm">
                  <div className="font-wide text-[10px] text-sky-700 tracking-[0.3em] uppercase mb-3 font-extrabold">
                    Accepted Payments
                  </div>
                  <div className="space-y-2.5 text-xs font-body text-slate-700">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-sky-500" />
                      <span><strong>M-Pesa / Vodacom Lipa Namba</strong></span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-sky-500" />
                      <span><strong>Tigo Pesa / Airtel Money</strong></span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-sky-500" />
                      <span><strong>CRDB & NMB Bank Transfer</strong></span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-sky-500" />
                      <span><strong>Credit / Debit Card (International)</strong></span>
                    </div>
                  </div>
                  <div className="text-[11px] text-slate-500 mt-4 pt-3 border-t border-sky-100">
                    Payment details will be provided directly by the WhatsApp registration admin.
                  </div>
                </div>

                {/* Quick Registration FAQ */}
                <div className="border-2 border-sky-200 bg-white rounded-3xl p-6 shadow-sm space-y-3">
                  <div className="font-wide text-[10px] text-sky-700 tracking-[0.3em] uppercase mb-1 font-extrabold">
                    Registration FAQ
                  </div>
                  {FAQS.map((faq, i) => (
                    <div key={faq.q} className="border-b border-sky-100 pb-3 last:border-0 last:pb-0">
                      <button
                        type="button"
                        onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                        className="w-full text-left font-wide text-xs text-slate-900 font-bold hover:text-sky-600 transition-colors flex items-center justify-between gap-2"
                      >
                        <span>{faq.q}</span>
                        <span className="text-sky-600 text-sm">{faqOpen === i ? "−" : "+"}</span>
                      </button>
                      {faqOpen === i && (
                        <p className="font-body text-xs text-slate-600 leading-relaxed mt-2 pt-1 font-normal">
                          {faq.a}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
