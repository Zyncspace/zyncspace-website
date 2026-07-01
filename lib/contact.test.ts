import { describe, expect, it } from 'vitest';
import { contactFormSources, contactHref, resolveContactSubject } from '@/lib/contact';

describe('contactHref', () => {
  it('returns /contact with tracking params', () => {
    expect(
      contactHref({
        source: contactFormSources.pricingDemo,
        intent: 'demo',
        subject: 'sales',
      }),
    ).toBe('/contact?source=pricing-demo&intent=demo&subject=sales');
  });

  it('returns bare /contact when no options', () => {
    expect(contactHref()).toBe('/contact');
  });
});

describe('resolveContactSubject', () => {
  it('prefers explicit subject when valid', () => {
    expect(resolveContactSubject('billing', 'sales')).toBe('billing');
  });

  it('maps intent to default subject', () => {
    expect(resolveContactSubject(undefined, 'demo')).toBe('sales');
    expect(resolveContactSubject(undefined, 'consulting')).toBe('consulting');
  });

  it('ignores invalid subject values', () => {
    expect(resolveContactSubject('not-a-subject', 'waitlist')).toBe('sales');
  });
});
