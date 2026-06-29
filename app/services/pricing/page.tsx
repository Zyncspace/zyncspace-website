import { ServiceDetailJsonLd } from '@/components/seo/PageJsonLd';
import ServicePageExtended from '@/components/services/ServicePageExtended';
import ServicePageHeader from '@/components/services/ServicePageHeader';
import { ConsultingPricingSection } from '@/components/services/sections';
import { servicePageExtended } from '@/content/service-pages';
import { servicesContent as c } from '@/content/services';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Consulting Pricing',
  description: c.consultingPricing.description,
  path: '/services/pricing',
});

export default function ConsultingPricingPage() {
  return (
    <>
      <ServiceDetailJsonLd
        title={c.consultingPricing.title}
        description={c.consultingPricing.description}
        path="/services/pricing"
        serviceType="Consulting Pricing"
      />
      <ServicePageHeader
        label={c.consultingPricing.label}
        title={c.consultingPricing.title}
        description={c.consultingPricing.description}
      />
      <ConsultingPricingSection embedded />
      <ServicePageExtended sections={servicePageExtended.pricing} />
    </>
  );
}
