import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export const buildResolve = (options: BuildOptions): ResolveOptions => {
  return {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    preferAbsolute: true,
    mainFiles: ['index'],
    modules: [options.paths.src, 'node_modules'],
    alias: {},
  };
};
