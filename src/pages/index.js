import Card from "../components/Card.js";
import { initialCards } from "../components/initialCards.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import "./index.css";

import {
  editButton,
  addButton,
  popupEdit,
  popupAdd,
  nameInput,
  jobInput,
  listElement,
  validationConfig,
} from "../utils/constants.js";

const popupWithImage = new PopupWithImage(".popup-card");

const cardsSection = new Section(
  {
    items: initialCards,
    renderer: (cardData) => {
      cardsSection.addItem(createCard(cardData));
    },
  },
  listElement
);

const userInfo = new UserInfo(".profile__name", ".profile__profession");

const handleCardClick = (name, link) => {
  popupWithImage.open(name, link);
  popupWithImage.setEventListeners();
};

const createCard = (cardData) => {
  return new Card(cardData, ".template", handleCardClick).generateCard();
};

function inputEditContent() {
  const dataUser = userInfo.getUserInfo();
  nameInput.value = dataUser.name;
  jobInput.value = dataUser.info;
}

const openEditPopup = () => {
  inputEditContent();
  formValidateEdit.resetValidation();
  popupWithEditForm.open();
};

const openAddPopup = () => {
  popupWithAddForm.open();
  formValidateAdd.resetValidation();
};

const popupWithEditForm = new PopupWithForm(".popup_type_edit", (data) =>
  userInfo.setUserInfo(data)
);
const popupWithAddForm = new PopupWithForm(".popup_type_add", (dataCard) => {
  cardsSection.addItem(createCard(dataCard));
});

const formValidateEdit = new FormValidator(validationConfig, popupEdit);
const formValidateAdd = new FormValidator(validationConfig, popupAdd);

editButton.addEventListener("click", openEditPopup);
addButton.addEventListener("click", openAddPopup);

cardsSection.renderItems();

formValidateEdit.enableValidation();
formValidateAdd.enableValidation();
