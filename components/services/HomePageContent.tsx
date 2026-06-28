import {
  HeroSection,
  PartnersSection,
  ProductShowcaseSection,
  InsightsSection,
  ServicesCtaBand,
} from '@/components/services/sections';
import ContactSection from '@/components/services/ContactSection';

export default function HomePageContent() {
  return (
    <>
      <HeroSection />
      <PartnersSection />
      <ProductShowcaseSection />
      <InsightsSection limit={3} />
      <ServicesCtaBand />
      <ContactSection compact />
    </>
  );
}
