'use client';

import Link from 'next/link';
import { useState } from 'react';
import { servicesContent as c } from '@/content/services';
import { serviceRoutes } from '@/content/site';

type FrameworkPipelineProps = {
  embedded?: boolean;
};

export default function FrameworkPipeline({ embedded = false }: FrameworkPipelineProps) {
  const { framework } = c;
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStage = framework.stages[activeIndex];

  return (
    <section className={`framework-section section-padding${embedded ? ' framework-section-embedded' : ''}`}>
      <div className="container">
        {!embedded ? (
          <div className="framework-header">
            <span className="label">{framework.label}</span>
            <h2>{framework.title}</h2>
            <p className="section-lead framework-lead">{framework.description}</p>
            <div className="framework-metrics">
              {framework.metrics.map((metric) => (
                <div key={metric.label} className="framework-metric">
                  <span className="framework-metric-value">{metric.value}</span>
                  <span className="framework-metric-label">{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        <div className="framework-detail" role="region" aria-label={`Stage ${activeStage.num}: ${activeStage.title}`}>
          <div className="framework-detail-main">
            <div className="framework-detail-badges">
              <span className="framework-badge">Stage {activeStage.num}</span>
              <span className="framework-badge framework-badge-outline">{activeStage.timeline}</span>
            </div>
            <h3 className="framework-detail-title">{activeStage.headline}</h3>
            <p className="framework-detail-desc">{activeStage.description}</p>
            <div className="framework-detail-role">
              <span className="framework-role-label">Lead Role</span>
              <span className="framework-role-value">{activeStage.leadRole}</span>
            </div>
            <div className="framework-detail-nav">
              <button
                type="button"
                className="framework-nav-btn"
                disabled={activeIndex === 0}
                onClick={() => setActiveIndex((i) => i - 1)}
              >
                ← Previous
              </button>
              {activeIndex < framework.stages.length - 1 ? (
                <button
                  type="button"
                  className="framework-nav-btn framework-nav-btn-primary"
                  onClick={() => setActiveIndex((i) => i + 1)}
                >
                  Next: {framework.stages[activeIndex + 1].title} →
                </button>
              ) : (
                <Link href={serviceRoutes.contact} className="btn btn-white framework-cta">
                  Start Your Transformation ↗
                </Link>
              )}
            </div>
          </div>
          <div className="framework-detail-deliverables">
            <h4>Key Deliverables</h4>
            <ul className="framework-deliverables-list">
              {activeStage.deliverables.map((item) => (
                <li key={item}>
                  <span className="framework-check" aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {!embedded ? (
          <div className="framework-footer-cta">
            <Link href={serviceRoutes.framework} className="btn btn-outline-light">
              Explore Full Methodology ↗
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
