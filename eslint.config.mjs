import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';

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
            // 'react/jsx-indent': [2, 4],
            // 'react/jsx-indent-props': [2, 4],
            // indent: [2, 4],
            // 'react/jsx-filename-extension': [
            //     2,
            //     { extensions: ['.js', '.jsx', '.tsx'] },
            // ],
        },
    },
]);
