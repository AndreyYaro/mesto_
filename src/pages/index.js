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
  listElement,
  validationConfig,
} from "../utils/constants.js";

const popupWithImage = new PopupWithImage(".popup-card");

const popupWithEditForm = new PopupWithForm(".popup_type_edit", (data) => {
  userInfo.setUserInfo(data.name, data.profession);
});

const popupWithAddForm = new PopupWithForm(".popup_type_add", (dataCard) => {
  cardsSection.addItem(createCard(dataCard));
});

popupWithAddForm.setEventListeners();
popupWithEditForm.setEventListeners();
popupWithImage.setEventListeners();

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

const createCard = (cardData) => {
  return new Card(
    cardData,
    ".template",
    popupWithImage.open.bind(popupWithImage)
  ).generateCard();
};

function inputEditContent() {
  const dataUser = userInfo.getUserInfo();
  popupWithEditForm.setInputValues({
    name: dataUser.name,
    profession: dataUser.profession,
  });
}

const openEditPopup = () => {
  popupWithEditForm.open();
  inputEditContent();
  formValidateEdit.resetValidation();
};

const openAddPopup = () => {
  popupWithAddForm.open();
  formValidateAdd.resetValidation();
};

const formValidateEdit = new FormValidator(validationConfig, popupEdit);
const formValidateAdd = new FormValidator(validationConfig, popupAdd);

editButton.addEventListener("click", openEditPopup);
addButton.addEventListener("click", openAddPopup);

cardsSection.renderItems();

formValidateEdit.enableValidation();
formValidateAdd.enableValidation();
