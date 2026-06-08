"use client";
import Link from "next/link";
import { COMPANY_PHONE_DISPLAY, COMPANY_PHONE_E164, WHATSAPP_URL, LINKEDIN_URL, INSTAGRAM_URL } from "@/config/site";
import OptimizedImage from "@/components/OptimizedImage";
import { mediaUrl } from "@/lib/supabase";

const LOGO_SRC = mediaUrl("/images/Logo.png");

export default function Footer() {
  return (
    <footer>
      {/* Orange Top Band CTA */}
      <div className="section-on-brand" style={{ padding: "40px 0" }}>
        <div className="container footer-cta">
          <div className="footer-cta-info">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-whatsapp-icon-btn"
              aria-label="Chat with I-TECH Digitals on WhatsApp"
              title="WhatsApp"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
            <div>
              <div style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.85rem", fontWeight: 500 }}>Call Us For Any Inquiry</div>
              <a
                href={`tel:+${COMPANY_PHONE_E164}`}
                style={{ color: "#fff", fontSize: "1.2rem", fontWeight: 700, textDecoration: "none", display: "block" }}
              >
                {COMPANY_PHONE_DISPLAY}
              </a>
            </div>
          </div>
          <Link href="/contact" className="btn-on-brand" style={{ padding: "14px 32px" }}>
            Get Free Consultation
          </Link>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-brand-pattern" style={{ padding: "80px 0 40px" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 40, borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: 60, marginBottom: 30 }}>
            
            {/* Brand Info */}
            <div>
              <div style={{ display: "flex", alignItems: "center", marginBottom: 20 }}>
                <OptimizedImage
                  src={LOGO_SRC}
                  alt="I-TECH Digitals"
                  width={150}
                  height={150}
                  loading="lazy"
                  sizes="150px"
                  style={{ height: 40, width: "auto", objectFit: "contain", transform: "scale(var(--logo-scale))", transformOrigin: "left center", filter: "brightness(0) invert(1)" }}
                />
              </div>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.7, marginBottom: 24, color: "rgba(255,255,255,0.75)" }}>
                Envision. Execute. Elevate. Pioneering design excellence and transforming your vision into captivating reality across Kuwait and Pakistan.
              </p>
              <div style={{ display: "flex", gap: 12 }}>
                {[
                  { name: "LinkedIn", icon: <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>, url: LINKEDIN_URL },
                  { name: "Instagram", icon: <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>, url: INSTAGRAM_URL },
                ].map(social => (
                  <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" style={{ width: 36, height: 36, background: "rgba(255,255,255,0.05)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", cursor: "pointer", transition: "all 0.3s ease", textDecoration: "none" }}
                    onMouseEnter={(e) => e.currentTarget.style.background = "var(--primary)"}
                    onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.05)"}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* IT Services */}
            <div>
              <h4 style={{ color: "#fff", fontSize: "1.2rem", marginBottom: 20 }}>IT Services</h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "Web & App Development",
                  "Social Media Account Management",
                  "Photography & Videography",
                  "3D Design",
                  "Animation",
                  "Interior Design",
                  "Digital Marketing",
                ].map((item) => (
                  <li key={item}>
                    <Link href="/services" style={{ color: "rgba(255,255,255,0.75)", textDecoration: "none", fontSize: "0.95rem", display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ color: "rgba(255,255,255,0.6)", display: "inline-flex" }}>
                        <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                          <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 style={{ color: "#fff", fontSize: "1.2rem", marginBottom: 20 }}>Quick Links</h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                {[["About Us", "/about"], ["Our Work", "/our-work"], ["Contact Us", "/contact"], ["Privacy Policy", "/"], ["Terms & Conditions", "/"]].map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} style={{ color: "rgba(255,255,255,0.75)", textDecoration: "none", fontSize: "0.95rem", display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ color: "rgba(255,255,255,0.6)", display: "inline-flex" }}>
                        <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                          <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 style={{ color: "#fff", fontSize: "1.2rem", marginBottom: 20 }}>Contact Info</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ display: "flex", gap: 12 }}>
                  <div style={{ color: "rgba(255,255,255,0.7)", marginTop: 4, display: "inline-flex" }}>
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                      <path d="M12 21s-6-5.1-6-10a6 6 0 1112 0c0 4.9-6 10-6 10z" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="12" cy="11" r="2.2" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ color: "#fff", fontWeight: 600, fontSize: "0.95rem", marginBottom: 4 }}>Kuwait Office</div>
                    <div style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.75)" }}>Zawya Complex, Hawally</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 12 }}>
                  <div style={{ color: "rgba(255,255,255,0.7)", marginTop: 4, display: "inline-flex" }}>
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                      <path d="M12 21s-6-5.1-6-10a6 6 0 1112 0c0 4.9-6 10-6 10z" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="12" cy="11" r="2.2" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ color: "#fff", fontWeight: 600, fontSize: "0.95rem", marginBottom: 4 }}>Pakistan Office</div>
                    <div style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.75)" }}>E-11/3, Islamabad</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 12 }}>
                  <div style={{ color: "rgba(255,255,255,0.7)", marginTop: 4, display: "inline-flex" }}>
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                      <path d="M4 6h16v12H4z" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M4 8l8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ color: "#fff", fontWeight: 600, fontSize: "0.95rem", marginBottom: 4 }}>Email Us</div>
                    <div style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.75)" }}>itechkw.business@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.9rem", flexWrap: "wrap", gap: 10, color: "rgba(255,255,255,0.75)" }}>
            <div>© {new Date().getFullYear()} I-TECH Digitals. All Rights Reserved.</div>
            <div>Powered by I-TECH Digitals</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
