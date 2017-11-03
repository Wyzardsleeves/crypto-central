import React, { Component } from 'react';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentWillMount(){

  }

  render(){
    return (
      <div className="head-right">
        <h5><a href="#"><strong>Sign Up!</strong></a></h5>
        <h5>|</h5>
        <h5><a href="#"><strong>Log In!</strong></a></h5>
      </div>
    );
  }
}

export default Login;
