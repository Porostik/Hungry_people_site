const allNavs = document.querySelector('.header').querySelectorAll('a');
const burgerButton = document.querySelector('.burger');
const navBlock = document.querySelector('nav.nav');

allNavs.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const id = e.target.getAttribute('id') || '#';
    console.log('s');
    if (document.documentElement.clientWidth <= 850) {
      burgerButton.classList.toggle('active');
      navBlock.classList.toggle('active');
      document.body.style.overflow = 'auto';
    }
    setTimeout(() => {
      window.scrollTo(0, document.querySelector(`.${id}`).getBoundingClientRect().top);
    }, 0);
  });
});
