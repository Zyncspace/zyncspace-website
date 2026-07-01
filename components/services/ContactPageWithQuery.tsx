'use client';

import { useSyncExternalStore } from 'react';
import { ContactPageContent } from '@/components/services/ContactSection';
import {
  type ContactIntent,
  contactFormSources,
  isContactIntent,
  resolveContactSubject,
} from '@/lib/contact';

type QueryState = {
  source: string;
  defaultSubject?: string;
  intent?: ContactIntent;
};

const defaultQuery: QueryState = { source: contactFormSources.contactPage };

function parseContactQuery(search: string): QueryState {
  if (!search) return defaultQuery;

  const params = new URLSearchParams(search);
  const intentParam = params.get('intent') ?? undefined;
  const intent = isContactIntent(intentParam) ? intentParam : undefined;

  return {
    source: params.get('source') ?? contactFormSources.contactPage,
    defaultSubject: resolveContactSubject(params.get('subject') ?? undefined, intent),
    intent,
  };
}

function getContactSearchSnapshot(): string {
  if (typeof window === 'undefined') return '';
  return window.location.search;
}

function subscribeToContactSearch(onChange: () => void): () => void {
  window.addEventListener('popstate', onChange);
  return () => window.removeEventListener('popstate', onChange);
}

/** Reads /contact query params client-side so the page can stay statically exported. */
export default function ContactPageWithQuery() {
  const search = useSyncExternalStore(subscribeToContactSearch, getContactSearchSnapshot, () => '');
  const query = parseContactQuery(search);

  return (
    <ContactPageContent
      source={query.source}
      defaultSubject={query.defaultSubject}
      intent={query.intent}
    />
  );
}
