const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const { merge } = require('webpack-merge');
const path = require('path');

const common = require('./webpack.common');

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
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[contenthash:8].chunk.css',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'public/**/*',
          globOptions: {
            dot: true,
            gitignore: true,
            ignore: ['index.html'],
          },
        },
      ],
    }),
  ],
}
