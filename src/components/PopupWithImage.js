import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
    this._image = document.querySelector(".popup-card__img");
    this._text = document.querySelector(".popup-card__text");
  }
  open(name, link, likes, id) {
    this._image.src = link;
    this._image.alt = name;
    this._text.textContent = name;
    this._likes = likes;
    this._id = id;
    super.open();
  }

  close() {
    super.close();
    this._image.src = "";
    this._image.alt = "";
    this._text.textContent = "";
  }
}
