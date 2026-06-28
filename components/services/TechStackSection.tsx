'use client';

import { useMemo, useState } from 'react';
import { servicesContent as c } from '@/content/services';

type TechStackSectionProps = {
  embedded?: boolean;
};

export default function TechStackSection({ embedded = false }: TechStackSectionProps) {
  type Filter = (typeof c.techStack.filters)[number];
  const [activeFilter, setActiveFilter] = useState<Filter>(c.techStack.filters[0]);

  const filteredCards = useMemo(() => {
    if (activeFilter === 'All Technologies') {
      return c.techStack.cards;
    }
    return c.techStack.cards.filter((card) => card.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="section-padding tech-stack-section">
      <div className="container">
        {!embedded ? (
          <div className="stack-header">
            <span className="label">{c.techStack.label}</span>
            <h2>{c.techStack.title}</h2>
            <p className="section-lead">{c.techStack.description}</p>
          </div>
        ) : null}
        <div className="tech-filters" role="tablist" aria-label="Technology categories">
          {c.techStack.filters.map((filter) => (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={activeFilter === filter}
              className={`btn tech-filter-btn${activeFilter === filter ? ' btn-dark' : ' btn-outline-light'}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="bento-grid">
          {filteredCards.map((card) => (
            <article key={card.name} className="tech-card">
              <div className="tech-top">
                <span className="tech-name">{card.name}</span>
                <span className="tech-cat">{card.category}</span>
              </div>
              <p className="tech-desc">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
