module.exports = {
  env: {
    browser: true,
    node: true
  },
  plugins: [
    'react',
    'react-hooks',
    'prettier',
    '@typescript-eslint',
    'simple-import-sort',
    'sort-destructure-keys',
    'import',
    'react-hooks',
    'json-format'
  ],
  settings: {
    next: {
      rootDir: ['apps/*/', 'packages/*/']
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: ['apps/*/tsconfig.json']
      }
    }
  },
  extends: [
    'eslint:recommended',
    'next',
    'next/core-web-vitals',
    'prettier',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended'
  ],
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'sort-destructure-keys/sort-destructure-keys': 2,
    'import/no-unresolved': 'error',
    'no-console': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error'
  },
  ignorePatterns: ['**/*.js', '**/*.json', 'node_modules', 'public', 'styles', '.next', 'coverage', 'dist', '.turbo']
};
