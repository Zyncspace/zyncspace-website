import { ServiceDetailJsonLd } from '@/components/seo/PageJsonLd';
import ServicePageExtended from '@/components/services/ServicePageExtended';
import ServicePageHeader from '@/components/services/ServicePageHeader';
import { FrameworkSection } from '@/components/services/sections';
import { servicePageExtended } from '@/content/service-pages';
import { servicesContent as c } from '@/content/services';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Our Framework',
  description: c.framework.description,
  path: '/services/framework',
});

export default function FrameworkPage() {
  return (
    <>
      <ServiceDetailJsonLd
        title={c.framework.title}
        description={c.framework.description}
        path="/services/framework"
        serviceType="Consulting Framework"
      />
      <ServicePageHeader
        label={c.framework.label}
        title={c.framework.title}
        description={c.framework.description}
      />
      <FrameworkSection embedded />
      <ServicePageExtended sections={servicePageExtended.framework} />
    </>
  );
}
