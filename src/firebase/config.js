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

const db = firebaseApp.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();
export { db, timestamp }