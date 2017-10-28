import React from "react";

export default function Message(props) {
  const dateObj = new Date(props.message.Datetime);
  let displayedDatetime = `${dateObj.getMonth() +
    1}/${dateObj.getDate()} ${dateObj.getHours()}:${dateObj.getMinutes()}`;

  const newLinedText = props.message.Message.split("\n").map((line, index) => (
    <p style={style.text} key={index}>
      {line}
    </p>
  ));

  if (props.accountId !== props.message.SenderId) {
    return (
      <div style={style.receiveContainer}>
        <div style={style.imageWrapper}>
          <img src={props.message.Icon} style={style.iconImage} alt={"icon"} />
          <p style={style.datetime}>{displayedDatetime}</p>
        </div>
        <div style={style.receiveTextWrapper}>{newLinedText}</div>
      </div>
    );
  }
  return (
    <div style={style.postContainer}>
      <div style={style.imageWrapper}>
        <img src={props.message.Icon} style={style.iconImage} alt={"icon"} />
        <p style={style.datetime}>{displayedDatetime}</p>
      </div>
      <div style={style.postTextWrapper}>{newLinedText}</div>
    </div>
  );
}

const windowWidth = window.innerWidth - 80;

const style = {
  receiveContainer: {
    display: "flex",
    flexDirection: "row"
  },
  postContainer: {
    display: "flex",
    flexDirection: "row-reverse"
  },
  imageWrapper: {
    flex: 1,
    textAlign: "center",
    marginTop: "0"
  },
  iconImage: {
    height: 36,
    width: 36,
    borderRadius: 18
  },
  receiveTextWrapper: {
    flex: 6,
    justifyContent: "center",
    marginTop: 5
  },
  postTextWrapper: {
    flex: 6,
    justifyContent: "center",
    textAlign: "right",
    marginTop: 5
  },
  text: {
    fontSize: 15,
    margin: 0,
    width: windowWidth,
    paddingLeft: 10,
    paddingRight: 10,
    wordWrap: "break-word"
  },
  datetime: {
    fontSize: 8,
    marginTop: 0
  }
};
