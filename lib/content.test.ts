import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { getAllBlogRoutes, getBlogAliasRedirects } from '@/lib/content';

describe('blog routes', () => {
  it('lists canonical slugs only in static routes', () => {
    const routes = getAllBlogRoutes();
    const redirects = getBlogAliasRedirects();
    const aliasSet = new Set(redirects.map((entry) => entry.alias));

    expect(routes).toContain('why-we-built-zyncspace');
    expect(routes).not.toContain(
      'the-best-free-slack-alternative-for-training-teams-in-2025-and-why-we-built-zyncspace-copy',
    );

    for (const route of routes) {
      expect(aliasSet.has(route)).toBe(false);
    }
  });

  it('maps legacy copy slug to canonical blog post', () => {
    const redirects = getBlogAliasRedirects();
    const legacy = redirects.find(
      (entry) =>
        entry.alias ===
        'the-best-free-slack-alternative-for-training-teams-in-2025-and-why-we-built-zyncspace-copy',
    );
    expect(legacy?.canonical).toBe('why-we-built-zyncspace');
  });

  it('maps legacy title slug to canonical blog post', () => {
    const redirects = getBlogAliasRedirects();
    const legacy = redirects.find(
      (entry) =>
        entry.alias ===
        'why-we-built-zyncspace-a-smarter-communication-tool-for-training-teams-copy',
    );
    expect(legacy?.canonical).toBe('why-we-built-zyncspace');
  });

  it('has one MDX file per canonical slug', () => {
    const blogDir = path.join(process.cwd(), 'content/blog');
    const files = fs.readdirSync(blogDir).filter((file) => file.endsWith('.mdx'));
    expect(getAllBlogRoutes()).toHaveLength(files.length);
  });
});
