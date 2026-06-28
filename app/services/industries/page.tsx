import { buildMetadata } from '@/lib/metadata';
import ServicePageHeader from '@/components/services/ServicePageHeader';
import ServicePageExtended from '@/components/services/ServicePageExtended';
import { IndustriesSection } from '@/components/services/sections';
import { servicesContent as c } from '@/content/services';
import { servicePageExtended } from '@/content/service-pages';

export const metadata = buildMetadata({
  title: 'Industries',
  description: c.industries.description,
  path: '/services/industries',
});

export default function IndustriesPage() {
  return (
    <>
      <ServicePageHeader
        label={c.industries.label}
        title={`${c.industries.title[0]} ${c.industries.title[1]}`}
        description={c.industries.description}
      />
      <IndustriesSection embedded />
      <ServicePageExtended sections={servicePageExtended.industries} />
    </>
  );
}
