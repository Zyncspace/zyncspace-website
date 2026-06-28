'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
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

type NavDropdownProps = {
  label: string;
  href: string;
  links: { href: string; label: string }[];
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

function NavDropdown({ label, href, links, isOpen, onOpen, onClose }: NavDropdownProps) {
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    onOpen();
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(onClose, 120);
  };

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <div
      className={`nav-menu-item${isOpen ? ' is-open' : ''}`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <Link href={href} className="nav-menu-trigger">
        {label}
        <span className="nav-menu-caret" aria-hidden="true">▾</span>
      </Link>
      {isOpen ? (
        <div className="nav-dropdown" role="menu">
          <div className="nav-dropdown-panel">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="nav-dropdown-link" role="menuitem">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function MobileNavGroup({
  title,
  href,
  links,
  onNavigate,
}: {
  title: string;
  href: string;
  links: { href: string; label: string }[];
  onNavigate: () => void;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="nav-mobile-group">
      <div className="nav-mobile-group-header">
        <Link href={href} className="nav-mobile-group-title" onClick={onNavigate}>
          {title}
        </Link>
        <button
          type="button"
          className="nav-mobile-expand"
          aria-expanded={expanded}
          aria-label={`${expanded ? 'Collapse' : 'Expand'} ${title} menu`}
          onClick={() => setExpanded((v) => !v)}
        >
          {expanded ? '−' : '+'}
        </button>
      </div>
      {expanded ? (
        <div className="nav-mobile-sublinks">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={onNavigate}>
              {l.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<'services' | 'product' | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}${mobileOpen ? ' mobile-open' : ''}`} id="navbar">
      <div className="container nav-inner">
        <Link href="/" className="logo" aria-label="Home" onClick={closeMobile}>
          <img
            src="/assets/images/zyncspace-logo.png"
            alt=""
            width={132}
            height={36}
            className="logo-img"
          />
        </Link>

        <div className="nav-links">
          <NavDropdown
            label="Services"
            href={serviceRoutes.services}
            links={SERVICE_LINKS}
            isOpen={openMenu === 'services'}
            onOpen={() => setOpenMenu('services')}
            onClose={() => setOpenMenu((current) => (current === 'services' ? null : current))}
          />
          <NavDropdown
            label="Product"
            href={serviceRoutes.product.features}
            links={PRODUCT_LINKS}
            isOpen={openMenu === 'product'}
            onOpen={() => setOpenMenu('product')}
            onClose={() => setOpenMenu((current) => (current === 'product' ? null : current))}
          />
          <Link href={serviceRoutes.product.blogs}>Insights</Link>
        </div>

        <div className="nav-actions">
          <Link href={serviceRoutes.contact} className="btn btn-white btn-nav-cta">
            <span className="btn-nav-cta-label">Book Consultation</span>
            <span className="btn-nav-cta-label-short">Book</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
          <button
            type="button"
            className="nav-mobile-toggle"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className={`nav-mobile-toggle-bar${mobileOpen ? ' open' : ''}`} />
            <span className={`nav-mobile-toggle-bar${mobileOpen ? ' open' : ''}`} />
            <span className={`nav-mobile-toggle-bar${mobileOpen ? ' open' : ''}`} />
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="nav-mobile-panel">
          <div className="container nav-mobile-panel-inner">
            <MobileNavGroup title="Services" href={serviceRoutes.services} links={SERVICE_LINKS} onNavigate={closeMobile} />
            <MobileNavGroup title="Product" href={serviceRoutes.product.features} links={PRODUCT_LINKS} onNavigate={closeMobile} />
            <Link href={serviceRoutes.product.blogs} className="nav-mobile-link" onClick={closeMobile}>
              Insights
            </Link>
            <Link href={serviceRoutes.contact} className="btn btn-white btn-full nav-mobile-cta" onClick={closeMobile}>
              Book Consultation ↗
            </Link>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
