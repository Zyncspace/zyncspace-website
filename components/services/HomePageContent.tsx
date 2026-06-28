import {
  HeroSection,
  PartnersSection,
  CapabilitiesSection,
  CapabilityMatrixSection,
  FrameworkSection,
  TechStackSection,
  IndustriesSection,
  CaseStudySection,
  ConsultingPricingSection,
  InsightsSection,
  ProductShowcaseSection,
} from '@/components/services/sections';
import ContactSection from '@/components/services/ContactSection';

export default function HomePageContent() {
  return (
    <>
      <HeroSection />
      <PartnersSection />
      <CapabilitiesSection />
      <CapabilityMatrixSection />
      <FrameworkSection />
      <TechStackSection />
      <IndustriesSection />
      <CaseStudySection />
      <ConsultingPricingSection />
      <InsightsSection limit={3} />
      <ProductShowcaseSection />
      <ContactSection variant="partner" />
    </>
  );
}
