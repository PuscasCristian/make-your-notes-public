import * as firebase from 'firebase'
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCL7zV5tDlEZ2UFdEBcijIFac9tdlcO6FU",
    authDomain: "public-thoughts-75d3e.firebaseapp.com",
    databaseURL: "https://public-thoughts-75d3e.firebaseio.com",
    projectId: "public-thoughts-75d3e",
    storageBucket: "public-thoughts-75d3e.appspot.com",
    messagingSenderId: "321919447252",
    appId: "1:321919447252:web:fc4043eb2e8b2b91930b41",
    measurementId: "G-PP1MJMNWSH"
});

firebase.analytics();
const googleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        return result;
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
}


const db = firebaseApp.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();
export { db, timestamp, googleSignIn }