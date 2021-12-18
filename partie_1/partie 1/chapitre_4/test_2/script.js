// Create Object here
// =========================================

let episode = 
{
	title: "Titre épisode",
	duration: 45,
	hasBeenWatched: false,
};

// Notation dot

let episodeTitle = episode.title;
let episodeDuration = episode.duration;
let episodeHasBeenWatched = episode.hasBeenWatched;

// Notation bracket

/*
let episodeTitle = episode["title"];
let episodeDuration = episode["duration"];
let episodeHasBeenWatched = episode["hasBeenWatched"];
*/


// =========================================

document.querySelector('#episode-info').innerText = `Episode: ${episodeTitle}
Duration: ${episodeDuration} min
${episodeHasBeenWatched ? 'Already watched' : 'Not yet watched'}`