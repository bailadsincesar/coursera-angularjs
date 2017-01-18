(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {

        var self = this;
        self.toBuyItems = ShoppingListCheckOffService.getToBuyItems();

        self.buyItem = function (index) {
            ShoppingListCheckOffService.buyItem(index);
        }

    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {

        var self = this;
        self.boughtItems = ShoppingListCheckOffService.getBoughtItems();

    }

    function ShoppingListCheckOffService() {
        var self = this;
        var boughtItems = [];
        var toBuyItems = [
            {
                name: 'Cookies',
                quantity: 11
            },
            {
                name: 'Candies',
                quantity: 23
            },
            {
                name: 'Cans of Soda',
                quantity: 3
            },
            {
                name: 'Bars of chocholates',
                quantity: 44
            },
            {
                name: 'Abocados',
                quantity: 2
            }
        ];

        self.getToBuyItems = function () {
            return toBuyItems;
        };

        self.getBoughtItems = function () {
            return boughtItems;
        };

        self.buyItem = function(index) {
            var boughtItem = toBuyItems[index];

            boughtItems.push(boughtItem);

            toBuyItems.splice(index, 1);
        };
    }

})();