import path from 'node:path';

const SAFE_FILENAME = /^[\w.-]+$/;
const SAFE_SLUG = /^[a-z0-9][a-z0-9-]*$/;

export function assertSafeFilename(name, label = 'filename') {
  if (!SAFE_FILENAME.test(name)) {
    throw new Error(`Invalid ${label}: ${name}`);
  }
  return name;
}

export function assertSafeSlug(slug, label = 'slug') {
  if (!SAFE_SLUG.test(slug)) {
    throw new Error(`Invalid ${label}: ${slug}`);
  }
  return slug;
}

export function safeJoin(baseDir, ...segments) {
  const resolvedBase = path.resolve(baseDir);
  const resolved = path.resolve(resolvedBase, ...segments);
  if (resolved !== resolvedBase && !resolved.startsWith(`${resolvedBase}${path.sep}`)) {
    throw new Error(`Path escapes base directory: ${segments.join('/')}`);
  }
  return resolved;
}
