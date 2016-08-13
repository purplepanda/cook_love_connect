var app = angular.module("cookingConnect");

app.controller("cookbookCtrl", function($scope, $http, storeRecipeFactory) {
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

  $http.get('../mock/recipeObjects.json').success(function(data) {
   $scope.recipes = data;
   console.log(data);
  });

  // for cookbooks -- if we want to isolate one user's collection, I suppose
  $http.get('../mock/cookbookObjects.json').success(function(data) {
   $scope.cookbooks = data;
  //  console.log(data);
  });

  $(document).ready(function(){
    $(document).on('click', ".recipeCard", function(){
      // alert('clicked');
      event.preventDefault();
      $(this).closest('.recipeDetails').toggle();
      // $(this > 'div').toggle();
    });


  });



});
