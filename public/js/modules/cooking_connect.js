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
    .state("register", {
      url: "/register",
      templateUrl: "partials/register.html",
      controller: "registerCtrl"
    })
    .state("login", {
      url: "/login",
      templateUrl: "partials/login.html",
      controller: "loginCtrl"
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
