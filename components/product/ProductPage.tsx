import { getProductPage, type ProductSlug } from '@/lib/product-pages';
import { buildMetadata, JsonLd, breadcrumbSchema } from '@/lib/metadata';
import ProductPageBody from '@/components/product/ProductPageBody';
import type { Metadata } from 'next';

export function generateProductMetadata(slug: ProductSlug): Metadata {
  const page = getProductPage(slug);
  const m = page.metadata;
  return buildMetadata({
    title: m.title,
    description: m.description,
    path: `/${slug}`,
    keywords: m.keywords,
    image: m.og?.image,
    type: m.og?.type === 'article' ? 'article' : 'website',
  });
}

export default function ProductPage({ slug }: { slug: ProductSlug }) {
  const page = getProductPage(slug);
  const jsonLd = page.metadata.jsonLd;
  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: page.metadata.title.split(' - ')[0].split(' | ')[0] },
  ]);

  return (
    <>
      {jsonLd ? <JsonLd data={jsonLd} /> : <JsonLd data={breadcrumbs} />}
      <ProductPageBody page={page} />
    </>
  );
}
