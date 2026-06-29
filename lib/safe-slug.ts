/** Validate URL/path slugs — blocks traversal via ../ or absolute paths */
const SLUG_PATTERN = /^[a-z0-9][a-z0-9-]*$/;

export function assertSafeSlug(slug: string, label = 'slug'): string {
  if (!SLUG_PATTERN.test(slug)) {
    throw new Error(`Invalid ${label}: ${slug}`);
  }
  return slug;
}
