import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
  apiKey: "AIzaSyBeKfndoG0IS8NQo9Eo5dFitOojhcPWZJA",
  authDomain: "evernote-clone-c235f.firebaseapp.com",
  databaseURL: "https://evernote-clone-c235f.firebaseio.com",
  projectId: "evernote-clone-c235f",
  storageBucket: "evernote-clone-c235f.appspot.com",
  messagingSenderId: "361299829937",
  appId: "1:361299829937:web:9cb5d8780fb43a276dee90",
  measurementId: "G-G2NZ729VJ5"
});
firebase.analytics();

ReactDOM.render(<App />, document.getElementById('evernote-container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
