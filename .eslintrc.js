module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    '@typescript-eslint',
    'prettier',
    'react',
    'simple-import-sort',
    'import',
  ],
  rules: {
    'no-console': 1,
    'prettier/prettier': 1,
    'import/no-cycle': 0,
    'import/default': 0,
    'no-unused-vars': 1,
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_i' }],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-unescaped-entities': 1,
    '@typescript-eslint/no-empty-interface': 'off',
    'no-empty-function': ['error', { allow: ['arrowFunctions', 'methods'] }],
    'simple-import-sort/exports': 'warn',
    '@typescript-eslint/triple-slash-reference': 'warn',
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: '@(react)',
            group: 'external',
          },
          {
            pattern: '@src/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'react/prop-types': 0,
  },
  ignorePatterns: [
    '.eslintrc.js',
    'node_modules',
    'lib',
    'dir',
    'config',
    'scripts',
  ],
};
