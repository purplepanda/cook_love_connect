var app = angular.module("cookingConnect")

.factory("postRecipe", ["$http", "$state", function($http, $state) {

  var registerUser = function(user) {
    console.log("Working?");
    return $http.post("/users", user)
      .then(function(data) {
        console.log(data);
        $state.go("userhome");
      });
  }
  return {
    registerUser: registerUser
  };
}]);
