import Link from 'next/link';
import { blogCategories } from '@/content/blog-index';
import { siteContact } from '@/content/site';
import { getAllBlogPosts } from '@/lib/content';
import { buildMetadata, collectionPageSchema, JsonLd } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Blog',
  description:
    'Expert insights on team communication, productivity, and building better workplaces.',
  path: '/blogs',
  keywords:
    'team communication, workplace blog, productivity tips, remote work, collaboration tools, office communication',
});

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function BlogsPage() {
  const posts = getAllBlogPosts();
  const featured = posts.find((p) => p.featured) ?? posts[0];
  const rest = posts.filter((p) => p.slug !== featured?.slug);

  return (
    <>
      <JsonLd
        data={collectionPageSchema({
          title: 'ZyncSpace Blog',
          description:
            'Expert insights on team communication, productivity, and building better workplaces.',
          path: '/blogs',
        })}
      />
      <section className="blog-hero">
        <div className="container">
          <div className="blog-hero-content">
            <span className="label blog-hero-label">Insights & Resources</span>
            <h1>
              ZyncSpace <span className="text-gradient">Blog</span>
            </h1>
            <p className="blog-hero-subtitle">
              Expert insights on team communication, productivity, and building better workplaces.
            </p>
            <div className="blog-stats">
              <div className="blog-stat">
                <div className="blog-stat-number">25+</div>
                <div className="blog-stat-label">Articles</div>
              </div>
              <div className="blog-stat">
                <div className="blog-stat-number">10+</div>
                <div className="blog-stat-label">Categories</div>
              </div>
              <div className="blog-stat">
                <div className="blog-stat-number">Weekly</div>
                <div className="blog-stat-label">Updates</div>
              </div>
            </div>
            <div className="blog-categories">
              {blogCategories.map((cat) => (
                <span key={cat} className="blog-category-pill">
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="blog-listing-section">
        <div className="container">
          {featured ? (
            <article className="featured-blog">
              <Link href={`/blogs/${featured.slug}`} className="featured-image">
                <img src={featured.thumbnail} alt={featured.title} />
              </Link>
              <div className="featured-content">
                <span className="featured-badge">Featured</span>
                <div className="blog-meta">
                  <span className="blog-category">{featured.category}</span>
                  <span>•</span>
                  <time dateTime={featured.datePublished}>
                    {formatDate(featured.datePublished)}
                  </time>
                  {featured.readTime ? (
                    <>
                      <span>•</span>
                      <span>{featured.readTime}</span>
                    </>
                  ) : null}
                </div>
                <h2>
                  <Link href={`/blogs/${featured.slug}`}>{featured.title}</Link>
                </h2>
                <p className="blog-excerpt">{featured.description}</p>
                <Link href={`/blogs/${featured.slug}`} className="blog-link">
                  Read Article →
                </Link>
              </div>
            </article>
          ) : null}

          <div className="blog-grid blog-grid-rich">
            {rest.map((post) => (
              <article key={post.slug} className="blog-card blog-card-rich">
                <Link href={`/blogs/${post.slug}`} className="blog-image">
                  <img src={post.thumbnail} alt={post.title} />
                </Link>
                <div className="blog-card-content">
                  <div className="blog-meta">
                    <span className="blog-category">{post.category}</span>
                    <span>•</span>
                    <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time>
                  </div>
                  <h3>
                    <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="blog-excerpt">{post.description}</p>
                  <Link href={`/blogs/${post.slug}`} className="blog-link">
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="blog-cta-section">
        <div className="container">
          <div className="blog-cta-box">
            <h2>Stay Updated</h2>
            <p>Get the latest insights on team communication delivered to your inbox.</p>
            <div className="blog-cta-actions">
              <Link href={siteContact.signupUrl} className="btn btn-white">
                Try ZyncSpace Free →
              </Link>
              <Link href="/contact" className="btn btn-outline-dark">
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
