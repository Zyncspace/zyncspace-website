import { buildMetadata } from '@/lib/metadata';
import ServicePageHeader from '@/components/services/ServicePageHeader';
import { IndustriesSection } from '@/components/services/sections';
import { servicesContent as c } from '@/content/services';

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
    </>
  );
}
