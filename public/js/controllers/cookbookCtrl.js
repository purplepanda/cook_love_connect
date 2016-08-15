var app = angular.module("cookingConnect");

app.controller("cookbookCtrl", function($scope, $http, storeRecipeFactory, $state, $firebaseObject, getRecipeDataFactory) {
  $scope.title = "The JABE Cookbook";

  $scope.storedRecipes = storeRecipeFactory.returnObject();

  // $scope.storeRecipeObject = storeRecipeFactory.returnObject();
  // TESTING OUT CODE BLOCK FOR REPEATING FORM SUBMMISION

  // var storeRecipesObject = [];
  // storeRecipesObject.push($scope.storeRecipeObject);
  // console.log("Test Recipes for ng repeat" , storeRecipesObject);
  // END OF TESTING ABOVE


  // console.log($scope.storeRecipeObject);

  // $.ajax({
  //   url: 'http://food2fork.com/api/search?key=fc28481c5019cd053fe8ad5794e34d40&q=shredded%20chicken',
  //   dataType: 'jsonp',
  //   crossDomain: true
  // }).done(function(response) {
  //   console.log(response);
  // }.bind(this));

  // $http({
  //   method: "GET",
  //   dataType: 'jsonp',
  //   crossDomain: true,
  //   url: 'http://food2fork.com/api/search?key=fc28481c5019cd053fe8ad5794e34d40&q=shredded%20chicken'
  // }).then(function successCallback(response) {
  //   // $scope.badges = response.data.badges
  //   console.log(response);
  // }, function errorCallback(response) {
  //   console.log('something went wrong');
  // });

  $http.get('https://cook-love-connect.firebaseio.com/.json').success(function(data) {
    //  var user = firebase.auth().currentUser;
    //  $scope.recipes.uid = user.uid;

    $scope.recipes = data;
    console.log(data);
  });
  // var refObject = firebase.database().ref('cook-love-connect/recipes');
  // refObject.once('');

  // var recipeCall = firebase.database().ref('recipes');
  // recipeCall.orderByChild("uid")
  //   .equalTo("isRMRx0ImBhWLMyC3qUusykQLe32")
  //   .on("value", function(snapshot) {
  //     console.log(snapshot.val()[0]);
  //     $scope.recipes = snapshot.val();
  //     console.log(JSON.stringify(snapshot.val()));
  //   });
  // $scope.recipes =


  // for cookbooks -- if we want to isolate one user's collection, I suppose
  $http.get('../mock/cookbookObjects.json').success(function(data) {
    $scope.cookbooks = data;
    //  console.log(data);
  });

  $(document).ready(function() {
    $(document).on('click', ".recipeCard", function() {
      // alert('clicked');
      event.preventDefault();
      $(this).closest('.recipeDetails').toggle();
      // $(this > 'div').toggle();
    });
  });

  // function that logs user out in header
  $scope.logOut = function() {
    console.log('logOut function is firing on click');
    firebase.auth().signOut();
    $state.go('landing');
  };

  // from angularfire docs -- grab data and add to scope
    // figure out a way to get logged in UID then append to the DB call in the next line


  // var ref = firebase.database().ref().child('recipes');  // angularfire -- goes to grab our data
  // // download the data into a local object
  // $scope.data = $firebaseObject(ref);  // make firebaseDB available to the scope on cookbook.html
  // console.log("my user id is: ", myUserId);


  // var banana = firebase.auth().currentUser; //note: var user identifies logged in user
  // console.log("banana is ", banana);
  // $scope.benson = $firebaseObject(banana);

});
