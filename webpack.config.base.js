const path = require('path');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const devConfig = require('./webpack.config.dev');
const prodConfig = require('./webpack.config.prod');

const baseConfig = function({ env, dir = __dirname }) {
  const envConfig = env.prod ? prodConfig : devConfig;

  return merge(envConfig, {
    output: {
      filename: '[name]/bundle.[hash].js',
      path: path.resolve(dir, 'dist'),
    },

    plugins: [new CleanWebpackPlugin([path.resolve(dir, 'dist')])],
  });
};

module.exports = baseConfig;
