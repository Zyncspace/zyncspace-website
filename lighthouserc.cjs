/** @type {import('@lhci/cli/src/index').LHCI.ServerCommand.Options} */
module.exports = {
  ci: {
    collect: {
      staticDistDir: './out',
      numberOfRuns: 1,
      url: [
        '/index.html',
        '/pricing.html',
        '/features.html',
        '/trust-center.html',
        '/services.html',
      ],
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.75 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['warn', { minScore: 0.85 }],
        'categories:seo': ['error', { minScore: 0.9 }],
        // Static Next export - structural limits, not regressions
        'offscreen-images': 'off',
        'unused-css-rules': 'off',
        'unused-javascript': 'off',
        'legacy-javascript': 'off',
        'legacy-javascript-insight': 'off',
        'network-dependency-tree-insight': 'off',
        'image-delivery-insight': 'off',
        'forced-reflow-insight': 'off',
        'render-blocking-resources': 'off',
        'render-blocking-insight': 'off',
        'uses-responsive-images': 'off',
        'prioritize-lcp-image': 'off',
        'non-composited-animations': 'off',
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
