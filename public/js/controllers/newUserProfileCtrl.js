var app = angular.module("cookingConnect");

app.controller("newUserProfileCtrl", ["$scope", "$state", "newUserProfileFactory", function($scope, $state, newUserProfileFactory) {
  $scope.title = "New User Profile Form"




  ////////// variables //////////
  $scope.users = {};
  $scope.users.allergies = [];
  $scope.users.family = [];




  ////////// methods //////////
  $scope.addAllergies = addAllergies;
  $scope.removeAllergies = removeAllergies;
  $scope.addFamily = addFamily;
  $scope.removeFamily = removeFamily;




  ////////// functions //////////
  function addAllergies() {
    $scope.users.allergies.push($scope.allergies);
    $scope.allergies = "";
  }

  function removeAllergies(item) {
    $scope.users.allergies.splice(item, 1);
  }



  function addFamily() {
    $scope.users.family.push($scope.members);
    $scope.members = "";
  }

  function removeFamily(item) {
    $scope.users.family.splice(item, 1);
  }




  $scope.submitNewUser = function(users) {
    newUserProfileFactory.saveObject(users);
    $state.go("userhome");
  }

  // function that logs user out in header
  $scope.logOut = function() {
    firebase.auth().signOut();
    $state.go("landing");
  };

}]);
