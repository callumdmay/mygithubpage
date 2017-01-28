angular.module('myApp.controllers').
controller('appCtrl', function($scope, $location) {

    $scope.animateElementInDown = function($el) {
        $el.removeClass('not-visible');
        $el.addClass('animated fadeInDown'); // this example leverages animate.css classes
    };

    $scope.animateElementInUp = function($el) {
        $el.removeClass('not-visible');
        $el.addClass('animated fadeInUp'); // this example leverages animate.css classes
    };

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

    $scope.animateElementFadeInLeft = function($el) {
        $el.removeClass('not-visible');
        $el.addClass('animated fadeInLeft'); // this example leverages animate.css classes
    };

    $scope.animateElementFadeInRight = function($el) {
        $el.removeClass('not-visible');
        $el.addClass('animated fadeInRight'); // this example leverages animate.css classes
    };

    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
});
