import type { MetadataRoute } from 'next';
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL, THEME_COLOR } from '@/lib/seo-config';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    start_url: '/',
    scope: '/',
    id: '/',
    display: 'standalone',
    orientation: 'portrait-primary',
    background_color: '#f3f2eb',
    theme_color: THEME_COLOR,
    lang: 'en-US',
    dir: 'ltr',
    categories: ['business', 'productivity', 'technology'],
    icons: [
      { src: '/assets/images/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { src: '/assets/images/favicon/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: '/assets/images/favicon/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
      { src: '/assets/images/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png', purpose: 'any' },
    ],
    related_applications: [],
    prefer_related_applications: false,
  };
}
