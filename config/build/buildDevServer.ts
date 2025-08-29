import { WebpackOptionsNormalized } from 'webpack';
import { BuildOptions } from './types/config';

export const buildDevServer = (
  options: BuildOptions
): WebpackOptionsNormalized['devServer'] => {
  return {
    open: true,
    port: options.port,
  };
};
