const menuList = document.querySelector('.menu__list');
const allLists = document.querySelectorAll('.menu__list__list');
const allCategories = document.querySelectorAll('.menu__list__categories__item');
const activeCategoryBlock = document.querySelector('.active-category');
const categoryWrapp = menuList.querySelector('.categories-wrapp');
let activeCategory = document.querySelector('.menu__list__categories__item.active');
let activeList = allLists[0];
const toggleShowBlocksButton = menuList.querySelector('.toggle-show');
const currentBlock = activeList.querySelectorAll('.menu__list__list__block');
let openedBlocks = 0;

toggleShowBlocksButton.addEventListener('click', () => {
  const currentBlock = activeList.querySelectorAll('.menu__list__list__block');
  if (openedBlocks === currentBlock.length - 1) {
    currentBlock.forEach((item, index) => index && item.classList.remove('active'));
    openedBlocks = 0;
    toggleShowBlocksButton.innerHTML = 'Show more';
    return;
  }
  currentBlock[openedBlocks + 1].classList.add('active');
  openedBlocks += 1;
  if (openedBlocks === currentBlock.length - 1) {
    toggleShowBlocksButton.innerHTML = 'Hide';
  }
});

window.addEventListener('resize', () => {
  const currentBlock = activeList.querySelectorAll('.menu__list__list__block');
  if (
    document.documentElement.clientWidth <= 880 &&
    !Array.from(currentBlock[0].classList).includes('active')
  ) {
    currentBlock[0].classList.add('active');
  }
});

(function setActiveCategory() {
  activeCategoryBlock.innerHTML = activeCategory.textContent;
  activeCategoryBlock.addEventListener('click', () => {
    categoryWrapp.classList.toggle('active');
  });
})();

allLists.forEach((item) => {
  if (item.getAttribute('id') !== activeCategory.getAttribute('value')) {
    menuList.removeChild(item);
  } else {
    item.classList.add('active');
    activeList = item;
  }
});

if (document.documentElement.clientWidth <= 880) {
  currentBlock[0].classList.add('active');
}

allCategories.forEach((item) => {
  item.addEventListener('click', (e) => {
    if (activeCategory === e.target) return;
    const listsArr = Array.from(allLists);

    const selectedList = listsArr.find(
      (item) => item.getAttribute('id') === e.target.getAttribute('value'),
    );

    changeActiveCategory(item);
    changeActiveList(selectedList);
  });
});

function changeActiveCategory(newCategory) {
  activeCategory.classList.remove('active');
  activeCategory = newCategory;
  activeCategory.classList.add('active');
  if (document.documentElement.clientWidth <= 880) categoryWrapp.classList.toggle('active');
  activeCategoryBlock.innerHTML = activeCategory.textContent;
}

function changeActiveList(newList) {
  activeList.classList.remove('active');
  menuList.removeChild(activeList);
  activeList = newList;
  menuList.append(activeList);
  if (document.documentElement.clientWidth <= 880) {
    activeList.querySelectorAll('.menu__list__list__block')[0].classList.add('active');
    openedBlocks = 0;
    toggleShowBlocksButton.innerHTML = 'Show more';
  }
  setTimeout(() => {
    activeList.classList.add('active');
  }, 0);
}
