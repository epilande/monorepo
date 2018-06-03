const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('../../webpack.config.base');

const config = function(env) {
  return merge(baseConfig({ env, dir: __dirname }), {
    entry: {
      bar: './src/index.js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'bar/index.html',
        chunks: ['bar'],
      }),
    ],
  });
};

module.exports = config;
