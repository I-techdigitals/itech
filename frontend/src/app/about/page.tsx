import type { Metadata } from "next";
import Link from "next/link";
import PageHeroImage from "@/components/PageHeroImage";
import { mediaUrl } from "@/lib/supabase";

const PAGE_HERO_IMAGE_SRC = mediaUrl("/images/bernd-dittrich-pYlBAu3de0w-unsplash.jpg");

export const metadata: Metadata = {
  title: "About Us – I-TECH Digitals",
  description: "Learn about I-TECH Digitals — a leading tech and design agency with offices in Kuwait and Pakistan, delivering creative excellence since 2016.",
};

export default function AboutPage() {
  return (
    <div>
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
          <div className="section-tag" style={{ color: "#fff" }}>Our Story</div>
          <h1 className="section-title" style={{ color: "#fff" }}>About <span style={{ color: "#fff" }}>I-TECH Digitals</span></h1>
          <p className="section-subtitle" style={{ margin: "0 auto", color: "rgba(255,255,255,0.85)" }}>
            We are a passionate team of designers, developers, and storytellers — united by a love for creating exceptional digital experiences.
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
                title: "Our Mission",
                text: "To empower businesses with world-class creative and technological solutions that drive measurable growth, foster brand loyalty, and establish lasting digital presence.",
              },
              {
                icon: (
                  <svg width="38" height="38" fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4l1.8 3.6 4 .6-2.9 2.8.7 3.9-3.6-1.9-3.6 1.9.7-3.9L6.2 8.2l4-.6L12 4z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 20h16" />
                  </svg>
                ),
                title: "Our Vision",
                text: "To be the most trusted creative partner in the MENA and South Asia region — known for innovation, reliability, and transformative outcomes for every client we serve.",
              },
              {
                icon: (
                  <svg width="38" height="38" fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 5-3 10h-8L5 8l7-5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 14h6" />
                  </svg>
                ),
                title: "Our Values",
                text: "We believe in absolute transparency, relentless innovation, and a customer-first approach. Excellence is not just our goal—it is our standard in every single project.",
              },
            ].map(item => (
              <div key={item.title} id={item.title.toLowerCase().replace(" ", "-")} className="card" style={{ padding: "40px 44px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", scrollMarginTop: "100px" }}>
                <div className="icon-brand" style={{ marginBottom: 16, lineHeight: 0 }}>{item.icon}</div>
                <h2 style={{ fontFamily: "'Baskervville',serif", fontSize: "1.7rem", color: "var(--text-dark)", marginBottom: 14 }}>{item.title}</h2>
                <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.85 }}>{item.text}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="section-on-brand" style={{ padding: "70px 0", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Baskervville',serif", fontSize: "clamp(1.8rem,4vw,2.8rem)", color: "#fff", marginBottom: 14 }}>Ready to Work With Us?</h2>
          <p style={{ color: "rgba(255,255,255,0.75)", marginBottom: 32 }}>Let&apos;s create something extraordinary together.</p>
          <Link href="/contact" className="btn-on-brand">
            Start a Conversation
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
