angular.module('myApp')
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider.
        when("/", {
            templateUrl: "home.html"
        });

    $locationProvider.html5Mode(true);
    }]);
