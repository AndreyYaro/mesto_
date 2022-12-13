import { identity } from "lodash";
import Popup from "./Popup.js";

export default class PopupWithDelete extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._form = this._popup.querySelector(".popup__form");
    this._handleSubmit = handleSubmit;
  }
  setEventListeners() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmit(this._id);
      this.close();
    });
    super.setEventListeners();
  }

  open(id) {
    super.open();
    this._id = id;
  }

  close() {
    this._form.reset();
    super.close();
  }
}
