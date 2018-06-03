const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('../../webpack.config.base');

const config = function(env) {
  return merge(baseConfig({ env, dir: __dirname }), {
    entry: {
      foo: './src/index.js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'foo/index.html',
        chunks: ['foo'],
      }),
    ],
  });
};

module.exports = config;
