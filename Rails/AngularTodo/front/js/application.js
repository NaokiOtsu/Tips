var $ = require('jquery');

var app = angular.module('sampleApp', []);

app.config(['$httpProvider', function($httpProvider) {
  authToken = $('meta[name="csrf-token"]').attr('conntent');
  $httpProvider.defaults.headers.common['X-CSRF-TOKEN'] = authToken;
}]);



