import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import Message from '../components/message';


@inject('messagesStore') @observer
class Messages extends Component {
  componentWillMount() {
  	this.props.messagesStore.fetch();
  }

	render() {
		if (this.props.messagesStore.messages.length !== 0) {
			return (
				this.props.messagesStore.messages.map(message => {
		  	  return <Message message={message} key={message.id} />
				})
			)
		} else {
			return (
				<div>メッセージはありません</div>
			)
		}
	}
}


export default Messages;