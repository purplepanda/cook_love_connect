var app = angular.module("cookingConnect");

app.controller("landingCtrl", function($scope) {
  $scope.title = "Welcome to Cook Love Connect!";


  $scope.loginTemp = function() {
    // alert('Temporary Function! Clicking this button should pop up a form to login');
    $('#login').show();
    $('#loginButton').hide();
    $('#signup').hide(); // fallback in case user has initiated signup process but decides to login instead
  };

  $scope.regTemp = function() {
    // alert('Temporary Function! Clicking this button should pop up a form to register');
    $('#signup').show();
    $('#signupButton').hide();
    $('#login').hide(); // fallback in case user toggles bw signup and login

  };

});
