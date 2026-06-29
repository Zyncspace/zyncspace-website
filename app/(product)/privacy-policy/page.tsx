import LegalPageContent from '@/components/product/LegalPageContent';
import { privacyPolicyContent } from '@/content/privacy-policy';
import { JsonLd, breadcrumbSchema, buildMetadata, webPageSchema } from '@/lib/metadata';

const title = 'Privacy Policy';
const description =
  'Privacy Policy - ZyncSpace. Learn how we collect, use, and protect your personal information.';
const path = '/privacy-policy';

export const metadata = buildMetadata({
  title,
  description,
  path,
  keywords:
    'ZyncSpace privacy policy, data protection, personal information, privacy, GDPR, team chat privacy',
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Privacy Policy' },
        ])}
      />
      <JsonLd data={webPageSchema({ title: `${title} - ZyncSpace`, description, path })} />
      <LegalPageContent {...privacyPolicyContent} />
    </>
  );
}
