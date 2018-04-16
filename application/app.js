(function () {
    'use strict';

    angular
        .module('app', ['ngRoute', 'ngMessages', 'ngStorage', 'ngMaterial', 'angularUtils.directives.dirPagination', 'ui.bootstrap'])
        .config(config)
        .run(run);

    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
        $routeProvider
            
            .when('/', {
                controller: 'LetterController',
                templateUrl: './application/controllers/letter/letter.view.html',
                controllerAs: 'vm'
            })

            .otherwise({ redirectTo: '/' });
    }

    run.$inject = ['$rootScope', '$http', '$location', '$localStorage'];
    function run($rootScope, $http, $location, $localStorage) {
        
    }

})();