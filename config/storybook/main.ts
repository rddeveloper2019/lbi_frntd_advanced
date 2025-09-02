// config/storybook/main.ts
import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: [
    '../../src/**/*.mdx',
    '../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: ['@storybook/addon-webpack5-compiler-swc', '@storybook/addon-docs'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  webpackFinal: async (webpackConfig) => {
    const path = require('path');

    // --- 1. Алиасы ---
    if (!webpackConfig.resolve) webpackConfig.resolve = {};
    if (!webpackConfig.resolve.alias) webpackConfig.resolve.alias = {};

    webpackConfig.resolve.alias.shared = path.resolve(
      __dirname,
      '../../src/shared'
    );

    // --- 2. Расширения ---
    webpackConfig.resolve.extensions = ['.js', '.jsx', '.ts', '.tsx', '.json'];

    // --- 3. Удаляем ТОЛЬКО правила, где test — регулярное выражение и совпадает с .scss/.css ---
    webpackConfig.module.rules = (webpackConfig.module.rules || []).filter(
      (rule: any) => {
        // Проверяем, что rule.test существует и это RegExp
        if (rule.test && rule.test instanceof RegExp) {
          return !rule.test.test('.scss') && !rule.test.test('.css');
        }
        return true; // пропускаем правила без test или с не-RegExp test
      }
    );

    // --- 4. Добавляем свои loaders ---
    if (!webpackConfig.module.rules) webpackConfig.module.rules = [];

    webpackConfig.module.rules.push({
      test: /\.module\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: {
              localIdentName: '[name]__[local]__[hash:base64:5]',
            },
          },
        },
        'sass-loader',
      ],
      include: path.resolve(__dirname, '../../src'),
    });

    // Глобальные SCSS
    webpackConfig.module.rules.push({
      test: /\.scss$/,
      exclude: /\.module\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../../src'),
    });

    return webpackConfig;
  },
};

export default config;
