/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    extends: ['./base.mjs'],
    rules: {
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
    env: {
      node: true,
      jest: true,
    },
  },
];
