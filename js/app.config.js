angular.module('myApp')
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.
        when("/", {
            templateUrl: "home.html"
        });
    }]);
