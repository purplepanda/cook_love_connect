var app = angular.module("cookingConnect");

app.controller("userhomeCtrl", ['$scope', '$http', function($scope, $http) {
  $scope.title = "My Kitchen";

  // josh added this code block Aug 9 AM
  $http({
    method: "GET",
    dataType: 'jsonp',
    crossDomain: true,
    url: 'http://recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3'
  }).then(function successCallback(response) {
    // $scope.badges = response.data.badges
    console.log(response);
  }, function errorCallback(response) {
    console.log('something went wrong');

  });

  $scope.recipeForm = function() {
    alert("This should pop up the new reciple form");
  };

// [benson] define function that is called on submit button ng-click event
  var tempSearch = "";
  $scope.submitSearch = function(searchIt){
    // console.log(searchIt);
    tempSearch = searchIt;
    console.log('tempSearch:', tempSearch);

  // use tempSearch to make API call
    var urlBase = 'http://recipepuppy.com/api/?q=';
    var searchUrl = urlBase + tempSearch;
    console.log("urlBase is ", urlBase);
    console.log("searchUrl is ", searchUrl);
    var searchFactory = {};
    searchFactory.getRecipe = function(){
      console.log('tempSearch inside getRecipe function', tempSearch);
      return $http.get(urlBase);
    };

    // including this next line throws an error that saveObject is not a function, even if I define it in the factory
    // searchFactory.saveObject(searchIt);
  };

}]);
