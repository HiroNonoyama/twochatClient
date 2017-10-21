import { observable } from "mobx";
import axios from "axios";

class MessagesStore {
	@observable messages = [];
	@observable comment = '';
	@observable connection = false;
	account = {
		id: 1,
		name: 'Takashi',
		icon: 'https://image.flaticon.com/teams/slug/freepik.jpg',
	};

	fetch() {
		axios.get('http://localhost:8080/messages')
			.then(res => {
				this.messages = res.data;
				this.connectWs();
			})
			.catch(err => console.log(err))
	}

	input(comment) {
		this.comment = comment
	}

	msgObj(message) {
		return {
			id: message.Id,
			sender: this.account.id,
			message: message.Message,
			datetime: message.Datetime,
		};
	}

	send(comment) {
		// post to server
		const now = new Date();
		const newMessage = {
			Id: this.messages[this.messages.length - 1].Id + 1,
			Name: this.account.name,
			IconImage: this.account.icon,
			Message: comment,
			Datetime: now.toLocaleString(),
		}
		// this.messages.push(newMessage)
		axios.post('http://localhost:8080/messages', this.msgObj(newMessage))
			.then(res => this.cast(res.data))
			.catch(err => console.log(err));

		this.comment = '';
	}

	// ここら辺よく知る必要がある

	connectWs() {
		this.conn = new WebSocket("ws://localhost:8080/ws")
		const conn = this.conn;
		conn.onmessage = (e) => {
			console.log(e.data)
			if (e.data === '2') {
				this.connection = true;
				return
			} else if (e.data === '1') {
				this.connection = false;
				return
			}
			this.messages.push(JSON.parse(e.data))
		}
	}

	cast(message) {
		this.conn.send(JSON.stringify(this.msgObj(message)));
	}

}

const messagesStore = new MessagesStore()

export default messagesStore;
