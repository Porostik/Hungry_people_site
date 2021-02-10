function slider(id) {
  const slider = document.querySelector(`#${id}`);
  const items = slider.querySelectorAll('.slider__item');
  const dots = slider.querySelector('.slider__dots');
  const dotList = slider.querySelectorAll('.dot');
  let activeIndex = 0;
  items.forEach((item, index) => {
    index !== 0 && slider.removeChild(item);
  });

  dotList.forEach((item, index) => {
    item.addEventListener('click', () => {
      items[activeIndex].classList.remove('active');
      dotList[activeIndex].classList.remove('active');
      slider.removeChild(slider.querySelector('.slider__item'));
      dots.before(items[index]);
      dotList[index].classList.add('active');
      setTimeout(() => {
        items[index].classList.add('active');
      }, 0);
      activeIndex = index;
    });
  });
}

slider('team-slider');
slider('specialties-slider');
