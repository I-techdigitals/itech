"use client";
import Link from "next/link";
import { useState } from "react";
import { serviceCards } from "@/data/services";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const INITIAL_VISIBLE = 4;

const SERVICE_ICONS: React.ReactNode[] = [
  (
    <svg key="0" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /><rect x="14" y="7" width="6" height="10" rx="1" />
    </svg>
  ),
  (
    <svg key="1" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /><circle cx="17" cy="7" r="4" /><path d="M23 18v-4a4 4 0 0 0-4-4h-1" />
    </svg>
  ),
  (
    <svg key="2" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" />
    </svg>
  ),
  (
    <svg key="3" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 2l8 4.5v7L12 18l-8-4.5v-7L12 2z" /><path d="M12 18v4" /><path d="M20 6.5L12 11 4 6.5" />
    </svg>
  ),
  (
    <svg key="4" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="5" width="14" height="14" rx="2" /><path d="M8 9l5 3-5 3V9z" /><path d="M20 7h2M20 12h2M20 17h2" />
    </svg>
  ),
  (
    <svg key="5" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 19l4-11 10 10-11 4-3-3z" /><path d="M12 6l2-2a2 2 0 0 1 3 0l1 1a2 2 0 0 1 0 3l-2 2" /><circle cx="9" cy="18" r="1" />
    </svg>
  ),
  (
    <svg key="6" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 21h18" /><path d="M5 21V7l7-4 7 4v14" /><path d="M9 21v-6h6v6" /><path d="M9 9h6" />
    </svg>
  ),
  (
    <svg key="7" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <line x1="6" y1="19" x2="6" y2="12" /><line x1="12" y1="19" x2="12" y2="8" /><line x1="18" y1="19" x2="18" y2="5" /><path d="M3 20h18" />
    </svg>
  ),
];

export default function ServicesSection() {
  const [expanded, setExpanded] = useState(false);
  const { t } = useLanguage();
  const visibleCount = expanded ? serviceCards.length : INITIAL_VISIBLE;
  const hasMore = serviceCards.length > INITIAL_VISIBLE;

  return (
    <section id="services" className="section-py services-section">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div className="section-tag">{t.services.tag}</div>
          <h2 className="section-title" style={{ maxWidth: 600, margin: "0 auto" }}>
            {t.services.heading} <span>{t.services.headingSpan}</span>
          </h2>
        </div>

        <div className="services-grid">
          {t.services.cards.slice(0, visibleCount).map((card, i) => {
            const active = i === 0;
            return (
              <article
                key={serviceCards[i].title}
                className={`service-card${active ? " service-card--active" : ""}`}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-8px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div className="service-card__icon">{SERVICE_ICONS[i]}</div>
                <h3 className="service-card__title">{card.title}</h3>
                <p className="service-card__desc">{card.description}</p>
                <Link href="/services" className="service-card__link">
                  {t.services.readMore}
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </article>
            );
          })}
        </div>

        {hasMore && (
          <div className="services-see-more-wrap">
            {!expanded ? (
              <button type="button" className="btn-primary services-see-more-btn" onClick={() => setExpanded(true)} aria-expanded={false}>
                {t.services.seeMore}
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            ) : (
              <button type="button" className="btn-outline services-see-more-btn" onClick={() => setExpanded(false)} aria-expanded={true}>
                {t.services.seeLess}
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                  <path d="M18 15l-6-6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
