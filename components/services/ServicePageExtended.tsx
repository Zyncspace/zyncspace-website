import type { ServicePageExtendedSection } from '@/content/service-pages';

type Props = {
  sections: ServicePageExtendedSection[];
};

export default function ServicePageExtended({ sections }: Props) {
  return (
    <section className="section-padding service-page-extended">
      <div className="container service-page-extended-inner">
        {sections.map((section, index) => (
          <article key={section.title} className="service-page-extended-block">
            <span className="service-page-extended-num">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph, i) => (
              <p key={`${section.title}-${i}`}>{paragraph}</p>
            ))}
          </article>
        ))}
      </div>
    </section>
  );
}
