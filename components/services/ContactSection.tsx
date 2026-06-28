import Link from 'next/link';
import { siteContact } from '@/content/site';

export default function ContactSection({ compact = false }: { compact?: boolean }) {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-grid">
        <div>
          <span className="label" style={{ color: '#aaa' }}>Get In Touch</span>
          <h2 style={{ fontSize: compact ? 'clamp(2rem, 4vw, 3rem)' : 'clamp(3rem, 5vw, 4.5rem)', marginBottom: 25 }}>
            Let&apos;s build<br />together.
          </h2>
          <p style={{ color: '#aaa', fontSize: '1.15rem', maxWidth: 450, lineHeight: 1.7 }}>
            Whether you need consulting, a custom build, or help with the ZyncSpace platform — reach our team directly.
          </p>
          <div className="office-list" style={{ marginTop: 32 }}>
            <div className="office">
              <h4>Email</h4>
              <p style={{ color: '#ddd', fontSize: '0.95rem', lineHeight: 1.6 }}>
                <a href={`mailto:${siteContact.email}`} style={{ color: '#fff' }}>{siteContact.email}</a>
                <br />
                <a href={`mailto:${siteContact.supportEmail}`} style={{ color: '#aaa' }}>{siteContact.supportEmail}</a>
              </p>
            </div>
            <div className="office">
              <h4>{siteContact.location.city}</h4>
              <p style={{ color: '#ddd', fontSize: '0.95rem', lineHeight: 1.6 }}>{siteContact.location.address}</p>
            </div>
          </div>
          {!compact ? (
            <p style={{ color: '#888', fontSize: '0.9rem', marginTop: 24 }}>{siteContact.responseTime}</p>
          ) : null}
        </div>
        <div>
          <div className="form-box">
            <span className="label" style={{ color: '#888' }}>Send a message</span>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.5rem', marginBottom: 10, fontWeight: 500 }}>
              How can we help?
            </h3>
            <p style={{ color: '#888', fontSize: '0.95rem', marginBottom: 24 }}>
              Fill out the form and we&apos;ll get back to you as soon as possible.
            </p>
            <form className="aetheris-contact-form" action={siteContact.formAction} method="POST">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name">Full Name</label>
                  <input type="text" id="contact-name" name="name" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Email</label>
                  <input type="email" id="contact-email" name="email" placeholder="you@company.com" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="contact-subject">Subject</label>
                <select id="contact-subject" name="subject" required defaultValue="">
                  <option value="" disabled>Select a subject</option>
                  {siteContact.subjectOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea id="contact-message" name="message" placeholder="Tell us about your project or question…" required />
              </div>
              <button type="submit" className="btn btn-white btn-full">Send Message ↗</button>
            </form>
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
          <p className="service-page-desc">We&apos;d love to hear from you — consulting, product support, or partnerships.</p>
        </div>
      </header>
      <ContactSection compact />
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
