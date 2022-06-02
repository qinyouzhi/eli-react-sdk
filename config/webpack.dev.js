const path = require('path');
const { merge } = require('webpack-merge');
const ProgressBarWebpackPlugin = require('progress-bar-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const base = require('./webpack.base.js');

const resolve = _path => path.resolve(__dirname, _path);

const progressPlugin = new ProgressBarWebpackPlugin({
  format: 'building [:bar] :percent (:elapsed seconds)',
  clear: false,
  width: 30,
});

module.exports = merge(base, {
  mode: 'development',
  entry: resolve('../example/src/index'),
  output: {
    path: resolve('../example/dist'),
    filename: 'bundle.js',
    libraryTarget: 'umd',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'eli-react-sdk',
      template: resolve('../example/index.html'),
      filename: 'index.html',
      inject: true,
    }),
    new ReactRefreshWebpackPlugin(),
    progressPlugin,
  ],
  devtool: 'eval-source-map',
  devServer: {
    port: 9001,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    historyApiFallback: true,
    compress: true,
  },
});
