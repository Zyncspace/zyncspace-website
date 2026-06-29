import type { BlogPost } from '@/lib/types';

export default function BlogArticleBody({ post }: { post: BlogPost }) {
  const content = post.content
    .replace(/<header class="blog-header">[\s\S]*?<\/header>/gi, '')
    .replace(/<h1\b([^>]*)>/gi, '<h2$1>')
    .replace(/<\/h1>/gi, '</h2>');
  return (
    <article className="blog-article-body">
      {/* Trusted MDX body from repo content — not user-supplied at runtime */}
      {/* nosemgrep: typescript.react.security.audit.react-dangerouslysetinnerhtml.react-dangerouslysetinnerhtml */}
      <div className="container" dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  );
}
