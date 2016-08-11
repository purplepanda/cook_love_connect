var app = angular.module("cookingConnect");

app.controller("userhomeCtrl", ['$scope', '$http', function($scope, $http) {
  $scope.title = "My Kitchen";

  // $scope.recipeForm = function() {
  //   alert("This should pop up the new reciple form");
  // }
});

  // josh added this code block Aug 9 AM
  // $http({
  //   method: "GET",
  //   dataType: 'jsonp',
  //   crossDomain: true,
  //   url: 'http://recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3'
  // }).then(function successCallback(response) {
  //   // $scope.badges = response.data.badges
  //   console.log(response);
  // }, function errorCallback(response) {
  //   console.log('something went wrong');
  //
  // });


// [benson] define function that is called on submit button ng-click event
  var tempSearch = "";
  $scope.submitSearch = function(searchIt){
    // console.log(searchIt);
    tempSearch = searchIt;
    // console.log('tempSearch:', tempSearch);

  // make API call by concat urlbase w/ user-supplied search query
    var urlBase = 'http://recipepuppy.com/api/?q=';
    var searchUrl = urlBase + tempSearch;
    // console.log("urlBase is ", urlBase);
    // console.log("searchUrl is ", searchUrl);

    $http.get(searchUrl)
    .then(function(response){
      console.log("successful API request!", response);
      $scope.thirdpartyrecipes = response.data.results; });

    var searchFactory = {};
    searchFactory.getRecipe = function(){
      console.log('tempSearch inside getRecipe function', tempSearch);
      // return $http.get(urlBase);
      return $http.get(searchUrl);
    };

    // including this next line throws an error that saveObject is not a function, even if I define it in the factory
    // searchFactory.saveObject(searchIt);
  };

}]);
