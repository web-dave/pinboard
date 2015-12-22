'use strict';

/**
 * @ngdoc service
 * @name pinBoardApp.authService
 * @description
 * # authService
 * Factory in the pinBoardApp.
 */
angular.module('pinBoardApp')
    .factory('authService', function ($http, REST) {
        
        var auth = function(){
            return $http.get(REST.root+REST.auth);
        };

        var authRoute = function () {
            var promise = auth();
            promise.then(
                function (success) {
                    console.log('authRoute success', success.status );
                },
                function (error) {
                    console.log('authRoute error', error.status );
                    window.location.href = '/login.html';
                });
            return promise;
        };
        

        // Public API here
        return {
            authRoute: authRoute
        }
    });

