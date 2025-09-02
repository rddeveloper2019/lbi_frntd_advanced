import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';
import i18next from 'eslint-plugin-i18next';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.json',
        sourceType: 'module',
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      react: pluginReact,
    },
  },

  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,

  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      'i18next/no-literal-string': 'warn',
      'i18next/no-literal-string': [
        'error',
        {
          markupOnly: true,
          ignoreAttribute: ['data-testid', 'to'],
        },
      ],
      'max-len': ['error', { ignoreComments: true, code: 100 }],
    },
  },
  i18next.configs['flat/recommended'],
  {
    overrides: [
      {
        files: ['**/src/**/*.test.{ts,tsx}'],
        rules: {
          'i18next/no-literal-string': 'off',
        },
      },
    ],
  },
]);
