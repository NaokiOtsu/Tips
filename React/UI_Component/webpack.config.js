const path = require('path');

const src_path = path.resolve(__dirname, 'src');
const public_path = path.resolve(__dirname, 'public');

module.exports = {
  entry: `${src_path}/index.js`,

  output: {
    path: public_path,
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: public_path,
    compress: true,
    historyApiFallback: true
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' }
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' }
        ]
      }
    ]
  }
};
