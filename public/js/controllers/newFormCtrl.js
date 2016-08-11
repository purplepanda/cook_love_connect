var app = angular.module("cookingConnect");

app.controller("newFormCtrl", function($scope) {
  $scope.title = "New Form Recipe";

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

    // write function to get recipe object on ng-click in newForm.html

    $scope.submitRecipe = function(recipes){
      // console.log('submitRecipe logging');
      console.log(recipes);
    }



});
