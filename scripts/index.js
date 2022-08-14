
const popup = document.querySelector('.popup')
const editButton = document.querySelector('.button_type_edit')
const closeButton = document.querySelector('.button_type_close')
let formElement = document.querySelector('.button_tupe_save') 
let nameInput = document.querySelector('.popup__input_name')
let jobInput = document.querySelector('.popup__input_info') 
let profileName = document.querySelector('.profile__name')
let profileProfession = document.querySelector('.profile__profession')


const addPopup = function () {
    popup.classList.add('popup__opened');
    nameInput.value = profileName.textContent
    jobInput.value = profileProfession.textContent
}

const removePopup = function () {
    popup.classList.remove('popup__opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value 
    profileProfession.textContent = jobInput.value
    removePopup
}

editButton.addEventListener('click', addPopup)
closeButton.addEventListener('click', removePopup)

formElement.addEventListener('submit', formSubmitHandler);
