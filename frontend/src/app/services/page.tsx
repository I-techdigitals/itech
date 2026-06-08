"use client";
import Link from "next/link";
import ImagePrefetcher from "@/components/ImagePrefetcher";
import OptimizedImage from "@/components/OptimizedImage";
import PageHeroImage from "@/components/PageHeroImage";
import { serviceDetails } from "@/data/services";
import { mediaTransformUrl, mediaUrl } from "@/lib/supabase";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const PAGE_HERO_IMAGE_SRC = mediaUrl("/images/bernd-dittrich-pYlBAu3de0w-unsplash.jpg");
const SERVICE_PREFETCH_IMAGES = serviceDetails
  .map((service) => service.image)
  .filter((src) => !/\.(mp4|webm|ogg)$/i.test(src))
  .slice(0, 6);

export default function ServicesPage() {
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
          <div style={{ 
            display: "inline-block", 
            border: "1px solid rgba(255,255,255,0.2)", 
            borderRadius: 50, 
            padding: "6px 20px",
            marginBottom: 20 
          }}>
            <span style={{ color: "#fff", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              {t.servicesPage.heroTag}
            </span>
          </div>
          <h1 className="section-title" style={{ color: "#fff" }}>
            {t.servicesPage.heroHeading}
          </h1>
          <p className="section-subtitle" style={{ margin: "0 auto", color: "rgba(255,255,255,0.85)" }}>
            {t.servicesPage.heroSub}
          </p>
        </div>
      </div>

      {/* Detailed service cards */}
      <section className="section-py" style={{ background: "#fff" }}>
        <ImagePrefetcher images={SERVICE_PREFETCH_IMAGES} width={760} />
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
            {serviceDetails.map((s, i) => {
              const localized = t.serviceDetails[i];
              const serviceTitle = t.services.cards[i].title;

              return (
                <div key={s.num}
                  id={s.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                  className="services-page-card"
                  style={{
                    background: i % 2 === 0 ? "#fff" : "linear-gradient(135deg,#f3f0fa 0%,#f8f9fa 100%)",
                    borderRadius: 20,
                    border: "1px solid var(--border)",
                    boxShadow: "var(--shadow-sm)",
                    overflow: "hidden",
                    scrollMarginTop: "100px",
                    direction: isRTL ? "rtl" : "ltr",
                  }}
                >
                  {/* Visual (order flips on even/odd) */}
                  {i % 2 !== 0 && (
                    <div className="services-page-card-visual" style={{ order: isRTL ? 2 : 1, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
                      <ServiceVisual service={s} />
                    </div>
                  )}

                  {/* Content */}
                  <div className="services-page-card-content" style={{ order: isRTL ? (i % 2 !== 0 ? 1 : 2) : (i % 2 !== 0 ? 2 : undefined), display: "flex", flexDirection: "column", justifyContent: "center", textAlign: isRTL ? "right" : "left", alignItems: isRTL ? "flex-end" : "flex-start" }}>
                    <div style={{ fontSize: "0.72rem", fontWeight: 700, color: s.color, letterSpacing: "0.1em", marginBottom: 6 }}>{s.num}</div>
                    <h2 style={{ fontSize: "1.7rem", color: "var(--text-dark)", marginBottom: 14 }}>{serviceTitle}</h2>
                    <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 20, textAlign: isRTL ? "right" : "left" }}>{localized.description}</p>
                    <ul className="services-page-card-features" style={{ listStyle: "none", marginBottom: 24, padding: 0, width: "100%" }}>
                      {localized.features.map(f => (
                        <li key={f} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.82rem", color: "var(--text-dark)", flexDirection: isRTL ? "row-reverse" : "row", justifyContent: isRTL ? "flex-end" : "flex-start", marginBottom: 8 }}>
                          <span style={{ width: 16, height: 16, background: `${s.color}20`, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                            <svg width="9" height="9" fill={s.color} viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" stroke={s.color} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          </span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className="btn-primary" style={{ display: "inline-flex", alignSelf: isRTL ? "flex-end" : "flex-start", alignItems: "center", gap: 8, flexDirection: isRTL ? "row-reverse" : "row" }}>
                      {t.servicesPage.getAQuote}
                      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ transform: isRTL ? "scaleX(-1)" : "none" }}><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </Link>
                  </div>

                  {i % 2 === 0 && (
                    <div className="services-page-card-visual" style={{ order: isRTL ? 1 : 2, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
                      <ServiceVisual service={s} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-on-brand" style={{ padding: "80px 0", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", color: "#fff", marginBottom: 16 }}>{t.servicesPage.ctaHeading}</h2>
          <p style={{ color: "rgba(255,255,255,0.75)", marginBottom: 32, fontSize: "1.05rem" }}>{t.servicesPage.ctaSub}</p>
          <Link href="/contact" className="btn-on-brand" style={{ fontSize: "0.9rem", display: "inline-flex", alignItems: "center", gap: 8, flexDirection: isRTL ? "row-reverse" : "row" }}>
            {t.servicesPage.ctaBtn}
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ transform: isRTL ? "scaleX(-1)" : "none" }}><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </div>
      </section>
    </div>
  );
}

function ServiceVisual({ service }: { service: (typeof serviceDetails)[number] }) {
  return (
    <div style={{ width: "min(100%, 380px)", borderRadius: 14, overflow: "hidden", boxShadow: `0 8px 24px ${service.color}25`, background: "#ffffff" }}>
      {service.video ? (
        <video
          src={service.video}
          poster={mediaTransformUrl(service.image, { width: 760, height: 760 })}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={`${service.title} animated video`}
          style={{
            width: "100%",
            aspectRatio: "1 / 1",
            objectFit: "cover",
            display: "block",
          }}
        />
      ) : (
        <OptimizedImage
          src={service.image}
          alt={service.title}
          width={760}
          height={760}
          loading="lazy"
          sizes="(max-width: 991px) min(100vw, 380px), 380px"
          decoding="async"
          style={{
            width: "100%",
            aspectRatio: "1 / 1",
            objectFit: "cover",
            display: "block",
          }}
        />
      )}
    </div>
  );
}
