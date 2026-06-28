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
  AboutSection,
  ValuePropositionSection,
  WhyChooseSection,
  MediaShowcaseSection,
  DeliveryProcessSection,
  ReferenceArchitectureSection,
  PortfolioSection,
  ClientStoriesSection,
  TrustComplianceSection,
  LeadershipTeamSection,
  EngineeringPracticeSection,
  FaqSection,
  ResourcesSection,
} from '@/components/services/EnterpriseSections';
import ContactSection from '@/components/services/ContactSection';

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
