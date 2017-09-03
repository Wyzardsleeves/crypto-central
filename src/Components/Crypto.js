import React, { Component } from 'react';
import axios from 'axios';

//Build crypto list
class Crypto extends Component {
  cryptoData(){
    var cryptoList = axios.get("https://api.coinmarketcap.com/v1/ticker/")[0].then(function(response){
      return response.data.items;
    });
    console.log(cryptoList);
  }

  render(){
    return (
      <div className="crypto">
        <h5>{this.cryptoData}</h5>
      </div>
    );
  }
}

export default Crypto;
