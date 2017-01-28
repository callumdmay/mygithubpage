angular.module('myApp')
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
    when("/", {
      templateUrl: "header.html",
      controller:"mainController"
    }).
    when("/contact", {
      templateUrl: "contact.html",
      controller:"mainController"
    }).
    when("/about", {
      templateUrl: "about.html",
      controller:"mainController"
    }).
    when("/portfolio", {
      templateUrl: "portfolio.html",
      controller:"mainController"
    })

    $locationProvider.html5Mode(true);
  }]);
