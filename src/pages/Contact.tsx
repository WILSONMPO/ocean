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
        title="GET IN<br /><span style='color:var(--color-aqua)'>TOUCH.</span>"
        subtitle="Registration enquiries, sponsorship, media, and general contact."
        img="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&h=900&fit=crop&auto=format"
        imgAlt="Ocean waves"
      />

      <section className="py-24 lg:py-36 bg-[var(--color-ocean-950)]">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact details */}
            <FadeUp>
              <h2 className="font-display text-white leading-none mb-10" style={{ fontWeight: 900, fontSize: "clamp(36px, 5vw, 68px)" }}>
                DIRECT<br />CONTACT
              </h2>

              <div className="space-y-8">
                <div>
                  <div className="font-wide text-[10px] text-[var(--color-aqua)] tracking-[0.3em] uppercase mb-2">PHONE</div>
                  <a href="tel:+255613786110" className="font-display text-white text-2xl lg:text-3xl hover:text-[var(--color-aqua)] transition-colors" style={{ fontWeight: 700 }}>
                    +255 613 786 110
                  </a>
                </div>

                <div>
                  <div className="font-wide text-[10px] text-[var(--color-aqua)] tracking-[0.3em] uppercase mb-2">WEBSITE</div>
                  <a href="http://plusoneventz.com" target="_blank" rel="noopener noreferrer" className="font-body text-white/70 text-lg hover:text-white transition-colors" style={{ fontWeight: 300 }}>
                    plusoneventz.com
                  </a>
                </div>

                <div>
                  <div className="font-wide text-[10px] text-[var(--color-aqua)] tracking-[0.3em] uppercase mb-2">INSTAGRAM</div>
                  <a href="https://instagram.com/oceancitymarathon" target="_blank" rel="noopener noreferrer" className="font-body text-white/70 text-lg hover:text-[var(--color-aqua)] transition-colors" style={{ fontWeight: 300 }}>
                    @oceancitymarathon
                  </a>
                </div>

                <div>
                  <div className="font-wide text-[10px] text-[var(--color-aqua)] tracking-[0.3em] uppercase mb-2">LOCATION</div>
                  <div className="font-body text-white/70 text-lg leading-relaxed" style={{ fontWeight: 300 }}>
                    Coco Beach<br />Dar es Salaam, Tanzania
                  </div>
                </div>
              </div>

              <div className="mt-12 border-t border-white/8 pt-8">
                <div className="font-wide text-[10px] text-white/30 tracking-[0.3em] uppercase mb-4">ENQUIRIES</div>
                <div className="space-y-2 font-body text-white/45 text-sm leading-relaxed" style={{ fontWeight: 300 }}>
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
              <h2 className="font-display text-white leading-none mb-10" style={{ fontWeight: 900, fontSize: "clamp(36px, 5vw, 68px)" }}>
                SEND A<br />MESSAGE
              </h2>

              {sent ? (
                <div className="border border-[var(--color-aqua)]/30 p-8 text-center">
                  <div className="font-display text-[var(--color-aqua)] text-4xl mb-4" style={{ fontWeight: 900 }}>✓</div>
                  <div className="font-display text-white text-2xl tracking-[0.05em] uppercase mb-3" style={{ fontWeight: 800 }}>MESSAGE SENT</div>
                  <p className="font-body text-white/45 text-sm" style={{ fontWeight: 300 }}>Thank you for reaching out. We will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {[
                    { key: "name", label: "FULL NAME", type: "text", placeholder: "Your name" },
                    { key: "email", label: "EMAIL ADDRESS", type: "email", placeholder: "your@email.com" },
                    { key: "subject", label: "SUBJECT", type: "text", placeholder: "e.g. Sponsorship Enquiry" },
                  ].map(({ key, label, type, placeholder }) => (
                    <div key={key}>
                      <label className="font-wide text-[9px] text-white/35 tracking-[0.3em] uppercase block mb-2">{label}</label>
                      <input
                        type={type}
                        placeholder={placeholder}
                        value={form[key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                        required
                        className="w-full bg-transparent border border-white/12 hover:border-white/25 focus:border-[var(--color-aqua)]/60 text-white placeholder:text-white/25 font-body text-sm px-4 py-4 outline-none transition-colors duration-200"
                        style={{ fontWeight: 300 }}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="font-wide text-[9px] text-white/35 tracking-[0.3em] uppercase block mb-2">MESSAGE</label>
                    <textarea
                      placeholder="Tell us how we can help..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                      rows={5}
                      className="w-full bg-transparent border border-white/12 hover:border-white/25 focus:border-[var(--color-aqua)]/60 text-white placeholder:text-white/25 font-body text-sm px-4 py-4 outline-none transition-colors duration-200 resize-none"
                      style={{ fontWeight: 300 }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full font-display text-[14px] tracking-[0.15em] uppercase bg-[var(--color-ocean-400)] hover:bg-[var(--color-aqua)] text-white py-4 transition-all duration-300"
                    style={{ fontWeight: 800, clipPath: "polygon(10px 0,100% 0,calc(100% - 10px) 100%,0 100%)" }}>
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
