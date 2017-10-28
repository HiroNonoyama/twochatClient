import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import ActionVisibility from "material-ui/svg-icons/action/visibility";
import ActionVisibilityOff from "material-ui/svg-icons/action/visibility-off";
import ActionChat from "material-ui/svg-icons/communication/chat";

@inject("messagesStore")
@observer
class Header extends Component {
  render() {
    const { messagesStore } = this.props;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <p style={{ textAlign: "center", color: "#d5d5d5" }}>
          {messagesStore.isLogin ? (
            messagesStore.connection ? (
              <ActionVisibility style={iconStyle} />
            ) : (
              <ActionVisibilityOff style={iconStyle} />
            )
          ) : (
            <ActionChat style={iconStyle} />
          )}
        </p>
        <span
          style={{
            ...iconStyle,
            marginLeft: 5,
            verticalAlign: "middle",
            height: 25
          }}
        >
          TWOCHAT
        </span>
      </div>
    );
  }
}

const iconStyle = {
  color: "#d5d5d5"
};

export default Header;
