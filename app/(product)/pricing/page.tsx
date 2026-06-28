import ProductPage, { generateProductMetadata } from '@/components/product/ProductPage';

export const metadata = generateProductMetadata('pricing');
export default function Page() {
  return <ProductPage slug="pricing" />;
}
