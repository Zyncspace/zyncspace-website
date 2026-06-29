import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  estimatePricing,
  estimateZyncspaceMonthly,
  formatUsd,
  PRICING_CONSTANTS,
} from '@/lib/pricing-calculator';

describe('estimateZyncspaceMonthly', () => {
  it('returns free for up to 10 users', () => {
    assert.deepEqual(estimateZyncspaceMonthly(1), { monthly: 0, planLabel: 'Free (beta)' });
    assert.deepEqual(estimateZyncspaceMonthly(10), { monthly: 0, planLabel: 'Free (beta)' });
  });

  it('charges $1/user above free tier', () => {
    assert.deepEqual(estimateZyncspaceMonthly(11), { monthly: 11, planLabel: 'Paid' });
    assert.deepEqual(estimateZyncspaceMonthly(25), { monthly: 25, planLabel: 'Paid' });
  });

  it('rounds to nearest user and floors invalid input at 1', () => {
    assert.deepEqual(estimateZyncspaceMonthly(0), { monthly: 0, planLabel: 'Free (beta)' });
    assert.deepEqual(estimateZyncspaceMonthly(10.4), { monthly: 0, planLabel: 'Free (beta)' });
    assert.deepEqual(estimateZyncspaceMonthly(10.6), { monthly: 11, planLabel: 'Paid' });
  });
});

describe('estimatePricing', () => {
  it('computes competitor savings vs ZyncSpace', () => {
    const est = estimatePricing(25);
    assert.equal(est.users, 25);
    assert.equal(est.zyncspaceMonthly, 25);
    assert.equal(est.competitors.slack.monthly, 25 * PRICING_CONSTANTS.competitors.slack);
    assert.equal(est.competitors.slack.savingsMonthly, est.competitors.slack.monthly - 25);
  });

  it('reports 100% savings vs stack when on free tier', () => {
    const est = estimatePricing(5);
    assert.equal(est.zyncspaceMonthly, 0);
    assert.equal(est.savingsVsStackPercent, 100);
  });
});

describe('formatUsd', () => {
  it('formats whole dollars', () => {
    assert.equal(formatUsd(0), '$0');
    assert.equal(formatUsd(1234), '$1,234');
  });
});
