import CareersPageContent from '@/components/product/CareersPageContent';
import { careersContent } from '@/content/careers';
import { breadcrumbSchema, buildMetadata, JsonLd, webPageSchema } from '@/lib/metadata';
import { SITE_URL } from '@/lib/site-url';

const title = 'Careers';
const description =
  'Careers at ZyncSpace — join our team and help build the future of team collaboration. Remote internships in development, design, and growth.';
const path = '/careers';

export const metadata = buildMetadata({
  title,
  description,
  path,
  keywords:
    'ZyncSpace careers, jobs, team collaboration jobs, startup jobs, software development careers, React internship, remote jobs India',
});

export default function CareersPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Careers' }])} />
      <JsonLd data={webPageSchema({ title: `${title} - ZyncSpace`, description, path })} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': careersContent.jobs.map((job) => ({
            '@type': 'JobPosting',
            title: job.title,
            description: job.description,
            employmentType: 'INTERN',
            jobLocationType: 'TELECOMMUTE',
            hiringOrganization: {
              '@type': 'Organization',
              name: 'ZyncSpace',
              sameAs: SITE_URL,
            },
            applicantLocationRequirements: {
              '@type': 'Country',
              name: 'India',
            },
            url: `${SITE_URL}/careers#${job.id}`,
          })),
        }}
      />
      <CareersPageContent />
    </>
  );
}
