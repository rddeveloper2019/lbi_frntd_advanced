import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack, { type WebpackPluginInstance } from 'webpack';
import { BuildOptions } from './types/config';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';

export const buildPlugins = ({
  paths,
  isDev,
}: BuildOptions): WebpackPluginInstance[] => {
  const plugins: WebpackPluginInstance[] = [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
    new CopyPlugin({
      patterns: [{ from: 'public/locales', to: 'locales' }],
    }),
  ];

  if (isDev) {
    plugins.push(new webpack.HotModuleReplacementPlugin());
    plugins.push(new ReactRefreshWebpackPlugin());
  }

  return plugins;
};
