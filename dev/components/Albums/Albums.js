import React, { Component } from 'react';
import styles from './albums.css';

import Button from '../Button/button.js'


class Albums extends Component {
	constructor (props){
		super();

	}
	render(){
		return(
			<ul key={this.props.idAlbum}>
				<li>
					{`${this.props.intYearReleased} :`} 
					<b> {this.props.strAlbum} </b>	
				</li>
			</ul>
		)
	}
}

export default Albums;