angular.module('hogeApp', ['ngRoute'])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: 'home.html',
        controller: 'homeController'
      })
      .when('/contents', {
        templateUrl: 'contents.html',
        controller: 'contentsController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }])
  .controller('homeController', ['$scope', function($scope) {
    $scope.count = 0;

    $scope.increment = function() {
      $scope.count += 1;
    };
  }])
  .controller('contentsController', function() {
    console.log('contentsControllerrrrrrr');
  });
