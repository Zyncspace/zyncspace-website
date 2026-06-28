'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { serviceRoutes } from '@/content/site';

const SERVICE_LINKS = [
  { href: serviceRoutes.services, label: 'Services' },
  { href: serviceRoutes.framework, label: 'Framework' },
  { href: serviceRoutes.technology, label: 'Tech Stack' },
  { href: serviceRoutes.industries, label: 'Industries' },
  { href: serviceRoutes.caseStudies, label: 'Case Studies' },
  { href: serviceRoutes.pricing, label: 'Consulting' },
];

const PRODUCT_LINKS = [
  { href: serviceRoutes.product.features, label: 'Features' },
  { href: serviceRoutes.product.useCases, label: 'Use Cases' },
  { href: serviceRoutes.product.pricing, label: 'Product Pricing' },
  { href: serviceRoutes.product.blogs, label: 'Blog' },
  { href: serviceRoutes.product.about, label: 'About' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="container nav-inner">
        <Link href="/" className="logo">
          <img src="/assets/images/zyncspace-logo.png" alt="ZyncSpace" width={120} height={32} style={{ filter: 'brightness(0) invert(1)' }} />
          ZyncSpace
        </Link>
        <div className="nav-links">
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link href={serviceRoutes.services}>Services ▾</Link>
            {servicesOpen && (
              <div className="nav-dropdown">
                {SERVICE_LINKS.map((l) => (
                  <Link key={l.href} href={l.href}>{l.label}</Link>
                ))}
              </div>
            )}
          </div>
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setProductOpen(true)}
            onMouseLeave={() => setProductOpen(false)}
          >
            <Link href={serviceRoutes.product.features}>Product ▾</Link>
            {productOpen && (
              <div className="nav-dropdown">
                {PRODUCT_LINKS.map((l) => (
                  <Link key={l.href} href={l.href}>{l.label}</Link>
                ))}
              </div>
            )}
          </div>
          <Link href={serviceRoutes.product.blogs}>Insights</Link>
        </div>
        <div className="nav-actions">
          <Link href={serviceRoutes.contact} className="btn btn-white">CONTACT US</Link>
        </div>
      </div>
    </nav>
  );
}
