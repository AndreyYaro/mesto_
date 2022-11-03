import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
    this._image = document.querySelector(".popup-card__img");
    this._text = document.querySelector(".popup-card__text");
  }
  open(name, link) {
    super.open();
    this._image.src = link;
    this._image.alt = name;
    this._text.textContent = name;
  }

  close() {
    super.close();
    this._image.src = "";
    this._image.alt = "";
    this._text.textContent = "";
  }
}
