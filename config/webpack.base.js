const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ProgressBarWebpackPlugin = require('progress-bar-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const resolve = _path => path.resolve(__dirname, _path);
const {
  env: { NODE_ENV, REACT_APP_ENV },
} = process;

const isDev = NODE_ENV === 'development';
const isProd = NODE_ENV === 'production' && REACT_APP_ENV === 'prod';

const getGlobalConstants = () => {
  const _pathName = isDev ? 'dev' : isProd ? 'prod' : 'test';
  const _path = `./env.${_pathName}.js`;
  const originalConstants = require(_path);
  const appliedConstants = {};
  Object.keys(originalConstants).forEach(key => {
    appliedConstants[key] = JSON.stringify(originalConstants[key]);
  });
  return appliedConstants;
};

const progressPlugin = new ProgressBarWebpackPlugin({
  format: 'building [:bar] :percent (:elapsed seconds)',
  clear: false,
  width: 30,
});

process.env.BROWSER = 'none';

const styleLoader = isDev ? 'style-loader' : MiniCssExtractPlugin.loader;

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx|mjs|cjs)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [isDev && 'react-refresh/babel'].filter(Boolean),
            },
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
          {
            loader: 'thread-loader',
            options: {
              workerParallelJobs: 2,
            },
          },
        ],
      },
      {
        test: /\.(css|scss|sass)$/,
        use: [
          styleLoader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                auto: true,
                exportGlobals: true,
                localIdentName: '[local]_[hash:base64:6]',
              },
            },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        exclude: /(node_modules)/,
        use: [
          { loader: 'svg-sprite-loader', options: {} },
          { loader: 'svgo-loader', options: {} },
        ],
      },
      { test: /\.(woff(2)?|eot|ttf|otf)$/, type: 'asset/resource' },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      REACT_APP_ENV: JSON.stringify(process.env.REACT_APP_ENV),
      ...getGlobalConstants(),
    }),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new ForkTsCheckerWebpackPlugin(),
    progressPlugin,
  ],
  // ??????
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.mjs', '.cjs', '.css', '.less'],
    alias: {
      // ????????????
      '@@': resolve('../'),
      '@': resolve('../src'),
      '@components': resolve('../src/components'),
      '@services': resolve('../src/services'),
      '@utils': resolve('../src/utils'),
      '@hooks': resolve('../src/hooks'),
      '@enum': resolve('../src/enum'),
      '@store': resolve('../src/store'),
      '@constants': resolve('../src/constants'),
      '@assets': resolve('../src/assets'),
    },
  },
  cache: {
    type: 'filesystem', // ??????????????????
  },
};
