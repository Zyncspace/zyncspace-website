import { cn } from '@/lib/utils';

type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
  dark?: boolean;
};

export default function Section({ id, className, children, dark }: SectionProps) {
  return (
    <section id={id} className={cn('section', dark && 'section-dark', className)}>
      <div className="container">{children}</div>
    </section>
  );
}

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn('section-header', align === 'center' && 'text-center', className)}>
      {eyebrow ? <span className="section-eyebrow">{eyebrow}</span> : null}
      <h2 className="section-title">{title}</h2>
      {description ? <p className="section-desc">{description}</p> : null}
    </div>
  );
}
