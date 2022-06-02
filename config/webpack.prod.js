const path = require('path');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const base = require('./webpack.base.js');

const resolve = _path => path.resolve(__dirname, _path);

module.exports = merge(base, {
  mode: 'production',
  entry: resolve('../src/index'),
  experiments: {
    outputModule: true,
  },
  output: {
    path: resolve('../lib/'),
    filename: 'index.js',
    library: { type: 'module' },
    environment: {
      module: true,
      dynamicImport: true,
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'index.min.css',
    }),
  ],
  optimization: {
    minimize: true, // 开启代码压缩
  },
  externalsType: 'module',
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  },
});
