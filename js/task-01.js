const listEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${listEl.length}`);

listEl.forEach(el => {
  console.log(el.firstElementChild.textContent),
    console.log(el.lastElementChild.children.length);
});
