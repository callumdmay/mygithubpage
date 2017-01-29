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

  $scope.animateElementFadeIn = function($el) {
    $el.removeClass('not-visible');
    $el.addClass('animated fadeIn'); // this example leverages animate.css classes
  };

  $scope.animateElementBounceInLeft = function($el) {
    $el.removeClass('not-visible');
    $el.addClass('animated bounceInLeft'); // this example leverages animate.css classes
  };

  $scope.animateElementBounceInRight = function($el) {
    $el.removeClass('not-visible');
    $el.addClass('animated bounceInRight'); // this example leverages animate.css classes
  };

});
