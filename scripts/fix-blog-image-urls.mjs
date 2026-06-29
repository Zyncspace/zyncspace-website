/**
 * Replace any remaining Unsplash / external image URLs in blog MDX with local assets.
 */
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const BLOG_DIR = join(process.cwd(), 'content/blog');

const PHOTO_TO_FILE = {
  'photo-1573164713988-8665fc963095': 'inclusive-team.webp',
  'photo-1552664730-d307ca884978': 'team-planning.webp',
  'photo-1560439514-4e9645039924': 'non-verbal-gestures.webp',
  'photo-1504711434969-e33886168f5c': 'crisis-news.webp',
  'photo-1529156069898-49953e39b3ac': 'team-trust.webp',
  'photo-1522202176988-66273c2fd55f': 'diverse-team.webp',
  'photo-1573497019940-1c28c88b4f3e': 'professional-woman.webp',
  'photo-1531482615713-2afd69097998': 'team-workshop.webp',
  'photo-1517842645767-c639042777db': 'laptop-writing.webp',
  'photo-1475721027785-f74eccf877e2': 'presentation-audience.webp',
  'photo-1596526131083-e8c633c948d2': 'email-mobile.webp',
  'photo-1516321318423-f06f85e504b3': 'workplace-tech.webp',
  'photo-1600880292089-90a7e086ee0c': 'professional-discussion.webp',
  'photo-1497366216548-37526070297c': 'empty-meeting-room.webp',
  'photo-1553877522-43269d4ea984': 'performance-review.webp',
  'photo-1551288049-bebda4e38f71': 'analytics-dashboard.webp',
  'photo-1551434678-e076c223a692': 'developers-office.webp',
  'photo-1587560699334-cc4ff634909a': 'remote-work.webp',
  'photo-1559136555-9303baea8ebd': 'startup-collaboration.webp',
  'photo-1531415074968-036ba1b575da': 'active-listening.webp',
  'photo-1486312338219-ce68d2c6f44d': 'laptop-coffee.webp',
  'photo-1677442136019-21780ecad995': 'ai-technology.webp',
  'photo-1542744173-8e7e53415bb0': 'office-meeting.webp',
  'photo-1460925895917-afdab827c52f': 'laptop-analytics.webp',
  'photo-1556742049-0cfed4f6a45d': 'payment-retail.webp',
  'photo-1579684385127-1ef15d508118': 'healthcare-team.webp',
  'photo-1576091160399-112ba8d25d1d': 'healthcare-edtech.webp',
};

function localFromUrl(url) {
  if (!url || url.startsWith('/assets/')) return url;
  if (url.includes('hero-dashboard')) return '/assets/images/hero-dashboard.png';
  const photo = Object.keys(PHOTO_TO_FILE).find((id) => url.includes(id));
  if (photo) return `/assets/images/stock/${PHOTO_TO_FILE[photo]}`;
  return url;
}

async function main() {
  const files = (await readdir(BLOG_DIR)).filter((f) => f.endsWith('.mdx'));
  for (const file of files) {
    const path = join(BLOG_DIR, file);
    let text = await readFile(path, 'utf8');
    const original = text;
    text = text.replace(/https:\/\/images\.unsplash\.com\/[^"'\s)]+/g, (url) => localFromUrl(url));
    text = text.replace(
      /ogImage: '[^']*hero-dashboard[^']*'/g,
      "ogImage: '/assets/images/hero-dashboard.png'",
    );
    text = text.replace(
      /thumbnail: '[^']*hero-dashboard[^']*'/g,
      "thumbnail: '/assets/images/hero-dashboard.png'",
    );
    text = text.replace(
      /ogImage: '\/assets\/images\/stock\/hero-dashboard\.png'/g,
      "ogImage: '/assets/images/hero-dashboard.png'",
    );
    text = text.replace(
      /thumbnail: '\/assets\/images\/stock\/hero-dashboard\.png'/g,
      "thumbnail: '/assets/images/hero-dashboard.png'",
    );
    if (text !== original) {
      await writeFile(path, text);
      console.log('fixed', file);
    }
  }
}

main();
