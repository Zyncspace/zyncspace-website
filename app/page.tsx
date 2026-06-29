import HomePageContent from '@/components/services/HomePageContent';
import { faq } from '@/content/enterprise-sections';
import {
  buildMetadata,
  faqSchema,
  JsonLd,
  jsonLdGraph,
  professionalServiceSchema,
  webPageSchema,
} from '@/lib/metadata';

const HOME_TITLE = 'ZyncSpace | AI-Driven Technology Consulting & Team Workspace';
const HOME_DESCRIPTION =
  'ZyncSpace combines AI-driven technology consulting with a unified team workspace — chat, tasks, calendar, and AI in one platform.';

export const metadata = buildMetadata({
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  path: '/',
  keywords: 'technology consulting, AI, team workspace, SaaS, digital transformation',
});

export default function HomePage() {
  return (
    <>
      <link
        rel="preload"
        as="image"
        href="/assets/images/platform-preview/platform-preview-team-chat.webp"
        fetchPriority="high"
      />
      <JsonLd
        data={jsonLdGraph(
          webPageSchema({ title: HOME_TITLE, description: HOME_DESCRIPTION, path: '/' }),
          professionalServiceSchema(),
        )}
      />
      <JsonLd
        data={faqSchema(faq.items.map((i) => ({ question: i.question, answer: i.answer })))}
      />
      <HomePageContent />
    </>
  );
}
