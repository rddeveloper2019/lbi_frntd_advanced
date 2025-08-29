import path from 'path';
import { type Configuration } from 'webpack';
import { buildPlugins } from './configs/build/buildPlugins';
import { buildLoaders } from './configs/build/buildLoaders';
import { buildResolve } from './configs/build/buildResolvers';

const config: Configuration = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
  module: {
    rules: buildLoaders(),
  },
  resolve: buildResolve(),
  plugins: buildPlugins(),
};

export default config;
