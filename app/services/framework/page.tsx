import { buildMetadata } from '@/lib/metadata';
import ServicePageHeader from '@/components/services/ServicePageHeader';
import { FrameworkSection } from '@/components/services/sections';
import { servicesContent as c } from '@/content/services';

export const metadata = buildMetadata({
  title: 'Our Framework',
  description: c.framework.description,
  path: '/services/framework',
});

export default function FrameworkPage() {
  return (
    <>
      <ServicePageHeader
        label={c.framework.label}
        title={c.framework.title}
        description={c.framework.description}
      />
      <FrameworkSection embedded />
    </>
  );
}
