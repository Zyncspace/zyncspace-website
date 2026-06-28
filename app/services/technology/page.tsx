import { buildMetadata } from '@/lib/metadata';
import ServicePageHeader from '@/components/services/ServicePageHeader';
import ServicePageExtended from '@/components/services/ServicePageExtended';
import { TechStackSection } from '@/components/services/sections';
import { servicesContent as c } from '@/content/services';
import { servicePageExtended } from '@/content/service-pages';

export const metadata = buildMetadata({
  title: 'Technology Stack',
  description: c.techStack.description,
  path: '/services/technology',
});

export default function TechnologyPage() {
  return (
    <>
      <ServicePageHeader
        label={c.techStack.label}
        title={c.techStack.title}
        description={c.techStack.description}
      />
      <TechStackSection embedded />
      <ServicePageExtended sections={servicePageExtended.technology} />
    </>
  );
}
