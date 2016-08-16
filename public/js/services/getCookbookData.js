var app = angular.module("cookingConnect");

app.factory('getCookbookDataFactory', ["$firebaseObject", "$http", "$scope", function($firebaseObject, $http, $scope) {

  $http.get('https://cook-love-connect.firebaseio.com/.json').success(function(data) {
    //  var user = firebase.auth().currentUser;
    //  $scope.recipes.uid = user.uid;

    $scope.cookbooks = data;
    console.log(data.cookbooks);
  });


  // var cookbooksTable = firebase.database().ref().child('cookbooks').orderByChild('uid');
  //
  // function getUserID() {}
  //
  // function returnObject() {
  //   return cookbooksTable;
  // };
  //
  // return cookbooksTable;
}]);
