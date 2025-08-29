import path from 'path';
import { type Configuration } from 'webpack';
import { buildPlugins } from './config/build/buildPlugins';
import { buildLoaders } from './config/build/buildLoaders';
import { buildResolve } from './config/build/buildResolvers';
import { BuildMode, BuildPaths } from './config/build/types/config';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';

const paths: BuildPaths = {
  html: path.resolve(__dirname, 'public', 'index.html'),
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  build: path.resolve(__dirname, 'build'),
};

const mode: BuildMode = 'development';
const isDev = mode === 'development';
const PORT = 3000;
const config: Configuration = buildWebpackConfig({
  paths,
  mode,
  isDev,
  port: PORT,
});

export default config;
