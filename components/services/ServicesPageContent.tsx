import Link from 'next/link';
import { servicesContent as c } from '@/content/services';
import { serviceRoutes } from '@/content/site';
import ServicePageExtended from '@/components/services/ServicePageExtended';
import { CapabilityMatrixSection, ServicesCtaBand } from '@/components/services/sections';
import { servicePageExtended } from '@/content/service-pages';

const hubLinks = [
  { title: 'Delivery Framework', description: 'Eight-stage model from discovery to optimization.', href: serviceRoutes.framework },
  { title: 'Technology Stack', description: 'Cloud, AI, data, and frontend platforms we deploy.', href: serviceRoutes.technology },
  { title: 'Industries', description: 'Sector playbooks for regulated and high-growth verticals.', href: serviceRoutes.industries },
  { title: 'Case Studies', description: 'Representative outcomes from consulting engagements.', href: serviceRoutes.caseStudies },
  { title: 'Consulting Pricing', description: 'Transparent tiers for discovery, build, and scale.', href: serviceRoutes.pricing },
];

export default function ServicesPageContent() {
  return (
    <>
      <section className="services-capabilities section-padding">
        <div className="container">
          <div className="services-capabilities-grid">
            {c.capabilities.items.map((item) => (
              <article key={item.num} className="services-capability-card">
                <span className="services-capability-num">[{item.num}]</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CapabilityMatrixSection />

      <ServicePageExtended sections={servicePageExtended.services} />

      <section className="services-hub-links section-padding">
        <div className="container">
          <div className="services-hub-links-header">
            <span className="label">Explore</span>
            <h2>Go deeper on how we deliver</h2>
            <p className="section-lead">
              Framework, technology choices, industry patterns, and pricing — each with dedicated detail.
            </p>
          </div>
          <div className="services-hub-links-grid">
            {hubLinks.map((link) => (
              <Link key={link.href} href={link.href} className="services-hub-link-card">
                <h3>{link.title}</h3>
                <p>{link.description}</p>
                <span className="services-hub-link-arrow" aria-hidden>
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ServicesCtaBand />
    </>
  );
}
