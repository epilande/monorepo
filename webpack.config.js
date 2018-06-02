const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.config.base');
const devConfig = require('./webpack.config.dev');
const prodConfig = require('./webpack.config.prod');

const config = function(env) {
  const envConfig = env.prod ? prodConfig : devConfig;

  return merge(baseConfig, envConfig, {
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
