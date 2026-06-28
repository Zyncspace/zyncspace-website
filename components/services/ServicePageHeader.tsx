import Link from 'next/link';

type ServicePageHeaderProps = {
  label: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export default function ServicePageHeader({ label, title, description, children }: ServicePageHeaderProps) {
  return (
    <header className="service-page-header">
      <div className="container">
        <span className="label">{label}</span>
        <h1>{title}</h1>
        {description ? <p className="service-page-desc">{description}</p> : null}
        {children}
      </div>
    </header>
  );
}

export function ServiceBreadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="service-breadcrumb" aria-label="Breadcrumb">
      {items.map((item, i) => (
        <span key={item.label}>
          {i > 0 ? <span className="sep"> / </span> : null}
          {item.href ? <Link href={item.href}>{item.label}</Link> : <span>{item.label}</span>}
        </span>
      ))}
    </nav>
  );
}
