"use client";
import ContactSection from "@/components/ContactSection";
import PageHeroImage from "@/components/PageHeroImage";
import { mediaUrl } from "@/lib/supabase";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const PAGE_HERO_IMAGE_SRC = mediaUrl("/images/bernd-dittrich-pYlBAu3de0w-unsplash.jpg");

export default function ContactPage() {
  const { t, isRTL } = useLanguage();

  return (
    <div style={{ direction: isRTL ? "rtl" : "ltr" }}>
      {/* Page Hero */}
      <div style={{
        background: "var(--hero-bg)",
        padding: "120px 0 100px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden"
      }}>
        <PageHeroImage src={PAGE_HERO_IMAGE_SRC} alt="" />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{
            display: "inline-block",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: 50,
            padding: "6px 20px",
            marginBottom: 20
          }}>
            <span style={{ color: "#fff", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              {t.contactPage.heroTag}
            </span>
          </div>
          <h1 className="section-title" style={{ color: "#fff" }}>
            {t.contactPage.heroHeading}
          </h1>
          <p className="section-subtitle" style={{ margin: "0 auto", color: "rgba(255,255,255,0.85)" }}>
            {t.contactPage.heroSub}
          </p>
        </div>
      </div>

      {/* Contact / Message Form */}
      <ContactSection />
    </div>
  );
}
