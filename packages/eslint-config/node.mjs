import globals from 'globals';
import js from '@eslint/js';
// import parser from '@typescript-eslint/parser';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...tseslint.configs.recommended,
  js.configs.recommended,
  react.configs.flat.recommended,
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  {
    languageOptions: {
      globals: {
        ...globals.node,
        // parser,
      },
    },
  },
];
