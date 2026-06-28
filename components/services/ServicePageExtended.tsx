import type { ServicePageExtendedSection } from '@/content/service-pages';

type Props = {
  sections: ServicePageExtendedSection[];
};

export default function ServicePageExtended({ sections }: Props) {
  return (
    <section className="section-padding service-page-extended">
      <div className="container service-page-extended-inner">
        {sections.map((section) => (
          <article key={section.title} className="service-page-extended-block">
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="section-lead">
                {paragraph}
              </p>
            ))}
          </article>
        ))}
      </div>
    </section>
  );
}
