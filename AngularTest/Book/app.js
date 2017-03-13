angular.module('app', [])
  .controller('MainCtrl', function() {

  })
  .directive('myBtn', function() {
    return {
      restrict: 'E',

      template:
        '<span class="my-btn">' +
        ' <i class="fa fa-{{icon}}"></i>' +
        ' <span>{{label}}</span>' +
        '</span>',

      replace: true,

      scope: true,

      link: function(scope, element, attrs) {
        scope.icon = attrs.icon;
        scope.label = attrs.label;
      }
    };
  });