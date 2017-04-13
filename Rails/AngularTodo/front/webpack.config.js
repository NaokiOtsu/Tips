var path = require('path');

module.exports = {
  entry: [
    'jquery',
    'angular',
    './js/application.js',
    './js/controller/TodoListCtrl.js'
  ],
  output: {
    path: path.resolve(__dirname, '../public/js'),
    filename: '[name].bundle.js'
  }
};
