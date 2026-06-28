import type { PageContent } from '@/lib/types';

type Props = {
  page: PageContent;
  children: React.ReactNode;
};

/** Wraps migrated product HTML with AETHERIS typography and spacing */
export default function ProductPageShell({ page, children }: Props) {
  const rawTitle = page.metadata.og?.title || page.metadata.title;
  const title = rawTitle.includes(' - ')
    ? rawTitle.split(' - ')[0]
    : rawTitle.replace(/^ZyncSpace$/i, page.slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()));
  const subtitle = page.metadata.description;

  return (
    <div className={`product-page-body${page.bodyClass ? ` ${page.bodyClass}` : ''}`}>
      <header className="product-page-hero">
        <div className="container">
          <span className="label">ZyncSpace Product</span>
          <h1>{title}</h1>
          {subtitle ? <p className="product-page-hero-desc">{subtitle}</p> : null}
        </div>
      </header>
      <div className="product-page-inner">{children}</div>
    </div>
  );
}
