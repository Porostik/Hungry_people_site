const burger = document.querySelector('.burger');
const nav = document.querySelector('nav.nav');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  nav.classList.toggle('active');
  document.body.style.overflow = document.body.style.overflow ? '' : 'hidden';
});
