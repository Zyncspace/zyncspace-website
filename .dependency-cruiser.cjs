/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
  forbidden: [
    {
      name: 'no-circular',
      severity: 'error',
      from: {},
      to: { circular: true },
    },
    {
      name: 'not-to-test',
      severity: 'error',
      from: { pathNot: '\\.(test|spec)\\.(ts|tsx)$' },
      to: { path: '\\.(test|spec)\\.(ts|tsx)$' },
    },
  ],
  options: {
    exclude: {
      path: [
        'node_modules',
        '\\.next',
        '^out',
        'service-based-website',
        'playwright-report',
        'coverage',
      ],
    },
    tsPreCompilationDeps: true,
    tsConfig: { fileName: 'tsconfig.json' },
  },
};
