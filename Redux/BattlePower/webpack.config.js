const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const src = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'dist');

module.exports = {
  entry: src + '/index.jsx',

  output: {
    path: dist,
    filename: 'bundle.js'
  },

  devtool: 'inline-source-map',

  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ]
  },

  resolve: {
    extensions: ['*', '.js', '.jsx']
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: src + '/index.html',
      filename: 'index.html'
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        eslint: {
          configFile: './.eslintrc.json'
        }
      }
    })
  ]
};
