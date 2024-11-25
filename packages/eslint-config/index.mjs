import sortKeysFixPlugin from 'eslint-plugin-sort-keys-fix';

import baseConfig from './base.mjs';

export default [
  ...baseConfig,
  {
    ignores: ['eslint.config.mjs'],
    plugins: {
      'sort-keys-fix': sortKeysFixPlugin,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
        },
      ],
      'no-unused-vars': 'off',
    },
  },
];
