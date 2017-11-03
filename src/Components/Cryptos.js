import React, { Component } from 'react';
import axios from 'axios'

class Cryptos extends Component {

  constructor(props) {
    super(props);
    this.state = {
      all: [],
      increment: 75,
      sortArr: []
    };
  }

  componentWillMount(){
    this.getCryptoData();
  }

  //Sorting function
  sortClick(passed){
    if(this.state.all[0][passed] < this.state.all[this.state.all.length - 1][passed]){  //ascending
      console.log("Sort highest first");
      this.setState({all: this.state.all.sort(function(a, b){
          return b[passed] - a[passed];
        })
      })
    }
    else if(this.state.all[0][passed] > this.state.all[this.state.all.length - 1][passed]){ //decending
      console.log("Sort lowest first");
      this.setState({all: this.state.all.sort(function(a, b){
          return a[passed] - b[passed];
        })
      })
    }
    console.log("sort_activate");
  };

  //data fetch from coinmarketcap api
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

  //button for list expansion
  addClick(){
    this.setState({increment: this.state.increment + 75})
  }

  render(){
    return (
      <div className="container">
        <div className="crypto-list">
          <table>
            <tbody>
              <tr>
                <th className="sortable" onClick={() => this.sortClick('rank')}>Rank</th>
                <th>Short</th>
                <th>Name</th>
                <th className="sortable" onClick={() => this.sortClick('price_usd')}>Price(usd)</th>
                <th className="sortable" onClick={() => this.sortClick('percent_change_7d')}>7d change</th>
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
        <div className="down-chev" onClick={() => this.addClick()}>
          <strong><i className="ion-chevron-down"></i></strong>
        </div>
      </div>
    );
  }
}

export default Cryptos;
