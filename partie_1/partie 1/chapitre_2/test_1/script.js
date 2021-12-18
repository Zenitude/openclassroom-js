// Nombre de saisons et d'épisode

let numberOfSeasons = 6;
let numberOfEpisodes = 12;

// Temps de l'épisode et Temps de pub

let episodeTime = 45;
let commercialTime = 5;

let totalShowTime = (numberOfEpisodes * numberOfSeasons) * (episodeTime + commercialTime);

// ==========================================

let paragraph = document.querySelector('#info');
paragraph.innerText = `${numberOfSeasons} Saisons, ${numberOfEpisodes} Épisodes par saison`