import React from 'react';

export default function Message(props) {

  const dateObj = new Date(props.message.datetime);
  let displayedDatetime = `${dateObj.getMonth() + 1}/${dateObj.getDate()} ${dateObj.getHours()}:${dateObj.getMinutes()}`;

  return (
  	<div style={style.container}>
  		<div style={style.imageWrapper}>
  			<img src={props.message.sender_icon} style={style.iconImage} />
        <p style={style.datetime}>{displayedDatetime}</p>
  		</div>
  		<div style={style.textWrapper}>
  		  <p style={style.text}>{props.message.text}</p>
  		</div>
  	</div>
  )
}

const style = {
	container: {
		display: 'flex',
		flexDirection: 'row',
	},
	imageWrapper: {
		flex: 1,
		textAlign: 'center',
		marginTop: '0',
	},
	iconImage: {
		height: 30,
		width: 30,
		borderRadius: 10,
	},
	textWrapper: {
		flex: 6,
		justifyContent: 'center',
		marginTop: '0',
	},
	text: {
		padding: 5,
		fontSize: 15,
		paddingLeft: 10,
	},
  datetime: {
    fontSize: 5,
    marginTop: 0,
  }
}
