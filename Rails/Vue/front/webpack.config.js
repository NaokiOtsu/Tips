var path = require('path');

module.exports = {
  entry: [
    'vue',
    'vue-router',
    'vue-touch',
    './js/application.js'
  ],
  output: {
    path: path.resolve(__dirname, '../public/js'),
    filename: '[name].bundle.js'
  }
};
