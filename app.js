(function (){
'use strict'
angular.module("ShoppingListCheckOff", [])
	   .controller("ToBuyController", ToBuyController)
	   .controller("AlreadyBoughtController", AlreadyBoughtController)
	   .service("ShoppingListCheckOffService", ShoppingListCheckOffService)
	   
ToBuyController.$inject = ["ShoppingListCheckOffService"];
function ToBuyController(ShoppingListCheckOffService){
	var toBuy = this;
	toBuy.items = ShoppingListCheckOffService.getToBuyItems();
	toBuy.buy = function(index){
		ShoppingListCheckOffService.buyItems(index);
	};
}

AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
function AlreadyBoughtController(ShoppingListCheckOffService){
	var bought = this;
	bought.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService(){
	var service = this;
	var toBuyItems = [
		{ name: "Chocolates", quantity: 20 },
	    { name: "Sweet Berries", quantity: 20 },
	    { name: "Tamota Chilly Chips", quantity: 20},
	    { name: "Mirinda Soft Drink", quantity: 10 },
	    { name: "Eggs", quantity: 20 }
	];
	var boughtItems = [];
	service.buyItems = function(index){
		boughtItems.push(toBuyItems[index]);
		toBuyItems.splice(index, 1);
	}
	service.getToBuyItems = function(){
		return toBuyItems;
	}
	service.getBoughtItems = function(){
		return boughtItems;
	}

}

})();