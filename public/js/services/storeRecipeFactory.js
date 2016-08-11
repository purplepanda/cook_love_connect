var app = angular.module("cookingConnect");

app.factory('storeRecipeFactory', function(){
	
	var storeRecipe = {};
	function saveObject(recipes) {
		storeRecipe = recipes;
		// console.log("Store recipe", storeRecipe);
	}

	function returnObject () {
		return storeRecipe;
	};

return {saveObject:saveObject, returnObject:returnObject}
})