// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook';

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
  i18next.configs['flat/recommended'],

  {
    rules: {
      'react/display-name': 'off',
      'react/react-in-jsx-scope': 'off',

      'i18next/no-literal-string': [
        'error',
        {
          markupOnly: true,
          ignoreAttribute: ['data-testid', 'to'],
        },
      ],

      'max-len': [
        'error',
        {
          code: 100,
          ignoreComments: true,
          ignoreTrailingComments: true,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true,
          ignorePattern: '<svg|<path|d=|fill-rule|clip-rule',
        },
      ],
    },
  },

  {
    files: ['src/components/icons/**/*.tsx', 'src/assets/icons/**/*.tsx'],
    rules: {
      'max-len': 'off',
    },
  },

  {
    files: ['**/*.{jsx,tsx}'],
    rules: {
      'react/no-unknown-property': [
        'error',
        {
          ignore: [
            'fill-rule',
            'clip-rule',
            'stroke-linecap',
            'stroke-linejoin',
            'vector-effect',
          ],
        },
      ],
    },
  },

  {
    files: ['**/src/**/*.test.{ts,tsx}'],
    rules: {
      'i18next/no-literal-string': 'off',
    },
  },
]);
