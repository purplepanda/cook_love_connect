var app = angular.module("cookingConnect", ["ui.router", "firebase", "angular-toArrayFilter"]);

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
    })
    // CLC 2.0
    // .state("newCookbookForm", {
    //   url: "/newCookbookForm",
    //   templateUrl: "partials/newCookbookForm.html",
    //   controller: "newCookbookCtrl"
    // })
    .state("newUserProfileForm", {
      url: "/newUserProfileForm",
      templateUrl: "partials/newUserProfileForm.html",
      controller: "newUserProfileCtrl"
    })
}]);
