import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithDelete from "../components/PopupWithDelete.js";
import "./index.css";
import { api } from "../components/api.js";
import {
  editButton,
  addButton,
  avatarButton,
  popupEdit,
  popupAdd,
  listElement,
  validationConfig,
} from "../utils/constants.js";

const handleCardProfileSubmit = (data, info) => {
  const { name, profession } = data;
  api.editProfile(name, profession).then((res) => {
    info.setUserInfo(res.name, res.about, res.avatar);
  });
};

const handleCardFormSubmit = (data, section, action) => {
  api.addCard(data.name, data.link).then((res) => {
    section.addItem(action(res).getElement());
  });
};

const inputEditContent = (form, userInfo) => {
  const dataUser = userInfo.getUserInfo();
  form.setInputValues({
    name: dataUser.name,
    profession: dataUser.profession,
  });
};

const openEditPopup = (form, userInfo, formValidateEdit) => {
  form.open();
  inputEditContent(form, userInfo);
  formValidateEdit.resetValidation();
};

const openAddPopup = (form, formValidate) => {
  form.open();
  formValidate.resetValidation();
};

const openAvatarEditPopup = (form) => {
  form.open();
};

const init = () => {
  let allCards = [];

  const userInfo = new UserInfo(
    ".profile__name",
    ".profile__profession",
    ".profile__avatar-img"
  );

  const formValidateEdit = new FormValidator(validationConfig, popupEdit);
  const formValidateAdd = new FormValidator(validationConfig, popupAdd);

  const popupWithImage = new PopupWithImage(".popup-card");
  const popupWithEditForm = new PopupWithForm(".popup_type_edit", (data) => {
    handleCardProfileSubmit(data, userInfo);
  });

  const popupWithAddForm = new PopupWithForm(".popup_type_add", (data) => {
    handleCardFormSubmit(data, cardsSection, createCard);
  });

  const popupWithDelete = new PopupWithDelete(".popup_type_delete", (id) => {
    api.deleteCard(id).then(() => {
      allCards = allCards.filter((item) => item._id !== id);
      renderCards();
    });
  });

  const popupWithEditAvatarForm = new PopupWithForm(
    ".popup_type_avatar",
    (data) => {
      api.editAvatar(data.link).then((res) => {
        userInfo.setAvatar(res.avatar);
      });
    }
  );

  const cardsSection = new Section({
    items: [],
    container: listElement,
  });

  const createCard = (dataCard) => {
    const card = new Card(
      dataCard,
      ".template",
      popupWithImage.open.bind(popupWithImage),
      popupWithDelete.open.bind(popupWithDelete, dataCard._id),
      () => {
        if (card.isLiked()) {
          api.deleteLike(dataCard._id).then((res) => card.setLikes(res.likes));
        } else {
          api.addLike(dataCard._id).then((res) => card.setLikes(res.likes));
        }
      },
      userId
    );
    return card;
  };

  popupWithAddForm.setEventListeners();
  popupWithEditForm.setEventListeners();
  popupWithImage.setEventListeners();
  popupWithDelete.setEventListeners();
  popupWithEditAvatarForm.setEventListeners();

  editButton.addEventListener("click", () =>
    openEditPopup(popupWithEditForm, userInfo, formValidateEdit)
  );

  addButton.addEventListener("click", () =>
    openAddPopup(popupWithAddForm, formValidateAdd)
  );

  avatarButton.addEventListener("click", () =>
    openAvatarEditPopup(popupWithEditAvatarForm)
  );

  formValidateEdit.enableValidation();
  formValidateAdd.enableValidation();

  let userId;

  api.getProfile().then((res) => {
    userInfo.setUserInfo(res.name, res.about, res.avatar);
    userId = res._id;
  });

  api.getInitialCards().then((cardList) => {
    allCards = cardList;
    renderCards();
  });

  const renderCards = () => {
    cardsSection.cleanItems();
    allCards.forEach((data) => {
      cardsSection.addItem(createCard(data).getElement());
    });
  };
};

init();
