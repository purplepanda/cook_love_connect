var app = angular.module("cookingConnect");


app.controller("userhomeCtrl", ['$scope', '$http', '$state', 'getCookbookDataFactory', 'getRecipeDataFactory',
  function($scope, $http, $state, getCookbookDataFactory, getRecipeDataFactory) {
    $scope.title = "My Kitchen";


    var user = firebase.auth().currentUser; //note: var user identifies logged in user
    console.log("user is, ", user);
    var userID = user.uid;
    $scope.uid = user.uid;
    console.log("userID is, ", userID);


    $http.get('https://cook-love-connect.firebaseio.com/.json').success(function(data) {
      //  var user = firebase.auth().currentUser;
      //  $scope.recipes.uid = user.uid;

      $scope.cookbooks = data;
      console.log(data.cookbooks);
    });


    // [benson] define function that is called on submit button ng-click event
    var tempSearch = "";
    $scope.submitSearch = function(searchIt) {
      // console.log(searchIt);
      tempSearch = searchIt;
      // console.log('tempSearch:', tempSearch);

      // make API call by concat urlbase w/ user-supplied search query
      var urlBase = 'http://recipepuppy.com/api/?q=';
      var searchUrl = urlBase + tempSearch;
      // console.log("urlBase is ", urlBase);
      // console.log("searchUrl is ", searchUrl);

      $http.get(searchUrl)
        .then(function(response) {
          console.log("successful API request!", response);
          $scope.thirdpartyrecipes = response.data.results;
        });

      var searchFactory = {};
      searchFactory.getRecipe = function() {
        console.log('tempSearch inside getRecipe function', tempSearch);
        // return $http.get(urlBase);
        return $http.get(searchUrl);
      };

      // including this next line throws an error that saveObject is not a function, even if I define it in the factory
      // searchFactory.saveObject(searchIt);
    };

    $scope.submitRecipe = function() {
      alert("This should POST the new recipe info to the database!");
    };

    // function that logs user out in header
    $scope.logOut = function() {
      console.log('logOut function is firing on click');
      firebase.auth().signOut();
      $state.go('landing');
    };



  }
]);


// $scope.recipeForm = function() {
//   alert("This should pop up the new reciple form");
// }

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
