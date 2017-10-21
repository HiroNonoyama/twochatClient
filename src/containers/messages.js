import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import Message from '../components/message';


@inject('messagesStore') @observer
class Messages extends Component {
  componentWillMount() {
  	this.props.messagesStore.fetch();
  }

  render() {
    const messages = this.props.messagesStore.messages;
    return (
      <div style={styles.container}>
        <p>{this.props.messagesStore.connection ? 'CONNECT' : 'DISCONNECT'}</p>
        {
          messages.length === 0 ?
              <p>メッセージはありません</p> :
            messages.map(message => {
              return (
                <div style={styles.messageWrapper} key={message.Id}>
                  <Message message={message} key={message.Id} />
                </div>
              )
            })
        }
      </div>
    );
  }
}

const styles = {
  container: {
    height: '100%',
    width: window.screen.width / 3,
    minWidth: 200,
    marginRight: 'auto',
    marginLeft: 'auto',
    overflow: 'auto',
  },
  messageWrapper: {
    paddingBottom: 20,
  }
}


export default Messages;
