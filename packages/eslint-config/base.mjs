// @ts-check
import eslint from '@eslint/js';

import simpleImportSort from 'eslint-plugin-simple-import-sort';
import typescriptSortKeys from 'eslint-plugin-typescript-sort-keys';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended, // eslint recommended rules
  tseslint.configs.recommendedTypeChecked, // typescript recommended rules
  eslintConfigPrettier,
  {
    files: ['**/*.ts'],
    languageOptions: {
      globals: {
        ...globals.es2020,
        ...globals['shared-node-browser'],
      },
      parserOptions: {
        projectService: true,
        project: 'tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
      sourceType: 'module',
    },
    plugins: {
      'simple-import-sort': simpleImportSort,
      'typescript-sort-keys': typescriptSortKeys,
    },
  },
  {
    files: ['eslint.config.mjs'],
    extends: [tseslint.configs.disableTypeChecked],
  }
);
