var app = angular.module("cookingConnect");

app.factory('storeRecipeFactory', function() {

  // var storeRecipe = [];
  var recipeTable = firebase.database().ref('recipes');
  var imageUrl = "";

  function saveDownloadUrl(downloadURL) {
    imageUrl = downloadURL;
    console.log(downloadURL);
    console.log(imageUrl);
  }

  function saveObject(recipes) {
    var user = firebase.auth().currentUser;
    recipes.uid = user.uid;
    recipes.image = imageUrl;
    recipeTable.push(recipes);
    // storeRecipe.push(recipes);
    console.log("Store recipe", recipeTable);
  }

  function returnObject() {
    return recipeTable;
  }

  return {
    saveObject: saveObject,
    returnObject: returnObject,
    saveDownloadUrl: saveDownloadUrl
  };

});
