import { ServiceDetailJsonLd } from '@/components/seo/PageJsonLd';
import ServicePageHeader, { ServiceBreadcrumb } from '@/components/services/ServicePageHeader';
import TechStackSection, { TechStackPageCta } from '@/components/services/TechStackSection';
import { servicesContent as c } from '@/content/services';
import { serviceRoutes } from '@/content/site';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Technology Stack',
  description: c.techStack.description,
  path: '/services/technology',
});

export default function TechnologyPage() {
  return (
    <>
      <ServiceDetailJsonLd
        title={c.techStack.title}
        description={c.techStack.description}
        path="/services/technology"
        serviceType="Technology Stack & Engineering"
      />
      <ServicePageHeader
        label={c.techStack.label}
        title={c.techStack.title}
        description={c.techStack.description}
      >
        <ServiceBreadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: serviceRoutes.services },
            { label: 'Technology Stack' },
          ]}
        />
      </ServicePageHeader>
      <TechStackSection variant="full" embedded />
      <TechStackPageCta />
    </>
  );
}
