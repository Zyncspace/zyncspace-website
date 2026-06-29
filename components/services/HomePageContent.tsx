import ContactSection from '@/components/services/ContactSection';
import {
  AboutSection,
  ClientStoriesSection,
  DeliveryProcessSection,
  EngineeringPracticeSection,
  FaqSection,
  LeadershipTeamSection,
  MediaShowcaseSection,
  PortfolioSection,
  ReferenceArchitectureSection,
  ResourcesSection,
  TrustComplianceSection,
  ValuePropositionSection,
  WhyChooseSection,
} from '@/components/services/EnterpriseSections';
import {
  CapabilitiesSection,
  CapabilityMatrixSection,
  CaseStudySection,
  ConsultingPricingSection,
  FrameworkSection,
  HeroSection,
  IndustriesSection,
  InsightsSection,
  PartnersSection,
  ProductShowcaseSection,
  ServicesCtaBand,
  TechStackSection,
} from '@/components/services/sections';

/**
 * Enterprise homepage — trust-safe, outcome-focused flow:
 * Hero → Partners → About → Impact → Why Us → Services → Preview → Process →
 * Tech → Industries → Case Study → Portfolio → Architectures → Client Stories →
 * Security → Pricing → Product → Engineering Practice → Insights → Resources → FAQ → CTA → Contact
 */
export default function HomePageContent() {
  return (
    <>
      <HeroSection />
      <PartnersSection />
      <AboutSection />
      <ValuePropositionSection />
      <WhyChooseSection />
      <CapabilitiesSection />
      <CapabilityMatrixSection />
      <MediaShowcaseSection />
      <FrameworkSection />
      <DeliveryProcessSection />
      <TechStackSection />
      <IndustriesSection />
      <CaseStudySection />
      <PortfolioSection />
      <ReferenceArchitectureSection />
      <ClientStoriesSection />
      <TrustComplianceSection />
      <ConsultingPricingSection />
      <ProductShowcaseSection />
      <LeadershipTeamSection />
      <EngineeringPracticeSection />
      <InsightsSection limit={3} />
      <ResourcesSection />
      <FaqSection />
      <ServicesCtaBand />
      <ContactSection variant="partner" />
    </>
  );
}
