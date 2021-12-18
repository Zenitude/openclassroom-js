// Create Object here
// =========================================

let episode = 
{
	title: "Titre épisode",
	duration: 45,
	hasBeenWatched: false,
};

// =========================================

document.querySelector('#episode-info').innerText = `Episode: ${episode.title}
Duration: ${episode.duration} min
${episode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`