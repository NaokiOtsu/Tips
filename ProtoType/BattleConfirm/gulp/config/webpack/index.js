var path    = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    'common': [
      'jquery',
      'underscore'
    ],
    'index': [
      'index'
    ]
  },
  output: {
    filename: '[name].bundle.js'
  },
  resolve: {
    root: [
      path.resolve('./node_modules'),
      path.resolve('./assets/js')
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'common.bundle.js',
      minChunks: 10
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};