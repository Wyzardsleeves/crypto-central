import React, { Component } from 'react';
import Crypto from './Components/Crypto';
import './App.css';


//Main app
class App extends Component {
  render(){
    return (
      <div className="app">
        <div className="app-head">
          <div className="container">

          </div>
        </div>
        <div className="app-body">
          <div className="container">
            <Crypto />
          </div>
        </div>
        <div className="app-foot">
          <div className="container">

          </div>
        </div>
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
