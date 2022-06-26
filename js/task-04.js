let counterValue = 0;
const counter = document.querySelector('#value');

const buttonDeckr = document.querySelector('[data-action="decrement"]');
buttonDeckr.addEventListener('click', () => {
  counterValue -= 1;
  counter.textContent = counterValue;
});

const buttonIncr = document.querySelector('[data-action="increment"]');
buttonIncr.addEventListener('click', () => {
  counterValue += 1;
  counter.textContent = counterValue;
});
