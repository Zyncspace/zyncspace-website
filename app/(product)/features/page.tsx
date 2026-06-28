import ProductPage, { generateProductMetadata } from '@/components/product/ProductPage';

export const metadata = generateProductMetadata('features');
export default function Page() {
  return <ProductPage slug="features" />;
}
