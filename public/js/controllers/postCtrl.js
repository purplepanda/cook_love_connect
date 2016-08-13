var app = angular.module("cookingConnect")

.controller("postCtrl", ["$scope", "$state", "postService", function($scope, $state, postService) {
  //must inject service (postService) in this anon function
  //we want to collect data from register form and post it to database
  $scope.title = "Sign Up Here" //maps to {{title}} on register.html
  $scope.message = "To sign up, please fill in the information below!"; //maps to {{message}} on register.html

  // this function uses postService service and the AddNewUser function created in that service
  // $scope.user maps to the ng - model = "user.---" in the form inputs
  $scope.redirectHome = postService.registerUser;


}]);

// myService.sendData(dataObj);

//Original Attempt at postService
// var testObject = {
//   firstName: $scope.user.firstName,
//   lastName: $scope.user.lastName,
//   email: $scope.user.email,
//   password: $scope.user.password
// };
//
// testObject.AddNewUser = function(user) {
//   $http.post("/users", user).success(function(res) {
//     $scope.goToHomeKitchen = function() {
//       $state.go('userhome');
//     }
//   })
// }
//
// return testObject;
