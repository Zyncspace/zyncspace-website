import type { BlogPost } from '@/lib/types';

export default function BlogArticleBody({ post }: { post: BlogPost }) {
  const content = post.content
    .replace(/<header class="blog-header">[\s\S]*?<\/header>/gi, '')
    .replace(/<h1\b([^>]*)>/gi, '<h2$1>')
    .replace(/<\/h1>/gi, '</h2>');
  return (
    <article className="blog-article-body">
      <div className="container" dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  );
}
