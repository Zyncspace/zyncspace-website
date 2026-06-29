import Link from 'next/link';
import ProductPageCta from '@/components/product/ProductPageCta';
import { useCasesContent as c, type UseCaseVertical } from '@/content/use-cases';

function VerticalVisual({ vertical }: { vertical: UseCaseVertical }) {
  if (vertical.stats) {
    return (
      <div className="use-cases-visual-stack">
        <div className="use-cases-stats-card">
          <div className="use-cases-stats-primary">
            <span className="use-cases-stats-value">{vertical.stats.primary.value}</span>
            <span className="use-cases-stats-label">{vertical.stats.primary.label}</span>
          </div>
          <div className="use-cases-stats-secondary">
            {vertical.stats.secondary.map((stat) => (
              <div key={stat.label} className="use-cases-stats-item">
                <span className="use-cases-stats-value">{stat.value}</span>
                <span className="use-cases-stats-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        {vertical.workflow ? <WorkflowCard workflow={vertical.workflow} /> : null}
      </div>
    );
  }

  if (vertical.featureCards) {
    return (
      <div className="use-cases-feature-cards">
        {vertical.featureCards.map((card) => (
          <article key={card.title} className="use-cases-feature-card">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </article>
        ))}
      </div>
    );
  }

  if (vertical.workflow) {
    return <WorkflowCard workflow={vertical.workflow} />;
  }

  return null;
}

function WorkflowCard({ workflow }: { workflow: NonNullable<UseCaseVertical['workflow']> }) {
  return (
    <div className="use-cases-workflow-card">
      <h3 className="use-cases-workflow-title">{workflow.title}</h3>
      <ol className="use-cases-workflow-steps">
        {workflow.steps.map((step, index) => (
          <li key={step.title}>
            <span className="use-cases-workflow-num" aria-hidden="true">
              {index + 1}
            </span>
            <div>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Checklist({ items, title }: { items: string[]; title?: string }) {
  return (
    <div className="use-cases-checklist">
      {title ? <h3>{title}</h3> : null}
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function UseCasesPageContent() {
  return (
    <>
      <header className="use-cases-hero">
        <div className="container">
          <span className="label use-cases-hero-label">{c.hero.label}</span>
          <h1>
            {c.hero.title[0]}
            <br />
            {c.hero.title[1]}
          </h1>
          <p className="use-cases-hero-lead">{c.hero.description}</p>
          <div className="use-cases-hero-actions">
            <Link href={c.hero.primaryCta.href} className="btn btn-white">
              {c.hero.primaryCta.label}
            </Link>
            <Link href={c.hero.secondaryCta.href} className="btn btn-outline-dark">
              {c.hero.secondaryCta.label}
            </Link>
          </div>
          <nav className="use-cases-jump" aria-label="Use case sections">
            {c.verticals.map((vertical) => (
              <a key={vertical.id} href={`#${vertical.id}`} className="use-cases-jump-link">
                {vertical.label.replace('For ', '')}
              </a>
            ))}
            <a href="#industries" className="use-cases-jump-link">
              Industries
            </a>
            <a href="#results" className="use-cases-jump-link">
              Results
            </a>
          </nav>
        </div>
      </header>

      {c.verticals.map((vertical, index) => {
        const reversed = index % 2 === 1;
        return (
          <section
            key={vertical.id}
            id={vertical.id}
            className={`section-padding use-cases-pillar${reversed ? ' use-cases-pillar--reverse' : ''}${index % 2 === 1 ? ' use-cases-pillar--alt' : ''}`}
          >
            <div className="container">
              <div className="use-cases-pillar-grid">
                <div className="use-cases-pillar-copy">
                  <span className="use-cases-pillar-num">{vertical.num}</span>
                  <span className="label">{vertical.label}</span>
                  <h2>{vertical.title}</h2>
                  <p className="section-lead">{vertical.description}</p>
                  {vertical.highlights ? (
                    <ul className="use-cases-highlight-list">
                      {vertical.highlights.map((item) => (
                        <li key={item.title}>
                          <h3>{item.title}</h3>
                          <p>{item.description}</p>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  <Link
                    href={vertical.cta.href}
                    className="btn btn-dark use-cases-pillar-cta"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {vertical.cta.label}
                  </Link>
                </div>
                <div className="use-cases-pillar-visual">
                  <VerticalVisual vertical={vertical} />
                </div>
              </div>
              {vertical.checklist ? (
                <Checklist
                  items={vertical.checklist}
                  title={vertical.id === 'startups' ? 'Everything You Need to Scale' : undefined}
                />
              ) : null}
            </div>
          </section>
        );
      })}

      <section id="industries" className="section-padding use-cases-industries">
        <div className="container">
          <span className="label">{c.industries.label}</span>
          <h2>{c.industries.title}</h2>
          <p className="section-lead">{c.industries.description}</p>
          <div className="use-cases-industries-grid">
            {c.industries.items.map((item) => (
              <article key={item.title} className="use-cases-industry-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding use-cases-testimonials">
        <div className="container">
          <h2>{c.testimonials.title}</h2>
          <p className="section-lead use-cases-testimonials-lead">{c.testimonials.description}</p>
          <div className="use-cases-testimonials-grid">
            {c.testimonials.items.map((item) => (
              <blockquote key={item.name} className="use-cases-testimonial-card">
                <p className="use-cases-testimonial-quote">&ldquo;{item.quote}&rdquo;</p>
                <footer>
                  <span className="use-cases-testimonial-avatar" aria-hidden="true">
                    {item.initials}
                  </span>
                  <div>
                    <cite>{item.name}</cite>
                    <span>{item.role}</span>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="results" className="section-padding use-cases-results">
        <div className="container">
          <h2>{c.results.title}</h2>
          <p className="section-lead">{c.results.description}</p>
          <div className="use-cases-results-grid">
            {c.results.items.map((item) => (
              <article key={item.label} className="use-cases-result-card">
                <span className="use-cases-result-value">{item.value}</span>
                <h3>{item.label}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ProductPageCta
        title={c.cta.title}
        description={c.cta.description}
        primary={{ ...c.cta.primary, external: true }}
        secondary={{ ...c.cta.secondary, external: true }}
      />
    </>
  );
}
