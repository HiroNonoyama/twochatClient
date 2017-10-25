import React, { Component } from 'react';
import './App.css';
import Messages from "./containers/messages";
import TextInput from "./containers/textInput";
import Header from "./containers/header";
import messagesStore from "./stores/messagesStore";
import { Provider } from 'mobx-react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <Provider messagesStore={messagesStore}>
        <MuiThemeProvider>
          <div style={styles.wrapper}>
            <div style={styles.header}>
              <Header />
            </div>
            <div style={styles.messagesContainer}>
              {<Messages />}
            </div>
            <div style={styles.textInputWrapper}>
              {<TextInput />}
            </div>
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

const styles = {
  wrapper: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#9099a2',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: '#6d7993',
  },
  messagesContainer: {
    position: 'absolute',
    bottom: 62,
    top: 50,
    left: 0,
    right: 0,
    backgroundColor: '#d5d5d5',
  },
  textInputWrapper: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: '#9099a2',
  },
}

export default App;
