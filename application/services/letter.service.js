(function () {
    'use strict';

    angular
        .module('app')
        .factory('LetterService', LetterService);

    LetterService.$inject = ['$http', '$localStorage'];
    function LetterService($http, $localStorage) {
        var service = {};

        service.save = save;

        return service;

        function save(vm, callback) {
            $http.post('https://letter-api.herokuapp.com/save', { email: vm.email, fatherName: vm.fatherName, childName: vm.childName, text: vm.text })
                .then(function (response) {
                    callback(true);
                }).catch(function(e){
                    callback(false);
                });
        }
    }
})();
