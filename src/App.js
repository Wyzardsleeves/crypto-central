import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      test: "dog"
    }
  }

  componentWillMount(){
    this.getCryptoData();
  }

  getCryptoData(){
    axios.get('https://coinmarketcap-nexuist.rhcloud.com/api/all')
      .then((response) => {
        this.setState({list: response.data});
      })
      .catch((error) => {
        console.log(error);
      })
  }

  /*
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

/*

*/
  render(){
    return (
      <div className="app">
        <div className="app-head">
          <div className="container">

          </div>
        </div>
        <div className="app-body">
          <div className="container">
            <ul>
              {Object.keys(this.state.list).map((x, index) =>
                <li>{x}</li>
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

export default App;
