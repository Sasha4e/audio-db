import React, { Component } from 'react';
import styles from "./tracks.css";

import { getTracks } from '../../api/audiodb.js';

class Tracks extends Component {
	constructor(){
		super();
		this.state = {
			track: [],
		}
		this.getData = this.getData.bind(this);
	}

	getData() {
		console.log(this.props.id);
		// getTracks(this.props.id)
		// 	.then(response => {
		// 		this.setState({
		// 			tracks: response.data,
		// 		});
		// 		console.log(this.state.tracks)
		// 	})
		}

	render(){
		return(
		
			
				<div>
					<button onClick = {this.getData}> click </button>
				</div>
		)
	}
}

export default Tracks;