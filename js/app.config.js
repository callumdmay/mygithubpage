angular.module('myApp')
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
    when("/", {
      templateUrl: "_home.html",
      controller:"mainController"
    }).
    when("/contact", {
      templateUrl: "_contact.html",
      controller:"mainController"
    }).
    when("/about", {
      templateUrl: "_about.html",
      controller:"mainController"
    }).
    when("/portfolio", {
      templateUrl: "_header.html",
      controller:"mainController"
    }).
    otherwise("/");

    $locationProvider.html5Mode(true);
  }]);
