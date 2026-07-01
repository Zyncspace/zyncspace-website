#!/usr/bin/env node
/**
 * Post-build SEO audit for static export in out/
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { getSiteUrl } from './site-url.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const outDir = path.join(root, 'out');
const SITE_URL = getSiteUrl();
const SITE_HOST = new URL(SITE_URL).host;
const errors = [];
const warnings = [];

const STATIC_PATHS = [
  '/',
  '/services',
  '/services/framework',
  '/services/technology',
  '/services/industries',
  '/services/case-studies',
  '/features',
  '/use-cases',
  '/pricing',
  '/about',
  '/careers',
  '/trust-center',
  '/contact',
  '/privacy-policy',
  '/terms-of-service',
  '/blogs',
];

function htmlPathForRoute(routePath) {
  if (routePath === '/') return path.join(outDir, 'index.html');
  const segments = routePath.replace(/^\//, '').split('/');
  const fileName = `${segments.pop()}.html`;
  return path.join(outDir, ...segments, fileName);
}

function walkHtml(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && !entry.name.startsWith('_next')) walkHtml(full, files);
    else if (entry.name.endsWith('.html')) files.push(full);
  }
  return files;
}

function checkGlobalFile(relativePath, label) {
  const full = path.join(outDir, relativePath);
  if (!fs.existsSync(full)) errors.push(`Missing ${label}: out/${relativePath}`);
}

function extractSitemapUrls(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

function checkHtml(file) {
  const rel = path.relative(outDir, file);
  const is404 = rel === '404.html';
  const html = fs.readFileSync(file, 'utf8');

  if (!/<html[^>]*\slang=["']en["']/i.test(html)) {
    errors.push(`${rel}: missing lang="en" on <html>`);
  }

  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  if (!titleMatch?.[1]?.trim()) errors.push(`${rel}: missing or empty <title>`);

  if (!/<meta[^>]+name=["']description["'][^>]+content=["'][^"']+["']/i.test(html)) {
    errors.push(`${rel}: missing meta description`);
  }

  const canonicalMatch = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i);
  if (canonicalMatch) {
    if (!canonicalMatch[1].includes(SITE_HOST)) {
      errors.push(
        `${rel}: canonical points to wrong host (expected ${SITE_HOST}, got ${canonicalMatch[1]})`,
      );
    }
  } else if (!/<meta[^>]+property=["']og:url["']/i.test(html)) {
    errors.push(`${rel}: missing canonical or og:url`);
  }

  if (!/<meta[^>]+property=["']og:title["']/i.test(html)) errors.push(`${rel}: missing og:title`);
  if (!/<meta[^>]+property=["']og:description["']/i.test(html))
    errors.push(`${rel}: missing og:description`);
  if (!/<meta[^>]+property=["']og:image["']/i.test(html)) errors.push(`${rel}: missing og:image`);

  if (!/<meta[^>]+name=["']twitter:card["']/i.test(html)) {
    errors.push(`${rel}: missing twitter:card`);
  }

  if (!/<meta[^>]+name=["']viewport["']/i.test(html)) {
    errors.push(`${rel}: missing viewport meta`);
  }

  if (!/<script[^>]+type=["']application\/ld\+json["']/i.test(html)) {
    errors.push(`${rel}: missing JSON-LD structured data`);
  }

  if (is404) {
    if (!/noindex/i.test(html)) warnings.push(`${rel}: expected noindex for 404 page`);
  }

  const h1Count = (html.match(/<h1[\s>]/gi) || []).length;
  if (h1Count === 0) errors.push(`${rel}: no h1`);
  if (h1Count > 1) errors.push(`${rel}: multiple h1 (${h1Count})`);

  const imgs = html.match(/<img[^>]*>/gi) || [];
  for (const img of imgs) {
    if (!/alt=["'][^"']+["']/i.test(img)) errors.push(`${rel}: img missing meaningful alt`);
  }
}

function checkSitemapCoverage() {
  const sitemapPath = path.join(outDir, 'sitemap.xml');
  if (!fs.existsSync(sitemapPath)) return;
  const xml = fs.readFileSync(sitemapPath, 'utf8');
  if (!xml.includes(SITE_URL)) {
    errors.push(`sitemap.xml: does not contain SITE_URL ${SITE_URL}`);
  }
  const urls = extractSitemapUrls(xml);
  const urlPaths = new Set(urls.map((u) => new URL(u).pathname.replace(/\/$/, '') || '/'));

  for (const route of STATIC_PATHS) {
    const normalized = route === '/' ? '/' : route.replace(/\/$/, '');
    if (!urlPaths.has(normalized)) {
      errors.push(`sitemap.xml: missing route ${route}`);
    }
  }
}

function checkRobotsTxt() {
  const robotsPath = path.join(outDir, 'robots.txt');
  if (!fs.existsSync(robotsPath)) return;
  const txt = fs.readFileSync(robotsPath, 'utf8');
  if (!txt.includes(SITE_URL)) errors.push(`robots.txt: missing Sitemap/Host for ${SITE_URL}`);
}

function checkLlmsTxt() {
  const llmsPath = path.join(outDir, 'llms.txt');
  if (!fs.existsSync(llmsPath)) return;
  const txt = fs.readFileSync(llmsPath, 'utf8');
  if (!txt.includes(SITE_URL)) errors.push(`llms.txt: URLs do not match SITE_URL ${SITE_URL}`);
}

function checkStaticRoutesExist() {
  for (const route of STATIC_PATHS) {
    const file = htmlPathForRoute(route);
    if (!fs.existsSync(file)) {
      errors.push(`Missing exported page for ${route} (expected ${path.relative(outDir, file)})`);
    }
  }
}

if (!fs.existsSync(outDir)) {
  console.error(
    `SEO audit failed: out/ not found - run npm run build first (SITE_URL=${SITE_URL})`,
  );
  process.exit(1);
}

console.log(`SEO audit for ${SITE_URL}...`);

checkGlobalFile('sitemap.xml', 'sitemap');
checkGlobalFile('robots.txt', 'robots.txt');
checkGlobalFile('feed.xml', 'RSS feed');
checkGlobalFile('llms.txt', 'llms.txt');
checkGlobalFile('manifest.webmanifest', 'web manifest');

checkStaticRoutesExist();
checkSitemapCoverage();
checkRobotsTxt();
checkLlmsTxt();

for (const file of walkHtml(outDir)) {
  checkHtml(file);
}

if (warnings.length) {
  console.warn(`SEO audit warnings:\n${warnings.join('\n')}`);
}

if (errors.length) {
  console.error(`SEO audit failed:\n${errors.slice(0, 80).join('\n')}`);
  if (errors.length > 80) console.error(`... and ${errors.length - 80} more`);
  process.exit(1);
}

console.log(`SEO audit passed (${walkHtml(outDir).length} HTML files)`);
