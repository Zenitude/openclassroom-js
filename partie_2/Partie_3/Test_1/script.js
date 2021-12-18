//Dans cet exercice j'ai créé 2 fonctions asynchrones (avec le mot clé async) getNumber1() et getNumber2()

async function getNumber1() {
  return 10;
}

async function getNumber2() {
  return 4;
}

//Dans un premier temps nous allons créer une fonction asynchrone (avec async) qui s'appelle compute et qui va récupérer les résultats des 2 fonctions asynchrones getNumber1() et getNumber2() (avec await) et renvoyer la somme des 2 valeurs récupérées.

async function compute() {
  let number1 = await getNumber1();
  let number2 = await getNumber2();
  let somme = number1 + number2;
  return somme;
}

/* Peut s'écrire aussi
async function compute() {
  return await getNumber1() + await getNumber2();
}
*/

//Maintenant nous allons appeler notre fonction compute() et utiliser sa valeur de retour comme une Promise pour finalement afficher le résultat de la promesse dans le contenu HTML de l'élément ayant pour ID result. 

compute()
  .then(function(res)
  {
    document
      .getElementById("result")
      .innerHTML = res;
  });
