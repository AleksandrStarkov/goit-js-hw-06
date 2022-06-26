const select = document.querySelector('#font-size-control');
const textOutput = document.querySelector('#text');
textOutput.classList.add('font-size');

select.addEventListener('input', setOutput);

function setOutput(event) {
  textOutput.style.fontSize = `${event.currentTarget.value}px`;
}
