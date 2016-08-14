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
<<<<<<< HEAD
    .state("postRecipeForm", {
      url: "/postRecipeForm",
      templateUrl: "partials/postRecipeForm.html",
      controller: "newRecipeCtrl"
    })
    .state("login", {
      url: "/login",
      templateUrl: "partials/login.html",
      controller: "loginCtrl"
    })
    .state("logout", {
      url: "/logout",
      templateUrl: "partials/logout.html",
      controller: "logoutCtrl"
    })
=======
    // .state("login", {
    //   url: "/login",
    //   templateUrl: "partials/login.html",
    //   controller: "loginCtrl"
    // })
    // .state("logout", {
    //   url: "/logout",
    //   templateUrl: "partials/logout.html",
    //   controller: "logoutCtrl"
    // })
>>>>>>> 86f3bd776d9bd4ceb59a9d4a32d256144a31264c
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
    .state("recipeInfo", {
      url: "/recipeInfo",
      templateUrl: "partials/recipeInfo.html",
      controller: "recipeInfoCtrl"
    });
}]);

// [benson] currently, this does not work if I cut / paste into get_recipe_service -- throws an injector error

// this helped  http://weblogs.asp.net/dwahlin/using-an-angularjs-factory-to-interact-with-a-restful-service
