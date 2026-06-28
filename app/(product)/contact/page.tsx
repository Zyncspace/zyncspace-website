import { buildMetadata } from '@/lib/metadata';
import { ContactPageContent } from '@/components/services/ContactSection';

export const metadata = buildMetadata({
  title: 'Contact Us',
  description: 'Get in touch with ZyncSpace for consulting, product support, or partnership inquiries.',
  path: '/contact',
  keywords: 'contact ZyncSpace, customer support, consulting inquiry',
});

export default function ContactPage() {
  return <ContactPageContent />;
}
