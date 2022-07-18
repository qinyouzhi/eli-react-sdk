const path = require('path');
const { merge } = require('webpack-merge');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const base = require('./webpack.base.js');

const resolve = _path => path.resolve(__dirname, _path);

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
      title: 'web sdk',
      template: resolve('../example/index.html'),
      filename: 'index.html',
      inject: true,
    }),
    new ReactRefreshWebpackPlugin(),
  ],
  devtool: 'eval-source-map',
  devServer: {
    port: 8080,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    historyApiFallback: true,
    compress: true,
  },
});
