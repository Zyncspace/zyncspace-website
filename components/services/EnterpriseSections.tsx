'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  valueProposition,
  mediaShowcase,
  customerJourney,
  portfolio,
  testimonials,
  trustCompliance,
  team,
  faq,
  resources,
} from '@/content/enterprise-sections';
import { serviceRoutes } from '@/content/site';

export function ValuePropositionSection() {
  return (
    <section className="section-padding value-prop-section" id="impact">
      <div className="container">
        <span className="label">{valueProposition.label}</span>
        <h2>
          {valueProposition.title[0]}
          <br />
          {valueProposition.title[1]}
        </h2>
        <p className="section-lead">{valueProposition.description}</p>
        <div className="value-pillars">
          {valueProposition.pillars.map((p) => (
            <article key={p.title} className="value-pillar-card">
              <div className="value-pillar-stat">{p.stat}</div>
              <div className="value-pillar-label">{p.label}</div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </article>
          ))}
        </div>
        <div className="section-cta-row">
          <Link href={valueProposition.cta.href} className="btn btn-dark">
            {valueProposition.cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}

export function MediaShowcaseSection() {
  const [activeShot, setActiveShot] = useState(0);
  const shot = mediaShowcase.screenshots[activeShot];

  return (
    <section className="section-padding media-showcase-section" id="platform-preview">
      <div className="container">
        <div className="media-showcase-header">
          <div>
            <span className="label">{mediaShowcase.label}</span>
            <h2>{mediaShowcase.title}</h2>
            <p className="section-lead">{mediaShowcase.description}</p>
          </div>
        </div>
        <div className="media-showcase-grid">
          <div className="media-video-wrap">
            <div className="media-video-poster">
              <img
                src={mediaShowcase.video.poster}
                alt="ZyncSpace platform dashboard preview"
                width={800}
                height={450}
              />
              <a
                href={mediaShowcase.video.embedUrl}
                className="media-play-btn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Play platform demo video"
              >
                ▶
              </a>
            </div>
            <p className="media-video-caption">{mediaShowcase.video.caption}</p>
          </div>
          <div className="media-screenshots">
            <div className="media-screenshot-main">
              <img src={shot.src} alt={shot.alt} width={720} height={480} />
            </div>
            <div className="media-screenshot-tabs">
              {mediaShowcase.screenshots.map((s, i) => (
                <button
                  key={s.title}
                  type="button"
                  className={`media-tab${i === activeShot ? ' active' : ''}`}
                  onClick={() => setActiveShot(i)}
                >
                  <img src={s.src} alt={`${s.title} preview`} width={64} height={40} />
                  <span>{s.title}</span>
                </button>
              ))}
            </div>
            <h3>{shot.title}</h3>
            <p className="text-small">{shot.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CustomerJourneySection() {
  return (
    <section className="section-padding journey-section">
      <div className="container">
        <span className="label">{customerJourney.label}</span>
        <h2>{customerJourney.title}</h2>
        <div className="journey-track">
          {customerJourney.steps.map((step, i) => (
            <div key={step.num} className="journey-step">
              <div className="journey-icon">{step.icon}</div>
              <span className="journey-num">{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {i < customerJourney.steps.length - 1 ? (
                <span className="journey-connector" aria-hidden />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PortfolioSection() {
  return (
    <section className="section-padding portfolio-section" id="portfolio">
      <div className="container">
        <div className="portfolio-header">
          <div>
            <span className="label">{portfolio.label}</span>
            <h2>{portfolio.title}</h2>
            <p className="section-lead">{portfolio.description}</p>
          </div>
          <Link href={portfolio.cta.href} className="btn btn-outline-light">
            {portfolio.cta.label}
          </Link>
        </div>
        <div className="portfolio-grid">
          {portfolio.items.map((item) => (
            <article key={item.title} className="portfolio-card">
              <div
                className="portfolio-card-image"
                style={{ backgroundImage: `url('${item.image}')` }}
              >
                <span className="portfolio-category">{item.category}</span>
              </div>
              <div className="portfolio-card-body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="portfolio-metric">
                  <span className="stat-num">{item.metric}</span>
                  <span className="stat-label">{item.metricLabel}</span>
                </div>
                <div className="case-tags">
                  {item.tags.map((tag) => (
                    <span key={tag} className="case-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="section-padding testimonials-section">
      <div className="container">
        <span className="label">{testimonials.label}</span>
        <h2>{testimonials.title}</h2>
        <p className="placeholder-disclaimer">{testimonials.disclaimer}</p>
        <div className="testimonials-grid">
          {testimonials.items.map((t) => (
            <blockquote key={t.name} className="testimonial-card">
              <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
              <footer className="testimonial-author">
                <img src={t.avatar} alt={`${t.name} portrait`} width={48} height={48} />
                <div>
                  <cite>{t.name}</cite>
                  <span>
                    {t.role}, {t.company}
                  </span>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TrustComplianceSection() {
  return (
    <section className="section-padding trust-section">
      <div className="container">
        <span className="label">{trustCompliance.label}</span>
        <h2>{trustCompliance.title}</h2>
        <p className="section-lead">{trustCompliance.description}</p>
        <div className="trust-badges-grid">
          {trustCompliance.badges.map((b) => (
            <div key={b.title} className="trust-badge">
              <h3>{b.title}</h3>
              <p>{b.description}</p>
            </div>
          ))}
        </div>
        <p className="trust-note">{trustCompliance.partnersNote}</p>
      </div>
    </section>
  );
}

export function TeamSection() {
  return (
    <section className="section-padding team-section">
      <div className="container">
        <span className="label">{team.label}</span>
        <h2>{team.title}</h2>
        <p className="placeholder-disclaimer">{team.disclaimer}</p>
        <div className="team-grid">
          {team.members.map((m) => (
            <article key={m.name} className="team-card">
              <img src={m.image} alt={`${m.name}, ${m.role}`} width={280} height={280} />
              <h3>{m.name}</h3>
              <p className="team-role">{m.role}</p>
              <p className="team-bio">{m.bio}</p>
            </article>
          ))}
        </div>
        <div className="section-cta-row">
          <Link href={team.cta.href} className="btn btn-outline-light">
            {team.cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-padding faq-section" id="faq">
      <div className="container faq-container">
        <div className="faq-intro">
          <span className="label">{faq.label}</span>
          <h2>{faq.title}</h2>
          <p className="section-lead">
            Lorem ipsum — quick answers. Contact us for detailed proposals.
          </p>
          <Link href={serviceRoutes.contact} className="btn btn-dark">
            Contact Sales ↗
          </Link>
        </div>
        <div className="faq-list">
          {faq.items.map((item, i) => (
            <div key={item.question} className={`faq-item${open === i ? ' open' : ''}`}>
              <button
                type="button"
                className="faq-question"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                {item.question}
                <span className="faq-chevron">{open === i ? '−' : '+'}</span>
              </button>
              {open === i ? <div className="faq-answer">{item.answer}</div> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ResourcesSection() {
  return (
    <section className="section-padding resources-section">
      <div className="container">
        <span className="label">{resources.label}</span>
        <h2>{resources.title}</h2>
        <p className="section-lead">{resources.description}</p>
        <div className="resources-grid">
          {resources.items.map((r) => (
            <Link key={r.title} href={r.href} className="resource-card">
              <div
                className="resource-card-image"
                style={{ backgroundImage: `url('${r.image}')` }}
                role="img"
                aria-label={`${r.type}: ${r.title}`}
              />
              <span className="resource-type">{r.type}</span>
              <h3>{r.title}</h3>
              <p>{r.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
