const webpack = require('webpack');
const path = require('path');
const os = require('os');
const HappyPack = require('happypack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const resolve = _path => path.resolve(__dirname, _path);

const isDev = process.env.NODE_ENV === 'development';

const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
const happyPack = new HappyPack({
  id: 'babel',
  loaders: [
    {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: [
          ['@babel/plugin-proposal-decorators', { legacy: true }],
          ['@babel/plugin-transform-runtime', { legacy: true }],
          ['@babel/plugin-proposal-class-properties', { legacy: true }],
        ],
      },
    },
  ],
  // 共享进程池
  threadPool: happyThreadPool,
  // 允许 HappyPack 输出日志
  verbose: true,
});

process.env.BROWSER = 'none';

const styleLoader = isDev ? 'style-loader' : MiniCssExtractPlugin.loader;

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx|mjs|cjs)$/, // 匹配哪些文件
        exclude: /(node_modules|bower_components)/,
        use: [
          'happypack/loader?id=babel',
          {
            loader: 'babel-loader',
            options: {
              plugins: [isDev && 'react-refresh/babel'].filter(Boolean),
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
                localIdentContext: resolve('../src'),
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
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024,
          },
        },
        generator: {
          filename: 'assets/images/[hash][ext]',
        },
      },
      { test: /\.(woff(2)?|eot|ttf|otf)$/, type: 'asset/resource' },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      REACT_APP_ENV: JSON.stringify(process.env.REACT_APP_ENV),
    }),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    happyPack,
  ],
  // 解析
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.mjs', '.cjs', '.css', '.less'],
    alias: {
      // 配置别名
      '@@': resolve('../'),
      '@': resolve('../src'),
      '@components': resolve('../src/components'),
      '@api': resolve('../src/api'),
      '@utils': resolve('../src/utils'),
      '@hooks': resolve('../src/hooks'),
      '@enum': resolve('../src/enum'),
    },
  },
};
