var app = angular.module("cookingConnect");

app.controller("newFormCtrl", ["$scope", "$state", "postRecipe", "storeRecipeFactory", "$location", function($scope, $state, postRecipe, storeRecipeFactory, $location) {
  $scope.title = "Add A New Recipe";
  $scope.recipes = {};




  ////////// variables //////////
  $scope.recipes = {};
  $scope.recipes.tag = [];
  $scope.recipes.ingredients = [];
  $scope.recipes.instructions = [];




  ////////// methods //////////
  $scope.addTags = addTags;
  $scope.removeTags = removeTags;
  $scope.addIngredient = addIngredient;
  $scope.removeIngredient = removeIngredient;
  $scope.addInstruction = addInstruction;
  $scope.removeInstruction = removeInstruction;




  ////////// functions //////////
  function addTags() {
    $scope.recipes.tag.push($scope.tag);
    $scope.tag = "";
  }


  function removeTags(item) {
    $scope.recipes.tag.splice(item, 1);
  }


  // Adds to $scope.ingredients
  function addIngredient() {
    $scope.recipes.ingredients.push($scope.ingredient);
    $scope.ingredient = "";
  }

  // Removes from $scope.ingredients
  function removeIngredient(dummy) {
    $scope.recipes.ingredients.splice(dummy, 1);
  }



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


  /////////// service to send new recipe information to database /////////// Aug 14 - for MongoDB, not necessary for firebase
  // $scope.redirectHome = postRecipe.registerUser;

  ///postRecipe = name of service

  // function that logs user out in header
  $scope.logOut = function() {
    console.log('logOut function is firing on click');
    firebase.auth().signOut();
    $state.go('landing');
  };

}]);
