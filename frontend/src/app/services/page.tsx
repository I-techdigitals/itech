import type { Metadata } from "next";
import Link from "next/link";
import { serviceDetails } from "@/data/services";
import { mediaUrl } from "@/lib/supabase";

const PAGE_HERO_IMAGE_SRC = mediaUrl("/images/bernd-dittrich-pYlBAu3de0w-unsplash.jpg");

export const metadata: Metadata = {
  title: "Our Services – I-TECH Digitals",
  description:
    "Explore I-TECH Digitals services: web & app development, social media management, photography & videography, 3D design, animation, interior design, printing, and digital marketing.",
};

export default function ServicesPage() {
  return (
    <div style={{ paddingTop: 72 }}>
      {/* Hero */}
      <div style={{ 
        background: `linear-gradient(rgba(108, 107, 176,0.88), rgba(108, 107, 176,0.95)), url('${PAGE_HERO_IMAGE_SRC}')`, 
        backgroundSize: "cover", 
        backgroundPosition: "center",
        padding: "120px 0 100px", 
        textAlign: "center", 
        position: "relative", 
        overflow: "hidden" 
      }}>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ 
            display: "inline-block", 
            border: "1px solid rgba(255,255,255,0.2)", 
            borderRadius: 50, 
            padding: "6px 20px",
            marginBottom: 20 
          }}>
            <span style={{ color: "#fff", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              — What We Offer
            </span>
          </div>
          <h1 className="section-title" style={{ color: "#fff" }}>Our <span style={{ color: "#fff" }}>Services</span></h1>
          <p className="section-subtitle" style={{ margin: "0 auto", color: "rgba(255,255,255,0.85)" }}>
            End-to-end digital and creative services — from strategy to execution — all under one roof.
          </p>
        </div>
      </div>

      {/* Detailed service cards */}
      <section className="section-py" style={{ background: "#fff" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
            {serviceDetails.map((s, i) => (
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
                }}
              >
                {/* Visual (order flips on even/odd) */}
                {i % 2 !== 0 && (
                  <div className="services-page-card-visual" style={{ order: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
                    <ServiceVisual service={s} />
                  </div>
                )}

                {/* Content */}
                <div className="services-page-card-content" style={{ order: i % 2 !== 0 ? 2 : undefined, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <div style={{ fontSize: "0.72rem", fontWeight: 700, color: s.color, letterSpacing: "0.1em", marginBottom: 6 }}>{s.num}</div>
                  <h2 style={{ fontFamily: "'Baskervville',serif", fontSize: "1.7rem", color: "var(--text-dark)", marginBottom: 14 }}>{s.title}</h2>
                  <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 20 }}>{s.description}</p>
                  <ul className="services-page-card-features" style={{ listStyle: "none", marginBottom: 24, padding: 0 }}>
                    {s.features.map(f => (
                      <li key={f} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.82rem", color: "var(--text-dark)" }}>
                        <span style={{ width: 16, height: 16, background: `${s.color}20`, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <svg width="9" height="9" fill={s.color} viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" stroke={s.color} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="btn-primary" style={{ display: "inline-flex", alignSelf: "flex-start" }}>
                    Get a Quote
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </Link>
                </div>

                {i % 2 === 0 && (
                  <div className="services-page-card-visual" style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
                    <ServiceVisual service={s} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-on-brand" style={{ padding: "80px 0", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Baskervville',serif", fontSize: "clamp(1.8rem,4vw,2.8rem)", color: "#fff", marginBottom: 16 }}>Not Sure Which Service You Need?</h2>
          <p style={{ color: "rgba(255,255,255,0.75)", marginBottom: 32, fontSize: "1.05rem" }}>Let&apos;s have a conversation. We&apos;ll help you find the best solution for your goals.</p>
          <Link href="/contact" className="btn-on-brand" style={{ fontSize: "0.9rem" }}>
            Talk to an Expert
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
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
          poster={service.image}
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
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
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
