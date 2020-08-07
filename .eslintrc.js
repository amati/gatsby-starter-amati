module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      globalReturn: false,
    },
  },
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier', 'prettier/react'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  globals: {},
  rules: {
    'linebreak-style': ['error', 'unix'],
    'prefer-const': 'error',
    'no-var': 'error',
    'no-console': 'warn',
    'react/no-unescaped-entities': 0,
  },
};
