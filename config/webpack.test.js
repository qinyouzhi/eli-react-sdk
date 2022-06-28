const path = require('path');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const base = require('./webpack.base.js');

const resolve = _path => path.resolve(__dirname, _path);

module.exports = merge(base, {
  mode: 'production',
  entry: resolve('../example/src/index'),
  output: {
    path: resolve('../build/'),
    filename: 'js/[name].bundle.[contenthash:8].js', // index.js 被打包出来的文件
    chunkFilename: 'js/[name].chunk.[contenthash:8].js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('../example/index.html'),
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].bundle.[contenthash:8].css',
      chunkFilename: 'css/[name].chunk.[contenthash:8].css',
    }),
  ],
  optimization: {
    minimize: true, // 开启代码压缩
    usedExports: true, // 只导出被使用的模块
    concatenateModules: true, // 合并模块
    runtimeChunk: true, // 为运行时代码创建一个额外的 chunk，减少 entry chunk 体积，提高性能
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: 10, // 优先级
          enforce: true,
        },
      },
    },
    minimizer: [
      new CssMinimizerPlugin({
        parallel: 4,
      }),
    ],
  },
  performance: {
    hints: 'warning',
    // 入口起点的最大体积
    maxEntrypointSize: 50000000,
    // 生成文件的最大体积
    maxAssetSize: 30000000,
    assetFilter: function (assetFilename) {
      return assetFilename.endsWith('.js') || assetFilename.endsWith('.css');
    },
  },
});
