import React, { Component } from 'react';
import logo from './cc-home-logo.png';
import Cryptos from './Components/Cryptos';
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
            <div className="head-right">
            {/* Login stuff will go here */}
              <h5><a href="#">Sign Up!</a></h5>
              <h5>|</h5>
              <h5><a href="#">Log In!</a></h5>
            </div>
          </div>
        </div>
        <div className="app-body">
          {/* Tabs will go here */}
          <Cryptos />
        </div>
        <div className="app-foot">
          <div className="container">
            <div className="top-foot">
              <div className="general-info col-xs-2">
                <h6 href="#">About</h6>
                <h6 href="#">Services</h6>
                <h6 href="#">Careers</h6>
                <h6 href="#">Blog</h6>
              </div>
              <div className="sub-info col-xs-2">
                <h6 href="#">News</h6>
                <h6 href="#">Site Map</h6>
                <h6 href="#">Privacy Policy</h6>
                <h6 href="#">Terms Of Service</h6>
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
