import { observable } from "mobx";

class MessagesStore {
	@observable messages = [];

	fetch() {
	  this.messages = [
	    {
	    	id: 1,
	    	sender_id: 1,
	    	sender_name: 'Takashi',
	    	text: 'Hello world',
	    	datetime: "2017/9/28 19:10:19",
	    },
	    {
	    	id: 2,
	    	sender_id: 2,
	    	sender_name: 'Naoya',
	    	text: 'Hello world, too',
	    	datetime: "2017/9/28 19:13:19",
	    },
	  ];
	}
}

const messagesStore = new MessagesStore()

export default messagesStore;