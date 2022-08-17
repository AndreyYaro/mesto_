// Объявляем переменные 
const popup = document.querySelector('.popup')
const editButton = document.querySelector('.button_type_edit')
const closeButton = document.querySelector('.button_type_close')

// Объявляем переменные формы Поп-апа
let popupForm = document.querySelector('.popup__content') 
let nameInput = document.querySelector('.popup__info_type_name')
let jobInput = document.querySelector('.popup__info_type_profession')

// Объявляем переменные для титульной страницы
let profileName = document.querySelector('.profile__name')
let profileProfession = document.querySelector('.profile__profession')

//  Функция открытия Поп-апа
function addPopup() {
    popup.classList.add('popup_opened')
    nameInput.value = profileName.textContent
    jobInput.value = profileProfession.textContent
}

// Функция закрытия Поп-апа
const removePopup = function () {
    popup.classList.remove('popup_opened');
}

// Функция отправки заполненной формы в Поп-апе
function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value; 
    profileProfession.textContent = jobInput.value;
    removePopup();
}

// Добавляем слушатели действий для кнопок 
editButton.addEventListener('click', addPopup)
closeButton.addEventListener('click', removePopup)
popupForm.addEventListener('submit', formSubmitHandler);
