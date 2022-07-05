const inputEl = document.querySelector('#validation-input');
const lengthMin = inputEl.getAttribute('data-length');

inputEl.addEventListener('blur', event => {
  //   console.log(event.currentTarget.value);
  const velue = event.currentTarget.value.length;
  console.log(velue);
  console.log(`${velue}` === lengthMin);

  if (`${velue}` !== lengthMin) {
    inputEl.classList.add('invalid');
    inputEl.classList.replace('valid', 'invalid');
    console.log(inputEl);
  } else {
    inputEl.classList.add('valid');
    inputEl.classList.replace('invalid', 'valid');
    console.log(inputEl);
  }
});

// if (`${velue}` === lengthMin)
