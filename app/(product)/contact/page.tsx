import { ContactPageContent } from '@/components/services/ContactSection';
import ServicePageExtended from '@/components/services/ServicePageExtended';
import { servicePageExtended } from '@/content/service-pages';
import { contactFormSources, isContactIntent, resolveContactSubject } from '@/lib/contact';
import { breadcrumbSchema, buildMetadata, JsonLd, webPageSchema } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Contact Us',
  description:
    'Get in touch with ZyncSpace for consulting, product support, or partnership inquiries.',
  path: '/contact',
  keywords: 'contact ZyncSpace, customer support, consulting inquiry',
});

type ContactPageProps = {
  searchParams: Promise<{
    source?: string;
    subject?: string;
    intent?: string;
  }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const intent = isContactIntent(params.intent) ? params.intent : undefined;
  const source = params.source ?? contactFormSources.contactPage;
  const defaultSubject = resolveContactSubject(params.subject, intent);

  const title = 'Contact Us';
  const description =
    'Get in touch with ZyncSpace for consulting, product support, or partnership inquiries.';

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: title }])} />
      <JsonLd data={webPageSchema({ title, description, path: '/contact' })} />
      <ContactPageContent source={source} defaultSubject={defaultSubject} intent={intent} />
      <ServicePageExtended sections={servicePageExtended.contact} />
    </>
  );
}
