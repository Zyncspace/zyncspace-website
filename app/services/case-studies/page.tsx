import { buildMetadata } from '@/lib/metadata';
import ServicePageHeader from '@/components/services/ServicePageHeader';
import { CaseStudySection } from '@/components/services/sections';
import { servicesContent as c } from '@/content/services';

export const metadata = buildMetadata({
  title: 'Case Studies',
  description: c.caseStudy.challenge.description,
  path: '/services/case-studies',
});

export default function CaseStudiesPage() {
  return (
    <>
      <ServicePageHeader
        label={c.caseStudy.label}
        title="Client Case Studies"
        description="Proven outcomes from our consulting and engineering engagements."
      />
      <CaseStudySection />
    </>
  );
}
