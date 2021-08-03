const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const { merge } = require('webpack-merge');
const path = require('path');

const common = require('./webpack.common');

const cssLoaders = [
  'css-loader',
  {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: ['postcss-preset-env'],
      },
    },
  },
  'less-loader',
];

const prodConfig = {
  mode: 'production',
  devtool: 'source-map',
  optimization: { moduleIds: 'named' },
  output: {
    clean: true,
    publicPath: '/',
    path: path.resolve('build'),
    filename: 'js/bundle.[contenthash:8].js',
    chunkFilename: 'js/[contenthash:8].chunk.js',
    // 'asset/resource' 模块输出目录
    assetModuleFilename: 'images/[name][ext][query]',
  },
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [
          MiniCssExtractPlugin.loader,
          ...cssLoaders,
        ],
      }, {
        test: /\.css$/,
        use: cssLoaders,
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[contenthash:8].chunk.css',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'public',
          noErrorOnMissing: true,
          globOptions: {
            dot: true,
            gitignore: true,
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
  ],
  externalsType: 'script',
  externals: {
    react: ['https://cdn.bootcdn.net/ajax/libs/react/17.0.2/umd/react.production.min.js', 'React'],
    'react-dom': ['https://cdn.bootcdn.net/ajax/libs/react-dom/17.0.2/umd/react-dom.production.min.js', 'ReactDOM'],
  },
};

module.exports = merge(common, prodConfig);
