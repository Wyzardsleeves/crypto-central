import React, { Component } from 'react';
import logo from './cc-home-logo.png';
import Cryptos from './Components/Cryptos';
import Chat from './Components/Chat';
import Login from './Components/Login';
import './App.css';

class App extends Component {

  render(){
    return (
      <div className="app">
        <div className="app-head">
          <div className="container">
            <div className="head-left">
              <img src={logo} alt="crypto-central" />
              <h4>Live crypto currency feed!</h4>
            </div>
            <Login />
          </div>
        </div>
        <div className="app-body">
          {/* Tabs will go here */}
          <div className="container">
            <Cryptos />
            <Chat />
          </div>
        </div>
        <div className="app-foot">
          <div className="container">
            <div className="top-foot">
              <div className="general-info col-xs-2">
                <h6><a href="#">About</a></h6>
                <h6><a href="#">Services</a></h6>
                <h6><a href="#">Careers</a></h6>
                <h6><a href="#">Blog</a></h6>
              </div>
              <div className="sub-info col-xs-2">
                <h6><a href="#">News</a></h6>
                <h6><a href="#">Site Map</a></h6>
                <h6><a href="#">Privacy Policy</a></h6>
                <h6><a href="#">Terms Of Service</a></h6>
              </div>
              <div className="contact-info col-xs-2">
                <h6>Crypto Central</h6>
                <h5>(555) 563-2385</h5>
                <h5>555 Old Phony Ln</h5>
                <h5>Fakeville, GA</h5>
              </div>
            </div>
            <div className="bottom-foot">
              <div className="social-info">
                {/* Font Awesome stuff will go here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
