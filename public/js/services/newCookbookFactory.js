// CLC 2.0 feature
//
// var app = angular.module("cookingConnect");
//
// app.factory('newCookbookFactory', function() {
//
//   var cookbookTable = firebase.database().ref('cookbooks'); //note: users maps to the cookbooks database table in firebase
//
//   function saveObject(cookbook) { //note: cookbook maps to the cookbook.*** in newCookbookForm.html
//     var user = firebase.auth().currentUser; //note: var user identifies logged in user
//     cookbook.uid = user.uid;
//     cookbookTable.push(cookbook);
//     console.log("Store New Cookbook", cookbookTable);
//   }
//
//   function returnObject() {
//     return cookbookTable;
//   };
//
//   return {
//     saveObject: saveObject,
//     returnObject: returnObject
//   }
// });
