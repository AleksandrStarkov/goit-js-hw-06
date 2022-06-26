const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galeryCard = ({ url, alt }) => {
  return `<li class="item">           
              <img src=${url} alt=${alt} width='400px' height='220px' >
          </li>`;
};
console.log(galeryCard(images[0]));

const galleryMarkup = images.map(galeryCard).join('');

console.log(galleryMarkup);

const galleryElem = document.querySelector('.gallery');

console.log(galleryElem);

galleryElem.insertAdjacentHTML('beforeend', galleryMarkup);

Object.assign(galleryElem.style, {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,auto)',
  gap: '30px',
  listStyle: 'none',
});

// document.getElementById('block').style.cssText = `
//     opacity: 1;
//     border: 1;
//     color: black;
// `;
