var app = angular.module("cookingConnect");

app.factory('recipesFactory', ["$firebaseObject", "$http", function($firebaseObject, $http) {


  function getAll() {
    $http.get('https://cook-love-connect.firebaseio.com/.json')
  }

  return {
    getAll: getAll
  }

}]);
