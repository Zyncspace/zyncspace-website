import { ServiceHubJsonLd } from '@/components/seo/PageJsonLd';
import ServicePageHeader from '@/components/services/ServicePageHeader';
import ServicesPageContent from '@/components/services/ServicesPageContent';
import { servicesContent as c } from '@/content/services';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Services',
  description: c.capabilities.description,
  path: '/services',
  keywords: 'technology consulting, AI automation, cloud engineering, UX design',
});

export default function ServicesPage() {
  return (
    <>
      <ServiceHubJsonLd title="Services" description={c.capabilities.description} />
      <ServicePageHeader
        label={c.capabilities.label}
        title={c.capabilities.title}
        description={c.capabilities.description}
      />
      <ServicesPageContent />
    </>
  );
}
