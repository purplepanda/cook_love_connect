//placeholder for future Service code, please rename when appropriate

var app = angular.module('cookingConnect');
app.factory('searchFactory',['$http', function($http){
  $http({
    method: 'GET',
    url: 'http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3'
  }).then(function successCallback(response) {
      // currently response is
      console.log('http service res: ', response);
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
}]);




// app.factory('searchFactory', function(){
//   var factoryObject = {};
//   var bensonVar = 'BENSON is TESTING';
  // GETTER
  // function saveObject(searchIt){
    // grab data from searchIt and make available to this factory for use in SETTER
  //   factoryObject = searchIt;
  //   console.log('factoryObject: ' + factoryObject);
  // }

  // SETTER
  // function returnObject(){
  //   return factoryObject;
  // }

//   return {
//     saveObject: saveObject,
//     returnObject: returnObject
//   };
// });
