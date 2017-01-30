export default {
  output: {
    filename: 'app.bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel-loader',
        exclude: [/node_modules/]
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  }
};