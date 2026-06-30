const auditOverrides = {
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
};

const categoryAssertions = (performanceMin) => ({
  'categories:performance': ['error', { minScore: performanceMin }],
  'categories:accessibility': ['error', { minScore: 0.9 }],
  'categories:best-practices': ['warn', { minScore: 0.85 }],
  'categories:seo': ['error', { minScore: 0.9 }],
  ...auditOverrides,
});

/** @type {import('@lhci/cli/src/index').LHCI.ServerCommand.Options} */
module.exports = {
  ci: {
    collect: {
      staticDistDir: './out',
      numberOfRuns: 2,
      url: [
        '/index.html',
        '/pricing.html',
        '/features.html',
        '/trust-center.html',
        '/services.html',
      ],
    },
    assert: {
      // assertMatrix cannot be combined with top-level assertions (LHCI throws)
      assertMatrix: [
        {
          matchingUrlPattern: '.*index\\.html',
          assertions: categoryAssertions(0.6),
        },
        {
          matchingUrlPattern: '.*(pricing|features|trust-center|services)\\.html',
          assertions: categoryAssertions(0.75),
        },
      ],
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
