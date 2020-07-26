import axios from 'axios';

const VERSION = 'v1';

export const getArtist = name => (
	axios(`https://theaudiodb.com/api/${VERSION}/json/1/search.php?s=${name}`)
	);

export const getAlbums = name => (
	axios(`https://theaudiodb.com/api/${VERSION}/json/1/searchalbum.php?s=${name}`)
	);

export const getTracks = albumid => (
	axios(`theaudiodb.com/api/${VERSION}/json/1/track.php?m=${albumid}`)
	);