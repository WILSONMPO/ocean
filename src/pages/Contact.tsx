import { useState } from "react";
import PageHero from "../components/PageHero";
import FadeUp from "../components/FadeUp";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <PageHero
        section="Contact"
        title="GET IN<br /><span className='text-cyan-300'>TOUCH.</span>"
        subtitle="Registration enquiries, sponsorship, media, and general contact."
        img="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&h=900&fit=crop&auto=format"
        imgAlt="Ocean waves"
      />

      <section className="py-24 lg:py-36 bg-gradient-to-b from-sky-50/60 to-white text-slate-900">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact details */}
            <FadeUp>
              <h2 className="font-display text-slate-900 leading-none mb-10 font-black" style={{ fontSize: "clamp(36px, 5vw, 68px)" }}>
                DIRECT<br /><span className="text-sky-600">CONTACT</span>
              </h2>

              <div className="space-y-8 bg-white p-8 rounded-2xl border-2 border-sky-200 shadow-md">
                <div>
                  <div className="font-wide text-[10px] text-sky-600 tracking-[0.3em] uppercase mb-2 font-bold">PHONE / WHATSAPP</div>
                  <a href="https://wa.me/255613786110" target="_blank" rel="noopener noreferrer" className="font-display text-slate-900 text-2xl lg:text-3xl hover:text-sky-600 transition-colors font-extrabold">
                    +255 613 786 110
                  </a>
                </div>

                <div>
                  <div className="font-wide text-[10px] text-sky-600 tracking-[0.3em] uppercase mb-2 font-bold">WEBSITE</div>
                  <a href="http://plusoneventz.com" target="_blank" rel="noopener noreferrer" className="font-body text-slate-800 text-lg hover:text-sky-600 transition-colors font-semibold">
                    plusoneventz.com
                  </a>
                </div>

                <div>
                  <div className="font-wide text-[10px] text-sky-600 tracking-[0.3em] uppercase mb-2 font-bold">INSTAGRAM</div>
                  <a href="https://instagram.com/oceancitymarathon" target="_blank" rel="noopener noreferrer" className="font-body text-slate-800 text-lg hover:text-sky-600 transition-colors font-semibold">
                    @oceancitymarathon
                  </a>
                </div>

                <div>
                  <div className="font-wide text-[10px] text-sky-600 tracking-[0.3em] uppercase mb-2 font-bold">LOCATION</div>
                  <div className="font-body text-slate-800 text-lg leading-relaxed font-semibold">
                    Coco Beach<br />Dar es Salaam, Tanzania
                  </div>
                </div>
              </div>

              <div className="mt-8 border-2 border-sky-200 bg-sky-50/80 p-6 rounded-2xl">
                <div className="font-wide text-[10px] text-sky-800 tracking-[0.3em] uppercase mb-4 font-bold">ENQUIRIES</div>
                <div className="space-y-2 font-body text-slate-700 text-sm leading-relaxed font-medium">
                  <div>· Runner registration</div>
                  <div>· Sponsorship &amp; partnerships</div>
                  <div>· Media &amp; press</div>
                  <div>· Volunteer opportunities</div>
                  <div>· General information</div>
                </div>
              </div>
            </FadeUp>

            {/* Form */}
            <FadeUp delay={150}>
              <h2 className="font-display text-slate-900 leading-none mb-10 font-black" style={{ fontSize: "clamp(36px, 5vw, 68px)" }}>
                SEND A<br /><span className="text-sky-600">MESSAGE</span>
              </h2>

              {sent ? (
                <div className="border-2 border-emerald-300 bg-emerald-50 rounded-2xl p-10 text-center shadow-lg">
                  <div className="font-display text-emerald-600 text-5xl mb-4 font-black">✓</div>
                  <div className="font-display text-slate-900 text-2xl tracking-[0.05em] uppercase mb-3 font-extrabold">MESSAGE SENT</div>
                  <p className="font-body text-slate-700 text-sm font-normal">Thank you for reaching out. We will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 bg-white p-8 lg:p-10 rounded-2xl border-2 border-sky-200 shadow-xl">
                  {[
                    { key: "name", label: "FULL NAME", type: "text", placeholder: "Your name" },
                    { key: "email", label: "EMAIL ADDRESS", type: "email", placeholder: "your@email.com" },
                    { key: "subject", label: "SUBJECT", type: "text", placeholder: "e.g. Sponsorship Enquiry" },
                  ].map(({ key, label, type, placeholder }) => (
                    <div key={key}>
                      <label className="font-wide text-[10px] text-slate-700 tracking-[0.2em] uppercase block mb-2 font-extrabold">{label}</label>
                      <input
                        type={type}
                        placeholder={placeholder}
                        value={form[key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                        required
                        className="w-full bg-sky-50/50 border-2 border-sky-200 focus:border-sky-600 text-slate-900 placeholder:text-slate-400 font-body text-sm px-4 py-3.5 outline-none transition-colors duration-200 rounded-lg font-medium"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="font-wide text-[10px] text-slate-700 tracking-[0.2em] uppercase block mb-2 font-extrabold">MESSAGE</label>
                    <textarea
                      placeholder="Tell us how we can help..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                      rows={5}
                      className="w-full bg-sky-50/50 border-2 border-sky-200 focus:border-sky-600 text-slate-900 placeholder:text-slate-400 font-body text-sm px-4 py-3.5 outline-none transition-colors duration-200 resize-none rounded-lg font-medium"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full font-display text-[14px] tracking-[0.15em] uppercase bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-500 hover:to-cyan-500 text-white py-4 transition-all duration-300 font-extrabold shadow-md rounded-lg"
                    style={{ clipPath: "polygon(10px 0,100% 0,calc(100% - 10px) 100%,0 100%)" }}>
                    SEND MESSAGE
                  </button>
                </form>
              )}
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
