module.exports = {
    env: {
      node: true,
      es2021: true,
      'jest/globals': true
    },
    extends: [
      'eslint:recommended',
      'plugin:jest/recommended'
    ],
    plugins: ['jest'],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module'
    },
    rules: {
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/valid-expect': 'error'
    }
  };