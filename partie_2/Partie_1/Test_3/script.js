// Variables
let parent = document.getElementById('parent');

let parentCount = document.getElementById('parent-count');

let nombreClicParent = 0;

let enfant = document.getElementById('child');

let enfantCount = document.getElementById('child-count');

let nombreClicEnfant = 0;

// Clic sur Parent
parent.addEventListener('click', function compteClicParent(event)
{
  parentCount.innerHTML = ++nombreClicParent;
});

// Clic sur enfant
enfant.addEventListener('click', function compteClicEnfant(event)
{
  event.preventDefault();

  event.stopPropagation();

  enfantCount.innerHTML = ++nombreClicEnfant;
});