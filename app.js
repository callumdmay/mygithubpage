
angular.module('myApp.controllers',[])

angular.module('myApp', [
    'myApp.controllers',
    'ngRoute',
    'ngAnimate'
]);

angular.module('myApp')
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
    when("/", {
      templateUrl: "_home.html",
      controller:"appCtrl"
    }).
    when("/contact", {
      templateUrl: "_contact.html",
      controller:"appCtrl"
    }).
    when("/about", {
      templateUrl: "_about.html",
      controller:"appCtrl"
    }).
    when("/portfolio", {
      templateUrl: "_portfolio-grid.html",
      controller: "appCtrl"
    }).
    otherwise("/");

    $locationProvider.html5Mode(true);
  }]);

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
