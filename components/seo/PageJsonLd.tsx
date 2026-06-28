import { JsonLd, breadcrumbSchema, webPageSchema, serviceSchema } from '@/lib/metadata';

type BreadcrumbItem = { name: string; path?: string };

type PageJsonLdProps = {
  title: string;
  description: string;
  path: string;
  breadcrumbs: BreadcrumbItem[];
  serviceType?: string;
};

export function PageJsonLd({ title, description, path, breadcrumbs, serviceType }: PageJsonLdProps) {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd data={webPageSchema({ title, description, path })} />
      {serviceType ? (
        <JsonLd data={serviceSchema({ name: title, description, path, serviceType })} />
      ) : null}
    </>
  );
}

export function ServiceHubJsonLd({ title, description }: { title: string; description: string }) {
  return (
    <PageJsonLd
      title={title}
      description={description}
      path="/services"
      breadcrumbs={[
        { name: 'Home', path: '/' },
        { name: title },
      ]}
      serviceType="Technology Consulting"
    />
  );
}

export function ServiceDetailJsonLd({
  title,
  description,
  path,
  serviceType,
}: {
  title: string;
  description: string;
  path: string;
  serviceType: string;
}) {
  return (
    <PageJsonLd
      title={title}
      description={description}
      path={path}
      breadcrumbs={[
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: title },
      ]}
      serviceType={serviceType}
    />
  );
}
