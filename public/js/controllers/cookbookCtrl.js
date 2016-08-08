var app = angular.module("cookingConnect");

app.controller("cookbookCtrl", function($scope, $http) {
  $scope.title = "The ... Cookbook";

  $http({
    method: "GET",
    url: 'http://food2fork.com/api/search?key=fc28481c5019cd053fe8ad5794e34d40&q=shredded%20chicken'
  }).then(function successCallback(response) {
        // $scope.badges = response.data.badges
        console.log(response);
      // this callback will be called asynchronously
      // when the response is available
    }, function errorCallback(response) {
      console.log('something went wrong');
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });

});
