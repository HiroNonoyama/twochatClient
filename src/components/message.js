import React from 'react';

export default function Message(props) {
  

  return (
  	<div style={style.container}>
  		<div style={style.imageWrapper}>
  			<img src={require('../images/icon1.jpg')} style={style.iconImage} />
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
		margin: 5,
		fontSize: 15,
		paddingLeft: 10,
	},
}