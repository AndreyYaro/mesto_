import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._form = this._popup.querySelector(".popup__form");
    this._handleSubmit = handleSubmit;
    this._inputList = this._form.querySelectorAll(".popup__input");
    this._formButton = this._form.querySelector(".button_type_save");
    this._loading = false;
    this._buttonText = this._formButton.textContent;
  }

  _getInputValues() {
    const data = {};
    this._inputList.forEach((input) => (data[input.name] = input.value));
    return data;
  }

  setEventListeners() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      if (!this._loading) {
        this._formButton.textContent = "Сохранение...";
        this._loading = true;
      }

      this._handleSubmit(this._getInputValues());
    });
    super.setEventListeners();
  }

  finishLoading() {
    this._formButton.textContent = this._buttonText;
    this._isLoading = false;
  }

  setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.name];
    });
  }

  close() {
    this._form.reset();
    super.close();
  }
}
