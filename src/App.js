import React, { Component } from 'react';
import './App.css';
import Messages from "./containers/messages";
import TextInput from "./containers/textInput";
import messagesStore from "./stores/messagesStore";
import { Provider } from 'mobx-react';

class App extends Component {
  render() {
    return (
      <Provider messagesStore={messagesStore}>
        <div>
          <div style={styles.messagesContainer}>
            <Messages />
          </div>
          <div style={styles.textInputWrapper}>
            <TextInput />
          </div>
        </div>
      </Provider>
    );
  }
}

const styles = {
  messagesContainer: {
    position: 'absolute',
    bottom: 100,
    top: 0,
    left: 0,
    right: 0,
    padding: 10,
  },
  textInputWrapper: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    height: 100,
  },
}

export default App;
