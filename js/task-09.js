const buttonClick = document.querySelector('.change-color');
const textOutput = document.querySelector('.color');
document.body.classList.add('bgrColor');

buttonClick.addEventListener('click', onButtonClick);

function onButtonClick(event) {
  document.body.style.backgroundColor = getRandomHexColor();
  textOutput.textContent = `#${Math.floor(Math.random() * 16777215).toString(
    16,
  )}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
