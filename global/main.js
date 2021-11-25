const nav = document.querySelector('nav');
const navButton = document.getElementById('nav-button');
const navList = document.querySelector('.nav-list');
const navButtonOpen = document.querySelector('.nav-button-open');
const navButtonClose = document.querySelector('.nav-button-close');

navButton.addEventListener('click', () => {
  nav.classList.toggle('open');
  navList.classList.toggle('open');
  navButtonOpen.classList.toggle('show');
  navButtonClose.classList.toggle('show');
});
