export default class Section {
  constructor({ render, container }) {
    this._render = render;
    this._container = container;
  }

  addItems(items) {
    const activeItems = items.map((item) => this._render(item));
    activeItems.forEach((item) => {
      this._container.append(item);
    });
  }

  addItem(item) {
    this._container.prepend(item);
  }
}
