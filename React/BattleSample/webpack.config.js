const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const src = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'dist');

module.exports = {
  entry: src + '/index.js',

  output: {
    path: dist,
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loaders: ExtractTextPlugin.extract({
          loader: 'css-loader?importLoaders=1!postcss-loader'
        })
      }
    ]
  },

  resolve: {
    extensions: ['*', '.js', '.css']
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: src + '/index.html',
      filename: 'index.html'
    }),
    new ExtractTextPlugin('[name].bundle.css')
  ]
};



