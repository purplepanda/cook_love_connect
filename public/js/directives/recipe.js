var app = angular.module("cookingConnect");

app.directive("recipeCard", function() {
  return {
    restrict: "E",
    replace: true,
    templateUrl: "partials/recipeCard.html"
  };
});
