const path               = require('path');
const webpack            = require('webpack');
const BowerWebpackPlugin = require('bower-webpack-plugin');

module.exports = {
  entry: {
    common: [
      'jquery',
      'underscore',
      'backbone'
    ],
    index: [
      './assets/js/index.js'
    ]
  },
  output: {
    filename: '[name].bundle.js'
  },
  // require()する時のパスを省力出来る
  resolve: {
    root: [
      path.resolve('./bower_components'),
      path.resolve('./node_modules'),
      path.resolve('./node_modules/gsap/src/uncompressed'),
      path.resolve('./assets/js')
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      _: 'underscore'
    }),
    new BowerWebpackPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'common.bundle.js',
      minChunks: 10,
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [/node_modules/, /bower_components/],
        loader: "babel",
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
