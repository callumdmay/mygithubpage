angular.module('myApp.controllers').
controller('mainController', function($scope) {

    $scope.animateElementInDown = function($el) {
        $el.removeClass('not-visible');
        $el.addClass('animated fadeInDown'); // this example leverages animate.css classes
    };

    $scope.animateElementInUp = function($el) {
        $el.removeClass('not-visible');
        $el.addClass('animated fadeInUp'); // this example leverages animate.css classes
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
