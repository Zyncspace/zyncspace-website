'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { serviceRoutes } from '@/content/site';

/**
 * Nav menus removed temporarily — add links back one at a time in nav-links when ready.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="container nav-inner">
        <Link href="/" className="logo" aria-label="Home">
          <img
            src="/assets/images/zyncspace-logo.png"
            alt="ZyncSpace logo"
            width={132}
            height={36}
            className="logo-img"
          />
        </Link>

        <div className="nav-actions nav-actions-minimal">
          <Link href={serviceRoutes.contact} className="btn btn-white btn-nav-cta">
            <span className="btn-nav-cta-label">Book Consultation</span>
            <span className="btn-nav-cta-label-short">Book</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
}
