import { useState } from "react";
import PageHero from "../components/PageHero";
import FadeUp from "../components/FadeUp";

interface ContactForm {
  name: string;
  phone: string;
  email: string;
  department: string;
  subject: string;
  message: string;
}

const DEPARTMENTS = [
  "Runner Registration Enquiry",
  "Corporate & Group Entries (10+ Runners)",
  "Sponsorship & Brand Partnership (Tanzanite/Gold/Silver)",
  "Media & Press Accreditation",
  "Volunteer Program",
  "Bahari Tour / International Runner Desk",
  "General Information",
];

const CONTACT_FAQS = [
  {
    q: "What is the quickest way to reach the marathon team?",
    a: "The fastest way is via our dedicated WhatsApp hotline at +255 613 786 110. Our team actively replies to registration queries, kit queries, and general requests 7 days a week.",
  },
  {
    q: "How can our brand receive the official 2026 Sponsorship Deck?",
    a: "Select 'Sponsorship & Brand Partnership' on the form or email info@plusoneventz.com. We will immediately provide our comprehensive 2026 partnership prospectus covering Tanzanite (TZS 125M), Gold, Silver, Bronze, and Spotbuy tiers.",
  },
  {
    q: "How do corporate teams coordinate registration and branding?",
    a: "Corporate teams enjoy dedicated registration invoices, custom team branded race bibs, and optional hospitality tent space at Coco Beach Village. Contact our corporate desk directly via WhatsApp at +255 613 786 110.",
  },
  {
    q: "Where is the main race event hub located?",
    a: "The start line, finish line, and Ocean City Event Village are situated at Coco Beach, along Toure Drive in Masaki / Oysterbay, Dar es Salaam, Tanzania.",
  },
];

