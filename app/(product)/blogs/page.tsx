import Link from 'next/link';
import { getAllBlogPosts } from '@/lib/content';
import { buildMetadata, JsonLd, collectionPageSchema } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Blog',
  description: 'Insights on team communication, productivity, AI consulting, and the future of workplace collaboration.',
  path: '/blogs',
  keywords: 'team communication, workplace blog, productivity tips, remote work, AI consulting',
});

export default function BlogsPage() {
  const posts = getAllBlogPosts();
  const title = 'Team Communication Insights';
  const description =
    'Expert guides on workplace communication, collaboration, productivity, and AI from the ZyncSpace team.';

  return (
    <>
      <JsonLd data={collectionPageSchema({ title, description, path: '/blogs' })} />
      <header className="blog-page-header">
        <div className="container">
          <span className="label" style={{ color: '#aaa' }}>Product Blog</span>
          <h1>Team Communication Insights</h1>
          <p style={{ color: '#ccc', maxWidth: 600, margin: '0 auto' }}>
            Expert guides on workplace communication, collaboration, and productivity from the ZyncSpace team.
          </p>
        </div>
      </header>
      <div className="container">
        <div className="blog-grid">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blogs/${post.slug}`} className="blog-card">
              <span className="label">{new Date(post.datePublished).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              <h3>{post.title}</h3>
              <p style={{ color: 'var(--muted-text)', fontSize: '0.95rem' }}>{post.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
