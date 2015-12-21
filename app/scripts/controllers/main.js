'use strict';

/**
 * @ngdoc function
 * @name pinBoardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pinBoardApp
 */
angular.module('pinBoardApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
