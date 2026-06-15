"use client";

import Link from "next/link";
import OptimizedImage from "@/components/OptimizedImage";
import { type PortfolioProject, getFeaturedPortfolioProjects } from "@/data/portfolio";
import { useLanguage } from "@/lib/i18n/LanguageContext";

function PortfolioCard({ project }: { project: PortfolioProject }) {
  const { t } = useLanguage();
  const isVideo = /\.(mp4|webm|ogg)$/i.test(project.img);
  const categoryLabel = t.portfolio.categoryLabels[project.cat as keyof typeof t.portfolio.categoryLabels] ?? project.cat;

  return (
    <article
      className="portfolio-card"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow = "0 20px 40px rgba(83, 80, 162,0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 10px 30px rgba(83, 80, 162,0.3)";
      }}
    >
      <div className="portfolio-card__image">
        {isVideo ? (
          <video
            src={project.img}
            muted
            loop
            autoPlay
            playsInline
            preload="metadata"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <OptimizedImage
            src={project.img}
            alt={project.title}
            width={640}
            height={480}
            loading="lazy"
            sizes="(max-width: 640px) 100vw, (max-width: 991px) 50vw, 33vw"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          />
        )}
      </div>
      <div className="portfolio-card__body">
        <h3>{project.title}</h3>
        <p>{categoryLabel}</p>
      </div>
    </article>
  );
}

export default function PortfolioSection() {
  const { t } = useLanguage();
  const featuredProjects = getFeaturedPortfolioProjects(6);

  return (
    <section id="portfolio" className="bg-brand-pattern section-py" style={{ paddingBottom: 60 }}>
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 32,
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <div>
            <div className="section-tag" style={{ color: "#fff" }}>
              {t.portfolio.tag}
            </div>
            <h2 className="section-title" style={{ color: "#fff", margin: 0 }}>
              {t.portfolio.heading} <span style={{ color: "#fff" }}>{t.portfolio.headingSpan}</span>
            </h2>
          </div>
        </div>

        <div className="portfolio-grid">
          {featuredProjects.map((p) => (
            <PortfolioCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
