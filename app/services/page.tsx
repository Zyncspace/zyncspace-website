import { buildMetadata } from '@/lib/metadata';
import ServicePageHeader from '@/components/services/ServicePageHeader';
import { CapabilitiesSection, CapabilityMatrixSection } from '@/components/services/sections';
import { servicesContent as c } from '@/content/services';

export const metadata = buildMetadata({
  title: 'Services',
  description: c.capabilities.description,
  path: '/services',
  keywords: 'technology consulting, AI automation, cloud engineering, UX design',
});

export default function ServicesPage() {
  return (
    <>
      <ServicePageHeader
        label={c.capabilities.label}
        title={c.capabilities.title}
        description={c.capabilities.description}
      />
      <CapabilitiesSection embedded />
      <CapabilityMatrixSection />
    </>
  );
}
