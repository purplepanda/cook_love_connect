var app = angular.module("cookingConnect");

app.controller("newFormCtrl", ["$scope", "$state", "postRecipe", function($scope, $state, postRecipe) {
  $scope.title = "Add A New Recipe";

  // List of Ingredients
  $scope.ingredients = [
    "Dummy Test",
  ];

  // Methods for $scope.ingredients
  $scope.addIngredient = addIngredient;
  $scope.removeIngredient = removeIngredient;


  // Adds to $scope.ingredients
  function addIngredient() {
    $scope.ingredients.unshift($scope.ingredient);
    $scope.ingredient = "";
  }

  // Removes from $scope.ingredients
  function removeIngredient(dummy) {
    $scope.ingredients.splice(dummy, 1);
  }


  // Instructions and steps in newForm recipe
  $scope.instructions = [
    "Dummy Test for intructions",
  ];

  // Methods for $scope.instructions
  $scope.addInstruction = addInstruction;
  $scope.removeInstruction = removeInstruction;


  // Adds to $scope.instructions
  function addInstruction() {
    $scope.instructions.push($scope.instruction);
    $scope.instruction = "";
  }

  // Removes from $scope.instructions
  function removeInstruction(dummy) {
    $scope.instructions.splice(dummy, 1);
  }


  /////////// service to send new recipe information to database ///////////
  $scope.redirectHome = postRecipe.registerUser;

  ///postRecipe = name of service


}]);
