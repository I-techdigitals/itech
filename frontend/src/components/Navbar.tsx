"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { COMPANY_PHONE_DISPLAY, COMPANY_PHONE_E164 } from "@/config/site";
import OptimizedImage from "@/components/OptimizedImage";
import { mediaUrl } from "@/lib/supabase";

const LOGO_SRC = mediaUrl("/images/Logo.png");

const navItems = [
  {
    label: "WHAT WE DO",
    href: "/services",
    submenu: [
      { label: "Web & App Development", href: "/services#web-app-development" },
      { label: "Social Media Management", href: "/services#social-media-account-management" },
      { label: "Photography & Videography", href: "/services#photography-videography" },
      { label: "3D Design", href: "/services#3d-design" },
      { label: "Animation", href: "/services#animation" },
      { label: "Illustration", href: "/services#illustration" },
      { label: "Interior Design", href: "/services#interior-design" },
      { label: "Printing", href: "/services#printing" },
      { label: "Digital Marketing", href: "/services#digital-marketing" },
    ],
  },
  {
    label: "WHO WE HELP",
    href: "/our-work",
    submenu: [
      { label: "Web & App Projects", href: "/our-work?category=Web+%26+App+Development" },
      { label: "Social Media Campaigns", href: "/our-work?category=Social+Media+Account+Manage" },
      { label: "Photography & Video", href: "/our-work?category=Photography+%26+Videography" },
      { label: "3D Design & Rendering", href: "/our-work?category=3D+Design" },
      { label: "Animation & Motion", href: "/our-work?category=Animation" },
      { label: "Illustration & Art", href: "/our-work?category=Illustration" },
      { label: "Interior Spaces", href: "/our-work?category=Interior+Design" },
      { label: "Print & Collaterals", href: "/our-work?category=Printing" },
      { label: "Digital Marketing & SEO", href: "/our-work?category=Digital+Marketing" },
      { label: "Branding & Identity", href: "/our-work?category=Branding" },
    ],
  },
  {
    label: "WHO WE ARE",
    href: "/about",
    submenu: [
      { label: "Our Story", href: "/about" },
      { label: "Our Mission", href: "/about#our-mission" },
      { label: "Our Vision", href: "/about#our-vision" },
      { label: "Our Values", href: "/about#our-values" },
    ],
  },
  {
    label: "JOIN I-TECH",
    href: "/careers",
    submenu: [
      { label: "Job Openings", href: "/careers#application-form" },
      { label: "Benefits & Perks", href: "/careers#benefits" },
      { label: "Why Work With Us", href: "/careers#why-us" },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isDarkBg = !scrolled;

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
        background: scrolled ? "#ffffff" : "transparent",
        boxShadow: scrolled ? "0 4px 20px rgba(108, 107, 176,0.05)" : "none",
        padding: scrolled ? "10px 0" : "20px 0",
      }}
    >
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
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
              transformOrigin: "left center",
              filter: isDarkBg ? "brightness(0) invert(1)" : "none",
              transition: "all 0.3s ease"
            }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 28, position: "relative", zIndex: 2, pointerEvents: "auto" }} className="desktop-nav">
          {navItems.map((item) => {
            const isGrid = item.submenu && item.submenu.length > 4;

            return (
              <div key={item.label} className="nav-item">
                <Link
                  href={item.href}
                  className="nav-link"
                  style={{
                    color: isDarkBg ? "#ffffff" : "#1f2937",
                  }}
                  onClick={() => {
                    setMenuOpen(false);
                    setExpandedMobile(null);
                  }}
                >
                  {item.label}
                </Link>

                {/* Submenu Dropdown */}
                {item.submenu && (
                  <div className={`dropdown-menu ${isGrid ? "dropdown-col-2" : "dropdown-col-1"}`}>
                    <div style={{ display: "grid", gridTemplateColumns: isGrid ? "1fr 1fr" : "1fr", gap: "8px 12px" }}>
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="dropdown-link"
                          onClick={() => {
                            setMenuOpen(false);
                            setExpandedMobile(null);
                          }}
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

        {/* Right CTA */}
        <div className="desktop-nav" style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 12 }}>
          <a
            href={`tel:${COMPANY_PHONE_E164}`}
            style={{
              fontSize: "0.9rem",
              fontWeight: 700,
              color: isDarkBg ? "#ffffff" : "var(--text-dark)",
              textDecoration: "none",
              marginRight: 8,
              transition: "color 0.25s ease",
              whiteSpace: "nowrap",
              lineHeight: 1,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#5350a2";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = isDarkBg ? "#ffffff" : "var(--text-dark)";
            }}
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
            Let&apos;s Talk Business
          </Link>
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
                  }}
                >
                  {item.label}
                </button>
                
                {/* Mobile Submenu Accordion */}
                {isExpanded && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 12,
                      padding: "0 0 16px 12px",
                      animation: "mobileFadeIn 0.25s ease",
                    }}
                  >
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        onClick={() => {
                          setMenuOpen(false);
                          setExpandedMobile(null);
                        }}
                        style={{
                          color: "var(--text-muted)",
                          textDecoration: "none",
                          fontSize: "0.85rem",
                          fontWeight: 600,
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
              Let&apos;s Talk Business
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
