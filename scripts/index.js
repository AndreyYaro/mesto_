// Объявляем переменные 
const editButton = document.querySelector('.button_type_edit')
const closeEditButton = document.querySelector('.button_type_close-edit')

const addButton = document.querySelector('.button_type_plus')
const closeAddButton = document.querySelector('.button_type_close-add')


const popupEdit = document.querySelector('.popup_type_edit')
const popupAdd = document.querySelector('.popup_type_add')

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
// Объявляем переменные формы Поп-апа(2)
let popupAddFoam = document.querySelector('.popup__content_type_add')
let placeInput = document.querySelector('.popup__info_type_place')
let linkInput = document.querySelector('.popup__info_type_link')

//  Функция для массива


function addNewCard(item){
    let html = `
    <article class="element">
    <img src=${item.link}
    alt="${item.name}" 
    class="element__image">
    <div class="element__name-like">
    <h2 class="element__name">${item.name}</h2>
    <button type="button" class="button element__like" aria-label="нравится"></button>
    </div>
    </article>
    `
    listElement.insertAdjacentHTML('afterbegin', html)
}

initialCards.forEach(addNewCard)

// Объявляем переменные формы Поп-апа(1)
let popupEditForm = document.querySelector('.popup__content_type_edit') 
let nameInput = document.querySelector('.popup__info_type_name')
let jobInput = document.querySelector('.popup__info_type_profession')


// Объявляем переменные для титульной страницы
let profileName = document.querySelector('.profile__name')
let profileProfession = document.querySelector('.profile__profession')

//  Функция открытия Поп-апа(1)
function addPopupEdit() {
    popupEdit.classList.add('popup_opened')
    nameInput.value = profileName.textContent
    jobInput.value = profileProfession.textContent
}

//  Функция открытия Поп-апа(2)
function addPopupAdd() {
    popupAdd.classList.add('popup_opened')
    console.log('plus_plus')
}

// Функция закрытия Поп-апа(1)
const removePopupEdit = function () {
    popupEdit.classList.remove('popup_opened');
}
// Функция закрытия Поп-апа(2)
const removePopupAdd = function () {
    popupAdd.classList.remove('popup_opened');
    console.log('close2')
}

// Функция отправки заполненной формы в Поп-апе
function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value; 
    profileProfession.textContent = jobInput.value;
    removePopupEdit();
    console.log('form edit')
}

function formAddHandler(evt){

    evt.preventDefault();    
    let text = placeInput.value
    let linkAdd = linkInput.value

    addNewCard(
        {
            name: text,
            link: linkAdd
        }
    )
    removePopupAdd()  
}

// Добавляем слушатели действий для кнопок 
editButton.addEventListener('click', addPopupEdit)
closeEditButton.addEventListener('click', removePopupEdit)

addButton.addEventListener('click', addPopupAdd)
closeAddButton.addEventListener('click', removePopupAdd)


popupEditForm.addEventListener('submit',formSubmitHandler);

popupAddFoam.addEventListener('submit', formAddHandler)

