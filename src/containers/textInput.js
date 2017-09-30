import React, { Component } from 'react';

// connect to comment store
class TextInput extends Component {
  _handleKeyPress(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      console.log('送信'); // send message & delete \n
    }
  }

　render() {
    return (
      <div style={styles.textInputContaienr}>
        <textarea type='text' style={styles.textArea} onKeyPress={this._handleKeyPress} value={'assdfa'} />  // store into value
      </div>
    )
  }
}

const styles = {
  textInputContaienr: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    width: window.screen.width / 3,
    height: 85,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 5,
  },
  textArea: {
    margin: 0,
    padding: 0,
    background: 'none',
    border: 'none',
    outline: 'none',
    appearance: 'none',
    height: '100%',
    width: '100%',
    fontSize: 14,
  }
}

export default TextInput;
