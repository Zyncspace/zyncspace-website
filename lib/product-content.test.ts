import { describe, expect, it } from 'vitest';
import { productPricingContent } from '@/content/product-pricing';
import { trustCenterContent } from '@/content/trust-center';

describe('productPricingContent', () => {
  it('defines chat product tiers with apply links', () => {
    expect(productPricingContent.hero.label).toMatch(/Chat/i);
    expect(productPricingContent.tiers).toHaveLength(2);
    expect(productPricingContent.tiers[0].priceValue).toBe('0');
    expect(productPricingContent.productNotice.consultingHref).toBe('/services/pricing');
  });

  it('includes calculator config for team sizes', () => {
    expect(productPricingContent.calculator.minUsers).toBeGreaterThan(0);
    expect(productPricingContent.calculator.presets.length).toBeGreaterThan(0);
  });
});

describe('trustCenterContent', () => {
  it('lists baseline and feature-specific security controls', () => {
    const categories = trustCenterContent.controls.map((c) => c.category);
    expect(categories).toContain('Baseline');
    expect(categories).toContain('Feature-Specific');
    expect(trustCenterContent.controls.length).toBeGreaterThanOrEqual(5);
  });

  it('documents encryption and zero-training policies', () => {
    const policies = trustCenterContent.controls.map((c) => c.securityPolicy);
    expect(policies.some((p) => /Encryption/i.test(p))).toBe(true);
    expect(policies.some((p) => /Zero Data Training/i.test(p))).toBe(true);
  });
});
