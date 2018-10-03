import React, { Component } from 'react';
import * as firebase from 'firebase';  //import firebase

class Chat extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentUser: '',
      chatMessages: [],
    }
    //bindings setup
    this.getChatList = this.getChatList.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  componentDidMount(){
    this.getChatList();
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

  getChatList(){
    let messagesRef = firebase.database().ref('messages').orderByChild('desc').limitToLast(100);
    messagesRef.on('child_added', snapshot => {
      this.setState({ chatMessages: [snapshot.val()].concat(this.state.chatMessages)});
    })
  }

  //Submit text to Firebase
  sendMessage(e){
    e.preventDefault();
    let sendToDatabase = firebase.database().ref('messages');
    sendToDatabase.push({
      //user: 'Justin',
      user: this.state.currentUser.email,
      message: this.refs.chatfield.value
    });
    this.refs.chatfield.value = '';
  }

  render(){
    return (
      <div className="chat">
        <div>
          <ul>
            {this.state.chatMessages.map((text) =>
              <li key={text.id}>
                <p><strong>{text.user}</strong>: {text.message}</p>
              </li>).reverse()  //displays last result at bottom
            }
          </ul>
        </div>
        <div className="submit-form">
          {this.state.currentUser &&
            <form>
              <input placeholder={'Send as ' + this.state.currentUser.email} ref="chatfield" type="text" />
              <button onClick={this.sendMessage}>Send</button>
            </form>
          }
          {!this.state.currentUser &&
            <h5><i>Please log in to comment!</i></h5>
          }
        </div>
      </div>
    );
  }
}

export default Chat;
