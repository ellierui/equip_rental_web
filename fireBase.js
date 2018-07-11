var app_fireBase = {};

(function(){

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD5OlxMgzsWpAHgA-J6KY_43AVTPFh5DvM",
    authDomain: "slsc-website.firebaseapp.com",
    databaseURL: "https://slsc-website.firebaseio.com",
    projectId: "slsc-website",
    storageBucket: "",
    messagingSenderId: "884723441020"
  };
  firebase.initializeApp(config);

  app_fireBase = firebase;
})()