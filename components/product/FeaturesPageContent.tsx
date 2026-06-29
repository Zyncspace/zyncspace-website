import Link from 'next/link';
import { productFeaturesContent as c } from '@/content/product-features';

export default function FeaturesPageContent() {
  return (
    <>
      <header className="product-features-hero">
        <div className="container">
          <span className="label product-features-hero-label">{c.hero.label}</span>
          <h1>
            {c.hero.title[0]}
            <br />
            {c.hero.title[1]}
          </h1>
          <p className="product-features-hero-lead">{c.hero.description}</p>
          <div className="product-features-hero-actions">
            <Link href={c.hero.primaryCta.href} className="btn btn-white">
              {c.hero.primaryCta.label}
            </Link>
            <Link href={c.hero.secondaryCta.href} className="btn btn-outline-dark">
              {c.hero.secondaryCta.label}
            </Link>
          </div>
          <div className="product-features-hero-stats">
            {c.hero.stats.map((stat) => (
              <div key={stat.label} className="product-features-stat">
                <span className="product-features-stat-value">{stat.value}</span>
                <span className="product-features-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
          <nav className="product-features-jump" aria-label="Feature sections">
            {c.pillars.map((pillar) => (
              <a key={pillar.id} href={`#${pillar.id}`} className="product-features-jump-link">
                {pillar.label}
              </a>
            ))}
            <a href="#security" className="product-features-jump-link">
              Security
            </a>
            <a href="#extras" className="product-features-jump-link">
              More
            </a>
          </nav>
        </div>
      </header>

      {c.pillars.map((pillar, index) => {
        const reversed = index % 2 === 1;
        return (
          <section
            key={pillar.id}
            id={pillar.id}
            className={`section-padding product-features-pillar${reversed ? ' product-features-pillar--reverse' : ''}${index % 2 === 1 ? ' product-features-pillar--alt' : ''}`}
          >
            <div className="container product-features-pillar-grid">
              <div className="product-features-pillar-copy">
                <span className="product-features-pillar-num">{pillar.num}</span>
                <span className="label">{pillar.label}</span>
                <h2>{pillar.title}</h2>
                <p className="section-lead">{pillar.description}</p>
                <ul className="product-features-highlight-list">
                  {pillar.highlights.map((item) => (
                    <li key={item.title}>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="product-features-pillar-visual">
                <img src={pillar.image} alt={pillar.imageAlt} width={720} height={405} loading="lazy" />
              </div>
            </div>
          </section>
        );
      })}

      <section id="security" className="section-padding product-features-security">
        <div className="container">
          <div className="product-features-security-header">
            <span className="product-features-pillar-num">{c.security.num}</span>
            <span className="label">{c.security.label}</span>
            <h2>{c.security.title}</h2>
            <p className="section-lead">{c.security.description}</p>
          </div>
          <div className="product-features-security-grid">
            {c.security.items.map((item) => (
              <article key={item.title} className="product-features-security-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="extras" className="section-padding product-features-extras">
        <div className="container">
          <span className="product-features-pillar-num">{c.extras.num}</span>
          <span className="label">{c.extras.label}</span>
          <h2>{c.extras.title}</h2>
          <p className="section-lead">{c.extras.description}</p>
          <div className="product-features-extras-grid">
            {c.extras.items.map((item) => (
              <article key={item.title} className="product-features-extra-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding product-features-cta">
        <div className="container product-features-cta-inner">
          <h2>{c.cta.title}</h2>
          <p>{c.cta.description}</p>
          <div className="product-features-cta-actions">
            <Link href={c.cta.primary.href} className="btn btn-white">
              {c.cta.primary.label}
            </Link>
            <Link href={c.cta.secondary.href} className="btn btn-outline-dark">
              {c.cta.secondary.label}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
