import React, { Component, PropTypes } from "react";
import { observer, inject } from "mobx-react";
import Message from "../components/message";
import Divider from "material-ui/Divider";
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

@inject("messagesStore")
@observer
class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
  }

  componentWillMount() {
    if (this.props.messagesStore.isLogin) {
      this.props.messagesStore.fetch();
    }
  }

  componentDidUpdate() {
    if (this.props.messagesStore.isLogin) {
      const msgContainer = document.getElementById("msgContainer");
      msgContainer.scrollTop = msgContainer.scrollHeight;
    }
  }

  render() {
    if (!this.props.messagesStore.isLogin) {
      return (
        <div
          style={{
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            marginTop: 200,
            paddingRight: 10,
            paddingLeft: 10,
          }}
        >
          <Paper zDepth={2}>
            <TextField
              hintText="Username"
              style={{ marginLeft: 20 }}
              underlineShow={false}
              onChange={e => this.setState({ username: e.target.value })}
              value={this.state.username}
            />
            <Divider />
            <TextField
              hintText="Password"
              style={{ marginLeft: 20 }}
              underlineShow={false}
              type="password"
              onChange={e => this.setState({ password: e.target.value })}
              value={this.state.password}
            />
            <Divider />
          </Paper>
          <div>
            <br />
            <RaisedButton
              label="Login"
              fullWidth={true}
              disabled={!(this.state.username && this.state.password)}
              onClick={() =>
                this.props.messagesStore.login(
                  this.state.username,
                  this.state.password
                )}
            />
          </div>
        </div>
      );
    }
    const messages = this.props.messagesStore.messages;
    return (
      <div style={styles.container} id={"msgContainer"}>
        {messages.length === 0 ? (
          <p>メッセージはありません</p>
        ) : (
          messages.map(message => {
            return (
              <div style={styles.messageWrapper} key={message.Id}>
                <Message
                  message={message}
                  key={message.Id}
                  accountId={this.props.messagesStore.account.id}
                />
              </div>
            );
          })
        )}
      </div>
    );
  }
}

const styles = {
  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
  },
  messageWrapper: {
    padding: 20,
  },
};

export default Messages;
