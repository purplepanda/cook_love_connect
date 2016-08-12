var app = angular.module("cookingConnect")

.controller("newRecipeCtrl", ["$scope", "$state", "postRecipe", function($scope, $state, postRecipe) {
  $scope.title = "New Recipe Form"


  ////////// callback function that redirects to userhome after new recipe data is submitted to database //////////
  $scope.redirectHome = postRecipe.addNewRecipe;


  ////////// variables //////////
  $scope.user = {};
  $scope.user.tag = [];
  $scope.user.ingredient = [];
  $scope.user.instruction = [];


  ////////// methods //////////
  $scope.addTags = addTags;
  $scope.removeTags = removeTags;
  $scope.addIngredients = addIngredients;
  $scope.removeIngredients = removeIngredients;
  $scope.addInstructions = addInstructions;
  $scope.removeInstructions = removeInstructions;


  ////////// functions //////////
  function addTags() {
    // $event.preventDefault();
    $scope.user.tag.push($scope.tag);
    $scope.tag = "";
  }

  function removeTags(item) {
    $scope.user.tag.splice(item, 1);
  }

  function addIngredients() {
    $scope.user.ingredient.push($scope.ingredient);
    $scope.ingredient = "";
  }

  function removeIngredients(item) {
    $scope.user.ingredient.splice(item, 1);
  }

  function addInstructions() {
    $scope.user.instruction.push($scope.instruction);
    $scope.instruction = "";
  }

  function removeInstructions(item) {
    $scope.user.instruction.splice(item, 1);
  }

}]);


/////DON'T FORGET TO ADD THE "CANCEL" BUTTON BACK IN /////
// $scope.cancelRecipe = function() {
//   $state.go("userhome");
// }


// redirectHome = redirectHome
// postService = postRecipe
// registerUser = addNewRecipe
