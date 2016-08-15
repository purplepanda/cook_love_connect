var app = angular.module("cookingConnect");

app.factory('newUserProfileFactory', function() {

  var usersTable = firebase.database().ref('users'); //note: users maps to the users database table in firebase

  function saveObject(users) { //note: users maps to the users.*** in newUserProfileForm.html
    var user = firebase.auth().currentUser; //note: var user identifies logged in user
    users.uid = user.uid;
    usersTable.push(users);
    console.log("Store New User", usersTable);
  }

  function returnObject() {
    return usersTable;
  };

  return {
    saveObject: saveObject,
    returnObject: returnObject
  }
});
