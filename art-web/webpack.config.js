// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAvPJfr2vYg3mYbO3Lbo-RBFqezE2GtG4",
  authDomain: "artweb-2d885.firebaseapp.com",
  projectId: "artweb-2d885",
  storageBucket: "artweb-2d885.appspot.com",
  messagingSenderId: "728843305018",
  appId: "1:728843305018:web:f69d8b60914c6d896df503",
  measurementId: "G-32CHLQJCSP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};