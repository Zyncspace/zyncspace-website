import ProductPage, { generateProductMetadata } from '@/components/product/ProductPage';

export const metadata = generateProductMetadata('privacy-policy');
export default function Page() {
  return <ProductPage slug="privacy-policy" />;
}
