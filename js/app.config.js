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
    otherwise("/");

    $locationProvider.html5Mode(true);
  }]);
