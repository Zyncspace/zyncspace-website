import ProductPage, { generateProductMetadata } from '@/components/product/ProductPage';

export const metadata = generateProductMetadata('careers');
export default function Page() {
  return <ProductPage slug="careers" />;
}
