import React, { Component } from 'react';
import './App.css';
import Messages from "./containers/messages";
import messagesStore from "./stores/messagesStore";
import { Provider } from 'mobx-react';

class App extends Component {
  render() {
    return (
      <Provider messagesStore={messagesStore}>
        <div style={style.messagesContainer}>
          <div style={style.div} />
          <div style={style.div}>
            <Messages />
          </div>
          <div style={style.div} />
        </div>
      </Provider>
    );
  }
}

const style = {
  messagesContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: window.screen.height,
  },
  div: {
    flex: 1,
  }
}

export default App;
