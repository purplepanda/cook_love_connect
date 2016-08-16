var app = angular.module("cookingConnect");

app.factory('getRecipeDataFactory', ["$firebaseObject", function($firebaseObject) {

  var recipesTable = firebase.database().ref().child('recipes').orderByChild('uid'); //note: users maps to the recipes database table in firebase
  console.log("recipesTable is ", recipesTable);

  // var myID = firebase.auth().currentUser.uid;
  function getUserID() { //note: users maps to the users.*** in newUserProfileForm.html

    // console.log('myID is', myID);
    // var user = firebase.auth().currentUser; //note: var user identifies logged in user
    // users.uid = user.uid;
    // usersTable.push(users);
    // console.log("Store New Recipe", recipesTable);
  }


  function returnObject() {
    return recipesTable;
  };

  return recipesTable;
  // {
  //   // saveObject: saveObject,
  //   returnObject: returnObject
  // }
}]);
