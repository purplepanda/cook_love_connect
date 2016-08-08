var app = angular.module("cookingConnect");

app.controller("userhomeCtrl", function($scope) {
  $scope.title = "My Kitchen";

  $scope.recipeForm = function() {
    alert("This should pop up the new reciple form");
  };

// benson attempting to define function that is called on submit button ng-click event
  $scope.submitSearch = function(searchIt){
    console.log(searchIt);
    // actually, probably need another step here to make http call to API before saving object
    // searchFactory.saveObject(searchIt);
  }

});
