import Link from 'next/link';
import { servicesContent as c } from '@/content/services';
import { serviceRoutes, siteContact } from '@/content/site';
import FrameworkPipeline from '@/components/services/FrameworkPipeline';

export function HeroSection() {
  return (
    <header className="hero">
      <div className="hero-bg" />
      <div className="container hero-content">
        <span className="hero-label">{c.hero.label}</span>
        <h1>{c.hero.title[0]}<br />{c.hero.title[1]}</h1>
        <p>{c.hero.description}</p>
        <div className="hero-btns">
          <Link href={serviceRoutes.contact} className="btn btn-white">Start Your Project ↗</Link>
          <Link href={serviceRoutes.services} className="btn btn-outline-dark">Explore Services</Link>
        </div>
        <div className="hero-stats">
          {c.hero.stats.map((s) => (
            <div key={s.label} className="hero-stat-card">
              <div className="stat-num">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

export function PartnersSection() {
  const marqueeItems = [...c.partners, ...c.partners];

  return (
    <section className="logo-wall">
      <div className="container">
        <span className="label partners-label">Trusted by Leading Global Enterprises</span>
        <div className="partners-marquee" aria-label="Global enterprise partners">
          <div className="partners-marquee-track">
            {marqueeItems.map((name, index) => (
              <span key={`${name}-${index}`} className="partners-marquee-item">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CapabilitiesSection({ embedded = false }: { embedded?: boolean }) {
  if (embedded) {
    return (
      <section className="section-padding" style={{ paddingTop: 0 }}>
        <div className="container">
          {c.capabilities.items.map((item) => (
            <div key={item.num} className="feature-item" style={{ marginBottom: 32 }}>
              <div className="feature-icon">[{item.num}]</div>
              <div className="feature-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  return (
    <section className="section-padding">
      <div className="container split-grid">
        <div className="split-left">
          <span className="label">{c.capabilities.label}</span>
          <h2>{c.capabilities.title}</h2>
          <p>{c.capabilities.description}</p>
        </div>
        <div className="split-right">
          {c.capabilities.items.map((item) => (
            <div key={item.num} className="feature-item">
              <div className="feature-icon">[{item.num}]</div>
              <div className="feature-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CapabilityMatrixSection() {
  return (
    <section className="container section-padding" style={{ paddingTop: 0 }}>
      <div className="active-node">
        <div className="node-header">
          <span className="label" style={{ color: '#666' }}>{c.capabilityMatrix.label}</span>
          <h2>{c.capabilityMatrix.title}</h2>
          <p>{c.capabilityMatrix.description}</p>
        </div>
        <div className="node-grid">
          <div className="terminal-box">
            <h4>Delivered Strategic Modules</h4>
            <ul>
              {c.capabilityMatrix.modules.map((m) => <li key={m}>{m}</li>)}
            </ul>
          </div>
          <div className="terminal-box matrix-sla">
            <span className="label">{c.capabilityMatrix.sla.label}</span>
            <h3 className="sla-value">{c.capabilityMatrix.sla.value}</h3>
            <p>{c.capabilityMatrix.sla.description}</p>
            <Link href={serviceRoutes.contact} className="btn btn-white">{c.capabilityMatrix.sla.cta.label}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FrameworkSection({ embedded = false }: { embedded?: boolean }) {
  return <FrameworkPipeline embedded={embedded} />;
}

export { default as TechStackSection } from '@/components/services/TechStackSection';

export function IndustriesSection({ embedded = false }: { embedded?: boolean }) {
  return (
    <section className="section-padding industries-section">
      <div className="container">
        {!embedded ? (
          <div style={{ marginBottom: 60 }}>
            <span className="label">{c.industries.label}</span>
            <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>{c.industries.title[0]}<br />{c.industries.title[1]}</h2>
            <p className="section-lead">{c.industries.description}</p>
          </div>
        ) : null}
        <div className="verticals-grid">
          {c.industries.items.map((v) => (
            <div key={v.title} className="vertical-card" style={{ background: `url('${v.imageUrl}') center/cover` }}>
              <div>
                <span className="label vertical-label">SECTOR ACTIVE</span>
                <h3 className="vertical-title">{v.title}</h3>
                <p className="vertical-desc">{v.description}</p>
              </div>
              <div>
                <div className="metric-highlight">{v.metric}</div>
                <div className="metric-label">{v.metricLabel}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CaseStudySection() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="case-study-banner">
          <div className="case-study-top">
            <div>
              <span className="label case-label">{c.caseStudy.label}</span>
              <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>{c.caseStudy.client}</h2>
            </div>
            <div>
              <div className="case-metric-label">{c.caseStudy.metricLabel}</div>
              <div className="case-metrics">
                <div className="case-before">{c.caseStudy.before.value}</div>
                <div className="case-after">{c.caseStudy.after.value}</div>
              </div>
            </div>
          </div>
          <div className="case-study-body">
            <div>
              <h4>{c.caseStudy.challenge.title}</h4>
              <p>{c.caseStudy.challenge.description}</p>
            </div>
            <div>
              <h4>{c.caseStudy.solution.title}</h4>
              <p>{c.caseStudy.solution.description}</p>
            </div>
          </div>
          <div className="case-tags">
            {c.caseStudy.technologies.map((tag) => (
              <span key={tag} className="case-tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ConsultingPricingSection({ embedded = false }: { embedded?: boolean }) {
  return (
    <section className="section-padding">
      <div className="container">
        {!embedded ? (
          <div className="pricing-intro">
            <span className="label">{c.consultingPricing.label}</span>
            <h2>{c.consultingPricing.title}</h2>
            <p className="section-lead">{c.consultingPricing.description}</p>
          </div>
        ) : null}
        <div className="pricing-grid">
          {c.consultingPricing.tiers.map((tier) => (
            <div key={tier.name} className={`pricing-card${tier.recommended ? ' recommended' : ''}`}>
              {tier.recommended && <span className="label recommended-badge">RECOMMENDED</span>}
              <h3>{tier.name}</h3>
              <div className="pricing-price">
                {tier.price}{tier.period && <span className="pricing-period"> {tier.period}</span>}
              </div>
              <p className="pricing-desc">{tier.description}</p>
              <ul className="pricing-features">
                {tier.features.map((f) => <li key={f}>✓ {f}</li>)}
              </ul>
              <Link href={serviceRoutes.contact} className={`btn btn-full ${tier.recommended ? 'btn-white' : 'btn-outline-light'}`}>
                {tier.cta.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function InsightsSection({ limit }: { limit?: number }) {
  const items = limit ? c.insights.items.slice(0, limit) : c.insights.items;
  return (
    <section className="section-padding">
      <div className="container">
        <div className="insights-header">
          <div>
            <span className="label">{c.insights.label}</span>
            <h2>{c.insights.title}</h2>
          </div>
          <Link href={c.insights.viewAllCta.href} className="btn btn-outline-light">{c.insights.viewAllCta.label}</Link>
        </div>
        <div className="insights-grid">
          {items.map((item) => (
            <div key={item.title} className="insight-card">
              <div className="insight-meta"><span>{item.category}</span><span>{item.date}</span></div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="insight-byline">By {item.author} • {item.readTime}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProductShowcaseSection() {
  return (
    <section className="section-padding product-showcase-section">
      <div className="container">
        <div className="split-grid">
          <div className="split-left">
            <span className="label">Our Product</span>
            <h2>{c.productShowcase.title}</h2>
            <p>{c.productShowcase.description}</p>
            <div className="showcase-ctas">
              <Link href={serviceRoutes.product.features} className="btn btn-dark">Explore the Platform ↗</Link>
              <Link href={siteContact.signupUrl} className="btn btn-outline-light">Start for Free</Link>
            </div>
            <div className="product-showcase-visual">
              <img
                src="/assets/images/home-hero-section.png"
                alt="ZyncSpace workspace overview with chat, tasks, and collaboration"
                width={640}
                height={400}
              />
            </div>
          </div>
          <div>
            {c.productShowcase.features.map((f) => (
              <div key={f.title} className="feature-item">
                <div className="feature-icon">→</div>
                <div className="feature-content">
                  <h3>{f.title}</h3>
                  <p>{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesCtaBand() {
  return (
    <section className="section-padding services-cta-band">
      <div className="container" style={{ textAlign: 'center' }}>
        <h2>Ready to modernize your stack?</h2>
        <p className="section-lead" style={{ margin: '0 auto 2rem' }}>
          From AI consulting to the ZyncSpace workspace — one team, one partner.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href={serviceRoutes.contact} className="btn btn-dark">Talk to us ↗</Link>
          <Link href={siteContact.signupUrl} className="btn btn-outline-light">Try ZyncSpace free</Link>
        </div>
      </div>
    </section>
  );
}
