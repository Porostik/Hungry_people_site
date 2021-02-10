const allNavs = document.querySelector('.header').querySelectorAll('a');

allNavs.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const id = e.target.getAttribute('id') || '#';

    window.scrollTo(0, document.querySelector(`.${id}`).getBoundingClientRect().top);
  });
});
