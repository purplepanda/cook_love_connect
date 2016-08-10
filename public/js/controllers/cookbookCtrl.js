var app = angular.module("cookingConnect");

app.controller("cookbookCtrl", function($scope, $http) {
  $scope.title = "The ... Cookbook";

  // $.ajax({
  //   url: 'http://food2fork.com/api/search?key=fc28481c5019cd053fe8ad5794e34d40&q=shredded%20chicken',
  //   dataType: 'jsonp',
  //   crossDomain: true
  // }).done(function(response) {
  //   console.log(response);
  // }.bind(this));

  $http({
    method: "GET",
    dataType: 'jsonp',
    crossDomain: true,
    url: 'http://food2fork.com/api/search?key=fc28481c5019cd053fe8ad5794e34d40&q=shredded%20chicken'
  }).then(function successCallback(response) {
    // $scope.badges = response.data.badges
    console.log(response);
  }, function errorCallback(response) {
    console.log('something went wrong');
  });

  $http.get('../mock/recipeObjects.json').success(function(data) {
   $scope.recipes = data;
   console.log(data);
});

});
