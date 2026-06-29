import Link from 'next/link';
import { servicesContent } from '@/content/services';
import { serviceRoutes } from '@/content/site';

export default function Footer() {
  const { footer } = servicesContent;

  const columns = [
    {
      title: 'Services',
      links: [
        { label: 'Capabilities', href: serviceRoutes.services },
        { label: 'Framework', href: serviceRoutes.framework },
        { label: 'Technology Stack', href: serviceRoutes.technology },
        { label: 'Industries', href: serviceRoutes.industries },
        { label: 'Case Studies', href: serviceRoutes.caseStudies },
        { label: 'Consulting Pricing', href: serviceRoutes.pricing },
      ],
    },
    {
      title: 'Product',
      links: [
        { label: 'Features', href: serviceRoutes.product.features },
        { label: 'Use Cases', href: serviceRoutes.product.useCases },
        { label: 'Pricing', href: serviceRoutes.product.pricing },
        { label: 'Blog', href: serviceRoutes.product.blogs },
        { label: 'About', href: serviceRoutes.product.about },
        { label: 'Careers', href: '/careers' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'Contact', href: serviceRoutes.contact },
        { label: 'Trust Center', href: '/trust-center' },
        { label: 'Privacy Policy', href: '/privacy-policy' },
        { label: 'Terms of Service', href: '/terms-of-service' },
      ],
    },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="logo">
              <img src="/assets/images/zyncspace-footer-logo.svg" alt="ZyncSpace" width={140} />
            </Link>
            <p>{footer.brand.description}</p>
          </div>
          {columns.map((col) => (
            <div key={col.title} className="footer-col">
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="footer-col">
            <h4>{footer.newsletter.title}</h4>
            <p style={{ color: '#888', fontSize: '0.95rem', marginBottom: 10 }}>
              {footer.newsletter.title}
            </p>
            <div className="subscribe-input">
              <input
                type="email"
                placeholder={footer.newsletter.placeholder}
                aria-label="Email for newsletter"
              />
              <button type="button">{footer.newsletter.submitLabel}</button>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{footer.copyright}</p>
          <div style={{ display: 'flex', gap: 16 }}>
            {footer.social.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#888' }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
