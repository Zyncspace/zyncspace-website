import { buildMetadata, JsonLd, jsonLdGraph, professionalServiceSchema, webPageSchema } from '@/lib/metadata';
import HomePageContent from '@/components/services/HomePageContent';

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
      <JsonLd
        data={jsonLdGraph(
          webPageSchema({ title: HOME_TITLE, description: HOME_DESCRIPTION, path: '/' }),
          professionalServiceSchema()
        )}
      />
      <HomePageContent />
    </>
  );
}
