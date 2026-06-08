"use client";
import Link from "next/link";
import OptimizedImage from "@/components/OptimizedImage";
import { mediaUrl } from "@/lib/supabase";

const features = [
  { icon: <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>, title: "Branding", desc: "Crafting unique identities." },
  { icon: <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>, title: "App Development", desc: "Scalable mobile solutions." },
  { icon: <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>, title: "Web Solutions", desc: "High-performance websites.", active: true },
  { icon: <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" /></svg>, title: "Animations", desc: "Engaging visual stories." },
  { icon: <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>, title: "Digital Marketing", desc: "Data-driven growth." },
];

const INTRO_VIDEO_SRC = mediaUrl("/video/I-Tech.mp4");
const HERO_IMAGE_SRC = mediaUrl("/images/hero.webp");

export default function HeroSection() {
  return (
    <section id="hero" style={{ position: "relative" }}>
      {/* Dark Top Section */}
      <div className="bg-brand-pattern" style={{ padding: "150px 0 130px", position: "relative", overflow: "hidden" }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        >
          <source src={INTRO_VIDEO_SRC} type="video/mp4" />
        </video>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(90deg, rgba(83,80,162,0.62) 0%, rgba(83,80,162,0.44) 52%, rgba(83,80,162,0.56) 100%)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />
        {/* Decorative elements */}
        <div style={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, background: "var(--primary)", opacity: 0.1, filter: "blur(80px)", borderRadius: "50%", pointerEvents: "none", zIndex: 1 }} />
        <div style={{ position: "absolute", bottom: -50, left: -50, width: 300, height: 300, background: "#fff", opacity: 0.05, filter: "blur(60px)", borderRadius: "50%", pointerEvents: "none", zIndex: 1 }} />

        <div className="container hero-grid" style={{ position: "relative", zIndex: 2 }}>
          {/* Left Content */}
          <div>
            <div className="section-tag" style={{ color: "#fff" }}>LEADING TECH & DESIGN AGENCY</div>
            <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#fff", fontWeight: 800, lineHeight: 1.2, marginBottom: 24 }}>
              I-TECH Digitals: Pioneering Design Excellence for Your Success
            </h1>
            <p className="hero-desc" style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.1rem", marginBottom: 40, maxWidth: 500, lineHeight: 1.8 }}>
              We redefine design excellence, transforming your vision into captivating reality. Elevate your brand with our bespoke solutions crafted for success.
            </p>
            <div className="hero-btn-container">
              <Link href="/contact" className="btn-on-brand">
                Learn More
              </Link>
              <a
                href="#intro-video"
                className="hero-watch-video"
                aria-label="Watch I-TECH Digitals introduction video"
              >
                <span className="hero-watch-video__icon" aria-hidden>
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                Watch Video
              </a>
            </div>
          </div>

          {/* Right Content (Image) */}
          <div className="hero-image-container">
            <div style={{ position: "absolute", inset: 0, border: "2px dashed rgba(255,255,255,0.1)", borderRadius: "50%", transform: "scale(0.95)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", inset: 0, border: "1px solid rgba(83, 80, 162,0.3)", borderRadius: "50%", transform: "scale(0.75)", pointerEvents: "none" }} />

            <OptimizedImage
              src={HERO_IMAGE_SRC}
              alt="IT Expert"
              width={1023}
              height={1537}
              preload
              fetchPriority="high"
              sizes="(max-width: 991px) 0px, 50vw"
              style={{ position: "absolute", top: "-8%", bottom: "0%", left: "50%", transform: "translateX(-50%)", height: "138%", width: "138%", objectFit: "contain", objectPosition: "bottom center", zIndex: 1, filter: "drop-shadow(0 20px 30px rgba(83, 80, 162,0.5))", pointerEvents: "none" }}
            />

            {/* Floating cards */}
            <div className="floating-card-1">
              <div className="icon-brand-chip" style={{ width: 40, height: 40, borderRadius: 8 }}>
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden>
                  <path d="M8 4h8v3a4 4 0 01-8 0V4z" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 7H4a2 2 0 002 2M18 7h2a2 2 0 01-2 2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 11v4M9 19h6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: "1.2rem" }}>100%</div>
                <div style={{ fontSize: "0.8rem", opacity: 0.9 }}>Client Satisfaction</div>
              </div>
            </div>

            <div className="floating-card-2">
              <div className="icon-brand-chip" style={{ width: 40, height: 40, borderRadius: 8 }}>
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
              </div>
              <div>
                <div style={{ fontWeight: 800, color: "var(--secondary)", fontSize: "1.2rem" }}>99%</div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlapping Cards Container */}
      <div className="container features-container">
        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className={`feature-card ${f.active ? "active" : ""}`} style={{
              background: f.active ? "var(--feature-active)" : "#fff",
              color: f.active ? "#fff" : "var(--text-dark)",
              padding: "32px 20px",
              borderRadius: 16,
              textAlign: "center",
              boxShadow: "var(--shadow-lg)",
            }}>
              <div style={{
                margin: "0 auto 20px",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.5rem"
              }}>
                {f.icon}
              </div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: 8, color: f.active ? "#fff" : "var(--secondary)" }}>{f.title}</h3>
              <p style={{ fontSize: "0.85rem", color: f.active ? "rgba(255,255,255,0.8)" : "var(--text-muted)" }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
