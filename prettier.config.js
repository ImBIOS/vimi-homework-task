/** @type {import('prettier').Config} */
module.exports = {
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  trailingComma: "all",
  printWidth: 80,
  useTabs: false,
  endOfLine: "auto",

  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "^types$",
    "^@local/(.*)$",
    "^@/config/(.*)$",
    "^@/lib/(.*)$",
    "^@/components/(.*)$",
    "^@/styles/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true,
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,

  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
};
