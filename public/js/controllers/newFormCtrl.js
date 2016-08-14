var app = angular.module("cookingConnect");

app.controller("newFormCtrl", ["$scope", "$state", "postRecipe", "storeRecipeFactory", "$location", function($scope, $state, postRecipe, storeRecipeFactory, $location) {
  $scope.title = "Add A New Recipe";
  $scope.recipe = {};


  // List of Ingredients

  $scope.recipes.ingredients = [];


  // Methods for $scope.ingredients
  $scope.addIngredient = addIngredient;
  $scope.removeIngredient = removeIngredient;


  // Adds to $scope.ingredients
  function addIngredient() {
    $scope.recipe.recIngredients.unshift($scope.recIngredients);
    $scope.recIngredients = "";
  }

  // Removes from $scope.ingredients
  function removeIngredient(dummy) {
    $scope.recipe.recIngredients.splice(dummy, 1);
  }

  // Instructions and steps in newForm recipe

  $scope.recipes.instructions = [];


  // Methods for $scope.instructions
  $scope.addInstruction = addInstruction;
  $scope.removeInstruction = removeInstruction;


  // Adds to $scope.instructions
  function addInstruction() {
    $scope.recipe.recInstructions.push($scope.recInstructions);
    $scope.recInstructions = "";
  }

  // Removes from $scope.instructions
  function removeInstruction(dummy) {
    $scope.recipe.recInstructions.splice(dummy, 1);
  }

  // write function to get recipe object on ng-click in newForm.html

  //
  // $scope.submitRecipe = function() {
  //   console.log($scope.recipe);

  $scope.submitRecipe = function(recipes) {
    storeRecipeFactory.saveObject(recipes);
    $location.path("cookbook");

    // console.log('submitRecipe logging');
    // var newRecipe = new Recipe($scope.recipes.name, $scope.recipes.author, $scope.recipes.tags, $scope.recipes.originStory, "images",$scope.recipes.ingredients, "steps" );
    // console.log(newRecipes);
    // console.log(recipes);

  }


  /////////// service to send new recipe information to database ///////////
  $scope.redirectHome = postRecipe.addNewRecipe;

  ///postRecipe = name of service

  $scope.cancelRecipe = function() {
    $state.go("userhome");
  }



  // function that logs user out in header
  $scope.logOut = function() {
    console.log('logOut function is firing on click');
    firebase.auth().signOut();
    $state.go('landing');
  };


}]);
