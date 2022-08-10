
const popup = document.querySelector('.popup')
const editButton = document.querySelector('.button_type_edit')
const closeButton = document.querySelector('.button_type_close')
const saveButton = document.querySelector('.button_type_save')


const togglePopup = function () {
    popup.classList.toggle('popup__opened');
}

let formElement = document.querySelector('.popup__input') 
let nameInput = document.querySelector('.popup__input_name')
let jobInput = document.querySelector('.popup__input_info') 
let profileName = document.querySelector('.profile__name')
let profileProfession = document.querySelector('.profile__profession')

nameInput.value = profileName.textContent
jobInput.value = profileProfession.textContent

function formSubmitHandler (evt) {
    evt.preventDefault(); 

    profileName.textContent = nameInput.value 
    profileProfession.textContent = jobInput.value
}
editButton.addEventListener('click', togglePopup)
closeButton.addEventListener('click', togglePopup)
saveButton.addEventListener('click', togglePopup) 
saveButton.addEventListener('click', formSubmitHandler)

formElement.addEventListener('submit', formSubmitHandler);
