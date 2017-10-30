import React, { Component } from 'react';
import axios from 'axios'

class Cryptos extends Component {

  constructor(props) {
    super(props);
    this.state = {
      all: [],
      increment: null
    };
    //this.handleClick.bind(this);
  }

  componentWillMount(){
    this.getCryptoData();
    this.handleClick();
  }

  handleClick(){
    this.setState({increment: this.state.increment + 100});
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

  render(){
    return (
      <div className="container">
        <div className="crypto-list">
          <table>
            <tbody>
              <tr>
                <th>Index</th>
                <th>Short</th>
                <th>Name</th>
                <th>Price(usd)</th>
                <th>7d change</th>
              </tr>
              {this.state.all.slice(0, this.state.increment).map((coin) =>
                <tr className="crypto-currencies" key={coin.id}>
                  <td className="col-sm-2">{coin.rank}</td>
                  <td className="col-sm-2">{coin.symbol}</td>
                  <td className="col-sm-4">{coin.name}</td>
                  <td className="col-sm-2">${coin.price_usd}</td>
                  <td className="col-sm-1">{coin.percent_change_7d}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="down-chev" onClick={(event)=>this.handleClick()}>
          <strong><i className="ion-chevron-down"></i></strong>
        </div>
      </div>
    );
  }
}

export default Cryptos;
