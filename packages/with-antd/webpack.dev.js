const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',

  devtool: 'inline-source-map',

  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.DefinePlugin({ __DEVMODE__: true })],

  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    liveReload: true,
    port: 9000,
    historyApiFallback: true,
    writeToDisk: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5000/',
      },
      '/auth': {
        target: 'http://localhost:5000/',
      },
    },
  },
});
