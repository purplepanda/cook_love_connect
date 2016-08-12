var app = angular.module("cookingConnect")

.controller("newRecipeCtrl", ["$scope", "$state", "postRecipe", function($scope, $state, postRecipe) {
  $scope.title = "New Recipe Form"
    // $scope.message = "Click here to add new recipe!";

  $scope.redirectHome = postRecipe.addNewRecipe;

}]);

// redirectHome = redirectHome
// postService = postRecipe
// registerUser = addNewRecipe
