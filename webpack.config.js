const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.config.base');

const config = function(env) {
  return merge(baseConfig({ env, dir: __dirname }), {
    entry: {
      foo: './apps/foo/src/index.js',
      bar: './apps/bar/src/index.js',
    },
    plugins: [
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
  });
};

module.exports = config;
