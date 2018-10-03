import React, { Component } from 'react';
import * as firebase from 'firebase';  //import firebase

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      currentUser: {}
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.signUp = this.signUp.bind(this);
  }

  componentDidMount(){
    this.authListener();
  }

  authListener(){
    firebase.auth().onAuthStateChanged((user) => {
      //console.log(user);
      if(user){
        this.setState({currentUser: user}, console.log(user.email));
        localStorage.setItem('user', user.uid);
      }else{
        this.setState({currentUser: null});
        localStorage.setItem('user');
      }
    });
  }

  signUp(e){
    e.preventDefault();
    let email = this.refs.email.value;
    let password = this.refs.password.value;
    console.log('Email is ' + email + ' password is ' + password);
    firebase.auth().createUserWithEmailAndPassword(email, password).then((u) => {
    }).catch((error) => {
      alert("The follwing error has occurred: " + error.message);
      console.log(error);
    });

    this.refs.email.value = '';
    this.refs.password.value = '';
  }

  login(e){
    e.preventDefault();
    let email = this.refs.email.value;
    let password = this.refs.password.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then((u) => {

    }).catch((error) => {
      alert("The follwing error has occurred: " + error.message);
      console.log(error);
    });
    this.refs.email.value = '';
    this.refs.password.value = '';
  }

  logout(){
    firebase.auth().signOut();
  }

  render(){
    return (
      <div className="head-right">
        {this.state.currentUser &&
          <div>
            <h5>Logged in as {this.state.currentUser.email}</h5>
            <button onClick={this.logout}>Log Out</button>
          </div>
        }
        {!this.state.currentUser &&
          <div>
            <input type='email' placeholder='Email Here' ref='email' />
            <input type='password' placeholder='Password Here' ref='password' />
            <button onClick={this.signUp}>Sign Up!</button>
            <button onClick={this.login}>Log In</button>
          </div>
        }
      </div>
    );
  }
}

export default Login;
