import Link from 'next/link';
import { trustCenterContent as c, type TrustControl } from '@/content/trust-center';

function ControlCard({ control }: { control: TrustControl }) {
  return (
    <article className="trust-control-card">
      <span className={`trust-control-category trust-control-category--${control.category === 'Baseline' ? 'baseline' : 'feature'}`}>
        {control.category}
      </span>
      <h3>{control.securityPolicy}</h3>
      <p className="trust-control-standard">
        <span>Tech standard</span> {control.techStandard}
      </p>
      <p className="trust-control-desc">{control.description}</p>
    </article>
  );
}

export default function TrustCenterPageContent() {
  return (
    <>
      <header className="trust-center-hero">
        <div className="container">
          <span className="label trust-center-hero-label">{c.label}</span>
          <h1>{c.title}</h1>
          <p className="trust-center-hero-lead">{c.description}</p>
        </div>
      </header>

      <section className="trust-center-body">
        <div className="container trust-center-container">
          <p className="trust-center-updated">Last updated: {c.lastUpdated}</p>
          <p className="trust-center-intro">{c.intro}</p>

          <aside className="trust-center-note">
            <strong>Startup transparency</strong>
            <p>{c.startupNote}</p>
          </aside>

          <div className="trust-center-pillars">
            {c.pillars.map((pillar) => (
              <article key={pillar.title} className="trust-center-pillar">
                <h2>{pillar.title}</h2>
                <p>{pillar.description}</p>
              </article>
            ))}
          </div>

          <section className="trust-center-controls" aria-labelledby="trust-controls-title">
            <div className="trust-center-controls-header">
              <span className="label">Security blueprint</span>
              <h2 id="trust-controls-title">Controls & standards</h2>
              <p className="section-lead">
                Baseline infrastructure and privacy policies, plus feature-specific protections for chat, AI, and encryption.
              </p>
            </div>

            <div className="trust-controls-table-wrap" role="region" aria-label="Security controls table">
              <table className="trust-controls-table">
                <thead>
                  <tr>
                    <th scope="col">Category</th>
                    <th scope="col">Security policy</th>
                    <th scope="col">Tech standard</th>
                    <th scope="col">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {c.controls.map((control) => (
                    <tr key={control.id}>
                      <td>
                        <span className={`trust-control-category trust-control-category--${control.category === 'Baseline' ? 'baseline' : 'feature'}`}>
                          {control.category}
                        </span>
                      </td>
                      <th scope="row">{control.securityPolicy}</th>
                      <td>{control.techStandard}</td>
                      <td>{control.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="trust-controls-cards">
              {c.controls.map((control) => (
                <ControlCard key={control.id} control={control} />
              ))}
            </div>
          </section>

          <section className="trust-center-commitments" aria-labelledby="trust-commitments-title">
            <h2 id="trust-commitments-title">Our commitments</h2>
            <ul>
              {c.commitments.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="trust-center-related">
            <h2>Related resources</h2>
            <div className="trust-center-related-links">
              {c.related.map((link) => (
                <Link key={link.href} href={link.href} className="trust-center-related-link">
                  {link.label} →
                </Link>
              ))}
            </div>
          </section>

          <aside className="trust-center-contact">
            <h2>{c.contact.title}</h2>
            <p>{c.contact.description}</p>
            <p>
              <strong>Email:</strong>{' '}
              <Link href={`mailto:${c.contact.email}`}>{c.contact.email}</Link>
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
