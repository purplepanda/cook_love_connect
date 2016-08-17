var app = angular.module("cookingConnect");


app.controller("cookbookCtrl", function($scope, $http, storeRecipeFactory, $state, $firebaseObject) {
  $scope.title = "The JABE Cookbook";


  // add storedRecipes to our scope via the storeRecipeFactory
  $scope.storedRecipes = storeRecipeFactory.returnObject();

  var user = firebase.auth().currentUser; // var user identifies logged in user
  var userID = user.uid;
  $scope.uid = user.uid;
  // console.log("user is, ", user);
  // console.log("userID is, ", userID);


  // Call to our FirebaseDB to grab recipes
  $http.get('https://cook-love-connect.firebaseio.com/.json').success(function(data) {
    $scope.recipes = data;
    // console.log(data.recipes);
  });


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


  // enables CSS modal for individual recipes
  $(document).ready(function() {
    $(document).on('click', ".recipeCard", function() {
      event.preventDefault();
      $(this).closest('.recipeDetails').toggle();
    });
  });


  // function that logs user out in header
  $scope.logOut = function() {
    console.log('logOut function is firing on click');
    firebase.auth().signOut();
    $state.go('landing');
  };

});
