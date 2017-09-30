import { observable } from "mobx";

class MessagesStore {
	@observable messages = [];

	fetch() {
	  this.messages = [
	    {
	    	id: 1,
	    	sender_id: 1,
	    	sender_name: 'Takashi',
				sender_icon: 'https://image.flaticon.com/teams/slug/freepik.jpg',
	    	text: 'Hello world\nby the way, do you like hello world?',
	    	datetime: "2017/9/28 19:10:19",
	    },
	    {
	    	id: 2,
	    	sender_id: 2,
	    	sender_name: 'Naoya',
				sender_icon: 'http://images.all-free-download.com/images/graphiclarge/harry_potter_icon_6825007.jpg',
	    	text: 'Hello world, too',
	    	datetime: "2017/9/28 19:13:19",
	    },
	  ];
	}
}

const messagesStore = new MessagesStore()

export default messagesStore;
