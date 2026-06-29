import { getPartnerLogo } from '@/lib/partner-logos';

type PartnerLogoProps = {
  name: string;
};

export default function PartnerLogo({ name }: PartnerLogoProps) {
  const logo = getPartnerLogo(name);

  if (logo.kind === 'wordmark') {
    return (
      <span className="partner-logo partner-logo--wordmark" title={logo.title}>
        {logo.label}
      </span>
    );
  }

  const { icon } = logo;

  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      className="partner-logo"
      aria-label={icon.title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{icon.title}</title>
      <path d={icon.path} fill="currentColor" />
    </svg>
  );
}
