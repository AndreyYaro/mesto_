export default class Section {
  constructor({ items, container }) {
    this._items = items;
    this._container = container;
  }

  renderItems() {
    this._items.forEach((item) => {
      this._container.append(item);
    });
  }

  loadingCards(element) {
    this._items.push(element);
    this.renderItems();
  }

  addItem(element) {
    this._container.prepend(element);
  }
}
