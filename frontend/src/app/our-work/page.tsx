"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  PORTFOLIO_CATEGORIES,
  type PortfolioCategoryFilter,
  type PortfolioProject,
  getGroupedProjects,
} from "@/data/portfolio";

function OurWorkCard({
  project,
  hovered,
  onHover,
}: {
  project: PortfolioProject;
  hovered: boolean;
  onHover: (title: string | null) => void;
}) {
  const isVideo = /\.(mp4|webm|ogg)$/i.test(project.img);

  return (
    <article
      onMouseEnter={() => onHover(project.title)}
      onMouseLeave={() => onHover(null)}
      style={{
        background: "#fff",
        borderRadius: 20,
        overflow: "hidden",
        border: "1px solid var(--border)",
        boxShadow: hovered ? "var(--shadow-lg)" : "var(--shadow-sm)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        transition: "all 0.35s ease",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          height: 240,
          position: "relative",
          overflow: "hidden",
          background: "#f3f4f6",
        }}
      >
        {isVideo ? (
          <video
            src={project.img}
            muted
            loop
            autoPlay
            playsInline
            preload="metadata"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        ) : (
          <img
            src={project.img}
            alt={project.title}
            loading="lazy"
            decoding="async"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.5s ease",
              transform: hovered ? "scale(1.06)" : "scale(1)",
            }}
          />
        )}
        <div
          style={{
            position: "absolute",
            top: 16,
            left: 16,
            background: "rgba(255,255,255,0.95)",
            borderRadius: 50,
            padding: "5px 14px",
            fontSize: "0.72rem",
            fontWeight: 600,
            color: project.color,
          }}
        >
          {project.cat}
        </div>
        <div
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            background: "rgba(255,255,255,0.95)",
            borderRadius: 50,
            padding: "5px 14px",
            fontSize: "0.72rem",
            fontWeight: 600,
            color: "var(--text-muted)",
          }}
        >
          {project.year}
        </div>
      </div>
      <div style={{ padding: "22px 26px" }}>
        <h3 style={{ fontFamily: "'Baskervville',serif", fontSize: "1.15rem", color: "var(--text-dark)", marginBottom: 8 }}>
          {project.title}
        </h3>
        <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>{project.desc}</p>
      </div>
    </article>
  );
}

export default function OurWorkPage() {
  const [active, setActive] = useState<PortfolioCategoryFilter>("All");
  const [hovered, setHovered] = useState<string | null>(null);
  const grouped = useMemo(() => getGroupedProjects(), []);

  useEffect(() => {
    const category = new URLSearchParams(window.location.search).get("category");
    if (category && PORTFOLIO_CATEGORIES.includes(category as PortfolioCategoryFilter)) {
      setActive(category as PortfolioCategoryFilter);
      const slug = category.toLowerCase().replace(/\s+/g, "-");
      requestAnimationFrame(() => {
        document.getElementById(`work-${slug}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, []);

  const displayedGroups = useMemo(() => {
    if (active === "All") return grouped;
    return grouped.filter((g) => g.category === active);
  }, [active, grouped]);

  const totalVisible = displayedGroups.reduce((sum, g) => sum + g.projects.length, 0);

  return (
    <div style={{ paddingTop: 72 }}>
      <div
        style={{
          background: "linear-gradient(rgba(108, 107, 176,0.88), rgba(108, 107, 176,0.95)), url('/images/bernd-dittrich-pYlBAu3de0w-unsplash.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "120px 0 100px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "inline-block",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: 50,
              padding: "6px 20px",
              marginBottom: 20,
            }}
          >
            <span style={{ color: "#fff", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              — Portfolio
            </span>
          </div>
          <h1 className="section-title" style={{ color: "#fff" }}>
            Our <span style={{ color: "#fff" }}>Creative Work</span>
          </h1>
          <p className="section-subtitle" style={{ margin: "0 auto", color: "rgba(255,255,255,0.85)" }}>
            A curated showcase of projects we&apos;re proud of — organized by service type.
          </p>
        </div>
      </div>

      <section className="section-py" style={{ background: "#fff" }}>
        <div className="container">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginBottom: 24 }}>
            {PORTFOLIO_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                style={{
                  padding: "9px 22px",
                  borderRadius: 50,
                  border: `1.5px solid ${active === cat ? "var(--primary)" : "var(--border)"}`,
                  background: active === cat ? "var(--gradient-primary)" : "#fff",
                  color: active === cat ? "#fff" : "var(--text-muted)",
                  fontSize: "0.83rem",
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <p style={{ textAlign: "center", fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: 48 }}>
            {active === "All" ? (
              <>
                <strong style={{ color: "var(--primary)" }}>{displayedGroups.length}</strong> categories ·{" "}
                <strong style={{ color: "var(--primary)" }}>{totalVisible}</strong> projects
              </>
            ) : (
              <>
                Showing <strong style={{ color: "var(--primary)" }}>{totalVisible}</strong>{" "}
                {totalVisible === 1 ? "project" : "projects"} in <strong style={{ color: "var(--primary)" }}>{active}</strong>
              </>
            )}
          </p>

          <div className="portfolio-page-grouped">
            {displayedGroups.map(({ category, slug, projects }) => (
              <section key={category} id={`work-${slug}`} className="portfolio-page-category">
                <header className="portfolio-page-category__header">
                  <div>
                    <h2>{category}</h2>
                    <p className="portfolio-page-category__count">
                      {projects.length} {projects.length === 1 ? "project" : "projects"}
                    </p>
                  </div>
                </header>
                <div className="portfolio-page-grid">
                  {projects.map((p) => (
                    <OurWorkCard key={p.title} project={p} hovered={hovered === p.title} onHover={setHovered} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "linear-gradient(135deg,#f3f0fa 0%,#f8f9fa 100%)", padding: "80px 0", textAlign: "center" }}>
        <div className="container">
          <div className="section-tag" style={{ margin: "0 auto 16px" }}>
            Let&apos;s Collaborate
          </div>
          <h2 className="section-title">
            Your Project Could Be <span className="gradient-text">Next</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto 36px" }}>
            We take on select projects that align with our passion for quality. Let&apos;s talk about yours.
          </p>
          <Link href="/contact" className="btn-primary" id="work-cta">
            Start a Project
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
