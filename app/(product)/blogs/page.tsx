import Link from 'next/link';
import { getAllBlogPosts } from '@/lib/content';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Blog - ZyncSpace | Team Communication Insights',
  description: 'Insights on team communication, productivity, and the future of workplace collaboration.',
  path: '/blogs',
  keywords: 'team communication, workplace blog, productivity tips, remote work',
});

export default function BlogsPage() {
  const posts = getAllBlogPosts();

  return (
    <>
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
