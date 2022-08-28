// Объявляем переменные 
const editButton = document.querySelector('.button_type_edit')
const closeEditButton = document.querySelector('.button_type_close-edit')

const addButton = document.querySelector('.button_type_plus')
const closeAddButton = document.querySelector('.button_type_close-add')

const popupEdit = document.querySelector('.popup_type_edit')
const popupAdd = document.querySelector('.popup_type_add')

const likeButton = document.querySelector('.element__like')

// Объявляем переменные формы Поп-апа(1)
let popupEditForm = document.querySelector('.popup__content_type_edit') 
let nameInput = document.querySelector('.popup__info_type_name')
let jobInput = document.querySelector('.popup__info_type_profession')
// Объявляем переменные для титульной страницы
let profileName = document.querySelector('.profile__name')
let profileProfession = document.querySelector('.profile__profession')
const listElement = document.querySelector('.elements')
// Объявляем переменные формы Поп-апа(2)
let popupAddFoam = document.querySelector('.popup__content_type_add')
let placeInput = document.querySelector('.popup__info_type_place')
let linkInput = document.querySelector('.popup__info_type_link')

// объявляем переменные формы открытия картинки
const popupCard = document.querySelector('.popup-card')
const popupImages = document.querySelector('.popup-card__img')
const popupText = document.querySelector('.popup-card__text')
const popupCardClose = document.querySelector('.button_type_close-card')

let templateElement = document.querySelector('.template')

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

//  Функция для добавления карточки
function addNewCard(item){

    let newItemElement = templateElement.content.cloneNode(true)
    newItemElement.querySelector('.element__name').textContent = item.name
    newItemElement.querySelector('.element__image').setAttribute('src', item.link)

    newItemElement
        .querySelector('.element__like')
        .addEventListener('click', (e) => {
            const itemElement = e.target.closest('.element__like')
            itemElement.classList.toggle('element__like_active')
        })

    newItemElement
        .querySelector('.element__trash')
        .addEventListener('click', (e) => {
            const itemElement = e.target.closest('.element')
            itemElement.remove()
        })

    newItemElement
        .querySelector('.element__image')
        .addEventListener('click', ()=> {
            popupCard.classList.add('popup_opened')
            popupImages.src = item.link
            popupText.textContent = item.name
        })

    listElement.prepend(newItemElement)
}

initialCards.forEach(addNewCard)


//  Функция открытия Поп-апа редактирования
function addPopupEdit() {
    popupEdit.classList.add('popup_opened')
    nameInput.value = profileName.textContent
    jobInput.value = profileProfession.textContent
}
// Функция закрытия Поп-апа редактироования
const removePopupEdit = function () {
    popupEdit.classList.remove('popup_opened');
}
//  Функция открытия Поп-апа создания
function addPopupAdd() {
    popupAdd.classList.add('popup_opened')
}
// Функция закрытия Поп-апа создания
const removePopupAdd = function () {
    popupAdd.classList.remove('popup_opened');
}

// функция закрытия попапа картинки
const removePopupImage = function () {
    popupCard.classList.remove('popup_opened');
}

// Функция отправки заполненной формы редактирования имени
function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value; 
    profileProfession.textContent = jobInput.value;
    removePopupEdit();
}
// функция добавления карточки
function formAddHandler(evt){
    evt.preventDefault();    
    let text = placeInput.value
    let linkAdd = linkInput.value
    placeInput.value = ''
    linkInput.value = ''
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

popupCardClose.addEventListener('click', removePopupImage)


popupEditForm.addEventListener('submit',formSubmitHandler);

popupAddFoam.addEventListener('submit', formAddHandler)

