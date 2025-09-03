import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';
import fs from 'fs';
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
    if (!webpackConfig.module.rules) webpackConfig.module.rules = [];

    const styleLoader = {
      test: /\.s[ac]ss$/i,
      exclude: /\.module\.s[ac]ss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../../src'),
    };

    const styleModuleLoader = {
      test: /\.module\.s[ac]ss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            esModule: false,
            modules: {
              localIdentName: '[path]__[local]--[hash:base64:5]',
            },
            importLoaders: 1,
          },
        },
        'sass-loader',
      ],
      include: path.resolve(__dirname, '../../src'),
    };

    webpackConfig.module.rules.push(styleLoader);
    webpackConfig.module.rules.push(styleModuleLoader);

    if (!webpackConfig.resolve.alias) webpackConfig.resolve.alias = {};

    const srcPath = path.resolve(__dirname, '../../src');
    const dirs = fs
      .readdirSync(srcPath, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);

    if (!webpackConfig.resolve.alias) webpackConfig.resolve.alias = {};

    dirs.forEach((dirName) => {
      (webpackConfig.resolve.alias as Record<string, string>)[dirName] =
        path.join(srcPath, dirName);
    });

    // console.log(webpackConfig);
    return webpackConfig;
  },
};
export default config;
