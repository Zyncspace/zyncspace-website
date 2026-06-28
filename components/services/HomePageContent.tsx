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
  ServicesCtaBand,
} from '@/components/services/sections';
import {
  ValuePropositionSection,
  MediaShowcaseSection,
  CustomerJourneySection,
  PortfolioSection,
  TestimonialsSection,
  TrustComplianceSection,
  TeamSection,
  FaqSection,
  ResourcesSection,
} from '@/components/services/EnterpriseSections';
import ContactSection from '@/components/services/ContactSection';

/**
 * Full enterprise homepage — customer journey order:
 * Hero → Trust → Impact → Capabilities → Preview → Framework → Journey →
 * Tech → Industries → Case Study → Portfolio → Testimonials → Security →
 * Pricing → Product → Team → Insights → Resources → FAQ → CTA → Contact
 */
export default function HomePageContent() {
  return (
    <>
      <HeroSection />
      <PartnersSection />
      <ValuePropositionSection />
      <CapabilitiesSection />
      <CapabilityMatrixSection />
      <MediaShowcaseSection />
      <FrameworkSection />
      <CustomerJourneySection />
      <TechStackSection />
      <IndustriesSection />
      <CaseStudySection />
      <PortfolioSection />
      <TestimonialsSection />
      <TrustComplianceSection />
      <ConsultingPricingSection />
      <ProductShowcaseSection />
      <TeamSection />
      <InsightsSection limit={3} />
      <ResourcesSection />
      <FaqSection />
      <ServicesCtaBand />
      <ContactSection variant="partner" />
    </>
  );
}
