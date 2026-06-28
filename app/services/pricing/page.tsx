import { buildMetadata } from '@/lib/metadata';
import ServicePageHeader from '@/components/services/ServicePageHeader';
import { ConsultingPricingSection } from '@/components/services/sections';
import { servicesContent as c } from '@/content/services';

export const metadata = buildMetadata({
  title: 'Consulting Pricing',
  description: c.consultingPricing.description,
  path: '/services/pricing',
});

export default function ConsultingPricingPage() {
  return (
    <>
      <ServicePageHeader
        label={c.consultingPricing.label}
        title={c.consultingPricing.title}
        description={c.consultingPricing.description}
      />
      <ConsultingPricingSection embedded />
    </>
  );
}
