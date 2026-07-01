import { siteContact } from '@/content/site';

/** Lead sources for Pipedream → Google Sheet routing. */
export const contactFormSources = {
  contactPage: 'contact-page',
  homePartner: 'home-partner',
  homeCompact: 'home-compact',
  pricingDemo: 'pricing-demo',
  pricingWaitlist: 'pricing-waitlist',
  featuresSales: 'features-sales',
  useCasesDemo: 'use-cases-demo',
} as const;

export type ContactFormSource = (typeof contactFormSources)[keyof typeof contactFormSources];

export const contactFormTypes = {
  contactFull: 'contact-full',
  partnerConsulting: 'partner-consulting',
} as const;

export type ContactFormType = (typeof contactFormTypes)[keyof typeof contactFormTypes];

export const contactIntents = {
  demo: 'demo',
  waitlist: 'waitlist',
  sales: 'sales',
  consulting: 'consulting',
  general: 'general',
} as const;

export type ContactIntent = (typeof contactIntents)[keyof typeof contactIntents];

const intentLabels: Record<ContactIntent, string> = {
  demo: 'Book a product demo',
  waitlist: 'Join the waitlist',
  sales: 'Talk to sales',
  consulting: 'Consulting inquiry',
  general: 'Send us a message',
};

const intentDefaultSubject: Record<ContactIntent, string> = {
  demo: 'sales',
  waitlist: 'sales',
  sales: 'sales',
  consulting: 'consulting',
  general: 'general',
};

export type ContactHrefOptions = {
  source?: ContactFormSource;
  subject?: string;
  intent?: ContactIntent;
};

/** Build `/contact` links with tracking query params for CTAs. */
export function contactHref(options: ContactHrefOptions = {}): string {
  const params = new URLSearchParams();
  if (options.source) params.set('source', options.source);
  if (options.intent) params.set('intent', options.intent);
  if (options.subject) params.set('subject', options.subject);
  const query = params.toString();
  return query ? `/contact?${query}` : '/contact';
}

export function isContactIntent(value: string | undefined): value is ContactIntent {
  return value !== undefined && Object.values(contactIntents).includes(value as ContactIntent);
}

export function resolveContactSubject(
  subject?: string,
  intent?: ContactIntent,
): string | undefined {
  if (subject && siteContact.subjectOptions.some((option) => option.value === subject)) {
    return subject;
  }
  if (intent) {
    return intentDefaultSubject[intent];
  }
  return undefined;
}

export function contactIntentLabel(intent?: ContactIntent): string | undefined {
  return intent ? intentLabels[intent] : undefined;
}

/**
 * Fields POSTed to `siteContact.formAction` (Pipedream webhook).
 *
 * Shared: source, form_type, intent, page_path, website (honeypot — ignore if filled)
 *
 * contact-full: name, email, company, phone, subject, message
 * partner-consulting: name, email, company, objectives (multi), message (optional)
 */
export const contactFormFieldDocs = {
  shared: ['source', 'form_type', 'intent', 'page_path', 'website'],
  contactFull: ['name', 'email', 'company', 'phone', 'subject', 'message'],
  partnerConsulting: ['name', 'email', 'company', 'objectives', 'message'],
} as const;
