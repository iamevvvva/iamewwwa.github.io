import path from 'path';

import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';

import type { BuildOptions } from './types/config';
import { buildPlugins } from './buildPlugins';

export function buildWebpackConfig(options: BuildOptions) {
  const { isDev, mode, paths } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },

    devServer: isDev ? buildDevServer(options) : undefined,
    devtool: isDev ? 'eval-cheap-module-source-map' : undefined,

    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
  };
}
