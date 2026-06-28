import { buildMetadata, JsonLd } from '@/lib/metadata';
import HomePageContent from '@/components/services/HomePageContent';

export const metadata = buildMetadata({
  title: 'ZyncSpace | AI-Driven Technology Consulting & Team Workspace',
  description:
    'ZyncSpace combines AI-driven technology consulting with a unified team workspace — chat, tasks, calendar, and AI in one platform.',
  path: '/',
  keywords: 'technology consulting, AI, team workspace, SaaS, digital transformation',
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'ZyncSpace — AI-Driven Technology Consulting',
          url: 'https://zyncspace.com/',
          description:
            'ZyncSpace combines AI-driven technology consulting with a unified team workspace — chat, tasks, calendar, and AI in one platform.',
        }}
      />
      <HomePageContent />
    </>
  );
}
