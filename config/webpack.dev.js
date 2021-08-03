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
};

module.exports = merge(common, devConfig);
