var path = require('path');

module.exports = {
  entry: [
    'angular',
    'angular-route',
    'angular-touch',
    './js/application.js'
  ],
  output: {
    path: path.resolve(__dirname, '../public/js'),
    filename: '[name].bundle.js'
  }
};
