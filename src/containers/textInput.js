import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import ActionSend from 'material-ui/svg-icons/content/send';

@inject('messagesStore') @observer
class TextInput extends Component {
  // _handleKeyPress(e) {
  //   const messageStore = this.props.messagesStore;
  //   if (e.key === 'Enter' && !e.shiftKey && messageStore.comment.match(/..*/)) {
  //     messageStore.send(messageStore.comment);
  //   }
  // }

  _handleSubmit() {
    const messageStore = this.props.messagesStore;
    if (messageStore.comment.match(/..*/)) {
      messageStore.send(messageStore.comment);
    }
  }

  _handleInput(e) {
    const text = e.target.value;
    if (text.substring(0, 2) !== '\n') {
      this.props.messagesStore.input(text);
    }
  }

　render() {
    if (this.props.messagesStore.isLogin) {
      return (
        <div style={styles.wrapper}>
          <div style={styles.textAreaWrapper}>
            <TextField
              type='text'
              ref='textarea'
              id="text-field-controlled"
              style={styles.textArea}
              /* onKeyPress={this._handleKeyPress.bind(this)} */
              value={this.props.messagesStore.comment}
              onChange={this._handleInput.bind(this)}
              underlineShow={false}
              multiLine={true}
            />
          </div>
          <div style={styles.buttonWrapper}>
            <FlatButton
              style={styles.button}
              labelStyle={{ marginBottom: 20 }}
              icon={<ActionSend />}
              onClick={this._handleSubmit.bind(this)}
            />
          </div>
        </div>
      )
    }
    return null
  }
}

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  textAreaWrapper: {
    paddingTop: 7,
    paddingBottom: 7,
    flex: 5,
    paddingLeft: 5,
  },
  buttonWrapper: {
    flex: 1,
    paddingRight: 5,
    alignItems: 'center',
    display: 'flex',
  },
  textArea: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingLeft: 5,
    paddingRight: 5,
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
}

export default TextInput;
