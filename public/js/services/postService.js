var app = angular.module("cookingConnect")

.factory("postService", ["$http", "$state", function($http, $state) {
  // var user = {};


  // "firstName": "more stuff",
  // "lastName": "newexample",
  // "email": "newsies@example.com",
  // "password": "newexample"

  //   this.sendData = function(dataObj, callback) {
  //    $http.post('someUrl', dataObj).then(callback)
  //  }
  var registerUser = function(user) {
    console.log("Working?");
    return $http.post("/users", user)
      .then(function(data) {
        // if (!data.status) {
        //   $state.go("register");
        //   alert("Error, that email address is already registered");
        // } else {
        //   $state.go("userhome");
        // }
        console.log(data);
        $state.go("userhome");
      });
  }
  return {
    registerUser: registerUser
  };
}]);


// function($http) {
//  $http.post(url, data, config);

//url = string of a relative or absolute url specifying destination of the request
//data = this object contains the data content
//config = optional configuration object
//the post() method returns a HttpPromise object


// var testObject = {
//   firstName: $scope.user.firstName,
//   lastName: $scope.user.lastName,
//   email: $scope.user.email,
//   password: $scope.user.password
// };
//
// testObject.AddNewUser = function(user) {
//   $http.post("/users", user).success(function(res) {
//     $scope.goToHomeKitchen = function() {
//       $state.go('userhome');
//     }
//   })
// }
//
// return testObject;
// }]);
