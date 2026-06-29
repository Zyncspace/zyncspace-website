import LegalPageContent from '@/components/product/LegalPageContent';
import { termsOfServiceContent } from '@/content/terms-of-service';
import { JsonLd, breadcrumbSchema, buildMetadata, webPageSchema } from '@/lib/metadata';

const title = 'Terms of Service';
const description =
  'Terms of Service - ZyncSpace. Read our terms and conditions governing your use of the ZyncSpace platform.';
const path = '/terms-of-service';

export const metadata = buildMetadata({
  title,
  description,
  path,
  keywords:
    'ZyncSpace terms of service, terms and conditions, user agreement, platform usage terms',
});

export default function TermsOfServicePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Terms of Service' },
        ])}
      />
      <JsonLd data={webPageSchema({ title: `${title} - ZyncSpace`, description, path })} />
      <LegalPageContent {...termsOfServiceContent} />
    </>
  );
}
