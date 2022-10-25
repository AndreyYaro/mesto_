export default class Card {
  constructor(data, cardSelector, openPopupImg) {
    this._link = data.link;
    this._name = data.name;
    this._cardSelector = cardSelector;
    this._openPopupImg = openPopupImg;
  }
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    return cardElement;
  }

  _setEventListeners() {
    this._likeButton = this._element.querySelector(".element__like");
    this._likeButton.addEventListener("click", () => {
      this._likeToggle();
    });
    this._element
      .querySelector(".element__trash")
      .addEventListener("click", () => {
        this._moveToTrash();
      });
    this._element
      .querySelector(".element__image")
      .addEventListener("click", () => {
        this._openPopupImg(this._name, this._link);
      });
  }

  createCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector(".element__image");
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector(".element__name").textContent = this._name;
    this._setEventListeners();
    return this._element;
  }

  _likeToggle() {
    this._likeButton.classList.toggle("element__like_active");
  }

  _moveToTrash() {
    this._element.remove();
    this._element = null;
  }
}
