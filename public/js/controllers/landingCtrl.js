var app = angular.module("cookingConnect");

app.controller("landingCtrl", function($scope, $state) {
  $scope.title = "Welcome to Cook Love Connect!";


  $scope.loginForm = function() {
    // alert('Temporary Function! Clicking this button should pop up a form to login');
    $('#login').show();
    $('#loginButton').hide();
    $('#signup').hide(); // fallback in case user has initiated signup process but decides to login instead
  };

  $scope.regForm = function() {
    // alert('Temporary Function! Clicking this button should pop up a form to register');
    $('#signup').show();
    $('#signupButton').hide();
    $('#login').hide(); // fallback in case user toggles bw signup and login

  };

  $scope.fakeLogin = function() {
    $state.go("userhome");
  };

  // firebase code aug 13 //

  // Get elements

  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogout = document.getElementById('btnLogout');

  // Add login event
  btnLogin.addEventListener('click', e => {
    // Get email and pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    // Sign in
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  });

  btnSignUp.addEventListener('click', e => {
    // Get email and pass
    // TODO: check for real email address
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    // Sign in
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise
      .catch(e => console.log(e.message));
  });

  btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
  });

  // Add a realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
      console.log(firebaseUser);
      btnLogout.classList.remove('hide');
    } else {
      console.log('not logged in');
      btnLogout.classList.add('hide');
    }
  });

});
