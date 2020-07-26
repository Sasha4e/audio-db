import React, { Component } from 'react';
import styles from './content.css';
import { getArtist } from '../../api/audiodb.js';
import { getAlbums } from '../../api/audiodb.js';

import Albums from '../Albums/Albums.js';
import Button from '../Button/button.js';


class Content extends Component {
	constructor() {
		super();
		this.state = {
			value: '',
			artists: [],
			albums: [],
			isLoading: false,
			isShowAlbums: false,
			isShowTracks: false,
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.clean = this.clean.bind(this);
		this.showAlbums = this.showAlbums.bind(this);
		this.showTracks = this.showTracks.bind(this);
	}

	getData() {
		this.setState({
			artists: [],
			isLoading: true,
		});
		
		getArtist(this.state.value)
			.then(response => {
				this.setState({
					artists: response.data.artists,
				});
				
			})
			.finally(() => {
				this.setState({
					isLoading: false,
				});
			
			});

		getAlbums(this.state.value)
			.then(response => {
				this.setState({
					albums: response.data.album.sort((a1, a2) =>
					parseInt(a1.intYearReleased) - parseInt(a2.intYearReleased)),
				});
			})
			.finally(() => {
				this.setState({
					isLoading: false,
				});
			
			});
		
	}

	showTracks() {
		this.setState({
			isShowTracks: !this.state.isShowTracks,
		});
	}

	showAlbums() {
		this.setState({
			isShowAlbums: !this.state.isShowAlbums,
		});
	}

	clean() {
		this.setState({
			value: '',
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		if (this.state.value) {
			this.getData();
			this.clean();
		}
	}

	handleChange(e, val) {
		this.setState({
			[val]: e.target.value,
		});
	}

	render() {
		return(
			<>
				<form
					className={styles.sbar}
					onSubmit = {this.handleSubmit}>
						<input 
							type="search" 
							id="text" 
							name="text" 
							placeholder="Search.." 
							value = {this.state.value}
							onChange = {(e) => this.handleChange (e, 'value')}
				>
						</input>
						<Button
							isDisabled={this.state.isLoading}
							name="SEARCH"
							onClick ={this.handleSubmit}
						/>


				</form>
				{
					this.state.isLoading ? (
						<div className={styles.lbar}>
							<img src="https://control.ua/image/spinwin/loader.gif" alt="Loading..."></img>
						</div>
					) : null
				}
				
				{
					this.state.artists ? (
						this.state.artists.map(item =>(
						<div key={item.idArtist}
							className={styles.sbar}>
							<img src={item.strArtistBanner} alt={item.strArtist} /> 
							<p> {item.strBiographyEN} </p>
							<Button
								isDisabled={this.state.isLoading}
								name="DISCOGRAPHY"
								onClick ={this.showAlbums}
							/>
						</div>

						) ) 
					) : (	
							<div className={styles.sbar}>
								<p>
									Sorry, we can't found your artist<br></br>
									please try again
								</p>
							</div>
						)
				}
				
				
				{
					this.state.isShowAlbums ? (
						this.state.albums.map(item =>(
							<Albums 
								onClick={this.showTracks}
								strAlbum={item.strAlbum}
								key={item.idAlbum}
								intYearReleased={item.intYearReleased}
								isShowTracks={this.state.isShowTracks}
							/>
						))
					) : null
				}	
				
						
			</>

		);
	}
}

export default Content;