import ProductPageShell from '@/components/product/ProductPageShell';
import type { PageContent } from '@/lib/types';

export default function ProductPageBody({ page }: { page: PageContent }) {
  const content = stripDuplicateHero(page.content);

  return (
    <ProductPageShell page={page}>
      {/* Trusted static product HTML from repo JSON - not user-supplied at runtime */}
      {/* nosemgrep: typescript.react.security.audit.react-dangerouslysetinnerhtml.react-dangerouslysetinnerhtml */}
      {page.styles ? <style dangerouslySetInnerHTML={{ __html: page.styles }} /> : null}
      {/* nosemgrep: typescript.react.security.audit.react-dangerouslysetinnerhtml.react-dangerouslysetinnerhtml */}
      <main dangerouslySetInnerHTML={{ __html: content }} />
    </ProductPageShell>
  );
}

/** Remove first hero/page-header block - shell provides the page hero */
function stripDuplicateHero(html: string): string {
  let result = html
    .replace(/<section class="hero"[\s\S]*?<\/section>\s*/i, '')
    .replace(/<section class="page-header"[\s\S]*?<\/section>\s*/i, '');
  result = result.replace(/<h1\b[^>]*>[\s\S]*?<\/h1>\s*/i, '');
  return result;
}
