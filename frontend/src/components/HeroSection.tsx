"use client";
import Link from "next/link";
import { mediaUrl } from "@/lib/supabase";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const INTRO_VIDEO_SRC = mediaUrl("/video/I-Tech.mp4");

export default function HeroSection() {
  const { t } = useLanguage();
  const features = t.hero.features;

  return (
    <section id="hero" style={{ position: "relative" }}>
      {/* Dark Top Section */}
      <div className="bg-brand-pattern" style={{ padding: "150px 0 130px", position: "relative", overflow: "hidden" }}>
        <video autoPlay muted loop playsInline preload="metadata" aria-hidden="true" tabIndex={-1}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}>
          <source src={INTRO_VIDEO_SRC} type="video/mp4" />
        </video>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(83,80,162,0.62) 0%, rgba(83,80,162,0.44) 52%, rgba(83,80,162,0.56) 100%)", zIndex: 1, pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)", backgroundSize: "30px 30px", zIndex: 1, pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, background: "var(--primary)", opacity: 0.1, filter: "blur(80px)", borderRadius: "50%", pointerEvents: "none", zIndex: 1 }} />
        <div style={{ position: "absolute", bottom: -50, left: -50, width: 300, height: 300, background: "#fff", opacity: 0.05, filter: "blur(60px)", borderRadius: "50%", pointerEvents: "none", zIndex: 1 }} />

        <div className="container hero-grid hero-grid--text-only" style={{ position: "relative", zIndex: 2 }}>
          {/* Left Content */}
          <div>
            <div className="section-tag" style={{ color: "#fff" }}>{t.hero.tag}</div>
            <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#fff", fontWeight: 800, lineHeight: 1.4, marginBottom: 24 }}>
              {t.hero.heading}
            </h1>
            <p className="hero-desc" style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.1rem", marginBottom: 40, maxWidth: 500, lineHeight: 1.8 }}>
              {t.hero.sub}
            </p>
            <div className="hero-btn-container">
              <Link href="/contact" className="btn-on-brand">{t.hero.learnMore}</Link>
              <a href="#intro-video" className="hero-watch-video" aria-label="Watch I-TECH Digitals introduction video">
                <span className="hero-watch-video__icon" aria-hidden>
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </span>
                {t.hero.watchVideo}
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Feature Cards */}
      <div className="container features-container">
        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className={`feature-card ${i === 2 ? "active" : ""}`} style={{
              background: i === 2 ? "var(--feature-active)" : "#fff",
              color: i === 2 ? "#fff" : "var(--text-dark)",
              padding: "32px 20px", borderRadius: 16, textAlign: "center", boxShadow: "var(--shadow-lg)",
            }}>
              <div style={{ margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem" }}>
                {[
                  <svg key="0" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>,
                  <svg key="1" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>,
                  <svg key="2" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>,
                  <svg key="3" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" /></svg>,
                  <svg key="4" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>,
                ][i]}
              </div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: 8, color: i === 2 ? "#fff" : "var(--secondary)" }}>{f.title}</h3>
              <p style={{ fontSize: "0.85rem", color: i === 2 ? "rgba(255,255,255,0.8)" : "var(--text-muted)" }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
