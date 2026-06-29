import { describe, expect, it } from 'vitest';
import {
  estimatePricing,
  estimateZyncspaceMonthly,
  formatUsd,
  PRICING_CONSTANTS,
} from '@/lib/pricing-calculator';

describe('estimateZyncspaceMonthly', () => {
  it('returns free for up to 10 users', () => {
    expect(estimateZyncspaceMonthly(1)).toEqual({ monthly: 0, planLabel: 'Free (beta)' });
    expect(estimateZyncspaceMonthly(10)).toEqual({ monthly: 0, planLabel: 'Free (beta)' });
  });

  it('charges $1/user above free tier', () => {
    expect(estimateZyncspaceMonthly(11)).toEqual({ monthly: 11, planLabel: 'Paid' });
    expect(estimateZyncspaceMonthly(25)).toEqual({ monthly: 25, planLabel: 'Paid' });
  });

  it('rounds to nearest user and floors invalid input at 1', () => {
    expect(estimateZyncspaceMonthly(0)).toEqual({ monthly: 0, planLabel: 'Free (beta)' });
    expect(estimateZyncspaceMonthly(10.4)).toEqual({ monthly: 0, planLabel: 'Free (beta)' });
    expect(estimateZyncspaceMonthly(10.6)).toEqual({ monthly: 11, planLabel: 'Paid' });
  });
});

describe('estimatePricing', () => {
  it('computes competitor savings vs ZyncSpace', () => {
    const est = estimatePricing(25);
    expect(est.users).toBe(25);
    expect(est.zyncspaceMonthly).toBe(25);
    expect(est.competitors.slack.monthly).toBe(25 * PRICING_CONSTANTS.competitors.slack);
    expect(est.competitors.slack.savingsMonthly).toBe(est.competitors.slack.monthly - 25);
  });

  it('reports 100% savings vs stack when on free tier', () => {
    const est = estimatePricing(5);
    expect(est.zyncspaceMonthly).toBe(0);
    expect(est.savingsVsStackPercent).toBe(100);
  });
});

describe('formatUsd', () => {
  it('formats whole dollars', () => {
    expect(formatUsd(0)).toBe('$0');
    expect(formatUsd(1234)).toBe('$1,234');
  });
});
