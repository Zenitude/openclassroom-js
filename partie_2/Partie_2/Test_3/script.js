

//Nous allons commencer par créer une fonction appelée send et qui va créer notre requête.

function send(event)
{
  let valeurSaisie = document.getElementById("value").value;
  
  event.preventDefault();

  //Nous souhaitons créer une requête de type POST vers l'adresse suivante : https://mockbin.com/request,
  //et y envoyer un contenu JSON ayant une propriété value qui contiendra la valeur du champ de saisie de la page (avec l'ID value). 
  //Par exemple : {value: document.getElementById("value").value}.
  
  fetch("https://mockbin.com/request", {
    method : "POST",
    headers : 
    {
      'Accept': 'application/json', 
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify({value: valeurSaisie})
  })
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })

  //Nous souhaitons aussi, lorsque la requête s'est bien envoyée, afficher le résulat renvoyé par le service web. 
  //Pour ce faire, nous allons afficher ce qui se trouve dans postData.text de la réponse dans le contenu HTML de l'élément ayant pour ID result.*/

  .then(function(valeurSaisie) {
      document
        .getElementById("result")
        .innerText = valeurSaisie.postData.text;
  });
}

//Maintenant nous voulons envoyer notre requête, et donc appeler notre fonction send dès que nous soumettons le formulaire ayant pour ID form.

document
  .getElementById("form")
  .addEventListener("submit", send);