export default function Contact() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    phone: "",
    email: "",
    department: DEPARTMENTS[0],
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [error, setError] = useState<string>("");

  const update = <K extends keyof ContactForm>(k: K, v: ContactForm[K]) => {
    setForm((f) => ({ ...f, [k]: v }));
    setError("");
  };

  const buildWhatsAppMessage = () => {
    return [
      "🌊 *OCEAN CITY COMMUNITY MARATHON — DIRECT ENQUIRY*",
      "──────────────────────────────",
      `*From:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      form.email ? `*Email:* ${form.email}` : "",
      `*Department:* ${form.department}`,
      form.subject ? `*Subject:* ${form.subject}` : "",
      "",
      "*Message:*",
      form.message,
      "──────────────────────────────",
      "_Sent via oceancitymarathon.com contact page_",
    ]
      .filter((line) => line !== undefined && line !== "")
      .join("\n");
  };

  const buildWhatsAppUrl = () => {
    return `https://wa.me/255613786110?text=${encodeURIComponent(buildWhatsAppMessage())}`;
  };

  const buildMailtoUrl = () => {
    const subject = encodeURIComponent(`[Ocean City Marathon] ${form.department}: ${form.subject || "Enquiry"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nDepartment: ${form.department}\n\nMessage:\n${form.message}`
    );
    return `mailto:info@plusoneventz.com?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      setError("Please fill in your name, phone number, and message.");
      return;
    }
    setSent(true);
    window.open(buildWhatsAppUrl(), "_blank");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(buildWhatsAppMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <>
      <PageHero
        section="Contact"
        title="GET IN<br /><span className='text-cyan-300'>TOUCH.</span>"
        subtitle="Registration enquiries, sponsorship, corporate packages, media, and general support."
        img="/images/marathon_20.jpg"
        imgAlt="Ocean City Marathon runners and contact"
      />

      {/* Instant Action Hotline Banner */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 text-white py-4 px-6 shadow-md relative z-20">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
            <div>
              <div className="font-display text-white text-base lg:text-lg uppercase tracking-wide font-black">
                DIRECT MARATHON HELPLINE & WHATSAPP DESK
              </div>
              <div className="font-wide text-emerald-100 text-xs font-medium">
                Connect instantly with our team at Coco Beach: <strong className="text-white font-bold">+255 613 786 110</strong>
              </div>
            </div>
          </div>
          <a
            href="https://wa.me/255613786110?text=Hello%2C%20I%20have%20an%20enquiry%20regarding%20the%20Ocean%20City%20Community%20Marathon%202026."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-display text-[13px] tracking-[0.15em] uppercase bg-white hover:bg-emerald-50 text-emerald-800 px-6 py-2.5 transition-all duration-300 shrink-0 font-extrabold shadow-md rounded-lg"
          >
            💬 OPEN WHATSAPP CHAT
          </a>
        </div>
      </div>

      <section className="py-20 lg:py-32 bg-gradient-to-b from-sky-50/60 to-white text-slate-900">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Direct Contact Information Column */}
            <div className="lg:col-span-5 space-y-8">
              <FadeUp>
                <div className="mb-8">
                  <span className="font-wide text-[10px] text-sky-600 tracking-[0.3em] uppercase font-bold">Reach Us Directly</span>
                  <h2 className="font-display text-slate-900 text-4xl lg:text-5xl font-black leading-tight uppercase">
                    CONNECT WITH <span className="text-sky-600">OUR TEAM</span>
                  </h2>
                  <p className="font-body text-slate-600 text-sm leading-relaxed mt-2">
                    Whether you are an individual runner, a corporate team coordinator, a brand sponsor, or a member of the press, we are ready to assist.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Phone & WhatsApp Card */}
                  <div className="border-2 border-emerald-200 bg-white p-6 rounded-2xl shadow-sm hover:border-emerald-400 transition-all group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-wide text-[10px] text-emerald-700 tracking-[0.3em] uppercase font-extrabold">
                        CALL & WHATSAPP
                      </div>
                      <span className="font-wide text-[9px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold uppercase">
                        Active Support
                      </span>
                    </div>
                    <a
                      href="https://wa.me/255613786110"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-slate-900 text-2xl lg:text-3xl font-extrabold group-hover:text-emerald-600 transition-colors block mb-1"
                    >
                      +255 613 786 110
                    </a>
                    <p className="font-body text-slate-600 text-xs">
                      Available Monday to Sunday for runner inquiries and registration.
                    </p>
                  </div>

                  {/* Organiser Website */}
                  <div className="border-2 border-sky-200 bg-white p-6 rounded-2xl shadow-sm hover:border-sky-400 transition-all group">
                    <div className="font-wide text-[10px] text-sky-600 tracking-[0.3em] uppercase mb-2 font-extrabold">
                      ORGANISING BODY
                    </div>
                    <div className="font-display text-slate-900 text-xl font-black uppercase mb-1">
                      PLUS ONE EVENTS SOLUTIONS
                    </div>
                    <a
                      href="http://plusoneventz.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-wide text-xs text-sky-600 hover:text-sky-800 font-bold tracking-wider inline-flex items-center gap-1"
                    >
                      Visit plusoneventz.com ↗
                    </a>
                  </div>

                  {/* Social Channels */}
                  <div className="border-2 border-sky-200 bg-white p-6 rounded-2xl shadow-sm hover:border-sky-400 transition-all">
                    <div className="font-wide text-[10px] text-sky-600 tracking-[0.3em] uppercase mb-2 font-extrabold">
                      OFFICIAL SOCIAL MEDIA
                    </div>
                    <a
                      href="https://instagram.com/oceancitymarathon"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-slate-900 text-xl font-black hover:text-sky-600 transition-colors block mb-2"
                    >
                      @oceancitymarathon
                    </a>
                    <div className="flex gap-2">
                      {[
                        { name: "Instagram", href: "https://instagram.com/oceancitymarathon" },
                        { name: "TikTok", href: "#" },
                        { name: "Facebook", href: "#" },
                        { name: "YouTube", href: "#" },
                      ].map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-wide text-[10px] tracking-wider uppercase bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200 px-3 py-1.5 rounded-lg font-bold transition-all"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Venue Location Card */}
                  <div className="border-2 border-sky-200 bg-gradient-to-br from-sky-50 to-cyan-50/50 p-6 rounded-2xl shadow-sm">
                    <div className="font-wide text-[10px] text-sky-800 tracking-[0.3em] uppercase mb-2 font-extrabold">
                      RACE VENUE & EVENT VILLAGE
                    </div>
                    <div className="font-display text-slate-900 text-xl font-black uppercase mb-1">
                      COCO BEACH, MASAKI
                    </div>
                    <div className="font-body text-slate-700 text-xs leading-relaxed mb-4">
                      Toure Drive, Msasani Peninsula, Dar es Salaam, Tanzania.<br />
                      Race Start, Finish Line & Celebration Village.
                    </div>
                    <a
                      href="https://maps.google.com/?q=Coco+Beach+Dar+es+Salaam"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-wide text-[11px] tracking-wider uppercase bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg font-bold transition-all shadow-xs"
                    >
                      📍 Open in Google Maps ↗
                    </a>
                  </div>
                </div>
              </FadeUp>
            </div>

            {/* Interactive Form Column */}
            <div className="lg:col-span-7">
              <FadeUp delay={100}>
                <div className="bg-white p-8 lg:p-12 rounded-3xl border-2 border-sky-200 shadow-xl">
                  {sent ? (
                    <div className="py-8 text-center space-y-6">
                      <div className="w-20 h-20 mx-auto rounded-full bg-emerald-100 border-2 border-emerald-300 flex items-center justify-center font-display text-emerald-600 text-4xl shadow-inner animate-bounce">
                        ✓
                      </div>

                      <div>
                        <div className="font-wide text-xs text-emerald-800 tracking-[0.25em] uppercase font-bold bg-emerald-50 border border-emerald-200 py-1.5 px-4 rounded-full w-fit mx-auto mb-3">
                          Message Prepared
                        </div>
                        <h3 className="font-display text-slate-900 text-3xl lg:text-4xl font-black uppercase mb-2">
                          DISPATCH YOUR <span className="text-emerald-600">INQUIRY</span>
                        </h3>
                        <p className="font-body text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                          Your message has been pre-formatted for instant handling by our team. Choose your preferred channel below:
                        </p>
                      </div>

                      <div className="bg-sky-50 border border-sky-200 rounded-2xl p-5 text-left text-xs font-body text-slate-700 space-y-2">
                        <div><strong>To:</strong> Ocean City Marathon Admin (+255 613 786 110)</div>
                        <div><strong>Subject:</strong> {form.department} - {form.subject || "Enquiry"}</div>
                        <div><strong>From:</strong> {form.name} ({form.phone})</div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                          href={buildWhatsAppUrl()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 font-display text-sm tracking-[0.15em] uppercase bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-xl font-extrabold hover:from-emerald-500 hover:to-teal-500 transition-all shadow-lg"
                        >
                          💬 OPEN IN WHATSAPP
                        </a>
                        <a
                          href={buildMailtoUrl()}
                          className="inline-flex items-center justify-center gap-2 font-display text-sm tracking-[0.15em] uppercase bg-sky-600 text-white px-6 py-4 rounded-xl font-extrabold hover:bg-sky-500 transition-all shadow-md"
                        >
                          ✉️ SEND AS EMAIL
                        </a>
                      </div>

                      <div className="pt-4 flex items-center justify-center gap-4">
                        <button
                          type="button"
                          onClick={handleCopy}
                          className="font-wide text-xs text-slate-600 hover:text-sky-600 tracking-wider uppercase font-semibold"
                        >
                          {copied ? "✓ Copied to Clipboard" : "📋 Copy Message Text"}
                        </button>
                        <span className="text-slate-300">·</span>
                        <button
                          type="button"
                          onClick={() => {
                            setSent(false);
                            setForm({
                              name: "",
                              phone: "",
                              email: "",
                              department: DEPARTMENTS[0],
                              subject: "",
                              message: "",
                            });
                          }}
                          className="font-wide text-xs text-slate-600 hover:text-sky-600 tracking-wider uppercase font-semibold underline"
                        >
                          Send Another Message
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <span className="font-wide text-[10px] text-sky-600 tracking-[0.3em] uppercase font-bold">Direct Message</span>
                        <h3 className="font-display text-slate-900 text-3xl font-black uppercase">
                          SEND US A MESSAGE
                        </h3>
                        <p className="font-body text-slate-600 text-sm mt-1">
                          Fill out the form below. When submitted, you can send it directly to our WhatsApp support admin or via email.
                        </p>
                      </div>

                      {error && (
                        <div className="p-4 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 font-body text-sm flex items-center gap-2">
                          <span>⚠️</span>
                          <span>{error}</span>
                        </div>
                      )}

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="font-wide text-[10px] text-slate-700 tracking-[0.2em] uppercase block mb-2 font-extrabold">
                            YOUR FULL NAME <span className="text-sky-600">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Wilson Mponz"
                            value={form.name}
                            onChange={(e) => update("name", e.target.value)}
                            className="w-full bg-sky-50/50 border-2 border-sky-200 focus:border-sky-600 text-slate-900 placeholder:text-slate-400 font-body text-sm px-4 py-3.5 outline-none transition-colors rounded-xl font-medium"
                          />
                        </div>

                        <div>
                          <label className="font-wide text-[10px] text-slate-700 tracking-[0.2em] uppercase block mb-2 font-extrabold">
                            WHATSAPP / PHONE NUMBER <span className="text-sky-600">*</span>
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="e.g. +255 712 345 678"
                            value={form.phone}
                            onChange={(e) => update("phone", e.target.value)}
                            className="w-full bg-sky-50/50 border-2 border-sky-200 focus:border-sky-600 text-slate-900 placeholder:text-slate-400 font-body text-sm px-4 py-3.5 outline-none transition-colors rounded-xl font-medium"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="font-wide text-[10px] text-slate-700 tracking-[0.2em] uppercase block mb-2 font-extrabold">
                            EMAIL ADDRESS
                          </label>
                          <input
                            type="email"
                            placeholder="e.g. your@email.com"
                            value={form.email}
                            onChange={(e) => update("email", e.target.value)}
                            className="w-full bg-sky-50/50 border-2 border-sky-200 focus:border-sky-600 text-slate-900 placeholder:text-slate-400 font-body text-sm px-4 py-3.5 outline-none transition-colors rounded-xl font-medium"
                          />
                        </div>

                        <div>
                          <label className="font-wide text-[10px] text-slate-700 tracking-[0.2em] uppercase block mb-2 font-extrabold">
                            INQUIRY DEPARTMENT <span className="text-sky-600">*</span>
                          </label>
                          <select
                            value={form.department}
                            onChange={(e) => update("department", e.target.value)}
                            className="w-full bg-sky-50/50 border-2 border-sky-200 focus:border-sky-600 text-slate-900 font-body text-sm px-4 py-3.5 outline-none transition-colors rounded-xl font-semibold"
                          >
                            {DEPARTMENTS.map((dept) => (
                              <option key={dept} value={dept}>
                                {dept}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="font-wide text-[10px] text-slate-700 tracking-[0.2em] uppercase block mb-2 font-extrabold">
                          SUBJECT (OPTIONAL)
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Question regarding corporate team discount"
                          value={form.subject}
                          onChange={(e) => update("subject", e.target.value)}
                          className="w-full bg-sky-50/50 border-2 border-sky-200 focus:border-sky-600 text-slate-900 placeholder:text-slate-400 font-body text-sm px-4 py-3.5 outline-none transition-colors rounded-xl font-medium"
                        />
                      </div>

                      <div>
                        <label className="font-wide text-[10px] text-slate-700 tracking-[0.2em] uppercase block mb-2 font-extrabold">
                          MESSAGE DETAILS <span className="text-sky-600">*</span>
                        </label>
                        <textarea
                          required
                          rows={5}
                          placeholder="Tell us how we can help you..."
                          value={form.message}
                          onChange={(e) => update("message", e.target.value)}
                          className="w-full bg-sky-50/50 border-2 border-sky-200 focus:border-sky-600 text-slate-900 placeholder:text-slate-400 font-body text-sm px-4 py-3.5 outline-none transition-colors rounded-xl font-medium resize-none"
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <button
                          type="submit"
                          className="flex-1 font-display text-[15px] tracking-[0.15em] uppercase bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white py-4 px-6 rounded-xl font-extrabold transition-all shadow-md flex items-center justify-center gap-2"
                        >
                          💬 SEND DIRECTLY VIA WHATSAPP (+255 613 786 110)
                        </button>
                      </div>

                      <p className="font-body text-[11px] text-slate-500 text-center">
                        Our WhatsApp support desk responds promptly during daytime operating hours.
                      </p>
                    </form>
                  )}
                </div>
              </FadeUp>
            </div>
          </div>

          {/* Quick FAQ Section */}
          <div className="mt-20 pt-16 border-t border-sky-200">
            <FadeUp>
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="font-wide text-[10px] text-sky-600 tracking-[0.3em] uppercase font-bold">Frequently Asked</span>
                <h3 className="font-display text-slate-900 text-3xl lg:text-4xl font-black uppercase">
                  COMMON ENQUIRIES & ANSWERS
                </h3>
              </div>

              <div className="max-w-3xl mx-auto space-y-4">
                {CONTACT_FAQS.map((faq, i) => (
                  <div key={faq.q} className="border-2 border-sky-200 bg-white rounded-2xl p-6 shadow-xs">
                    <button
                      type="button"
                      onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                      className="w-full text-left font-display text-slate-900 text-xl font-bold flex items-center justify-between gap-4"
                    >
                      <span>{faq.q}</span>
                      <span className="text-sky-600 text-2xl font-light">{faqOpen === i ? "−" : "+"}</span>
                    </button>
                    {faqOpen === i && (
                      <p className="font-body text-slate-600 text-sm leading-relaxed mt-3 pt-3 border-t border-sky-100 font-normal">
                        {faq.a}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
