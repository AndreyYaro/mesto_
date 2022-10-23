import Card from "./Card.js";
import { initialCards } from './initial-сards.js';
import FormValidator from "./FormValidator.js";

// Объявляем переменные 
const popups = document.querySelectorAll('.popup')
const editButton = document.querySelector('.button_type_edit')
const addButton = document.querySelector('.button_type_plus')
const popupEdit = document.querySelector('.popup_type_edit')
const popupAdd = document.querySelector('.popup_type_add')

// Объявляем переменные формы Поп-апа(1)
const popupEditForm = document.querySelector('.popup__form_type_edit') 
const nameInput = document.querySelector('.popup__input_type_name')
const jobInput = document.querySelector('.popup__input_type_profession')
// Объявляем переменные для титульной страницы
const profileName = document.querySelector('.profile__name')
const profileProfession = document.querySelector('.profile__profession')
const listElement = document.querySelector('.elements')
// Объявляем переменные формы Поп-апа(2)
const popupAddFoam = document.querySelector('.popup__form_type_add')
const placeInput = document.querySelector('.popup__input_type_place')
const linkInput = document.querySelector('.popup__input_type_link')

// объявляем переменные формы открытия картинки
const popupCard = document.querySelector('.popup-card')
const popupImages = document.querySelector('.popup-card__img')
const popupText = document.querySelector('.popup-card__text')

const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'button_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'error_visible',
} 

// Открытие попапа
function openPopup(item){
    item.classList.add('popup_opened');
    document.addEventListener('keydown', escKeydown);
}  

// Функция закрытия Попапа
function closePopup (item) {
    item.classList.remove('popup_opened');
    document.removeEventListener('keydown', escKeydown)
}

// закрытие попапа через esc
function escKeydown(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened')
        closePopup(openedPopup)
    }
}

// Функция отправки заполненной формы редактирования имени  
function submitEditProfileForm (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value; 
    profileProfession.textContent = jobInput.value;
    closePopup(popupEdit);
}

function openPopupImg (name, link) {
    popupImages.src = link;
    popupImages.alt = name;
    popupText.textContent = name;
    openPopup(popupCard);
  }

// функция интеграции с card

const placeCard = function (card){
    listElement.prepend(card);
  }
  const addCard = function(name, link) {
    
    const newCard = new Card({name, link}, '.template', openPopupImg);
    return newCard.createCard();
  }

function submitAddCardForm(evt){
    evt.preventDefault();
    const card = addCard(placeInput.value, linkInput.value);
    popupAddFoam.reset();
    placeCard(card);
    closePopup(popupAdd);
  };

//  Функция открытия Поп-апа редактирования


const editFormValidator = new FormValidator(validationConfig, popupEdit);
const addFormValidator = new FormValidator(validationConfig, popupAdd);

editFormValidator.enableValidation();
addFormValidator.enableValidation();

initialCards.forEach((item) => {
    const card = addCard(item.name,item.link);
    placeCard(card);
  });

popupEditForm.addEventListener('submit',submitEditProfileForm);
popupAddFoam.addEventListener('submit', submitAddCardForm)

addButton.addEventListener('click',function () {
  popupAddFoam.reset();
  addFormValidator.resetValidation();
  openPopup(popupAdd);
});

editButton.addEventListener('click',function () {
    openPopup(popupEdit)
    nameInput.value = profileName.textContent
    jobInput.value = profileProfession.textContent
    editFormValidator.resetValidation();
    editFormValidator.inactivateButton();
})

         // универсальная функция оверлея и крестика
    popups.forEach((popup) => {
        popup.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains('popup_opened')) {
                closePopup(popup)
            }
            if (evt.target.classList.contains('popup__close')) {
                closePopup(popup)
            }
        })
    })           

                    
                    
                    