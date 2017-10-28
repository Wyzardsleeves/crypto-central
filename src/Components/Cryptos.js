import React, { Component } from 'react';
import axios from 'axios'

class Cryptos extends Component {

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

  addToList(){
    var num = 100;
    this.state.all.slice(0, num);
  }

  render(){
    return (
      <div className="container">
        <div className="crypto-list">
          <table>
            <tr>
              <th>Index</th>
              <th>Short</th>
              <th>Name</th>
              <th>Price(usd)</th>
              <th>7d change</th>
            </tr>
            {this.state.all.map((coin) =>
              <tr className="crypto-currencies">
                <td className="col-sm-2">{coin.rank}</td>
                <td className="col-sm-2">{coin.symbol}</td>
                <td className="col-sm-4">{coin.name}</td>
                <td className="col-sm-2">${coin.price_usd}</td>
                <td className="col-sm-1">{coin.percent_change_7d}</td>
              </tr>
            )}
          </table>
        </div>
        <div className="down">
          <h3><strong>V</strong></h3>
        </div>
      </div>
    );
  }
}

export default Cryptos;
