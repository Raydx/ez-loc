const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
  },
  env: {
    node: true,
    browser: true,
  },
  plugins: ['@typescript-eslint', 'no-relative-import-paths'],
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:@typescript-eslint/recommended-requiring-type-checking', 'plugin:@stencil-community/recommended'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['index.ts'],
      rules: {
        'no-relative-import-paths/no-relative-import-paths': ['warn', { allowSameFolder: false, rootDir: 'src', prefix: '~' }],
      },
    },
    {
      files: ['*.stories.ts'],
      rules: {
        'no-relative-import-paths/no-relative-import-paths': 0,
      },
    },
  ],
  rules: {
    'react/jsx-no-bind': 0,
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer: 'no-type-imports',
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-misused-promises': [
      2,
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
    'no-relative-import-paths/no-relative-import-paths': ['warn', { allowSameFolder: true, rootDir: 'src', prefix: '~' }],
    // TODO: fix another fix
    //? unsafe return triggerd in render
    '@typescript-eslint/no-unsafe-return': 0,
    '@stencil-community/strict-boolean-conditions': 0,
  },
});
