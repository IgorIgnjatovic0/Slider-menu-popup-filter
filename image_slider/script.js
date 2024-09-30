let btnR = document.querySelector('#right-btn');
let btnL = document.querySelector('#left-btn');
let pictures = document.querySelectorAll('.slider-images img');

let counter = 0; 

const displayNone = () => {
  pictures.forEach((img) => {
    img.style.display = 'none';
  });
}

const animationR = () => {
  displayNone();
  counter++;

  if (counter === pictures.length) {
    counter = 0;
  }
  pictures[counter].style.display = 'block';
}

const animationL = () => {
  displayNone();
  counter--;

  if (counter === -1) {
    counter = pictures.length - 1;
  }
  pictures[counter].style.display = 'block';
}

btnR.addEventListener('click', animationR);
btnL.addEventListener('click', animationL);
