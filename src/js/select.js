class Select {
  constructor(id) {
    this.select = document.querySelector(`#${id}`);
    this.valueField = this.select.querySelector('.select__value');
    this.listBlock = this.select.querySelector('.select__list');
    this.itemsList = this.listBlock.querySelectorAll('.select__list__item');
    this.valueField.innerHTML = this.select.getAttribute('placeholder');
    this.valueField.addEventListener('click', this.toggleSelect);
    this.setItemsListeners();
    document.body.addEventListener('click', this.closeListonEmptyClick);
  }

  toggleSelect = () => {
    this.listBlock.classList.toggle('active');
  };

  setItemsListeners = () => {
    this.itemsList.forEach((item) => {
      item.addEventListener('click', (e) => {
        this.select.setAttribute('value', e.target.textContent);
        this.valueField.innerHTML = e.target.textContent;
        this.toggleSelect();
      });
    });
  };

  closeListonEmptyClick = (e) => {
    if (!e.path.includes(this.select)) {
      this.listBlock.classList.remove('active');
    }
  };
}

new Select('people');
new Select('time');
