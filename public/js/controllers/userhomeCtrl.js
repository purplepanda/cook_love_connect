var app = angular.module("cookingConnect");


app.controller("userhomeCtrl", ['$scope', '$http', '$state', function($scope, $http, $state) {
  $scope.title = "My Kitchen";

  // logic for 3rd party API search
  var tempSearch = ""; // make tempSearch available outside function if we ever want to display elsewhere
  $scope.submitSearch = function(searchIt) {
    tempSearch = searchIt;

    // make API call by concat urlbase w/ user-supplied search query
    var urlBase = 'http://recipepuppy.com/api/?q=';
    var searchUrl = urlBase + tempSearch;

    $http.get(searchUrl)
      .then(function(response) {
        console.log("successful API request!", response);
        $scope.thirdpartyrecipes = response.data.results;
      });
  };

  // function that logs user out in header
  $scope.logOut = function() {
    console.log('logOut function is firing on click');
    firebase.auth().signOut();
    $state.go('landing');
  };

}]);
