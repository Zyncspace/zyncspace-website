#!/usr/bin/env node
/**
 * Post-export SEO files: RSS feed + llms.txt with correct SITE_URL
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { escapeXml, getBlogPosts } from './blog-posts.mjs';
import { getSiteUrl } from './site-url.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'out');
const SITE_URL = getSiteUrl();

function generateRss(posts) {
  const items = posts
    .map(
      (p) => `<item>
  <title>${escapeXml(p.title)}</title>
  <link>${SITE_URL}/blogs/${p.slug}</link>
  <guid isPermaLink="true">${SITE_URL}/blogs/${p.slug}</guid>
  <description>${escapeXml(p.description)}</description>
  <pubDate>${new Date(p.date).toUTCString()}</pubDate>
</item>`,
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>ZyncSpace Blog</title>
  <link>${SITE_URL}/blogs</link>
  <description>Insights on AI consulting, software engineering, workplace collaboration, and team productivity.</description>
  <language>en-us</language>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
  <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
</channel>
</rss>`;
}

const STATIC_PAGES = [
  {
    path: '/',
    name: 'Home',
    desc: 'AI consulting, software engineering, capabilities, framework, tech stack, and product showcase.',
  },
  {
    path: '/services',
    name: 'Consulting Services',
    desc: 'Technology consulting - AI automation, cloud engineering, UX, custom SaaS.',
  },
  {
    path: '/services/framework',
    name: 'Our Framework',
    desc: 'Consulting delivery framework and methodology.',
  },
  {
    path: '/services/technology',
    name: 'Technology Stack',
    desc: 'Software engineering toolchain and cloud platform standards.',
  },
  {
    path: '/services/industries',
    name: 'Industries',
    desc: 'Industry-specific consulting and platform solutions.',
  },
  {
    path: '/services/case-studies',
    name: 'Case Studies',
    desc: 'Client outcomes from consulting and engineering engagements.',
  },
  { path: '/features', name: 'Features', desc: 'Team workspace - chat, tasks, calendar, and AI.' },
  { path: '/use-cases', name: 'Use Cases', desc: 'How teams use ZyncSpace for collaboration.' },
  { path: '/pricing', name: 'Pricing', desc: 'Product pricing plans.' },
  { path: '/about', name: 'About', desc: 'Mission, team, and company story.' },
  { path: '/careers', name: 'Careers', desc: 'Open roles and culture.' },
  {
    path: '/trust-center',
    name: 'Trust Center',
    desc: 'Security, privacy, and compliance posture.',
  },
  { path: '/contact', name: 'Contact', desc: 'Consulting, support, and partnership inquiries.' },
  {
    path: '/blogs',
    name: 'Blog',
    desc: 'Articles on AI, software engineering, communication, and productivity.',
  },
  {
    path: '/privacy-policy',
    name: 'Privacy Policy',
    desc: 'Data collection and privacy practices.',
  },
  { path: '/terms-of-service', name: 'Terms of Service', desc: 'Terms and conditions.' },
];

function generateLlms(posts) {
  const pageSection = STATIC_PAGES.map(
    (p) => `### ${p.name}
- URL: ${SITE_URL}${p.path === '/' ? '/' : p.path}
- Description: ${p.desc}`,
  ).join('\n\n');

  const blogSection = posts
    .slice(0, 30)
    .map(
      (p) => `- ${p.title}
  - URL: ${SITE_URL}/blogs/${p.slug}
  - Description: ${p.description}`,
    )
    .join('\n');

  return `# ZyncSpace Website Documentation

> AI-driven technology consulting and unified team workspace platform.

## Overview
ZyncSpace combines AI-driven technology consulting with a unified team workspace - chat, tasks, calendar, and AI in one platform.

## Main Pages

${pageSection}

## Blog Posts

${blogSection}

## Machine-Readable Feeds
- Sitemap: ${SITE_URL}/sitemap.xml
- RSS Feed: ${SITE_URL}/feed.xml
- Robots: ${SITE_URL}/robots.txt

## Contact
- Website: ${SITE_URL}
- Consulting: support@zyncspace.com
- Support: support@zyncspace.com

## Last Updated
${new Date().toISOString().slice(0, 10)}
`;
}

function patchSitemapUrls() {
  const sitemapPath = path.join(OUT, 'sitemap.xml');
  if (!fs.existsSync(sitemapPath)) return;
  let xml = fs.readFileSync(sitemapPath, 'utf8');
  // Replace any hardcoded production URLs if build used wrong env
  xml = xml.replace(/https:\/\/zyncspace\.com/g, SITE_URL);
  xml = xml.replace(/https:\/\/www\.zyncspace\.com/g, SITE_URL);
  xml = xml.replace(/https:\/\/zyncspace\.in/g, SITE_URL);
  xml = xml.replace(/https:\/\/www\.zyncspace\.in/g, SITE_URL);
  fs.writeFileSync(sitemapPath, xml);
}

function patchRobotsTxt() {
  const robotsPath = path.join(OUT, 'robots.txt');
  if (!fs.existsSync(robotsPath)) return;
  let txt = fs.readFileSync(robotsPath, 'utf8');
  txt = txt.replace(/^Host:.*$/m, `Host: ${SITE_URL}`);
  txt = txt.replace(/^Sitemap:.*$/m, `Sitemap: ${SITE_URL}/sitemap.xml`);
  fs.writeFileSync(robotsPath, txt);
}

if (!fs.existsSync(OUT)) {
  console.error('out/ not found - run next build first');
  process.exit(1);
}

const posts = getBlogPosts(ROOT);
fs.writeFileSync(path.join(OUT, 'feed.xml'), generateRss(posts));
fs.writeFileSync(path.join(OUT, 'llms.txt'), generateLlms(posts));
// Also sync to public/ for local dev reference
fs.writeFileSync(path.join(ROOT, 'public/llms.txt'), generateLlms(posts));

patchSitemapUrls();
patchRobotsTxt();

console.log(`Generated SEO files for ${SITE_URL} (${posts.length} blog posts)`);
