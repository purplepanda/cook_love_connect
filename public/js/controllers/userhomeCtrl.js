var app = angular.module("cookingConnect");

app.controller("userhomeCtrl", function($scope) {
  $scope.title = "My Kitchen";

  $scope.submitRecipe = function() {
    alert("This should POST the new recipe info to the database!");
  };
});
