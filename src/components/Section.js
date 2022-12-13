export default class Section {
  constructor({ items, container }) {
    this._items = items;
    this._container = container;
  }

  renderItems() {
    this._container.innerHTML = "";
    this._items.forEach((item) => {
      this._container.prepend(item);
    });
  }

  addItem(element) {
    this._items.push(element);
    this.renderItems();
  }

  cleanItems() {
    this._items = [];
  }
}
