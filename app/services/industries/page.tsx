import { ServiceDetailJsonLd } from '@/components/seo/PageJsonLd';
import ServicePageExtended from '@/components/services/ServicePageExtended';
import ServicePageHeader from '@/components/services/ServicePageHeader';
import { IndustriesSection } from '@/components/services/sections';
import { servicePageExtended } from '@/content/service-pages';
import { servicesContent as c } from '@/content/services';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Industries',
  description: c.industries.description,
  path: '/services/industries',
});

export default function IndustriesPage() {
  const pageTitle = `${c.industries.title[0]} ${c.industries.title[1]}`;

  return (
    <>
      <ServiceDetailJsonLd
        title={pageTitle}
        description={c.industries.description}
        path="/services/industries"
        serviceType="Industry Solutions"
      />
      <ServicePageHeader
        label={c.industries.label}
        title={pageTitle}
        description={c.industries.description}
      />
      <IndustriesSection embedded />
      <ServicePageExtended sections={servicePageExtended.industries} />
    </>
  );
}
