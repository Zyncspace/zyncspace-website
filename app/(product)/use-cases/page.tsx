import UseCasesPageContent from '@/components/product/UseCasesPageContent';
import { breadcrumbSchema, buildMetadata, JsonLd, webPageSchema } from '@/lib/metadata';
import { SITE_URL } from '@/lib/site-url';

const title = 'Use Cases';
const description =
  'ZyncSpace use cases: perfect for startups, education, agencies, healthcare, and growing teams. See how different industries benefit from ZyncSpace Chat.';
const path = '/use-cases';

export const metadata = buildMetadata({
  title,
  description,
  path,
  keywords:
    'team collaboration use cases, startup collaboration, education platform, agency client communication, healthcare messaging, real estate team coordination, ZyncSpace',
  image: `${SITE_URL}/assets/images/platform-preview/platform-preview-team-chat.webp`,
});

export default function UseCasesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Use Cases' }])} />
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
          '@type': 'WebPage',
          name: 'ZyncSpace Use Cases',
          description,
          url: `${SITE_URL}/use-cases`,
          mainEntity: {
            '@type': 'ItemList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Startups',
                description: 'Move fast with real-time collaboration and built-in AI',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Education',
                description: 'Structured lesson plans and student collaboration',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Agencies',
                description: 'Client communication and project tracking',
              },
            ],
          },
        }}
      />
      <UseCasesPageContent />
    </>
  );
}
