import Link from 'next/link';
import type {
  LegalPageContent as LegalPageContentData,
  LegalPageListItem,
} from '@/content/legal-page';

function LegalListItem({ item }: { item: LegalPageListItem }) {
  if (typeof item === 'string') {
    return <li>{item}</li>;
  }
  return (
    <li>
      <strong>{item.label}:</strong> {item.text}
    </li>
  );
}

export default function LegalPageContent({
  label,
  title,
  description,
  lastUpdated,
  intro,
  sections,
}: LegalPageContentData) {
  return (
    <>
      <header className="legal-page-hero">
        <div className="container">
          <span className="label legal-page-hero-label">{label}</span>
          <h1>{title}</h1>
          <p className="legal-page-hero-lead">{description}</p>
        </div>
      </header>

      <article className="legal-page-body">
        <div className="container legal-page-container">
          <p className="legal-page-updated">Last updated: {lastUpdated}</p>
          <p className="legal-page-intro">{intro}</p>

          <nav className="legal-page-toc" aria-label="Policy sections">
            <span className="legal-page-toc-label">On this page</span>
            <ol>
              {sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>{section.title.replace(/^\d+\.\s*/, '')}</a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="legal-page-sections">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="legal-page-section">
                <h2>{section.title}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={`${section.id}-${paragraph.slice(0, 48)}`}>{paragraph}</p>
                ))}
                {section.list ? (
                  <ul>
                    {section.list.map((item) => (
                      <LegalListItem
                        key={typeof item === 'string' ? item : item.label}
                        item={item}
                      />
                    ))}
                  </ul>
                ) : null}
                {section.closing ? <p>{section.closing}</p> : null}
                {section.contact ? (
                  <div className="legal-page-contact">
                    <p>{section.contact.intro}</p>
                    <p>
                      <strong>Email:</strong>{' '}
                      <Link href={`mailto:${section.contact.email}`}>{section.contact.email}</Link>
                    </p>
                  </div>
                ) : null}
              </section>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
