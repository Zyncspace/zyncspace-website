type PageMetadata = {
  title: string;
  description: string;
  keywords?: string;
  canonical: string;
  og: {
    title: string;
    description: string;
    type: string;
    url: string;
    image: string;
  };
  jsonLd?: Record<string, unknown> | null;
};

export type PageContent = {
  slug: string;
  bodyClass?: string;
  styles: string;
  content: string;
  metadata: PageMetadata;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  keywords: string;
  datePublished: string;
  ogImage: string;
  thumbnail: string;
  category: string;
  readTime: string | null;
  featured: boolean;
  aliases: string[];
  jsonLd?: Record<string, unknown> | null;
  content: string;
  styles: string;
};
