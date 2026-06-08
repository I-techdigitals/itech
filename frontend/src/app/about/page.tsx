"use client";
import Link from "next/link";
import PageHeroImage from "@/components/PageHeroImage";
import { mediaUrl } from "@/lib/supabase";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const PAGE_HERO_IMAGE_SRC = mediaUrl("/images/bernd-dittrich-pYlBAu3de0w-unsplash.jpg");

export default function AboutPage() {
  const { t, isRTL } = useLanguage();

  return (
    <div style={{ direction: isRTL ? "rtl" : "ltr" }}>
      {/* Hero */}
      <div style={{ 
        background: "var(--hero-bg)",
        padding: "120px 0 100px", 
        textAlign: "center", 
        position: "relative", 
        overflow: "hidden" 
      }}>
        <PageHeroImage src={PAGE_HERO_IMAGE_SRC} alt="" />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="section-tag" style={{ color: "#fff", justifyContent: "center" }}>{t.aboutPage.heroTag}</div>
          <h1 className="section-title" style={{ color: "#fff" }}>
            {t.aboutPage.heroHeading}
          </h1>
          <p className="section-subtitle" style={{ margin: "0 auto", color: "rgba(255,255,255,0.85)" }}>
            {t.aboutPage.heroSub}
          </p>
        </div>
      </div>

      {/* Mission / Vision / Values */}
      <section className="section-py" style={{ background: "#fff" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 30, marginBottom: 80 }}>
            {[
              {
                icon: (
                  <svg width="38" height="38" fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24" aria-hidden>
                    <circle cx="12" cy="12" r="8" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
                  </svg>
                ),
                title: t.aboutPage.mission,
                text: t.aboutPage.missionText,
                id: "our-mission",
              },
              {
                icon: (
                  <svg width="38" height="38" fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4l1.8 3.6 4 .6-2.9 2.8.7 3.9-3.6-1.9-3.6 1.9.7-3.9L6.2 8.2l4-.6L12 4z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 20h16" />
                  </svg>
                ),
                title: t.aboutPage.vision,
                text: t.aboutPage.visionText,
                id: "our-vision",
              },
              {
                icon: (
                  <svg width="38" height="38" fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 5-3 10h-8L5 8l7-5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 14h6" />
                  </svg>
                ),
                title: t.aboutPage.values,
                text: t.aboutPage.valuesText,
                id: "our-values",
              },
            ].map(item => (
              <div key={item.id} id={item.id} className="card" style={{ padding: "40px 44px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", scrollMarginTop: "100px" }}>
                <div className="icon-brand" style={{ marginBottom: 16, lineHeight: 0 }}>{item.icon}</div>
                <h2 style={{ fontSize: "1.7rem", color: "var(--text-dark)", marginBottom: 14 }}>{item.title}</h2>
                <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.85 }}>{item.text}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="section-on-brand" style={{ padding: "70px 0", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", color: "#fff", marginBottom: 14 }}>{t.aboutPage.ctaHeading}</h2>
          <p style={{ color: "rgba(255,255,255,0.75)", marginBottom: 32 }}>{t.aboutPage.ctaSub}</p>
          <Link href="/contact" className="btn-on-brand" style={{ display: "inline-flex", alignItems: "center", gap: 8, flexDirection: isRTL ? "row-reverse" : "row" }}>
            {t.aboutPage.ctaBtn}
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ transform: isRTL ? "scaleX(-1)" : "none" }}>
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
