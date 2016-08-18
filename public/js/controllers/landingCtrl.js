var app = angular.module("cookingConnect");

app.controller("landingCtrl", function($scope, $state) {
  $scope.title = "Cook · Love · Connect";

  $scope.loginForm = function() {
    $('#login').show();
    $('#loginButton').hide();
    $('#signup').hide(); // fallback in case user has initiated signup process but decides to login instead
  };

  // Get elements

  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogout = document.getElementById('btnLogout');
  const btnPasswordChange = document.getElementById('btnPasswordChange');

  // Add login event
  btnLogin.addEventListener('click', e => {
    // Get email and pass
    const email = txtEmail.value;
    if (email.length < 4) {
      alert('Please enter a valid email address.');
      return;
    }
    const pass = txtPassword.value;
    if (pass.length < 7) {
      alert('Please enter a password of at least 6 characters.');
      return;
    }
    const auth = firebase.auth();
    // Sign in
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
    promise.catch(e => window.alert('Wrong email address or password, dum-dum.'));
  });

  btnSignUp.addEventListener('click', e => {
    // Get email and pass
    const email = txtEmail.value;
    if (email.length < 4) {
      alert('Please enter a valid email address.');
      return;
    }
    const pass = txtPassword.value;
    if (pass.length < 7) {
      alert('Please enter a password of at least 6 characters.');
      return;
    }
    const auth = firebase.auth();
    // Sign up and log in
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
    promise.catch(e => window.alert('Something is wrong, ya fool. Check the console', e.message));

  });

  // send password reset via email
  btnPasswordChange.addEventListener('click', e => {
    console.log('benson rules');

    function sendPasswordReset() {
      var email = txtEmail.value;
      // [START sendpasswordemail]
      firebase.auth().sendPasswordResetEmail(email).then(function() {
        // Password Reset Email Sent!
        // [START_EXCLUDE]
        alert('Password Reset Email Sent!');
        // [END_EXCLUDE]
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/invalid-email') {
          alert(errorMessage);
        } else if (errorCode == 'auth/user-not-found') {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
      // [END sendpasswordemail];
    }
    sendPasswordReset();
  });



  // log out when button is clicked
  btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
  });

  // Add a realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      // console.log(firebaseUser);
      btnLogout.classList.remove('hide');
      $state.go("cookbook");
    } else {
      console.log('not logged in');
      btnLogout.classList.add('hide');
    }
  });

});
