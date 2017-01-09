(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.menu = '';

        $scope.checkIfTooMuch = function () {
            if ($scope.menu != '') {
                var itemsInMenu = $scope.menu.split(',');

                if (itemsInMenu.length <= 3) {
                    $scope.checkResult = 'Enjoy!';

                } else {
                    $scope.checkResult = 'Too much!';
                }

            } else {
                $scope.checkResult = 'Please enter data first';
            }
        }
    }

})();