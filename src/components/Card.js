import { isError } from "lodash";

export default class Card {
  constructor(
    data,
    cardSelector,
    handleCardClick,
    handleDeleteClick,
    handleLikeClick,
    userId
  ) {
    this._link = data.link;
    this._name = data.name;
    this._likes = data.likes;
    this._id = data._id;
    this._userId = userId;
    this._ownerId = data.owner._id;

    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;

    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector(".element__image");
    this._trashIcon = this._element.querySelector(".element__trash");
    this._likeIcon = this._element.querySelector(".element__like");

    this._element.querySelector(".element__name").textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    this.setLikes(this._likes);
    this._setEventListeners();

    if (this._ownerId !== this._userId) {
      this._trashIcon.style.display = "none";
    }
  }
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    return cardElement;
  }

  _setEventListeners() {
    this._likeIcon.addEventListener("click", () => {
      this._handleLikeClick();
    });
    // this._element
    //   .querySelector(".element__trash")
    //   .addEventListener("click", () => {
    //     this._moveToTrash();
    //   });
    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
    this._trashIcon.addEventListener("click", () => {
      this._handleDeleteClick();
    });
  }

  getElement() {
    return this._element;
  }

  // _moveToTrash() {
  //   this._element.remove();
  //   this._element = null;
  // }

  setLikes(newLikes) {
    this._likes = newLikes;
    const likeCountElement = this._element.querySelector(
      ".element__like-counter"
    );
    likeCountElement.textContent = this._likes.length;

    if (this.isLiked()) {
      this._activateLike();
    } else {
      this._disactivateLike();
    }
  }

  _activateLike() {
    this._likeIcon.classList.add("element__like_active");
  }

  _disactivateLike() {
    this._likeIcon.classList.remove("element__like_active");
  }

  isLiked() {
    const likedCard = !!this._likes.find((user) => user._id === this._userId);

    return likedCard;
  }
}
