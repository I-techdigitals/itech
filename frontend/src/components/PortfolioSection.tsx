"use client";

import Link from "next/link";
import { type PortfolioProject, getCuratedPortfolioProjects } from "@/data/portfolio";

function PortfolioCard({ project }: { project: PortfolioProject }) {
  const isVideo = /\.(mp4|webm|ogg)$/i.test(project.img);

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
          <img
            src={project.img}
            alt={project.title}
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
        <p>{project.cat}</p>
      </div>
    </article>
  );
}

export default function PortfolioSection() {
  const featuredProjects = getCuratedPortfolioProjects().slice(0, 6);

  return (
    <>
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
                Our Portfolio
              </div>
              <h2 className="section-title" style={{ color: "#fff", margin: 0 }}>
                Explore Our Featured <span style={{ color: "#fff" }}>Projects</span>
              </h2>
            </div>
            <Link href="/our-work" className="btn-on-brand">
              See More
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <div className="portfolio-grid">
            {featuredProjects.map((p) => (
              <PortfolioCard key={p.title} project={p} />
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
