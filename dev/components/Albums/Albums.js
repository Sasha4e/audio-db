import React, { Component } from 'react';
import styles from './albums.css';

import Button from '../Button/Button.js'
import Tracks from '../Tracks/Tracks.js'


class Albums extends Component {
	constructor (){
		super();

	}
	render(){
		return(
			<ul key={this.props.idAlbum}>
				<li> {this.props.intYearReleased}, 
				<Button name={this.props.strAlbum} theme='small' onClick={this.props.onClick} /> </li>
				{
					this.props.isShowTracks ? (
						<Tracks />
				) : null
				}
			</ul>
		)
	}
}

export default Albums;