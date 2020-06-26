import React, { Component } from 'react';
import styles from './title.css';

class Title extends Component {
	render() {
		return(
			<div className={styles.title}>
				<h1 > FIND YOUR ARTIST </h1>
			</div>
		);
	}
}

export default Title;