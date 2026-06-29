import TrustCenterPageContent from '@/components/product/TrustCenterPageContent';
import { trustCenterContent } from '@/content/trust-center';
import { breadcrumbSchema, buildMetadata, JsonLd, webPageSchema } from '@/lib/metadata';
import { SITE_URL } from '@/lib/site-url';

const title = 'Trust Center';
const description =
  'ZyncSpace Trust Center - AWS infrastructure, GDPR/DPDP compliance, zero LLM training policy, E2EE, and AES-256/TLS 1.3 encryption for the chat product.';
const path = '/trust-center';

export const metadata = buildMetadata({
  title,
  description,
  path,
  keywords:
    'ZyncSpace trust center, security, GDPR, DPDP, E2EE, encryption, zero data training, AWS SOC 2, startup security',
});

export default function TrustCenterPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Trust Center' }])} />
      <JsonLd data={webPageSchema({ title: `${title} - ZyncSpace`, description, path })} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'ZyncSpace Trust Center',
          description,
          url: `${SITE_URL}${path}`,
          about: trustCenterContent.controls.map((control) => ({
            '@type': 'Thing',
            name: control.securityPolicy,
            description: control.description,
          })),
        }}
      />
      <TrustCenterPageContent />
    </>
  );
}
