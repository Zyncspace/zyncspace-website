import { getProductPage, type ProductSlug } from '@/lib/product-pages';
import { buildMetadata, JsonLd, breadcrumbSchema, webPageSchema } from '@/lib/metadata';
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
  const m = page.metadata;
  const pageTitle = m.title.split(' - ')[0].split(' | ')[0];
  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: pageTitle },
  ]);
  const webPage = webPageSchema({
    title: m.title,
    description: m.description,
    path: `/${slug}`,
  });

  return (
    <>
      {page.metadata.jsonLd ? <JsonLd data={page.metadata.jsonLd} /> : null}
      <JsonLd data={breadcrumbs} />
      <JsonLd data={webPage} />
      <ProductPageBody page={page} />
    </>
  );
}
