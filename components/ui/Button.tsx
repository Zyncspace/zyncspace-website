import Link from 'next/link';
import { cn } from '@/lib/utils';

type ButtonProps = {
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
};

const variantClass: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'btn btn-primary',
  secondary: 'btn btn-secondary',
  ghost: 'btn btn-ghost',
};

export default function Button({
  href,
  variant = 'primary',
  className,
  children,
  onClick,
  type = 'button',
}: ButtonProps) {
  const cls = cn(variantClass[variant], className);
  if (href) {
    const external = href.startsWith('http');
    if (external) {
      return (
        <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={cls} onClick={onClick}>
      {children}
    </button>
  );
}
