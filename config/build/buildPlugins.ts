import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack, { type WebpackPluginInstance } from 'webpack';
import { BuildOptions } from './types/config';

export const buildPlugins = ({
  paths,
}: BuildOptions): WebpackPluginInstance[] => {
  return [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
  ];
};
