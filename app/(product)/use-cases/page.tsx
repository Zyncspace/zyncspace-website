import ProductPage, { generateProductMetadata } from '@/components/product/ProductPage';

export const metadata = generateProductMetadata('use-cases');
export default function Page() {
  return <ProductPage slug="use-cases" />;
}
