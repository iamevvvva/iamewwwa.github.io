import { BuildOptions } from '../types/config';

interface BuildBabelLoader extends BuildOptions {
  isTsx?: boolean;
}

export const buildBabelLoader = ({ isDev, isTsx }: BuildBabelLoader) => {
  return {
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [['@babel/plugin-transform-typescript', { isTsx }], '@babel/plugin-transform-runtime'].filter(Boolean),
      },
    },
  };
};
