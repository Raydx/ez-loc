const { defineConfig } = require('prettier-define-config');

module.exports = defineConfig({
  plugins: ['prettier-plugin-package', '@ianvs/prettier-plugin-sort-imports'],
  arrowParens: 'avoid',
  bracketSpacing: true,
  quoteProps: 'consistent',
  jsxSingleQuote: true,
  printWidth: 110,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  importOrder: ['^@stencil', '<THIRD_PARTY_MODULES>', '', '^~/(.*)$', '^[./](?!.*s?css)', '', 's?css$'],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true,
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,
});
