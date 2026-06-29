import PricingPageContent from '@/components/product/PricingPageContent';
import { breadcrumbSchema, buildMetadata, JsonLd, webPageSchema } from '@/lib/metadata';
import { SITE_URL } from '@/lib/site-url';

const title = 'ZyncSpace Chat Pricing';
const description =
  'ZyncSpace Chat app pricing: free team workspace for up to 10 users during beta. Paid plans from $1/user/month. Not consulting or custom development — compare with Slack and Teams.';
const path = '/pricing';

export const metadata = buildMetadata({
  title,
  description,
  path,
  keywords:
    'ZyncSpace Chat pricing, team chat app pricing, Slack alternative pricing, workspace subscription, not consulting pricing',
  image: `${SITE_URL}/assets/images/home-hero-section.webp`,
});

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'ZyncSpace Chat Pricing' }])}
      />
      <JsonLd data={webPageSchema({ title: `${title} - ZyncSpace`, description, path })} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: 'ZyncSpace Chat',
          applicationCategory: 'BusinessApplication',
          description,
          brand: { '@type': 'Brand', name: 'ZyncSpace' },
          offers: [
            {
              '@type': 'Offer',
              name: 'Free',
              price: '0',
              priceCurrency: 'USD',
              description: 'Up to 10 users, free during beta',
              url: `${SITE_URL}/pricing`,
            },
            {
              '@type': 'Offer',
              name: 'Paid',
              price: '1',
              priceCurrency: 'USD',
              priceSpecification: {
                '@type': 'UnitPriceSpecification',
                price: '1',
                priceCurrency: 'USD',
                unitText: 'user/month',
              },
              url: `${SITE_URL}/pricing`,
            },
          ],
        }}
      />
      <PricingPageContent />
    </>
  );
}
