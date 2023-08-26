module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:storybook/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react-refresh', 'import', '@typescript-eslint'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'no-constant-binary-expression': 'error',
    'no-self-compare': 'error',
    'no-template-curly-in-string': 'error',
    'no-floating-decimal': 'error',
    'no-else-return': ['error', { allowElseIf: false }],
    'default-case': 'error',
    'default-case-last': 'error',
    'no-unneeded-ternary': 'error',
    'object-shorthand': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-object-spread': 'error',
    'prefer-template': 'error',
    eqeqeq: 'error',
    yoda: 'error',

    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/forbid-dom-props': ['warn', { forbid: ['style'] }],
    'react/forbid-elements': ['warn', { forbid: ['button', 'input'] }],
    'react/no-unstable-nested-components': ['warn', { allowAsProps: true }],
    'react/self-closing-comp': [
      'warn',
      {
        component: true,
        html: true,
      },
    ],
    'react/void-dom-elements-no-children': 'warn',
    'react/jsx-boolean-value': 'warn',
    'react/jsx-curly-brace-presence': ['warn', 'never'],
    'react/jsx-fragments': ['warn', 'syntax'],
    'react/jsx-max-depth': ['warn', { max: 8 }],
    'react/jsx-no-useless-fragment': ['warn', { allowExpressions: true }],
    'react/no-array-index-key': 'error',

    '@typescript-eslint/no-empty-function': ['off'],
    '@typescript-eslint/default-param-last': 'error',
    '@typescript-eslint/require-array-sort-compare': 'warn',
    '@typescript-eslint/no-confusing-void-expression': 'warn',
    '@typescript-eslint/method-signature-style': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '_', argsIgnorePattern: '_' }],
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          '{}': false,
        },
      },
    ],
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true,
      },
    ],
  },
};
