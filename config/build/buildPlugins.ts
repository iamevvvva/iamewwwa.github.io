import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildPlugins({ isDev, paths }: BuildOptions): webpack.WebpackPluginInstance[] {
  const isProd = !isDev;
  const plugins = [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
  ];

  if (isDev) {
    plugins.push(new webpack.HotModuleReplacementPlugin());

    plugins.push(
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
      }),
    );
  }

  return plugins;
}
