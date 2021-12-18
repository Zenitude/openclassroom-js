//getElementById(), getElementsByClassName(), getElementsByTagName()
let main = document.getElementById("main-content");

let elementsImportants = document.getElementsByClassName("important");

let elementsArticles = document.getElementsByTagName("article");

let listeImportants = document.querySelector(" article > ul.important > li");

//nexElementSibling, previousElementSibling, children, parentElement
let listeSuivante = listeImportants.nextElementSibling;
let listePrecedente = listeSuivante.previousElementSibling;
let elementSuivant = elementsArticles[0].nextElementSibling;
let elementEnfant = elementsArticles[0].children;
let enfant = elementEnfant[1];
let parent = enfant.parentElement;

//Affichages (10 Elements max par console)
console.log(main, elementsImportants, elementsImportants, elementsArticles, listeImportants);

console.log(listeSuivante, listePrecedente, elementSuivant, elementEnfant, enfant, parent);