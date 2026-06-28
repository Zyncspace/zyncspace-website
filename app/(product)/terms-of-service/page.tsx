import ProductPage, { generateProductMetadata } from '@/components/product/ProductPage';

export const metadata = generateProductMetadata('terms-of-service');
export default function Page() {
  return <ProductPage slug="terms-of-service" />;
}
