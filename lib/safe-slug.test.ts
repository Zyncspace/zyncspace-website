import { describe, expect, it } from 'vitest';
import { assertSafeSlug } from '@/lib/safe-slug';

describe('assertSafeSlug', () => {
  it('accepts valid slugs', () => {
    expect(assertSafeSlug('pricing')).toBe('pricing');
    expect(assertSafeSlug('trust-center')).toBe('trust-center');
    expect(assertSafeSlug('blogs')).toBe('blogs');
  });

  it('rejects path traversal and invalid characters', () => {
    expect(() => assertSafeSlug('../etc/passwd')).toThrow(/Invalid/);
    expect(() => assertSafeSlug('foo/bar')).toThrow(/Invalid/);
    expect(() => assertSafeSlug('UPPER')).toThrow(/Invalid/);
    expect(() => assertSafeSlug('')).toThrow(/Invalid/);
  });
});
