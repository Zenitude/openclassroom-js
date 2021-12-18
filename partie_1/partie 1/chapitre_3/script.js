// Create variables here
// =========================================

let episodeTitle = "titre episode";
let episodeDuration = 55;
let hasBeenWatched = true;

// =========================================

document.querySelector('#episode-info').innerText = `Épisode : ${episodeTitle}
Durée : ${episodeDuration} min
${hasBeenWatched ? 'Déjà vu' : 'Pas encore vu'}`
//true retourne 'Déjà vu' et false retourne 'Pas encore vu'