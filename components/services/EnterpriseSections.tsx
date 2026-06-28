'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  aboutSection,
  valueProposition,
  whyChoose,
  mediaShowcase,
  deliveryProcess,
  referenceArchitectures,
  portfolio,
  clientStories,
  trustCompliance,
  engineeringPractice,
  leadershipTeam,
  faq,
  resources,
} from '@/content/enterprise-sections';
import { serviceRoutes } from '@/content/site';

export function AboutSection() {
  return (
    <section className="section-padding about-section" id="about">
      <div className="container split-grid">
        <div className="split-left">
          <span className="label">{aboutSection.label}</span>
          <h2>{aboutSection.title}</h2>
        </div>
        <div className="split-right">
          <p className="section-lead" style={{ marginBottom: 'var(--space-8)' }}>
            {aboutSection.description}
          </p>
          <Link href={aboutSection.cta.href} className="btn btn-outline-light">
            {aboutSection.cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}

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
              {'context' in p && p.context ? (
                <p className="value-pillar-context">{p.context}</p>
              ) : null}
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

export function WhyChooseSection() {
  return (
    <section className="section-padding why-choose-section">
      <div className="container">
        <span className="label">{whyChoose.label}</span>
        <h2>{whyChoose.title}</h2>
        <div className="why-choose-grid">
          {whyChoose.items.map((item) => (
            <article key={item.title} className="why-choose-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MediaShowcaseSection() {
  const [activeFeature, setActiveFeature] = useState(0);
  const active = mediaShowcase.features[activeFeature];

  return (
    <section className="section-padding media-showcase-section" id="platform-preview">
      <div className="container">
        <div className="media-showcase-header">
          <span className="label">{mediaShowcase.label}</span>
          <h2>{mediaShowcase.title}</h2>
          <p className="section-lead">{mediaShowcase.description}</p>
        </div>

        <div className="feature-hub">
          <div
            className="feature-hub-nav"
            role="tablist"
            aria-label="ZyncSpace platform capabilities"
          >
            {mediaShowcase.features.map((feature, index) => {
              const isActive = index === activeFeature;
              return (
                <button
                  key={feature.id}
                  type="button"
                  role="tab"
                  id={`feature-tab-${feature.id}`}
                  aria-selected={isActive}
                  aria-controls={`feature-panel-${feature.id}`}
                  tabIndex={isActive ? 0 : -1}
                  className={`feature-hub-tab${isActive ? ' active' : ''}`}
                  onClick={() => setActiveFeature(index)}
                >
                  <span className="feature-hub-tab-icon" aria-hidden>
                    {feature.icon}
                  </span>
                  <span className="feature-hub-tab-copy">
                    <span className="feature-hub-tab-title">{feature.title}</span>
                    <span className="feature-hub-tab-desc">{feature.description}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <div
            className="feature-hub-visual"
            role="tabpanel"
            id={`feature-panel-${active.id}`}
            aria-labelledby={`feature-tab-${active.id}`}
          >
            {mediaShowcase.features.map((feature, index) => (
              <img
                key={feature.id}
                src={feature.src}
                alt={feature.alt}
                width={1280}
                height={720}
                className={`feature-hub-frame${index === activeFeature ? ' active' : ''}`}
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding="async"
              />
            ))}
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
        <span className="label">{deliveryProcess.label}</span>
        <h2>{deliveryProcess.title}</h2>
        <div className="journey-track">
          {deliveryProcess.steps.map((step, i) => (
            <div key={step.num} className="journey-step">
              <div className="journey-icon">{step.icon}</div>
              <span className="journey-num">{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {i < deliveryProcess.steps.length - 1 ? (
                <span className="journey-connector" aria-hidden />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ReferenceArchitectureSection() {
  return (
    <section className="section-padding reference-arch-section" id="architectures">
      <div className="container">
        <span className="label">{referenceArchitectures.label}</span>
        <h2>{referenceArchitectures.title}</h2>
        <p className="section-lead">{referenceArchitectures.description}</p>
        <div className="reference-arch-grid">
          {referenceArchitectures.items.map((item) => (
            <article key={item.title} className="reference-arch-card">
              <span className="reference-arch-subtitle">{item.subtitle}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="reference-arch-layers" aria-label={`${item.title} architecture layers`}>
                {item.layers.map((layer, i) => (
                  <span key={layer} className="reference-arch-layer">
                    {layer}
                    {i < item.layers.length - 1 ? (
                      <span className="reference-arch-arrow" aria-hidden>
                        →
                      </span>
                    ) : null}
                  </span>
                ))}
              </div>
            </article>
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

export function ClientStoriesSection() {
  return (
    <section className="section-padding client-stories-section">
      <div className="container client-stories-inner">
        <span className="label">{clientStories.label}</span>
        <h2>{clientStories.title}</h2>
        <p className="section-lead">{clientStories.description}</p>
        <Link href={clientStories.cta.href} className="btn btn-outline-light">
          {clientStories.cta.label}
        </Link>
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
        <div className="trust-ai-privacy">
          <h3>{trustCompliance.aiPrivacy.title}</h3>
          <p>{trustCompliance.aiPrivacy.description}</p>
        </div>
        <div className="trust-badges-grid">
          {trustCompliance.badges.map((b) => (
            <div key={b.title} className="trust-badge">
              <h3>{b.title}</h3>
              <p>{b.description}</p>
            </div>
          ))}
        </div>
        <p className="trust-note">{trustCompliance.frameworksNote}</p>
      </div>
    </section>
  );
}

export function LeadershipTeamSection() {
  return (
    <section className="section-padding team-section" id="team">
      <div className="container">
        <span className="label">{leadershipTeam.label}</span>
        <h2>{leadershipTeam.title}</h2>
        <p className="placeholder-disclaimer">{leadershipTeam.disclaimer}</p>
        <div className="team-grid">
          {leadershipTeam.members.map((member) => (
            <article key={member.name} className="team-card">
              <img src={member.image} alt={`${member.name}, ${member.role}`} width={280} height={280} />
              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-bio">{member.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EngineeringPracticeSection() {
  return (
    <section className="section-padding engineering-practice-section">
      <div className="container">
        <span className="label">{engineeringPractice.label}</span>
        <h2>{engineeringPractice.title}</h2>
        <p className="section-lead">{engineeringPractice.description}</p>
        <div className="engineering-highlights">
          {engineeringPractice.highlights.map((h) => (
            <article key={h.title} className="engineering-highlight-card">
              <h3>{h.title}</h3>
              <p>{h.description}</p>
            </article>
          ))}
        </div>
        <div className="engineering-links">
          {engineeringPractice.links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="btn btn-outline-light"
              {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {link.label} ↗
            </Link>
          ))}
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
            Procurement, security, and engagement questions — answered directly.
          </p>
          <Link href={serviceRoutes.contact} className="btn btn-dark">
            Schedule a Discovery Call ↗
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
