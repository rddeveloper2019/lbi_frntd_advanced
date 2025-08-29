import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack, { type WebpackPluginInstance } from 'webpack';

export const buildPlugins = (): WebpackPluginInstance[] => {
  return [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
  ];
};
