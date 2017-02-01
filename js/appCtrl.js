angular.module('myApp.controllers').
controller('appCtrl', function($scope, $location) {

  $scope.isActive = function(viewLocation) {
    return viewLocation === $location.path();
  };

  $scope.isCollapsed = false;

  $scope.getYear = function() {
    var d = new Date();
    return d.getFullYear();
  }

});
