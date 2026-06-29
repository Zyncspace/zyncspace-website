'use client';

import { useMemo, useState } from 'react';
import { productPricingContent } from '@/content/product-pricing';
import {
  type CompetitorKey,
  estimatePricing,
  formatUsd,
  PRICING_CONSTANTS,
} from '@/lib/pricing-calculator';

const COMPETITOR_LABELS: Record<CompetitorKey, string> = {
  slack: 'Slack Pro',
  teams: 'Microsoft Teams',
  trello: 'Trello Premium',
  jira: 'Jira Standard',
  typicalStack: 'Slack + Trello + add-ons',
};

export default function PricingCalculator() {
  const { calculator } = productPricingContent;
  const [users, setUsers] = useState(calculator.defaultUsers);

  const estimate = useMemo(() => estimatePricing(users), [users]);

  return (
    <section id="calculator" className="product-pricing-calculator">
      <div className="container">
        <div className="product-pricing-calculator-header">
          <span className="label">Cost calculator</span>
          <h2>{calculator.title}</h2>
          <p className="section-lead">{calculator.description}</p>
        </div>

        <div className="product-pricing-calculator-panel">
          <div className="product-pricing-calculator-controls">
            <div className="product-pricing-calculator-users">
              <label htmlFor="team-size">Team size</label>
              <div className="product-pricing-calculator-users-row">
                <input
                  id="team-size"
                  type="range"
                  min={calculator.minUsers}
                  max={calculator.maxUsers}
                  value={users}
                  onChange={(e) => setUsers(Number(e.target.value))}
                  aria-valuemin={calculator.minUsers}
                  aria-valuemax={calculator.maxUsers}
                  aria-valuenow={users}
                />
                <output className="product-pricing-calculator-output" htmlFor="team-size">
                  {users} {users === 1 ? 'user' : 'users'}
                </output>
              </div>
            </div>
            <fieldset className="product-pricing-presets">
              <legend className="sr-only">Team size presets</legend>
              {calculator.presets.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  className={`product-pricing-preset${users === preset ? ' is-active' : ''}`}
                  onClick={() => setUsers(preset)}
                >
                  {preset}
                </button>
              ))}
            </fieldset>
          </div>

          <div className="product-pricing-calculator-results">
            <article className="product-pricing-result-card product-pricing-result-card--primary">
              <span className="product-pricing-result-label">ZyncSpace Chat</span>
              <span className="product-pricing-result-plan">{estimate.planLabel}</span>
              <div className="product-pricing-result-price-row">
                <span className="product-pricing-result-price">
                  {formatUsd(estimate.zyncspaceMonthly)}
                </span>
                <span className="product-pricing-result-period">/month</span>
              </div>
              <p className="product-pricing-result-annual">
                {formatUsd(estimate.zyncspaceAnnual)} /year ·{' '}
                {users <= PRICING_CONSTANTS.freeTierMaxUsers
                  ? 'Free for teams up to 10'
                  : `$${PRICING_CONSTANTS.paidPerUserMonthly}/user on paid tier`}
              </p>
            </article>

            {(Object.keys(estimate.competitors) as CompetitorKey[]).map((key) => {
              const row = estimate.competitors[key];
              return (
                <article key={key} className="product-pricing-result-card">
                  <span className="product-pricing-result-label">{COMPETITOR_LABELS[key]}</span>
                  <div className="product-pricing-result-price-row">
                    <span className="product-pricing-result-price">{formatUsd(row.monthly)}</span>
                    <span className="product-pricing-result-period">/month</span>
                  </div>
                  <p className="product-pricing-result-savings">
                    Save {formatUsd(row.savingsMonthly)}/mo vs. this option
                  </p>
                </article>
              );
            })}
          </div>

          <div className="product-pricing-calculator-summary">
            <div className="product-pricing-summary-stat">
              <span className="product-pricing-summary-value">
                {estimate.savingsVsStackPercent}%
              </span>
              <span className="product-pricing-summary-label">
                less than a typical Slack + Trello stack
              </span>
            </div>
            <div className="product-pricing-summary-stat">
              <span className="product-pricing-summary-value">
                {formatUsd(estimate.competitors.typicalStack.savingsAnnual)}
              </span>
              <span className="product-pricing-summary-label">estimated annual savings</span>
            </div>
          </div>

          <p className="product-pricing-calculator-footnote">{calculator.footnote}</p>
        </div>
      </div>
    </section>
  );
}
