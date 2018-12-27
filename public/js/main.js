document.addEventListener('DOMContentLoaded', function() {
  const config = {
    apiKey: "AIzaSyD5wmajh23hCvpX3U-ypE9Gozy4sOjvgA8",
    authDomain: "homebase-51972.firebaseapp.com",
    databaseURL: "https://homebase-51972.firebaseio.com",
    projectId: "homebase-51972",
    storageBucket: "homebase-51972.appspot.com",
    messagingSenderId: "233750046468"
  };
  firebase.initializeApp(config);

  try {
    let app = firebase.app();
    let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
    document.getElementById('load').innerHTML = `Firebase SDK loaded with ${features.join(', ')}`;
  } catch (e) {
    console.error(e);
    document.getElementById('load').innerHTML = 'Error loading the Firebase SDK, check the console.';
  }
});