"use client";
import { useState } from "react";
import { postJson } from "@/lib/api";
import OptimizedImage from "@/components/OptimizedImage";
import { mediaUrl } from "@/lib/supabase";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { serviceCards } from "@/data/services";

const CONTACT_IMAGE_SRC = mediaUrl("/images/4d40ec48-1229-4a4d-9afc-874fcc654642.png");

export default function ContactSection() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    const result = await postJson<{ success: boolean; message: string; emailSent?: boolean }>("/api/contact", form);
    if (!result.ok) {
      setErrorMsg(result.error);
      setStatus("error");
      return;
    }
    setSuccessMessage(result.data.message);
    setStatus("success");
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "14px 18px",
    border: "1px solid var(--border)", borderRadius: 8,
    fontFamily: "'Inter', sans-serif", fontSize: "0.95rem",
    color: "var(--text-dark)", background: "#fff",
    outline: "none", transition: "all 0.25s ease",
  };

  return (
    <section id="contact" className="section-py" style={{ background: "#ffffff" }}>
      <div className="container">
        <div className="about-grid">
          {/* Left Form */}
          <div>
            <div className="section-tag">{t.contact.tag}</div>
            <h2 className="section-title">
              {t.contact.heading} <span>{t.contact.headingSpan}</span>
            </h2>
            <p className="section-subtitle" style={{ marginBottom: 32 }}>{t.contact.sub}</p>

            {status === "success" ? (
              <div style={{ padding: "30px", background: "#f0fdf4", color: "#166534", borderRadius: 8, border: "1px solid #bbf7d0" }}>
                <h3 style={{ fontSize: "1.2rem", marginBottom: 8 }}>{t.contact.successTitle}</h3>
                <p>{successMessage || t.contact.successDefault}</p>
                <button onClick={() => setStatus("idle")} className="btn-primary" style={{ marginTop: 20 }}>
                  {t.contact.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {status === "error" && (
                  <div style={{ padding: "14px 18px", background: "#fef2f2", color: "#991b1b", borderRadius: 8, border: "1px solid #fecaca" }}>
                    {errorMsg || t.contact.errorDefault}
                  </div>
                )}
                <div className="form-row">
                  <input name="name" type="text" placeholder={t.contact.namePlaceholder} required value={form.name} onChange={handle} style={inputStyle} />
                  <input name="email" type="email" placeholder={t.contact.emailPlaceholder} required value={form.email} onChange={handle} style={inputStyle} />
                </div>
                <input name="phone" type="tel" placeholder={t.contact.phonePlaceholder} value={form.phone} onChange={handle} style={inputStyle} />
                <select name="service" value={form.service} onChange={handle} style={inputStyle}>
                  <option value="">{t.contact.servicePlaceholder}</option>
                  {serviceCards.map((service, i) => (
                    <option key={service.title} value={service.title}>
                      {t.services.cards[i].title}
                    </option>
                  ))}
                  <option value="Other">{t.services.formOther}</option>
                </select>
                <textarea name="message" placeholder={t.contact.messagePlaceholder} required rows={5} value={form.message} onChange={handle} style={{ ...inputStyle, resize: "vertical" }} />
                <div>
                  <button type="submit" className="btn-primary" disabled={status === "loading"}>
                    {status === "loading" ? t.contact.sending : t.contact.sendMessage}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Image */}
          <div className="contact-image-container">
            <OptimizedImage src={CONTACT_IMAGE_SRC} alt="Contact Us" fill loading="lazy" sizes="(max-width: 991px) 100vw, 50vw" style={{ objectFit: "cover" }} />
            <div style={{ position: "absolute", top: 30, left: 30, width: 60, height: 60, background: "var(--primary)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#ffffff", boxShadow: "var(--shadow-lg)" }}>
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
