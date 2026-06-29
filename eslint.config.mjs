import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';
import sonarjs from 'eslint-plugin-sonarjs';

export default [
  ...nextCoreWebVitals,
  ...nextTypescript,
  sonarjs.configs.recommended,
  {
    rules: {
      'sonarjs/cognitive-complexity': ['warn', 15],
      'sonarjs/no-duplicate-string': 'off',
      'sonarjs/no-dead-store': 'warn',
      'sonarjs/no-nested-template-literals': 'warn',
      'sonarjs/no-unused-vars': 'warn',
      'sonarjs/regex-complexity': 'warn',
      'sonarjs/super-linear-regex': 'warn',
      'sonarjs/unused-import': 'warn',
    },
  },
  {
    files: ['scripts/**', 'js/**'],
    rules: {
      'sonarjs/cognitive-complexity': 'off',
      'sonarjs/regex-complexity': 'off',
      'sonarjs/super-linear-regex': 'off',
    },
  },
];
