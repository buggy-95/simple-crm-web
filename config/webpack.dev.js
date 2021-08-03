const { merge } = require('webpack-merge');
const path = require('path');

const common = require('./webpack.common');

const devConfig = {
  mode: 'development',
  output: {
    path: path.resolve('build'),
    filename: 'bundle.js',
    chunkFilename: '[name].chunk.js',
    assetModuleFilename: '[name][ext]',
  },
  devtool: 'eval-source-map',
  devServer: {
    port: 9090,
    hot: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      }, {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
};

module.exports = merge(common, devConfig);
