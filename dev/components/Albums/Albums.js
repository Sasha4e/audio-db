import React, { Component } from 'react';
import styles from './albums.css';

import Button from '../Button/button.js'
import Tracks from '../Tracks/Tracks.js'


class Albums extends Component {
	constructor (props){
		super();

	}
	render(){
		return(
			<ul key={this.props.idAlbum}>
				<li>
					{`${this.props.intYearReleased} :`} 
					<Button name={this.props.strAlbum}
						theme='small'
						onClick={this.props.onClick}
					/>
				</li>
				{
					this.props.isShowTracks ? (
						<Tracks id={this.props.idAlbum} />
				) : null
				}
			</ul>
		)
	}
}

export default Albums;