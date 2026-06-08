"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import ImagePrefetcher from "@/components/ImagePrefetcher";
import OptimizedImage from "@/components/OptimizedImage";
import PageHeroImage from "@/components/PageHeroImage";
import {
  PORTFOLIO_CATEGORIES,
  type PortfolioCategoryFilter,
  type PortfolioProject,
  getGroupedProjects,
} from "@/data/portfolio";
import { mediaUrl } from "@/lib/supabase";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const PAGE_HERO_IMAGE_SRC = mediaUrl("/images/bernd-dittrich-pYlBAu3de0w-unsplash.jpg");

function OurWorkCard({
  project,
  hovered,
  onHover,
  isRTL,
}: {
  project: PortfolioProject;
  hovered: boolean;
  onHover: (title: string | null) => void;
  isRTL: boolean;
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
          <OptimizedImage
            src={project.img}
            alt={project.title}
            width={640}
            height={480}
            loading="lazy"
            sizes="(max-width: 720px) 100vw, (max-width: 1200px) 50vw, 380px"
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
            [isRTL ? "right" : "left"]: 16,
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
            [isRTL ? "left" : "right"]: 16,
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
      <div style={{ padding: "22px 26px", textAlign: isRTL ? "right" : "left" }}>
        <h3 style={{ fontSize: "1.15rem", color: "var(--text-dark)", marginBottom: 8 }}>
          {project.title}
        </h3>
        <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>{project.desc}</p>
      </div>
    </article>
  );
}

export default function OurWorkPage() {
  const { t, isRTL } = useLanguage();
  const [active, setActive] = useState<PortfolioCategoryFilter>("All");
  const [hovered, setHovered] = useState<string | null>(null);
  const grouped = useMemo(() => getGroupedProjects(), []);

  useEffect(() => {
    const category = new URLSearchParams(window.location.search).get("category");
    if (category && PORTFOLIO_CATEGORIES.includes(category as PortfolioCategoryFilter)) {
      const slug = category.toLowerCase().replace(/\s+/g, "-");
      const frame = requestAnimationFrame(() => {
        setActive(category as PortfolioCategoryFilter);
        document.getElementById(`work-${slug}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });

      return () => cancelAnimationFrame(frame);
    }
  }, []);

  const displayedGroups = useMemo(() => {
    if (active === "All") return grouped;
    return grouped.filter((g) => g.category === active);
  }, [active, grouped]);

  const prefetchedProjectImages = useMemo(
    () =>
      displayedGroups
        .flatMap((group) => group.projects)
        .map((project) => project.img)
        .filter((src) => !/\.(mp4|webm|ogg)$/i.test(src))
        .slice(0, 8),
    [displayedGroups]
  );

  const totalVisible = displayedGroups.reduce((sum, g) => sum + g.projects.length, 0);

  return (
    <div style={{ direction: isRTL ? "rtl" : "ltr" }}>
      <div
        style={{
          background: "var(--hero-bg)",
          padding: "120px 0 100px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <PageHeroImage src={PAGE_HERO_IMAGE_SRC} alt="" />
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
              {t.ourWorkPage.heroTag}
            </span>
          </div>
          <h1 className="section-title" style={{ color: "#fff" }}>
            {t.ourWorkPage.heroHeading}
          </h1>
          <p className="section-subtitle" style={{ margin: "0 auto", color: "rgba(255,255,255,0.85)" }}>
            {t.ourWorkPage.heroSub}
          </p>
        </div>
      </div>

      <section className="section-py" style={{ background: "#fff" }}>
        <ImagePrefetcher images={prefetchedProjectImages} width={760} />
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
                <strong style={{ color: "var(--primary)" }}>{displayedGroups.length}</strong> {t.ourWorkPage.categories} ·{" "}
                <strong style={{ color: "var(--primary)" }}>{totalVisible}</strong> {t.ourWorkPage.projects}
              </>
            ) : (
              <>
                {t.ourWorkPage.showing} <strong style={{ color: "var(--primary)" }}>{totalVisible}</strong>{" "}
                {totalVisible === 1 ? t.ourWorkPage.project : t.ourWorkPage.projects} {t.ourWorkPage.in} <strong style={{ color: "var(--primary)" }}>{active}</strong>
              </>
            )}
          </p>

          <div className="portfolio-page-grouped">
            {displayedGroups.map(({ category, slug, projects }) => (
              <section key={category} id={`work-${slug}`} className="portfolio-page-category">
                <header className="portfolio-page-category__header" style={{ direction: isRTL ? "rtl" : "ltr" }}>
                  <div style={{ textAlign: isRTL ? "right" : "left" }}>
                    <h2>{category}</h2>
                    <p className="portfolio-page-category__count">
                      {projects.length} {projects.length === 1 ? t.ourWorkPage.project : t.ourWorkPage.projects}
                    </p>
                  </div>
                </header>
                <div className="portfolio-page-grid">
                  {projects.map((p) => (
                    <OurWorkCard key={p.title} project={p} hovered={hovered === p.title} onHover={setHovered} isRTL={isRTL} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "linear-gradient(135deg,#f3f0fa 0%,#f8f9fa 100%)", padding: "80px 0", textAlign: "center" }}>
        <div className="container">
          <div className="section-tag" style={{ margin: "0 auto 16px", justifyContent: "center" }}>
            {t.ourWorkPage.ctaTag}
          </div>
          <h2 className="section-title">
            {t.ourWorkPage.ctaHeading} <span className="gradient-text">{t.ourWorkPage.ctaHeadingSpan}</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto 36px" }}>
            {t.ourWorkPage.ctaSub}
          </p>
          <Link href="/contact" className="btn-primary" id="work-cta" style={{ display: "inline-flex", alignItems: "center", gap: 8, flexDirection: isRTL ? "row-reverse" : "row" }}>
            {t.ourWorkPage.ctaBtn}
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ transform: isRTL ? "scaleX(-1)" : "none" }}>
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
