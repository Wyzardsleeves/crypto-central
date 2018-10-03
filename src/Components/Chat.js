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
    this.getChatList()
  }

  getChatList(){
    let messagesRef = firebase.database().ref('messages').orderByChild('desc').limitToLast(100);
    messagesRef.on('child_added', snapshot => {
      /* Update React state when message is added at Firebase Database */
      this.setState({ chatMessages: [snapshot.val()].concat(this.state.chatMessages)});
    })
  }

  //Submit text to Firebase
  sendMessage(e){
    e.preventDefault();
    let sendToDatabase = firebase.database().ref('messages');
    sendToDatabase.push({
      user: 'Justin',
      message: this.refs.chatfield.value
    });
    this.refs.chatfield.value = '';
  }

  render(){
    let refList = firebase.database().ref();

    return (
      <div className="chat">
        <div>
          <ul>
            {this.state.chatMessages.map((text) =>
              <li key={text.id}>
                <p>{text.user}: {text.message}</p>
              </li>).reverse()  //displays last result at bottom
            }
          </ul>
        </div>
        <div className="submit-form">
          <form>
            <input ref="chatfield" type="text" />
            <button onClick={this.sendMessage}>Send</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Chat;
