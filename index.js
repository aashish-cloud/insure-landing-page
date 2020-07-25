const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const menu = document.querySelector('.nav-elements');
const body = document.querySelector('.wrapper');

function showItems() {
  body.classList.toggle('show');
  menu.classList.toggle('show');
  close.classList.toggle('show');
  hamburger.classList.toggle('show');
}

  hamburger.addEventListener('click', showItems);
  close.addEventListener('click', showItems);
