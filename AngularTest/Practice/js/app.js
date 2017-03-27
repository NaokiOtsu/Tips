angular.module('hoge', ['ngRoute'])
  .controller('HogeCtrl', function HogeCtrl($scope) {
    'use strict';

    $scope.hoge = 'aaaa';
    console.log($scope, this)
  })
  .factory('api', function () {
    'use strict';

    var store = {
      fuga: 111
    };
    return store;
  })
  .config(function ($routeProvider) {
    'use strict';

    var routeConfig = {
      controller: 'HogeCtrl',
      templateUrl: 'hoge-index.html',
      resolve: {
        store: function () {
          console.log(111111)
        }
      }
    };

    $routeProvider
      .when('/', routeConfig)
      .otherwise({
        redirectTo: '/'
      });
  });