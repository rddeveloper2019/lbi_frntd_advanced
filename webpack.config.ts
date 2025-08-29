import path from 'path';
import { type Configuration } from 'webpack';
import { BuildEnv, BuildMode, BuildPaths } from './config/build/types/config';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    html: path.resolve(__dirname, 'public', 'index.html'),
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
  };

  const mode: BuildMode = env.mode || 'development';
  const isDev = mode === 'development';
  const PORT = env.port || 3000;

  const config: Configuration = buildWebpackConfig({
    paths,
    mode,
    isDev,
    port: PORT,
  });

  return config;
};
