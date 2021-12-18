let main = document.getElementByID("main");

let paragraphe = main.createElement("p");

main.appendChild(paragraphe);

paragraphe.innerHTML = "Mon <strong>grand</strong> contenu";

paragraphe.classList.add("important");

paragraphe.style.color ="green";



