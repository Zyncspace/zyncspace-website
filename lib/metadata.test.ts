import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { buildMetadata, SITE_URL } from '@/lib/metadata';

describe('buildMetadata', () => {
  it('sets canonical and openGraph url', () => {
    const meta = buildMetadata({
      title: 'Features',
      description: 'Product features',
      path: '/features',
    });
    assert.equal(meta.alternates?.canonical, `${SITE_URL}/features`);
    assert.equal(meta.openGraph?.url, `${SITE_URL}/features`);
  });
});
