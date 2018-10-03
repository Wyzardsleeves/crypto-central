import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase';  //import firebase

var config = {
    apiKey: "AIzaSyCBY8OoikCtY-FgxhzS2CMW_gWm2gA5mmI",
    authDomain: "crypto-chat-3728e.firebaseapp.com",
    databaseURL: "https://crypto-chat-3728e.firebaseio.com",
    projectId: "crypto-chat-3728e",
    storageBucket: "crypto-chat-3728e.appspot.com",
    messagingSenderId: "1073795691998"
  };

firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
