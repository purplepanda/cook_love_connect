var app = angular.module("cookingConnect");

app.controller("landingCtrl", function($scope) {
  $scope.title = "Welcome to Cook Love Connect!";


  $scope.loginTemp = function() {
    alert('Temporary Function! Clicking this button should pop up a form to login');
  };

  $scope.regTemp = function() {
    // alert('Temporary Function! Clicking this button should pop up a form to register');
    $('#signup').show();
  };

});
