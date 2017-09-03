import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Main app
class App extends Component {
  render(){
    return (
      <div className="app">
        <div className="app-header">

        </div>
        <div className="app-body">
          <Crypto />
        </div>
        <div className="app-foot">

        </div>
      </div>
    );
  }
}

//Build crypto list
class Crypto extends Component {
  render(){
    return (
      <div className="crypto"> //might need to change back to App
        <h5>This is a test for Crypto </h5>
      </div>
    );
  }
}

export default App;

/*
<div className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <h2>Welcome to React</h2>
</div>
<p className="App-intro">
  To get started, edit <code>src/App.js</code> and save to reload.
</p>
*/
