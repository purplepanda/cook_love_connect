// CLC 2.0 in development -- Logic to add new cookbook to shared 


// var app = angular.module("cookingConnect");
//
// app.controller("newCookbookCtrl", ["$scope", "$state", "newCookbookFactory", function($scope, $state, newCookbookFactory) {
//   $scope.title = "New Cookbook Form"
//
//
//
//   ////////// variables //////////
//   $scope.cookbook = {};
//   $scope.cookbook.members = [];
//
//
//
//
//   ////////// methods //////////
//   $scope.addMembers = addMembers;
//   $scope.removeMembers = removeMembers;
//
//
//
//
//   ////////// functions //////////
//   function addMembers() {
//     $scope.cookbook.members.push($scope.members);
//     $scope.members = "";
//   }
//
//   function removeMembers(item) {
//     $scope.cookbook.members.splice(item, 1);
//   }
//
//
//
//
//   $scope.submitNewCookbook = function(cookbook) {
//     newCookbookFactory.saveObject(cookbook);
//     $state.go("userhome");
//   }
//
//   // function that logs user out in header
//   $scope.logOut = function() {
//     firebase.auth().signOut();
//     $state.go('landing');
//   };
//
// }]);
