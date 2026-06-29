import Link from 'next/link';
import PartnerLogo from '@/components/services/PartnerLogo';
import { servicesContent as c } from '@/content/services';
import { siteContact } from '@/content/site';

type ContactSectionProps = {
  variant?: 'partner' | 'compact' | 'page';
};

export default function ContactSection({ variant = 'compact' }: ContactSectionProps) {
  const isPartner = variant === 'partner';

  return (
    <section
      id="contact"
      className={`contact-section${isPartner ? ' contact-section-partner' : ''}`}
    >
      <div className={`container contact-grid${isPartner ? ' contact-grid-partner' : ''}`}>
        <div>
          <span className="label" style={{ color: '#aaa' }}>
            {isPartner ? c.contact.label : 'Get In Touch'}
          </span>
          <h2
            style={{
              fontSize: isPartner ? 'clamp(3rem, 5vw, 4.5rem)' : 'clamp(2rem, 4vw, 3rem)',
              marginBottom: 25,
              lineHeight: 1.05,
            }}
          >
            {isPartner ? (
              <>
                {c.contact.title[0]}
                <br />
                {c.contact.title[1]}
              </>
            ) : (
              <>
                Let&apos;s build
                <br />
                together.
              </>
            )}
          </h2>
          <p className="contact-lead">
            {isPartner
              ? c.contact.description
              : 'Whether you need consulting, a custom build, or help with the ZyncSpace platform — reach our team directly.'}
          </p>
          {isPartner ? (
            <div className="contact-tech-strip">
              <span className="contact-tech-strip-label">{c.contact.techStrip.label}</span>
              <div className="contact-tech-logos">
                {c.partners.items.map((name) => (
                  <span key={name} className="contact-tech-logo">
                    <PartnerLogo name={name} />
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <div className="office-list">
              <div className="office">
                <h3>Email</h3>
                <p style={{ color: '#ddd', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  <a href={`mailto:${siteContact.email}`} style={{ color: '#fff' }}>
                    {siteContact.email}
                  </a>
                  <br />
                  <a href={`mailto:${siteContact.supportEmail}`} style={{ color: '#aaa' }}>
                    {siteContact.supportEmail}
                  </a>
                </p>
              </div>
              <div className="office">
                <h3>{siteContact.location.city}</h3>
                <p style={{ color: '#ddd', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  {siteContact.location.address}
                </p>
              </div>
            </div>
          )}
          {!isPartner && variant !== 'page' ? (
            <p style={{ color: '#888', fontSize: '0.9rem', marginTop: 24 }}>
              {siteContact.responseTime}
            </p>
          ) : null}
        </div>
        <div>
          <div className="form-box">
            {isPartner ? (
              <>
                <span className="label" style={{ color: '#888' }}>
                  {c.contact.form.step}
                </span>
                <h3 className="form-box-title">{c.contact.form.title}</h3>
                <p style={{ color: '#a3a3a3', fontSize: '0.95rem', marginBottom: 24 }}>
                  {c.contact.form.description}
                </p>
                <form
                  className="aetheris-contact-form"
                  action={siteContact.formAction}
                  method="POST"
                >
                  {c.contact.formOptions.map((option) => (
                    <label key={option} className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        name="objectives"
                        value={option}
                      />
                      <span className="form-check-box" aria-hidden="true" />
                      <span className="form-check-label">{option}</span>
                    </label>
                  ))}
                  <div className="form-group" style={{ marginTop: 24 }}>
                    <label htmlFor="partner-email">Work Email</label>
                    <input
                      type="email"
                      id="partner-email"
                      name="email"
                      placeholder="you@company.com"
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-white btn-full">
                    {c.contact.form.submitLabel}
                  </button>
                </form>
              </>
            ) : (
              <>
                <span className="label" style={{ color: '#888' }}>
                  Send a message
                </span>
                <h3 className="form-box-title">How can we help?</h3>
                <p style={{ color: '#888', fontSize: '0.95rem', marginBottom: 24 }}>
                  Fill out the form and we&apos;ll get back to you as soon as possible.
                </p>
                <form
                  className="aetheris-contact-form"
                  action={siteContact.formAction}
                  method="POST"
                >
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="contact-name">Full Name</label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-email">Email</label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        placeholder="you@company.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-subject">Subject</label>
                    <select id="contact-subject" name="subject" required defaultValue="">
                      <option value="" disabled>
                        Select a subject
                      </option>
                      {siteContact.subjectOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-message">Message</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      placeholder="Tell us about your project or question…"
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-white btn-full">
                    Send Message ↗
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactPageContent() {
  return (
    <>
      <header className="service-page-header">
        <div className="container">
          <span className="label">Contact</span>
          <h1>Contact Us</h1>
          <p className="service-page-desc">
            Connect with our consulting team, product support, or partnership desk — we respond
            within one business day.
          </p>
        </div>
      </header>
      <ContactSection variant="page" />
      <section className="section-padding" style={{ background: '#fff', paddingTop: 0 }}>
        <div className="container">
          <div className="contact-cards-grid">
            <div className="contact-info-card">
              <h3>Product Support</h3>
              <p>For workspace, billing, or technical questions</p>
              <a href={`mailto:${siteContact.supportEmail}`}>{siteContact.supportEmail}</a>
            </div>
            <div className="contact-info-card">
              <h3>Consulting & Sales</h3>
              <p>Custom builds, AI integrations, and enterprise plans</p>
              <a href={`mailto:${siteContact.email}`}>{siteContact.email}</a>
            </div>
            <div className="contact-info-card">
              <h3>Start Free</h3>
              <p>Try the ZyncSpace workspace — free during beta</p>
              <Link href={siteContact.signupUrl} className="btn btn-dark" style={{ marginTop: 12 }}>
                Sign up ↗
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
