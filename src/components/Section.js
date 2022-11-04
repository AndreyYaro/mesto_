export default class Section {
  constructor({ items, renderer }, cardList) {
    this._items = items;
    this._renderer = renderer;

    this._cardList = cardList;
  }

  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(element) {
    this._cardList.prepend(element);
  }
}