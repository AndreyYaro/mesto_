// Объявляем переменные 
const popup = document.querySelector('.popup_type_edit')
const editButton = document.querySelector('.button_type_edit')
const closeButton = document.querySelector('.button_type_close')
const addButton = document.querySelector('.popup_type_edit')

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
const listElement = document.querySelector('.elements')

//  Функция для массива
initialCards.forEach(name =>{
    let html = `
        <article class="element">
            <img src=
                alt="${name}"
                class="element__image">
            <div class="element__name-like">
                <h2 class="element__name">${name}</h2>
                <button type="button" class="button element__like" aria-label="нравится"></button>
            </div>
        </article>
          `
    listElement.insertAdjacentHTML('afterbegin', html)
})

    

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
