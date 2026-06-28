import { buildMetadata } from '@/lib/metadata';
import { ServiceHubJsonLd } from '@/components/seo/PageJsonLd';
import ServicePageHeader from '@/components/services/ServicePageHeader';
import ServicePageExtended from '@/components/services/ServicePageExtended';
import { CapabilitiesSection, CapabilityMatrixSection } from '@/components/services/sections';
import { servicesContent as c } from '@/content/services';
import { servicePageExtended } from '@/content/service-pages';

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
      <CapabilitiesSection embedded />
      <CapabilityMatrixSection />
      <ServicePageExtended sections={servicePageExtended.services} />
    </>
  );
}
