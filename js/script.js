// Declare the main module
var myApp = angular.module('myApp', [
    'ngRoute',
    'ngAnimate'
]);

// Initialize the main module
myApp.run(['$rootScope', '$location', '$window', function ($rootScope, $location, $window) {

    'use strict';

    /**
     * Helper method for main page transitions. Useful for specifying a new page partial and an arbitrary transition.
     * @param  {String} path               The root-relative url for the new route
     * @param  {String} pageAnimationClass A classname defining the desired page transition
     */
    $rootScope.go = function (path, pageAnimationClass) {

        if (typeof(pageAnimationClass) === 'undefined') { // Use a default, your choice
            $rootScope.pageAnimationClass = 'crossFade';
        }
        
        else { // Use the specified animation
            $rootScope.pageAnimationClass = pageAnimationClass;
        }

        if (path === 'back') { // Allow a 'back' keyword to go to previous page
            $window.history.back();
        }
        
        else { // Go to the specified path
            $location.path(path);
        }
    };
}]);

// Configure the main module
myApp.config(['$routeProvider', function ($routeProvider) {

    'use strict';

    $routeProvider
        .when('/Home', {
            templateUrl: 'Home.html'
        })
        .when('/About', {
            templateUrl: 'About.html'
        })
        .when('/CV', {
            templateUrl: 'CV.html'
        })
        .when('/art_portfolio', {
            templateUrl: 'art_portfolio.html'
        })
        .otherwise({
           templateUrl: 'Home.html' 
        });
}]);