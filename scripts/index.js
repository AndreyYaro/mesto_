// Объявляем переменные 
const editButton = document.querySelector('.button_type_edit')
const closeEditButton = document.querySelector('.button_type_close-edit')
const addButton = document.querySelector('.button_type_plus')
const closeAddButton = document.querySelector('.button_type_close-add')
const popupEdit = document.querySelector('.popup_type_edit')
const popupAdd = document.querySelector('.popup_type_add')
const likeButton = document.querySelector('.element__like')
const popup = document.querySelector('.popup')

// Объявляем переменные формы Поп-апа(1)
const popupEditForm = document.querySelector('.popup__form_type_edit') 
const nameInput = document.querySelector('.popup__input_type_name')
const jobInput = document.querySelector('.popup__input_type_profession')
// Объявляем переменные для титульной страницы
const profileName = document.querySelector('.profile__name')
const profileProfession = document.querySelector('.profile__profession')
const listElement = document.querySelector('.elements')
// Объявляем переменные формы Поп-апа(2)
const popupAddCard = document.querySelector('.popup__form_type_add')
const placeInput = document.querySelector('.popup__input_type_place')
const linkInput = document.querySelector('.popup__input_type_link')

// объявляем переменные формы открытия картинки
const popupCard = document.querySelector('.popup-card')
const popupImages = document.querySelector('.popup-card__img')
const popupText = document.querySelector('.popup-card__text')
const closePopupImg = document.querySelector('.button_type_close-card')

const templateElement = document.querySelector('.template')

// Функция лайка
  function likeToggle(e) {
    const itemElement = e.target.closest('.element__like')
    itemElement.classList.toggle('element__like_active')
}

//  Функция урны
  function moveToTrash(e) {
    const itemElement = e.target.closest('.element')
    itemElement.remove()
}

//  функция добавления карточки 
function addCard(item) {
    const addCard = createCard(item);
    listElement.prepend(addCard);
}

// функция создания карточки
function createCard(item){

    const newItemElement = templateElement.content.cloneNode(true)
    newItemElement.querySelector('.element__name').textContent = item.name

    const newImageElement = newItemElement.querySelector('.element__image')
    newImageElement.setAttribute('src', item.link)
    newImageElement.setAttribute('alt', item.name)

    newItemElement.querySelector('.element__like').addEventListener('click', likeToggle)
    newItemElement.querySelector('.element__trash').addEventListener('click', moveToTrash)
    newItemElement.querySelector('.element__image').addEventListener('click', openPopupImg)

    return newItemElement
}

initialCards.forEach(addCard)

// Функция добавления карточки
function submitAddCardForm(evt){
    evt.preventDefault();    
    const text = placeInput.value
    const linkAdd = linkInput.value
    placeInput.value = ''
    linkInput.value = ''
    addCard({name: text,link: linkAdd})
    closePopup(popupAdd)  
}

// Функция отправки заполненной формы редактирования имени  
function submitEditProfileForm (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value; 
    profileProfession.textContent = jobInput.value;
    closePopup(popupEdit);
}

// Открытие попапа
function openPopup(item){
    item.classList.add('popup_opened')
    document.addEventListener('keydown', escKeydown)
    document.addEventListener('click', overlowClick)
}   

// Открытие Попапа картинки
  function openPopupImg (item) {
    openPopup(popupCard)
    const image = item.target.closest('.element__image')
    popupImages.src = image.src
    popupImages.alt = image.alt
    popupText.textContent = image.alt
}

//  Функция открытия Поп-апа редактирования
function openPopupEdit(item) { 
    openPopup (item)
    nameInput.value = profileName.textContent
    jobInput.value = profileProfession.textContent
}

// Функция закрытия Попапа
function closePopup (item) {
    item.classList.remove('popup_opened');
}

// закрытие попапа через esc
const escKeydown = (evt) => {
    if (evt.key === 'Escape') {
        const activePopup = document.querySelector ('.popup_opened')
        if (activePopup) {
            closePopup(activePopup)
        } else {
            document.removeEventListener('keydown', escKeydown)
        }
    }
}

// закрытие при клике по фону
const overlowClick = (evt) => {
    if (
        (evt.target.classList.contains('popup') &&
        !evt.target.classList.contains('popup__container')) 
        || 
        (evt.target.classList.contains('popup-card') &&
        !evt.target.classList.contains('popup-card__img'))
      ) {
        const activePopup = document.querySelector ('.popup_opened')
        closePopup(activePopup);
      }
};

 
// Добавляем слушатели действий для кнопок 
closeEditButton.addEventListener('click', () => closePopup(popupEdit))
closeAddButton.addEventListener('click', () => closePopup(popupAdd))
closePopupImg.addEventListener('click', () => closePopup(popupCard))

addButton.addEventListener('click',() => openPopup(popupAdd))
editButton.addEventListener('click',() => openPopupEdit(popupEdit))

popupEditForm.addEventListener('submit',submitEditProfileForm);
popupAddCard.addEventListener('submit', submitAddCardForm)


