import { Configuration } from 'webpack';
import { BuildOptions } from './types/config';
import { buildLoaders } from './buildLoaders';
import { buildResolve } from './buildResolvers';
import { buildPlugins } from './buildPlugins';

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
  return {
    mode: options.mode,
    entry: options.paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: options.paths.build,
      clean: true,
    },
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolve(),
    plugins: buildPlugins(options),
  };
};
