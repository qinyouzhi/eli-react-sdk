const path = require('path');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const base = require('./webpack.base.js');

const resolve = _path => path.resolve(__dirname, _path);

module.exports = merge(base, {
  mode: 'production',
  entry: resolve('../src/index'),
  output: {
    path: resolve('../lib'),
    filename: 'index.js',
    libraryTarget: 'umd', // 采用通用模块定义
    libraryExport: 'default', // 兼容 ES6 Module、CommonJS 和 AMD 模块规范
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'index.min.css',
    }),
  ],
  optimization: {
    minimize: true, // 开启代码压缩
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  },
});
