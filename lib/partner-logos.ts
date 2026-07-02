import {
  type SimpleIcon,
  siAnthropic,
  siAtlassian,
  siCloudflare,
  siDatadog,
  siDocker,
  siFigma,
  siGithub,
  siGooglecloud,
  siGooglegemini,
  siGrafana,
  siHashicorp,
  siHubspot,
  siHuggingface,
  siKubernetes,
  siMeta,
  siMistralai,
  siMongodb,
  siNvidia,
  siPostgresql,
  siRedis,
  siStripe,
  siSupabase,
  siVercel,
  siZoho,
} from 'simple-icons';

export type PartnerLogoData =
  | { kind: 'icon'; icon: SimpleIcon }
  | { kind: 'wordmark'; label: string; title: string };

const PARTNER_ICONS: Record<string, SimpleIcon> = {
  'Google Cloud': siGooglecloud,
  Anthropic: siAnthropic,
  'Google Gemini': siGooglegemini,
  'Hugging Face': siHuggingface,
  NVIDIA: siNvidia,
  'Meta AI': siMeta,
  'Mistral AI': siMistralai,
  GitHub: siGithub,
  Docker: siDocker,
  Kubernetes: siKubernetes,
  HashiCorp: siHashicorp,
  Cloudflare: siCloudflare,
  Vercel: siVercel,
  Supabase: siSupabase,
  PostgreSQL: siPostgresql,
  MongoDB: siMongodb,
  Redis: siRedis,
  Datadog: siDatadog,
  Grafana: siGrafana,
  Figma: siFigma,
  Atlassian: siAtlassian,
  Zoho: siZoho,
  HubSpot: siHubspot,
  Stripe: siStripe,
};

/** Brands not available in simple-icons v16+ use text wordmarks instead. */
const PARTNER_WORDMARKS: Record<string, { label: string; title: string }> = {
  AWS: { label: 'AWS', title: 'Amazon Web Services' },
  'Microsoft Azure': { label: 'Azure', title: 'Microsoft Azure' },
  OpenAI: { label: 'OpenAI', title: 'OpenAI' },
  Slack: { label: 'Slack', title: 'Slack' },
  Twilio: { label: 'Twilio', title: 'Twilio' },
  Salesforce: { label: 'Salesforce', title: 'Salesforce' },
};

export function getPartnerLogo(name: string): PartnerLogoData {
  const icon = PARTNER_ICONS[name];
  if (icon) return { kind: 'icon', icon };

  const wordmark = PARTNER_WORDMARKS[name];
  if (wordmark) return { kind: 'wordmark', ...wordmark };

  return { kind: 'wordmark', label: name, title: name };
}
