var app = angular.module("cookingConnect")

.factory("postRecipe", ["$http", "$state", function($http, $state) {

  var addNewRecipe = function(recipe) {
    console.log("Working?");
    return $http.post("/recipes", recipe)
      .then(function(data) {
        console.log(data);
        $state.go("userhome");
      });
  }
  return {
    addNewRecipe: addNewRecipe
  };
}]);


// redirectHome = redirectHome
// postService = postRecipe
// registerUser = addNewRecipe
