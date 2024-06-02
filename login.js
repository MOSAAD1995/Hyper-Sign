// Initialize Firebase
var firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
  };

  app.use(express.static('public'));
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Google Sign-In Configuration
  var provider = new firebase.auth.GoogleAuthProvider();
  
  // Function to handle user login with email and password
  function loginWithEmail() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // Redirect or perform any necessary action after successful login
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // Handle login errors
      console.error(errorMessage);
    });
  }
  
  // Function to handle user login with Google account
  function loginWithGoogle() {
    firebase.auth().signInWithPopup(provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var credential = result.credential;
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // Redirect or perform any necessary action after successful login
    })
    .catch((error) => {
      // Handle login errors
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      console.error(errorMessage);
    });
  }
  