"use client";
import Link from "next/link";
import { mediaUrl } from "@/lib/supabase";

const TEAM_IMAGE_SRC = mediaUrl("/images/4d40ec48-1229-4a4d-9afc-874fcc654642.png");
const PROFESSIONAL_IMAGE_SRC = mediaUrl("/images/creatopy-M35xxKGb_tA-unsplash.jpg");

export default function AboutSection() {
  return (
    <section id="about" className="section-py" style={{ background: "var(--bg)" }}>
      <div className="container">
        <div className="about-grid">

          {/* Left - Visual */}
          <div style={{ position: "relative" }}>
            <div className="about-images-grid">
              {/* Image 1 */}
              <div className="about-img-1" style={{ borderRadius: 24, overflow: "hidden", position: "relative", boxShadow: "var(--shadow-lg)" }}>
                <img src={TEAM_IMAGE_SRC} alt="Team Collaboration" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              {/* Image 2 */}
              <div className="about-img-2" style={{ borderRadius: 24, overflow: "hidden", boxShadow: "var(--shadow-lg)" }}>
                <img src={PROFESSIONAL_IMAGE_SRC} alt="IT Professional" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            </div>

            {/* Orange decorative dot pattern */}
            <div style={{ position: "absolute", top: -20, left: -20, width: 100, height: 100, backgroundImage: "radial-gradient(var(--primary) 2px, transparent 2px)", backgroundSize: "16px 16px", zIndex: -1 }} />
          </div>

          {/* Right - Text */}
          <div>
            <div className="section-tag">About Us</div>
            <h2 className="section-title">
              Essential IT Solutions For Modern <span>Businesses.</span>
            </h2>
            <p className="section-subtitle">
              I-TECH Digitals is a leading tech & design agency. We blend technical expertise with creative artistry to craft experiences that captivate, convert, and endure across Kuwait and Pakistan.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 40 }}>
              {[
                { title: "Innovation", desc: "Pushing boundaries with cutting-edge solutions." },
                { title: "Precision", desc: "Meticulous attention to quality and pixel-perfect work." }
              ].map((item, idx) => (
                <div key={idx} style={{ display: "flex", gap: 16 }}>
                  <div style={{ width: 24, height: 24, borderRadius: "50%", background: "rgba(83, 80, 162,0.12)", color: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 4 }}>
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <div>
                    <h4 style={{ fontSize: "1.1rem", marginBottom: 4 }}>{item.title}</h4>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn-primary">
              Discover More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
