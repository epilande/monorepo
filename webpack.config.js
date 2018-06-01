const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    foo: './apps/foo/src/index.js',
    bar: './apps/bar/src/index.js',
  },
  output: {
    filename: '[name]/bundle.[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new CleanWebpackPlugin(['./dist']),
    new HtmlWebpackPlugin({
      template: './apps/foo/src/index.html',
      filename: 'foo/index.html',
      chunks: ['foo'],
    }),
    new HtmlWebpackPlugin({
      template: './apps/bar/src/index.html',
      filename: 'bar/index.html',
      chunks: ['bar'],
    }),
  ],
};
