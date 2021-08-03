const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const babelLoader = {
  loader: 'babel-loader',
  options: {
    plugins: ['@babel/plugin-transform-async-to-generator'],
    sourceMaps: true,
    presets: [
      '@babel/preset-react',
      [
        '@babel/preset-env',
        {
          corejs: 3,
          useBuiltIns: 'usage',
          targets: {
            chrome: 59,
            edge: 13,
            firefox: 50,
          },
        }
      ],
    ],
  },
};

module.exports = {
  target: ['web', 'es5'],
  entry: './src/index.tsx',
  resolve: {
    modules: [
      path.resolve('src'),
      path.resolve('node_modules'),
    ],
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      images: path.resolve('src/assets/images'),
      style: path.resolve('src/assets/style'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('public/index.html'),
      filename: 'index.html',
      inject: 'body',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          babelLoader,
          { loader: 'ts-loader' },
        ],
      }, {
        test: /\.(png|gif|jpe?g)$/i,
        type: 'asset/resource',
      }, {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [babelLoader],
      },
    ],
  },
};