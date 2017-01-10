/*
 * I am adding comments as much as possible just for learning purposes
 */

(function () { // We use IIFE to make sure no local variables bleed into the global scope
    'use strict';

    angular.module('LunchCheck', []) // []: list of dependencies for Angular
        .controller('LunchCheckController', LunchCheckController);
        //.controller('LunchCheckController', ['$scope', LunchCheckController])

    // As per DI, the client is not responsable for instantiating, Angular IoC does.
    // $inject property specifies which services to inject into which param of the Controller function
    LunchCheckController.$inject = ['$scope'];

    // variables that start with $ are specially reserved for Angular
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
