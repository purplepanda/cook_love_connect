var app = angular.module("cookingConnect");

app.controller("newFormCtrl", ["$scope", "$state", "postRecipe","storeRecipeFactory","$location", function($scope, $state, postRecipe, storeRecipeFactory, $location) {
  $scope.title = "Add A New Recipe";
  $scope.recipes = {};


  // List of Ingredients
  $scope.recipes.ingredients = [];

  // Methods for $scope.ingredients
  $scope.addIngredient = addIngredient;
  $scope.removeIngredient = removeIngredient;



  // Adds to $scope.ingredients
  function addIngredient() {
    $scope.recipes.ingredients.unshift($scope.ingredient);
    $scope.ingredient = "";
  }

  // Removes from $scope.ingredients
  function removeIngredient(dummy) {
    $scope.recipes.ingredients.splice(dummy, 1);
  }

  // Instructions and steps in newForm recipe
  $scope.recipes.instructions = [];

  // Methods for $scope.instructions
  $scope.addInstruction = addInstruction;
  $scope.removeInstruction = removeInstruction;


  // Adds to $scope.instructions
  function addInstruction() {
    $scope.recipes.instructions.push($scope.instruction);
    $scope.instruction = "";
  }

  // Removes from $scope.instructions
  function removeInstruction(dummy) {
    $scope.recipes.instructions.splice(dummy, 1);
  }

  // write function to get recipe object on ng-click in newForm.html

  $scope.submitRecipe = function(recipes) {
    storeRecipeFactory.saveObject(recipes);
    $location.path("cookbook");

    // console.log('submitRecipe logging');
    // var newRecipe = new Recipe($scope.recipes.name, $scope.recipes.author, $scope.recipes.tags, $scope.recipes.originStory, "images",$scope.recipes.ingredients, "steps" );
    // console.log(newRecipes);
    // console.log(recipes);
  }


  /////////// service to send new recipe information to database ///////////
  $scope.redirectHome = postRecipe.registerUser;

  ///postRecipe = name of service

  // function that logs user out in header
  $scope.logOut = function(){
        console.log('logOut function is firing on click');
        firebase.auth().signOut();
        $state.go('landing');
  };

}]);
