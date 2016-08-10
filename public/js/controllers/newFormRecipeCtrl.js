var app= angular.module("cook_love_connect")
app.controller("newRecipeFormCtrl",function($scope){

  $scope.previewFile = function(img) {
    var preview = document.querySelector('img');
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();

    reader.onloadend = function () {
      preview.src = reader.result;
    }

    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = "";
    }
  }

});
