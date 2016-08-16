// Logic to add new recipes via input Form

var app = angular.module("cookingConnect");

app.controller("newFormCtrl", ["$scope", "$state", "postRecipe", "storeRecipeFactory", "$location", "$firebaseObject", function($scope, $state, postRecipe, storeRecipeFactory, $location, $firebaseObject) {
  $scope.title = "Add A New Recipe";
  $scope.recipes = {};




  ////////// variables //////////
  $scope.recipes = {};
  $scope.recipes.tag = [];
  $scope.recipes.ingredients = [];
  $scope.recipes.instructions = [];




  ////////// methods //////////
  $scope.addTags = addTags;
  $scope.removeTags = removeTags;
  $scope.addIngredient = addIngredient;
  $scope.removeIngredient = removeIngredient;
  $scope.addInstruction = addInstruction;
  $scope.removeInstruction = removeInstruction;




  ////////// functions //////////
  function addTags() {
    $scope.recipes.tag.push($scope.tag);
    $scope.tag = "";
  }


  function removeTags(item) {
    $scope.recipes.tag.splice(item, 1);
  }


  // Adds to $scope.ingredients
  function addIngredient() {
    $scope.recipes.ingredients.push($scope.ingredient);
    $scope.ingredient = "";
  }

  // Removes from $scope.ingredients
  function removeIngredient(dummy) {
    $scope.recipes.ingredients.splice(dummy, 1);
  }



  // Adds to $scope.instructions
  function addInstruction() {
    $scope.recipes.instructions.push($scope.instruction);
    $scope.instruction = "";
  }

  // Removes from $scope.instructions
  function removeInstruction(dummy) {
    $scope.recipes.instructions.splice(dummy, 1);
  }

  // write function to get recipe object on ng-click in newForm.html

  $scope.submitRecipe = function(recipes) {

    storeRecipeFactory.saveObject(recipes);
    $location.path("cookbook");
  }

  // function that logs user out in header
  $scope.logOut = function() {
    console.log('logOut function is firing on click');
    firebase.auth().signOut();
    $state.go('landing');
  };

  // Photo uploading functionality
  var uploader = document.getElementById('uploader');
  var fileButton = document.getElementById('fileButton');
  var downloadURL;

  // Listen for file selection
  fileButton.addEventListener('change', function(e){
    // Get file
    var file = e.target.files[0];

    // Create a storage ref
    var storageRef = firebase.storage().ref('images/' + file.name);

    // Upload file
    var task = storageRef.put(file);

    // Update progress bar
    task.on('state_changed',

      function progress(snapshot){
        var percentage = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
          uploader.value = percentage;
          console.log(percentage);
      },

      function error(err){
        console.log(err);
      },

      function complete(){
        downloadURL = task.snapshot.downloadURL;
        storeRecipeFactory.saveDownloadUrl(downloadURL);
        console.log(downloadURL);

      }

      );
  });

}]);
