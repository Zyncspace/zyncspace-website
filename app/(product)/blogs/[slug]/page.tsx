import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllBlogRoutes, getBlogPost, getCanonicalBlogSlug } from '@/lib/content';
import { buildMetadata, JsonLd, articleSchema, breadcrumbSchema, faqSchema } from '@/lib/metadata';
import { SITE_URL } from '@/lib/site-url';
import readingTime from 'reading-time';
import BlogArticleBody from '@/components/blog/BlogArticleBody';
import { blogEnhancements } from '@/content/blog-enhancements';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllBlogRoutes().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  const canonicalSlug = getCanonicalBlogSlug(slug) ?? post.slug;

  return {
    ...buildMetadata({
      title: post.title,
      description: post.description,
      path: `/blogs/${canonicalSlug}`,
      keywords: post.keywords,
      image: post.ogImage,
      type: 'article',
      publishedTime: post.datePublished,
      section: post.category,
    }),
    alternates: {
      canonical: `${SITE_URL}/blogs/${canonicalSlug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const canonicalSlug = post.slug;
  const stats = readingTime(post.content);
  const enhancement = blogEnhancements[canonicalSlug];
  const faq = enhancement?.faqs?.length ? faqSchema(enhancement.faqs) : null;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blogs' },
          { name: post.title },
        ])}
      />
      {faq ? <JsonLd data={faq} /> : null}
      <JsonLd
        data={articleSchema({
          title: post.title,
          description: post.description,
          slug: canonicalSlug,
          datePublished: post.datePublished,
          image: post.ogImage,
          wordCount: stats.words,
        })}
      />
      <header className="blog-post-header">
        <div className="container">
          <Link href="/blogs" className="blog-back-link">
            ← Back to Blog
          </Link>
          <div className="blog-meta blog-post-meta">
            <span className="blog-category">{post.category}</span>
            <span>•</span>
            <time dateTime={post.datePublished}>
              {new Date(post.datePublished).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </time>
            <span>•</span>
            <span>{stats.text}</span>
          </div>
          <h1>{post.title}</h1>
        </div>
      </header>
      <BlogArticleBody post={post} />
    </>
  );
}
