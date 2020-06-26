import axios from 'axios';

const VERSION = 'v1';

export const getArtist = name => (
	axios(`https://theaudiodb.com/api/${VERSION}/json/1/search.php?s=${name}`)
	);