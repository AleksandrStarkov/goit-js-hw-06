const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elementCreate = ingredients.map(elem => {
  const elemName = document.createElement('li');
  elemName.classList.add('item');
  elemName.textContent = elem;
  return elemName;
});

const newIngredients = document.querySelector('#ingredients');
newIngredients.append(...elementCreate);
