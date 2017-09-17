import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

//Main app
class App extends Component {
  ///user?ID=12345

  constructor(props) {
    super(props);
    this.state = {
      all: this.getCryptoData
    }
  }

  componentWillMount(){
    this.getCryptoData();
  }

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

  render(){
    return (
      <div className="app">
        <div className="app-head">
          <div className="container">

          </div>
        </div>
        <div className="app-body">
          <div className="container">
            {this.state.all}
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
