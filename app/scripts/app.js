'use strict';

/**
 * @ngdoc overview
 * @name pinBoardApp
 * @description
 * # pinBoardApp
 *
 * Main module of the application.
 */
angular
  .module('pinBoardApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainCtrl',
        resolve: {
            authorize: function(authService) {
                return authService.authRoute();
            }
        }
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'aboutCtrl',
        resolve: {
            authorize: function(authService) {
                return authService.authRoute();
            }
        }
      })
//      .when('/logout', {
//        templateUrl: 'views/logout.html',
//        controller: 'logoutCtrl',
//        resolve: {
//            authorize: function(authService) {
//                return authService.authRoute();
//            }
//        }
//      })
      .otherwise({
        redirectTo: '/'
      });
  });
