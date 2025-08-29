import { type RuleSetRule } from 'webpack';
import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
  const styleLoader = {
    test: /\.s[ac]ss$/i,
    exclude: /\.module\.s[ac]ss$/,
    use: [
      options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      'css-loader',
      'sass-loader',
    ],
  };

  const styleModuleLoader = {
    test: /\.module\.s[ac]ss$/,
    use: [
      options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          esModule: false,
          modules: {
            localIdentName: options.isDev
              ? '[path]__[local]--[hash:base64:5]'
              : '[hash:base64:12]',
          },
          importLoaders: 1,
          sourceMap: options.isDev,
        },
      },
      'sass-loader',
    ],
  };

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [tsLoader, styleLoader, styleModuleLoader];
};
