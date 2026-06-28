import ProductPage, { generateProductMetadata } from '@/components/product/ProductPage';

export const metadata = generateProductMetadata('about');
export default function Page() {
  return <ProductPage slug="about" />;
}
