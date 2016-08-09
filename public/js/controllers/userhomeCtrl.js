var app = angular.module("cookingConnect");

app.controller("userhomeCtrl", ['$scope', '$http', 'searchFactory', function($scope, $http, searchFactory) {
  $scope.title = "My Kitchen";

  $scope.recipeForm = function() {
    alert("This should pop up the new reciple form");
  };

// [benson] define function that is called on submit button ng-click event
  var tempSearch;
  $scope.submitSearch = function(searchIt){
    console.log(searchIt);
    tempSearch = searchIt;
    // actually, probably need another step here to make http call to API before saving object
    // Simple GET request example:



    // searchFactory.saveObject(searchIt);
  };

}]);
