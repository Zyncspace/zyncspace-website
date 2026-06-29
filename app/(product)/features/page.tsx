import FeaturesPageContent from '@/components/product/FeaturesPageContent';
import { JsonLd, breadcrumbSchema, buildMetadata, webPageSchema } from '@/lib/metadata';
import { SITE_URL } from '@/lib/site-url';

const title = 'Features';
const description =
  'ZyncSpace team chat features: real-time messaging, Kanban boards, AI assistant, video huddles, calendar sync, and enterprise security in one workspace.';
const path = '/features';

export const metadata = buildMetadata({
  title,
  description,
  path,
  keywords:
    'team chat features, kanban boards, calendar sync, AI assistant, task management, video huddles, enterprise security, file sharing, team collaboration, ZyncSpace',
  image: `${SITE_URL}/assets/images/platform-preview/platform-preview-team-chat.webp`,
});

export default function FeaturesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Features' },
        ])}
      />
      <JsonLd
        data={webPageSchema({
          title: `${title} - ZyncSpace`,
          description,
          path,
        })}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'ZyncSpace',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web, iOS, Android',
          description,
          url: `${SITE_URL}/features`,
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
            description: 'Free during beta',
          },
          featureList: [
            'Real-time team messaging with channels and threads',
            'Visual Kanban task boards',
            'Built-in AI rewrite and summarize',
            'Instant video huddles and calendar sync',
            'Enterprise security and role-based access',
          ],
        }}
      />
      <FeaturesPageContent />
    </>
  );
}
