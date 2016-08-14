var app = angular.module("cookingConnect");

app.factory('storeRecipeFactory', function() {

  // var storeRecipe = [];
  var recipeTable = firebase.database().ref('recipes');

  function saveObject(recipes) {
    var user = firebase.auth().currentUser;
    recipes.uid = user.uid;
    recipeTable.push(recipes);
    // storeRecipe.push(recipes);
    console.log("Store recipe", recipeTable);
  }

  function returnObject() {
    return recipeTable;
  };

  return {
    saveObject: saveObject,
    returnObject: returnObject
  }

});
