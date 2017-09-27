import React, { Component } from 'react';
import axios from 'axios'
import logo from './cc-home-logo.png'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      all: [],
      test: "dog"
    }
  }

  componentWillMount(){
    this.getCryptoData();
  }

  getCryptoData(){
    axios.get('https://api.coinmarketcap.com/v1/ticker/')
      .then(response => {
        this.setState({all: response.data}, function(){
          console.log(this.state.all);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  //{Object.keys(this.state.all)
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

            </div>
          </div>
        </div>
        <div className="app-body">
          <div className="container">
            <div className="crypto-list">
            <table>
              <tr>
                <th>Index</th>
                <th>Short</th>
                <th>Name</th>
                <th>Price(usd)</th>
              </tr>
              {this.state.all.map((coin) =>
                  <tr className="crypto-currencies">
                    <td className="col-sm-1">{coin.rank}</td>
                    <td className="col-sm-2">{coin.symbol}</td>
                    <td className="col-sm-4">{coin.name}</td>
                    <td className="col-sm-1">${coin.price_usd}</td>
                  </tr>
              )}
              </table>
            </div>
          </div>
        </div>
        <div className="app-foot">
          <div className="container">
            <div>
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
          </div>
        </div>
      </div>
    );
  }
}

export default App;
