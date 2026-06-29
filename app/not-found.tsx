import Link from 'next/link';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist or has been moved.',
  path: '/404',
  noIndex: true,
});

export default function NotFound() {
  return (
    <main
      className="section-padding"
      style={{ minHeight: '60vh', display: 'grid', placeItems: 'center' }}
    >
      <div className="container" style={{ textAlign: 'center' }}>
        <span className="label">404</span>
        <h1>Page not found</h1>
        <p style={{ color: 'var(--muted-text)', maxWidth: 480, margin: '1rem auto 2rem' }}>
          The page you requested could not be found. Try the homepage or contact us if you need
          help.
        </p>
        <Link href="/" className="btn btn-white">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
