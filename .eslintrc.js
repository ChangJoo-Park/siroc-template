module.exports = {
  root: true,
  env: {
    browser: false,
    es6: true,
    node: true,
    'jest/globals': true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['jest', '@typescript-eslint'],
  extends: [
    'plugin:promise/recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'plugin:jest/recommended',
  ],
}
