import React, { Component } from 'react';
import axios from 'axios'
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

          </div>
        </div>
        <div className="app-body">
          <div className="container">
            <ul className="crypto-list">
              {this.state.all.map((coin, index) =>
                <li key={index}>
                  <div className="crypto-currencies">
                    <h5>{coin.symbol}</h5>
                    <h5>{coin.id}</h5>
                    <h5>${coin.price_usd}</h5>
                  </div>
                </li>
              )}
            </ul>
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

/* Original
getCryptoData(){
  axios.get('https://coinmarketcap-nexuist.rhcloud.com/api/all')
    .then((response) => {
      this.setState({all: response.data}, function(){
        console.log(this.state.all);
      });
    })
    .catch((err) => {
      console.log(err);
    })
}
*/
export default App;
