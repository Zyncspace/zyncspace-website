import Link from 'next/link';

type CtaLink = {
  label: string;
  href: string;
  external?: boolean;
};

type ProductPageCtaProps = {
  title: string;
  description: string;
  primary: CtaLink;
  secondary: CtaLink;
};

export default function ProductPageCta({
  title,
  description,
  primary,
  secondary,
}: ProductPageCtaProps) {
  return (
    <section className="section-padding product-page-cta">
      <div className="container product-page-cta-inner">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="product-page-cta-actions">
          <Link
            href={primary.href}
            className="btn btn-white"
            {...(primary.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {primary.label}
          </Link>
          <Link
            href={secondary.href}
            className="btn btn-outline-dark"
            {...(secondary.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {secondary.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
