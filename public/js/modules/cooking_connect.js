var app = angular.module("cookingConnect", ["ui.router"]);

app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider
    .otherwise("/landing");

  $stateProvider
    .state("landing", {
      url: "/landing",
      templateUrl: "partials/landing.html",
      controller: "landingCtrl"
    })
    .state("userhome", {
      url: "/userhome",
      templateUrl: "partials/userhome.html",
      controller: "userhomeCtrl"
    })
    .state("cookbook", {
      url: "/cookbook",
      templateUrl: "partials/cookbook.html",
      controller: "cookbookCtrl"
    });
}]);

// [benson] currently, this does not work if I cut / paste into get_recipe_service -- throws an injector error
app.factory('searchFactory',['$http', function($http){
  var urlBase = 'http://recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3';
  var searchFactory = {};
  searchFactory.getRecipe = function(){
    return $http.get(urlBase);
  };


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
