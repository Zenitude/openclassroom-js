//Fonction d'activation du Bouton d'envoie

function activeBtn(disabled)
{
	if (disabled)
  {
    document
      .getElementById("submit-btn")
	    .setAttribute("disabled", true);
  }
  else
  {
    document
      .getElementById("submit-btn")
      .removeAttribute("disabled")
  }
    
}

//Vérification de la saisie du code

document
  .getElementById("code")
  .addEventListener('input', function(event)
  {
    if(/^CODE-/.test(event.target.value))
    {
      document
        .getElementById("code-validation")
        .innerText = "Code valide";
      
      activeBtn(false);
    }
    else
    {
      document
        .getElementById("code-validation")
        .innerText = "Code invalide";
      
      activeBtn(true);
    }
  });

//Vérification de la saisie du mail

document
	.getElementById("email")
	.setAttribute("required", "")
	.setAttribute("type", "email")
	.addEventListener('change', function(event)
	{
		if ()
		{
		    //valide
		    activeBtn(false);
		}
		else
		{
			//invalide
			activeBtn(true);
		}
	});