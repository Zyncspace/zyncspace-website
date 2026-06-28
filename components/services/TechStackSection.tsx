'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { servicesContent as c } from '@/content/services';
import { serviceRoutes } from '@/content/site';

type TechStackSectionProps = {
  variant?: 'preview' | 'full';
  embedded?: boolean;
};

type TechCard = (typeof c.techStack.cards)[number];

const CATEGORIES = c.techStack.filters.filter((f) => f !== 'All Technologies');

function categorySlug(category: string) {
  return category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
}

function TechStackPreview() {
  const featured = c.techStack.cards.filter((card) => 'featured' in card && card.featured);
  const marqueeItems = [...c.techStack.cards, ...c.techStack.cards];

  const layers = useMemo(
    () =>
      CATEGORIES.map((category) => ({
        category,
        slug: categorySlug(category),
        tools: c.techStack.cards.filter((card) => card.category === category),
      })),
    [],
  );

  return (
    <section className="stack-atlas" id="technology">
      <div className="stack-atlas-glow" aria-hidden />
      <div className="container stack-atlas-inner">
        <header className="stack-atlas-header">
          <span className="label">{c.techStack.label}</span>
          <h2>{c.techStack.title}</h2>
          <p>{c.techStack.description}</p>
        </header>

        <div className="stack-atlas-layout">
          <div className="stack-atlas-pillars">
            {featured.slice(0, 3).map((card, index) => (
              <article key={card.name} className="stack-pillar">
                <span className="stack-pillar-index">{String(index + 1).padStart(2, '0')}</span>
                <h3>{card.name}</h3>
                {'outcome' in card && card.outcome ? <p>{card.outcome}</p> : null}
              </article>
            ))}
          </div>

          <div className="stack-atlas-panel">
            <div className="stack-atlas-panel-bar">
              <span className="stack-atlas-panel-dot" />
              <span className="stack-atlas-panel-dot" />
              <span className="stack-atlas-panel-dot" />
              <span className="stack-atlas-panel-title">production-stack.config</span>
            </div>
            <div className="stack-atlas-layers">
              {layers.map((layer) => (
                <div key={layer.category} className="stack-atlas-layer">
                  <div className="stack-atlas-layer-meta">
                    <span className="stack-atlas-layer-name">{layer.category}</span>
                    <span className="stack-atlas-layer-count">{layer.tools.length}</span>
                  </div>
                  <div className="stack-atlas-chips">
                    {layer.tools.map((tool) => (
                      <Link
                        key={tool.name}
                        href={`${c.techStack.cta.href}#${layer.slug}`}
                        className="stack-atlas-chip"
                      >
                        {tool.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="stack-atlas-marquee" aria-hidden>
          <div className="stack-atlas-marquee-track">
            {marqueeItems.map((card, index) => (
              <span key={`${card.name}-${index}`} className="stack-atlas-marquee-item">
                {card.name}
              </span>
            ))}
          </div>
        </div>

        <footer className="stack-atlas-footer">
          <div className="stack-atlas-metrics">
            <div>
              <span className="stack-metric-value">{c.techStack.cards.length}</span>
              <span className="stack-metric-label">Production tools</span>
            </div>
            <div>
              <span className="stack-metric-value">{CATEGORIES.length}</span>
              <span className="stack-metric-label">Engineering layers</span>
            </div>
            <div>
              <span className="stack-metric-value">CI</span>
              <span className="stack-metric-label">Security gated</span>
            </div>
          </div>
          <Link href={c.techStack.cta.href} className="stack-atlas-cta">
            <span>Explore full technology index</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </footer>
      </div>
    </section>
  );
}

function TechStackFull({ embedded = false }: { embedded?: boolean }) {
  const [activeCategory, setActiveCategory] = useState<string>('All Technologies');
  const [query, setQuery] = useState('');

  const filteredCards = useMemo(() => {
    let cards: TechCard[] = [...c.techStack.cards];

    if (activeCategory !== 'All Technologies') {
      cards = cards.filter((card) => card.category === activeCategory);
    }

    if (query.trim()) {
      const q = query.trim().toLowerCase();
      cards = cards.filter(
        (card) =>
          card.name.toLowerCase().includes(q) ||
          card.description.toLowerCase().includes(q) ||
          card.category.toLowerCase().includes(q) ||
          ('outcome' in card && card.outcome?.toLowerCase().includes(q)),
      );
    }

    return cards;
  }, [activeCategory, query]);

  const grouped = useMemo(() => {
    const categories =
      activeCategory === 'All Technologies' ? CATEGORIES : [activeCategory];

    return categories
      .map((category) => ({
        category,
        slug: categorySlug(category),
        cards: filteredCards.filter((card) => card.category === category),
      }))
      .filter((group) => group.cards.length > 0);
  }, [activeCategory, filteredCards]);

  return (
    <section className={`stack-index${embedded ? ' stack-index-embedded' : ''}`}>
      <div className="container stack-index-layout">
        <aside className="stack-index-sidebar">
          <div className="stack-index-sidebar-sticky">
            <p className="stack-index-sidebar-label">Categories</p>
            <nav className="stack-index-nav" aria-label="Filter stack by category">
              {c.techStack.filters.map((filter) => {
                const count =
                  filter === 'All Technologies'
                    ? c.techStack.cards.length
                    : c.techStack.cards.filter((card) => card.category === filter).length;

                return (
                  <button
                    key={filter}
                    type="button"
                    className={`stack-index-nav-item${activeCategory === filter ? ' active' : ''}`}
                    onClick={() => setActiveCategory(filter)}
                  >
                    <span>{filter}</span>
                    <span className="stack-index-nav-count">{count}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        <div className="stack-index-main">
          <div className="stack-index-toolbar">
            <label className="stack-index-search">
              <span className="sr-only">Search technologies</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" />
                <path d="M20 20l-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search tools, outcomes, categories…"
              />
            </label>
            <p className="stack-index-result-count">
              {filteredCards.length} {filteredCards.length === 1 ? 'result' : 'results'}
            </p>
          </div>

          <div className="stack-index-groups">
            {grouped.length === 0 ? (
              <p className="stack-index-empty">No technologies match your search.</p>
            ) : (
              grouped.map((group) => (
                <section
                  key={group.category}
                  id={group.slug}
                  className="stack-index-group"
                  aria-labelledby={`stack-group-${group.slug}`}
                >
                  <header className="stack-index-group-head">
                    <h2 id={`stack-group-${group.slug}`}>{group.category}</h2>
                    <span>{group.cards.length}</span>
                  </header>
                  <ul className="stack-index-list">
                    {group.cards.map((card) => (
                      <StackIndexRow key={card.name} card={card} />
                    ))}
                  </ul>
                </section>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function StackIndexRow({ card }: { card: TechCard }) {
  return (
    <li className="stack-index-row">
      <div className="stack-index-row-primary">
        <span className="stack-index-row-name">{card.name}</span>
        <span className="stack-index-row-tag">{card.category}</span>
      </div>
      <p className="stack-index-row-desc">{card.description}</p>
      {'outcome' in card && card.outcome ? (
        <p className="stack-index-row-outcome">{card.outcome}</p>
      ) : null}
    </li>
  );
}

export function TechStackPageCta() {
  return (
    <section className="stack-page-cta">
      <div className="stack-page-cta-grid" aria-hidden />
      <div className="container stack-page-cta-inner">
        <div>
          <span className="label">Architecture Review</span>
          <h2>Your stack should earn its place.</h2>
          <p>
            We map what you run today, what it costs, and what to consolidate — with a roadmap your
            engineering and procurement teams can both sign off on.
          </p>
        </div>
        <Link href={serviceRoutes.contact} className="stack-page-cta-btn">
          Book a stack review
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M5 12h14M13 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}

export default function TechStackSection({
  variant = 'preview',
  embedded = false,
}: TechStackSectionProps) {
  if (variant === 'preview' && !embedded) {
    return <TechStackPreview />;
  }

  return <TechStackFull embedded={embedded} />;
}
