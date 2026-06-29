import Link from 'next/link';
import {
  productPricingContent as c,
  type ComparisonCell,
} from '@/content/product-pricing';
import PricingCalculator from '@/components/product/PricingCalculator';

function ComparisonCellIcon({ value }: { value: ComparisonCell | string }) {
  if (typeof value === 'string' && value.startsWith('$')) {
    return <span className="product-pricing-table-price">{value}</span>;
  }

  const labels: Record<ComparisonCell, string> = {
    full: 'Included',
    basic: 'Basic',
    limited: 'Limited',
    paid: 'Paid add-on',
    addon: 'Add-on',
    soon: 'Coming soon',
    copilot: 'Copilot',
    business: 'Business tier',
    none: '—',
  };

  const icons: Record<ComparisonCell, string> = {
    full: '✓',
    basic: '◐',
    limited: '◐',
    paid: '$',
    addon: '+',
    soon: '◇',
    copilot: 'AI',
    business: '✓',
    none: '—',
  };

  const cell = value as ComparisonCell;
  return (
    <span className={`product-pricing-table-cell product-pricing-table-cell--${cell}`} title={labels[cell]}>
      <span aria-hidden="true">{icons[cell]}</span>
      <span className="sr-only">{labels[cell]}</span>
    </span>
  );
}

export default function PricingPageContent() {
  return (
    <>
      <header className="product-pricing-hero">
        <div className="container">
          <span className="product-pricing-badge">{c.hero.badge}</span>
          <span className="label product-pricing-hero-label">{c.hero.label}</span>
          <h1>
            {c.hero.title[0]}
            <br />
            {c.hero.title[1]}
          </h1>
          <p className="product-pricing-hero-lead">{c.hero.description}</p>
          <p className="product-pricing-hero-sub">
            Start free during beta · Scale to $1/user when you need more than 10 seats
          </p>
        </div>
      </header>

      <aside className="product-pricing-notice">
        <div className="container product-pricing-notice-inner">
          <div className="product-pricing-notice-copy">
            <strong>{c.productNotice.title}</strong>
            <p>{c.productNotice.description}</p>
          </div>
          <Link href={c.productNotice.consultingHref} className="product-pricing-notice-link">
            {c.productNotice.consultingLabel} →
          </Link>
        </div>
      </aside>

      <section className="section-padding product-pricing-tiers">
        <div className="container">
          <div className="product-pricing-tier-grid">
            {c.tiers.map((tier) => (
              <article
                key={tier.id}
                className={`product-pricing-tier${tier.featured ? ' product-pricing-tier--featured' : ''}`}
              >
                {tier.comingSoon ? (
                  <span className="product-pricing-tier-badge product-pricing-tier-badge--soon">
                    Coming soon
                  </span>
                ) : (
                  <span className="product-pricing-tier-badge">Most popular</span>
                )}
                <h2>{tier.name}</h2>
                <div className="product-pricing-tier-price">
                  <span className="product-pricing-tier-amount" aria-label={`$${tier.priceValue}`}>
                    <span className="product-pricing-tier-currency">$</span>
                    <span className="product-pricing-tier-value">{tier.priceValue}</span>
                  </span>
                  {tier.period ? (
                    <span className="product-pricing-tier-period">{tier.period}</span>
                  ) : null}
                </div>
                <p className="product-pricing-tier-desc">{tier.description}</p>
                <ul className="product-pricing-tier-features">
                  {tier.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <Link
                  href={tier.cta.href}
                  className={`btn ${tier.featured ? 'btn-dark' : 'btn-outline-light'} btn-full`}
                  {...(tier.cta.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {tier.cta.label}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PricingCalculator />

      <section className="section-padding product-pricing-compare">
        <div className="container">
          <span className="label">Comparison</span>
          <h2>{c.comparison.title}</h2>
          <p className="section-lead">{c.comparison.description}</p>
          <div className="product-pricing-table-wrap">
            <table className="product-pricing-table">
              <thead>
                <tr>
                  <th scope="col">Features</th>
                  {c.comparison.columns.map((col) => (
                    <th key={col} scope="col" className={col === 'ZyncSpace' ? 'is-zync' : undefined}>
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.comparison.rows.map((row) => (
                  <tr key={row.feature} className={row.highlight ? 'is-highlight' : undefined}>
                    <th scope="row">{row.feature}</th>
                    {row.values.map((value, i) => (
                      <td key={`${row.feature}-${c.comparison.columns[i]}`}>
                        {row.highlight ? (
                          <strong>{value}</strong>
                        ) : (
                          <ComparisonCellIcon value={value as ComparisonCell | string} />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="product-pricing-value-props">
        <div className="container product-pricing-value-grid">
          {c.valueProps.map((prop) => (
            <div key={prop.label} className="product-pricing-value-card">
              <span className="product-pricing-value-num">{prop.value}</span>
              <span className="product-pricing-value-label">{prop.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding product-pricing-cta">
        <div className="container product-pricing-cta-inner">
          <h2>{c.cta.title}</h2>
          <p>{c.cta.description}</p>
          <div className="product-pricing-cta-actions">
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
