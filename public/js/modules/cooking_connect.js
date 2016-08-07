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
