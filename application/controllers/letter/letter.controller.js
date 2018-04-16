(function () {
    'use strict';

    angular
        .module('app')
        .controller('LetterController', LetterController);

    LetterController.$inject = ['$location', 'LetterService'];
    function LetterController($location, LetterService) {
        var modal = angular.element(document.querySelector('.modal-backdrop'));
        $("body").removeClass("modal-open");
        if (modal != null) {
            modal.remove();
        }
        var vm = this;

        vm.save = save;
        vm.hasError = false;

        function save() {
            vm.loading = true;
            LetterService.save(vm, function (success) {
                if (success) {
                    vm.hasError = true;
                    vm.error = 'Carta enviada';
                    vm.loading = false;
                }
            });
        };
    }

})();