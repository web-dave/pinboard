'use strict';

/**
 * @ngdoc function
 * @name pinBoardApp.value:REST
 * @description
 * # language
 * value of the pinBoardApp
 * 
 */
angular.module('pinBoardApp')
        .value('REST', {
            'root': '/rest',
            'login': '/login/',
            'auth': '/auth.api.php',
            'logout' : '/logout/'
        });