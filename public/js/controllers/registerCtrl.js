var app = angular.module("cookingConnect");

app.controller("registerCtrl", ["$scope", "$http", "$state", function($scope, $http, $state) {
  $scope.title = "Sign Up Here" //maps to {{title}} on register.html
  $scope.message = "To sign up, please fill in the information below!";

  $scope.registerUser = function() {
    var user = {
      "firstName": $scope.user.firstName,
      "lastName": $scope.user.lastName,
      "email": $scope.user.email,
      "password": $scope.user.password
    };
    console.log(user);

    $http.post('/users', user)
      .then(function successCallback(response) {
          $scope.items = response.data;
          console.log($scope.items);
        },
        function errorCallback(response) {
          console.log(response);
        });
  }
}])
