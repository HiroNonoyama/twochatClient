import React from 'react';

export default function Message(props) {

  const dateObj = new Date(props.message.CreatedAt);
	let displayedDatetime = `${dateObj.getMonth() + 1}/${dateObj.getDate()} ${dateObj.getHours()}:${dateObj.getMinutes()}`;

	const newLinedText = props.message.Message.split('\n').map((line, index) => <p style={style.text} key={index}>{line}</p>)

  return (
  	<div style={style.container}>
  		<div style={style.imageWrapper}>
  			<img src={props.message.IconImage} style={style.iconImage} alt={'icon'} />
        <p style={style.datetime}>{displayedDatetime}</p>
  		</div>
  		<div style={style.textWrapper}>
  		  {newLinedText}
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
		marginTop: 5,
	},
	text: {
		fontSize: 15,
		margin: 0,
		paddingLeft: 10,
	},
  datetime: {
    fontSize: 5,
    marginTop: 0,
  }
}
