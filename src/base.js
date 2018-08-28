import Rebase from 're-base';
import firebase from 'firebase';

// create firebase app
const firebaseApp = firebase.initializeApp(
  {
    apiKey: "AIzaSyCyMpnJUUl5cMbrgqoZ1cAEiGj1MnXu-dE",
    authDomain: "catch-of-the-day-femmebot.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-femmebot.firebaseio.com"
  }
);

// create database binding
const base = Rebase.createClass(firebaseApp.database());

// this is the named export
export { firebaseApp };

// this is the default export
export default base;
