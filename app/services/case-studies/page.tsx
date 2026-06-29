import { ServiceDetailJsonLd } from '@/components/seo/PageJsonLd';
import ServicePageExtended from '@/components/services/ServicePageExtended';
import ServicePageHeader from '@/components/services/ServicePageHeader';
import { CaseStudySection } from '@/components/services/sections';
import { servicePageExtended } from '@/content/service-pages';
import { servicesContent as c } from '@/content/services';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Case Studies',
  description: c.caseStudy.challenge.description,
  path: '/services/case-studies',
});

export default function CaseStudiesPage() {
  const pageTitle = 'Client Case Studies';
  const pageDescription = 'Proven outcomes from our consulting and engineering engagements.';

  return (
    <>
      <ServiceDetailJsonLd
        title={pageTitle}
        description={pageDescription}
        path="/services/case-studies"
        serviceType="Case Studies"
      />
      <ServicePageHeader
        label={c.caseStudy.label}
        title={pageTitle}
        description={pageDescription}
      />
      <CaseStudySection />
      <ServicePageExtended sections={servicePageExtended.caseStudies} />
    </>
  );
}
