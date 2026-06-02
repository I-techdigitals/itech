"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/our-work" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isDarkBg = !scrolled && pathname === "/";

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
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative", zIndex: 1, pointerEvents: "auto" }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <img src="/images/Logo.png" alt="I-TECH Digitals" style={{ height: 40, objectFit: "contain", transform: "scale(var(--logo-scale))", transformOrigin: "left center", filter: isDarkBg ? "brightness(0) invert(1)" : "none", transition: "all 0.3s ease" }} />
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 32, position: "relative", zIndex: 2, pointerEvents: "auto" }} className="desktop-nav">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                prefetch={link.href === "/services" ? false : undefined}
                style={{
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  color: active ? (isDarkBg ? "#ffffff" : "var(--primary)") : (isDarkBg ? "#ffffff" : "var(--text-dark)"),
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  position: "relative",
                  zIndex: 2,
                  pointerEvents: "auto",
                }}
                onMouseEnter={(e) => {
                  if (!active) (e.currentTarget as HTMLElement).style.color = isDarkBg ? "rgba(255,255,255,0.85)" : "var(--primary)";
                }}
                onMouseLeave={(e) => {
                  if (!active) (e.currentTarget as HTMLElement).style.color = isDarkBg ? "#ffffff" : "var(--text-dark)";
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA & Info */}
        <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div>
            <div style={{ fontSize: "0.9rem", fontWeight: 700, color: isDarkBg ? "#ffffff" : "var(--text-dark)" }}>+96599402446</div>
          </div>

          {/* Book Now CTA */}
          <Link
            href="/contact#contact"
            className={isDarkBg ? "btn-on-brand" : "btn-primary"}
            style={{ padding: "10px 22px", fontSize: "0.88rem", whiteSpace: "nowrap" }}
          >
            Book Now
          </Link>
        </div>

        {/* Hamburger */}
        <button className={`hamburger ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", cursor: "pointer", display: "none", flexDirection: "column", gap: 5 }}>
          {[0, 1, 2].map(i => (
            <span key={i} style={{ display: "block", width: 24, height: 2, background: isDarkBg ? "#fff" : "var(--secondary)", transition: "all 0.3s" }} />
          ))}
        </button>
      </div>


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
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                prefetch={link.href === "/services" ? false : undefined}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: active ? "var(--primary)" : "var(--secondary)",
                  textDecoration: "none",
                  fontWeight: 700,
                  padding: "12px 0",
                  borderBottom: "1px solid #f1f5f9",
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact#contact"
            onClick={() => setMenuOpen(false)}
            className="btn-primary"
            style={{ marginTop: 12, width: "100%" }}
          >
            Book Now
          </Link>
        </nav>
      )}
    </header>
  );
}
