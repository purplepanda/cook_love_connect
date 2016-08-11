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
    })
    .state("newForm", {
      url: "/newForm",
      templateUrl: "partials/newForm.html",
      controller: "newFormCtrl"
    });
}]);

// [benson] currently, this does not work if I cut / paste into get_recipe_service -- throws an injector error

// this helped  http://weblogs.asp.net/dwahlin/using-an-angularjs-factory-to-interact-with-a-restful-service
