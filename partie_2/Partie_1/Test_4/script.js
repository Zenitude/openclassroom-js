//Variables et récupérations des Ids
let nameInput = document.getElementById('name');

let resName = document.getElementById('res-name');

let genderInput = document.getElementById('gender');

let resGender = document.getElementById('res-gender');

let resultDiv = document.getElementById('result');

let sourisX = document.getElementById('mouse-x');

let sourisY = document.getElementById('mouse-y');

//Récupérer le contenu de l'input qui l'id "name"
nameInput.addEventListener('input', function(event){

resName.innerHTML = event.target.value;

});

//Récupérer la sélection du select qui a l'id "gender"
genderInput.addEventListener('input', function(event){

resGender.innerHTML = event.target.value;

});

//Récupérer les coordonnées de la souris
resultDiv.addEventListener('mousemove', function(event){

let positionX = event.offsetX;
let positionY = event.offsetY;

sourisX.innerHTML = positionX;
sourisY.innerHTML = positionY;

});