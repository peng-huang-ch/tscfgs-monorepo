const reactPlugin = require('eslint-plugin-react-hooks');
const base = require('./base.mjs');

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...base.map((config) => ({
    ...config,
    files: [...(config.files ?? []), '**/*.tsx'],
  })),
  {
    plugins: {
      'react-hooks': reactPlugin,
    },
    rules: reactPlugin.configs.recommended.rules,
  },
];
