import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllBlogSlugs, getBlogPost } from '@/lib/content';
import { buildMetadata, JsonLd, articleSchema, breadcrumbSchema } from '@/lib/metadata';
import readingTime from 'reading-time';
import BlogArticleBody from '@/components/blog/BlogArticleBody';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blogs/${slug}`,
    keywords: post.keywords,
    image: post.ogImage,
    type: 'article',
    publishedTime: post.datePublished,
    section: 'Blog',
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const stats = readingTime(post.content);

  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Blog', path: '/blogs' },
        { name: post.title },
      ])} />
      <JsonLd
        data={articleSchema({
          title: post.title,
          description: post.description,
          slug,
          datePublished: post.datePublished,
          image: post.ogImage,
          wordCount: stats.words,
        })}
      />
      <header className="blog-page-header">
        <div className="container">
          <Link href="/blogs" className="btn btn-outline-dark" style={{ marginBottom: '2rem', display: 'inline-flex' }}>← Back to Blog</Link>
          <h1>{post.title}</h1>
          <p style={{ color: '#ccc' }}>{new Date(post.datePublished).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>
      </header>
      <BlogArticleBody post={post} />
    </>
  );
}
