'use strict';

/**
 * @ngdoc function
 * @name pinBoardApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pinBoardApp
 */
angular.module('pinBoardApp')
    .controller('aboutCtrl', function ($scope) {
        $scope.pins = new Array();

        for(var i=0;i < 24;i++){
            $scope.pins.push(i)
        }
        
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });
