var app = angular.module("cookingConnect");

app.controller("newFormCtrl", ["$scope", "$state", "postRecipe", function($scope, $state, postRecipe) {
  $scope.title = "Add A New Recipe";
  $scope.recipe = {};

  // List of Ingredients
  $scope.recipe.recIngredients = [];

  // Methods for $scope.ingredients
  $scope.addIngredient = addIngredient;
  $scope.removeIngredient = removeIngredient;



  // Adds to $scope.ingredients
  function addIngredient() {
    $scope.recipe.recIngredients.unshift($scope.ingredient);
    $scope.recIngredients = "";
  }

  // Removes from $scope.ingredients
  function removeIngredient(dummy) {
    $scope.recipe.recIngredients.splice(dummy, 1);
  }

  // Instructions and steps in newForm recipe
  $scope.recipe.recInstructions = [];

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

  $scope.submitRecipe = function() {
    console.log($scope.recipe);
  }


  /////////// service to send new recipe information to database ///////////
  $scope.redirectHome = postRecipe.addNewRecipe;

  ///postRecipe = name of service

  $scope.cancelRecipe = function() {
    $state.go("userhome");
  }



}]);
