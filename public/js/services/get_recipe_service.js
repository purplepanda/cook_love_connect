//placeholder for future Service code, please rename when appropriate

var app = angular.module('cookingConnect');

app.factory('searchFactory',['$http', function($http){

  // console.log("tempSearch:", tempSearch);
  var urlBase = 'http://recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3';
  var searchFactory = {};
  searchFactory.getRecipe = function(){
    return $http.get(urlBase);
  };

  console.log('temp search is', tempSearch);

  console.log("searchFactory ", searchFactory)
  return searchFactory;
  // PREVIOUS, BROKEN CODE -- delete once we get the above into separate factory file
  // $http({
  //   method: 'GET',
  //   url: 'http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3'
  // }).then(function successCallback(response) {
  //     console.log('http service res: ', response);
  //   }, function errorCallback(response) {
  //
  //   });
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
