import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._form = this._popup.querySelector(".popup__form");
    this._handleSubmit = handleSubmit;
    this._inputList = this._form.querySelectorAll(".popup__input");
  }

  _getInputValues() {
    const data = {};
    this._inputList.forEach((input) => (data[input.name] = input.value));
    return data;
  }

  setEventListeners() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmit(this._getInputValues());
      this.close();
    });
    super.setEventListeners();
  }

  close() {
    this._form.reset();
    super.close();
  }
}
