export type LegalPageListItem = string | { label: string; text: string };

type LegalPageSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  list?: LegalPageListItem[];
  closing?: string;
  contact?: { intro: string; email: string };
};

export type LegalPageContent = {
  label: string;
  title: string;
  description: string;
  lastUpdated: string;
  intro: string;
  sections: LegalPageSection[];
};
