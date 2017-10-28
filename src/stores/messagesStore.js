import { observable } from "mobx";
import axios from "axios";
import SHA256 from "crypto-js/sha256";

class MessagesStore {
  @observable isLogin = document.cookie ? true : false;
  @observable messages = [];
  @observable comment = "";
  @observable connection = false;
  @observable
  account = document.cookie ? this.withdrawFromCookie(document.cookie) : {};

  withdrawFromCookie(cookieStr) {
    const cookieArr = cookieStr.split(",");
    return {
      id: Number(cookieArr[0].split("=")[1]),
      name: cookieArr[1].split("=")[1],
      icon: cookieArr[2].split("=")[1]
    };
  }

  login(username, password) {
    const cryptedPass = SHA256(password).words.join();
    const obj = { username, password: String(cryptedPass) };
    axios
      .post("http://192.168.3.23:8080/login", JSON.stringify(obj))
      .then(res => {
        if (res.data) {
          this.account = {
            id: Number(res.data.Id),
            name: res.data.Name,
            icon: res.data.Icon
          };
          this.isLogin = true;
          if (navigator.cookieEnabled) {
            document.cookie =
              "id=" +
              res.data.Id +
              ",name=" +
              res.data.Name +
              ",icon=" +
              res.data.Icon;
          }
          this.fetch();
          return;
        }
        alert("pass, username invalid");
      });
  }

  fetch() {
    axios
      .get("http://192.168.3.23:8080/messages")
      .then(res => {
        this.connectWs();
        if (res.data !== null) {
          this.messages = res.data;
        }
      })
      .catch(err => console.log(err));
  }

  input(comment) {
    this.comment = comment;
  }

  msgObj(message) {
    return {
      id: message.Id,
      sender: this.account.id,
      message: message.Message,
      datetime: message.Datetime
    };
  }

  send(comment) {
    // post to server
    const now = new Date();
    const newMessage = {
      Name: this.account.name,
      IconImage: this.account.icon,
      Message: comment,
      Datetime: now.toLocaleString()
    };
    // this.messages.push(newMessage)
    axios
      .post("http://192.168.3.23:8080/messages", this.msgObj(newMessage))
      .then(res => {
        console.log(res);
        this.cast(res.data);
      })
      .catch(err => console.log(err));

    this.comment = "";
  }

  // ここら辺よく知る必要がある

  connectWs() {
    this.conn = new WebSocket("ws://192.168.3.23:8080/ws");
    const conn = this.conn;
    conn.onmessage = e => {
      if (Number(e.data) >= 2) {
        this.connection = true;
        return;
      } else if (Number(e.data) < 2) {
        this.connection = false;
        return;
      }
      this.messages.push(JSON.parse(e.data));
    };
  }

  cast(message) {
    this.conn.send(JSON.stringify(this.msgObj(message)));
  }
}

const messagesStore = new MessagesStore();

export default messagesStore;
