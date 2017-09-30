import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('messagesStore') @observer
class TextInput extends Component {
  _handleKeyPress(e) {
    const messageStore = this.props.messagesStore;
    if (e.key === 'Enter' && !e.shiftKey && messageStore.comment.match(/..*/)) {
      messageStore.send(messageStore.comment);
    }
  }

  _handleInput() {
    const text = this.refs.textarea.value;
    if (text.substring(0, 2) !== '\n')
      this.props.messagesStore.input(text);
  }

　render() {
    return (
      <div style={styles.textInputContaienr}>
        <textarea
          type='text'
          ref='textarea'
          style={styles.textArea}
          onKeyPress={this._handleKeyPress.bind(this)}
          value={this.props.messagesStore.comment}
          onChange={this._handleInput.bind(this)}
        />
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
    minWidth: 198,
    height: 85,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 5,
    zIndex: 100,
    backgroundColor: 'white',
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
