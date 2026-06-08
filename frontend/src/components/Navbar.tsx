"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { COMPANY_PHONE_DISPLAY, COMPANY_PHONE_E164 } from "@/config/site";
import OptimizedImage from "@/components/OptimizedImage";
import { mediaUrl } from "@/lib/supabase";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const LOGO_SRC = mediaUrl("/images/Logo.png");

const navHrefs = {
  whatWeDo: "/services",
  whoWeHelp: "/our-work",
  whoWeAre: "/about",
  joinITech: "/careers",
  subWhatWeDo: [
    "/services#web-app-development",
    "/services#social-media-account-management",
    "/services#photography-videography",
    "/services#3d-design",
    "/services#animation",
    "/services#illustration",
    "/services#interior-design",
    "/services#printing",
    "/services#digital-marketing",
  ],
  subWhoWeHelp: [
    "/our-work?category=Web+%26+App+Development",
    "/our-work?category=Social+Media+Account+Manage",
    "/our-work?category=Photography+%26+Videography",
    "/our-work?category=3D+Design",
    "/our-work?category=Animation",
    "/our-work?category=Illustration",
    "/our-work?category=Interior+Design",
    "/our-work?category=Digital+Marketing",
    "/our-work?category=Branding",
  ],
  subWhoWeAre: ["/about", "/about#our-mission", "/about#our-vision", "/about#our-values"],
  subJoinITech: ["/careers#application-form", "/careers#benefits", "/careers#why-us"],
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<number | null>(null);
  const { lang, setLang, t, isRTL } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isDarkBg = !scrolled && !menuOpen;

  const navItems = [
    {
      label: t.nav.whatWeDo,
      href: navHrefs.whatWeDo,
      submenu: t.nav.subWhatWeDo.map((label, i) => ({ label, href: navHrefs.subWhatWeDo[i] })),
    },
    {
      label: t.nav.whoWeHelp,
      href: navHrefs.whoWeHelp,
      submenu: t.nav.subWhoWeHelp.map((label, i) => ({ label, href: navHrefs.subWhoWeHelp[i] })),
    },
    {
      label: t.nav.whoWeAre,
      href: navHrefs.whoWeAre,
      submenu: t.nav.subWhoWeAre.map((label, i) => ({ label, href: navHrefs.subWhoWeAre[i] })),
    },
    {
      label: t.nav.joinITech,
      href: navHrefs.joinITech,
      submenu: t.nav.subJoinITech.map((label, i) => ({ label, href: navHrefs.subJoinITech[i] })),
    },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10000,
        isolation: "isolate",
        pointerEvents: "auto",
        transition: "all 0.3s ease",
        background: (scrolled || menuOpen) ? "#ffffff" : "transparent",
        boxShadow: (scrolled || menuOpen) ? "0 4px 20px rgba(108, 107, 176,0.05)" : "none",
        padding: (scrolled || menuOpen) ? "10px 0" : "20px 0",
      }}
    >
      <div
        className="container navbar-container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          columnGap: 32,
          alignItems: "center",
          position: "relative",
          zIndex: 1,
          pointerEvents: "auto",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <OptimizedImage
            src={LOGO_SRC}
            alt="I-TECH Digitals"
            width={150}
            height={150}
            preload
            fetchPriority="high"
            sizes="150px"
            style={{
              height: 40,
              width: "auto",
              objectFit: "contain",
              transform: "scale(var(--logo-scale))",
              transformOrigin: isRTL ? "right center" : "left center",
              filter: isDarkBg ? "brightness(0) invert(1)" : "none",
              transition: "all 0.3s ease"
            }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav navbar-links">
          {navItems.map((item) => {
            const isGrid = item.submenu && item.submenu.length > 4;
            return (
              <div key={item.label} className="nav-item">
                <Link
                  href={item.href}
                  className="nav-link"
                  style={{ color: isDarkBg ? "#ffffff" : "#1f2937" }}
                  onClick={() => { setMenuOpen(false); setExpandedMobile(null); }}
                >
                  {item.label}
                </Link>
                {item.submenu && (
                  <div className={`dropdown-menu ${isGrid ? "dropdown-col-2" : "dropdown-col-1"}`}>
                    <div style={{ display: "grid", gridTemplateColumns: isGrid ? "1fr 1fr" : "1fr", gap: "8px 12px" }}>
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="dropdown-link"
                          onClick={() => { setMenuOpen(false); setExpandedMobile(null); }}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right CTA + Language Toggle */}
        <div className="desktop-nav navbar-cta" style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
          <a
            href={`tel:${COMPANY_PHONE_E164}`}
            style={{
              fontSize: "0.9rem",
              fontWeight: 700,
              color: isDarkBg ? "#ffffff" : "var(--text-dark)",
              textDecoration: "none",
              marginInlineStart: 12,
              transition: "color 0.25s ease",
              whiteSpace: "nowrap",
              lineHeight: 1,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#5350a2"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = isDarkBg ? "#ffffff" : "var(--text-dark)"; }}
          >
            {COMPANY_PHONE_DISPLAY}
          </a>
          <Link
            href="/contact"
            className={isDarkBg ? "btn-talk-dark" : "btn-talk-light"}
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "10px 22px",
              fontSize: "0.85rem",
              fontWeight: 700,
              borderRadius: "50px",
              textDecoration: "none",
              transition: "all 0.3s ease",
              whiteSpace: "nowrap",
              backgroundColor: isDarkBg ? "transparent" : "#5350a2",
              color: "#ffffff",
              border: isDarkBg ? "2px solid #ffffff" : "2px solid #5350a2",
              lineHeight: 1,
            }}
          >
            {t.nav.letsTalkBusiness}
          </Link>

          {/* Language Toggle */}
          <button
            className="lang-toggle"
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            title={lang === "en" ? "Switch to Arabic" : "Switch to English"}
            style={{ color: isDarkBg ? "#ffffff" : "var(--text-dark)" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            {lang === "en" ? "عربي" : "EN"}
          </button>
        </div>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "none",
            flexDirection: "column",
            gap: 5
          }}
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              style={{
                display: "block",
                width: 24,
                height: 2,
                background: isDarkBg ? "#fff" : "#1f2937",
                transition: "all 0.3s"
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "#ffffff",
            borderTop: "1px solid var(--border)",
            boxShadow: "0 14px 30px rgba(108, 107, 176,0.08)",
            padding: "16px 24px 22px",
            display: "grid",
            gap: 4,
            maxHeight: "calc(100vh - 80px)",
            overflowY: "auto",
          }}
        >
          {navItems.map((item, index) => {
            const isExpanded = expandedMobile === index;
            return (
              <div key={item.label} style={{ borderBottom: "1px solid #f1f5f9" }}>
                <button
                  type="button"
                  onClick={() => setExpandedMobile(isExpanded ? null : index)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: "none",
                    border: "none",
                    color: "var(--text-dark)",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    padding: "14px 0",
                    cursor: "pointer",
                    textTransform: "uppercase",
                    textAlign: isRTL ? "right" : "left",
                  }}
                >
                  {item.label}
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden style={{ transform: isExpanded ? "rotate(180deg)" : "none", transition: "transform 0.2s", flexShrink: 0 }}>
                    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {isExpanded && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 12,
                      padding: isRTL ? "0 12px 16px 0" : "0 0 16px 12px",
                      animation: "mobileFadeIn 0.25s ease",
                    }}
                  >
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        onClick={() => { setMenuOpen(false); setExpandedMobile(null); }}
                        style={{
                          color: "var(--text-muted)",
                          textDecoration: "none",
                          fontSize: "0.85rem",
                          fontWeight: 600,
                          textAlign: isRTL ? "right" : "left",
                        }}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* Mobile CTA Buttons */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 16 }}>
            {/* Language switch in mobile */}
            <button
              className="lang-toggle"
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              style={{ color: "var(--text-dark)", justifyContent: "center", border: "1.5px solid var(--border)", borderRadius: 50, padding: "10px" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              {lang === "en" ? "التبديل إلى العربية" : "Switch to English"}
            </button>

            <a
              href={`tel:${COMPANY_PHONE_E164}`}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#5350a2",
                color: "#ffffff",
                fontWeight: 700,
                fontSize: "0.88rem",
                padding: "12px",
                borderRadius: "50px",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              {COMPANY_PHONE_DISPLAY}
            </a>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid #5350a2",
                color: "#5350a2",
                fontWeight: 700,
                fontSize: "0.88rem",
                padding: "10px",
                borderRadius: "50px",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              {t.nav.letsTalkBusiness}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
