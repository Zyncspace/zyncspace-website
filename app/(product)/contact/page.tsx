import { ContactPageContent } from '@/components/services/ContactSection';
import ServicePageExtended from '@/components/services/ServicePageExtended';
import { servicePageExtended } from '@/content/service-pages';
import { breadcrumbSchema, buildMetadata, JsonLd, webPageSchema } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Contact Us',
  description:
    'Get in touch with ZyncSpace for consulting, product support, or partnership inquiries.',
  path: '/contact',
  keywords: 'contact ZyncSpace, customer support, consulting inquiry',
});

export default function ContactPage() {
  const title = 'Contact Us';
  const description =
    'Get in touch with ZyncSpace for consulting, product support, or partnership inquiries.';

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: title }])} />
      <JsonLd data={webPageSchema({ title, description, path: '/contact' })} />
      <ContactPageContent />
      <ServicePageExtended sections={servicePageExtended.contact} />
    </>
  );
}
