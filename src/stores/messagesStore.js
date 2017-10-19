import { observable } from "mobx";
import axios from "axios";

class MessagesStore {
	@observable messages = [];
	@observable comment = '';
	account = {
		id: 1,
		name: 'Takashi',
		icon: 'https://image.flaticon.com/teams/slug/freepik.jpg',
	};

	fetch() {
		axios.get('http://192.168.3.23:8080/messages')
			.then(res => {
				this.messages = res.data;
			})
			.catch(err => console.log(err))
	}

	input(comment) {
		this.comment = comment
	}

	send(comment) {
		// serverにリクエスト飛ばす
		const now = new Date();
		const newMessage = {
			Id: this.messages[this.messages.length - 1].Id + 1,
			Name: this.account.name,
			IconImage: this.account.icon,
			Message: comment,
			CreatedAt: now.toLocaleString(),
		}
		this.messages.push(newMessage)
		axios.post('http://192.168.3.23:8080/messages', {
			id: newMessage.Id,
			sender: this.account.id,
			message: newMessage.Message,
			datetime: newMessage.CreatedAt,
		})
			.then(res => console.log(res))
			.catch(err => console.log(err));

		this.comment = '';
	}

}

const messagesStore = new MessagesStore()

export default messagesStore;
