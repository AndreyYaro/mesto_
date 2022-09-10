// включение валидации вызовом enableValidation
// все настройки передаются при вызове


// вспомогательные классы для валидации
const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'button_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'error_visible',
} 

// добавление ошибки
function setError(input,formElement,config){
    const formError = formElement.querySelector(`#${input.id}-error`); 
    input.classList.add(config.inputErrorClass);
    formError.classList.add(config.errorClass);
    formError.textContent = input.validationMessage;
}

// удаление ошибки
function hideError(input, formElement, config) {
    const formError = formElement.querySelector(`#${input.id}-error`); 
    input.classList.remove(config.inputErrorClass);
    formError.classList.add(config.errorClass);
    formError.textContent = '';
}

//  проверка валидности инпута
function checkValidity(formInput, formElement, config){
    if (!formInput.validity.valid){
        setError(formInput, formElement, config);
    } else {
        hideError(formInput, formElement, config);
    }  
}

// установка слушателей на input
function setEventListeners (formElement, config) {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const buttonElement = formElement.querySelector(config.submitButtonSelector);
    inputList.forEach((formInput) => {
        formInput.addEventListener('input', ()=>{
            checkValidity(formInput, formElement, config);
            toggleButtonState (inputList, buttonElement, config)
        }) 
    })
    inactivateButton(buttonElement, config)
}

//  проверка валидности по всем параметрам
const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
}

//  переключатель состояния кнопки
const toggleButtonState = (inputList, buttonElement, config) => {
    if (hasInvalidInput(inputList)) {
        inactivateButton(buttonElement, config)
    } else {
        activateButton(buttonElement, config);
    }
}

function inactivateButton(buttonElement, config) {
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
}
  
function activateButton (buttonElement, config) {
    buttonElement.classList.remove(config.inactiveButtonClass);
    buttonElement.removeAttribute('disabled', false);
};

// основная функция
function enableValidation(config) {
    const formList = Array.from(document.querySelectorAll(config.formSelector))
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function (evt) {
          evt.preventDefault();
        });
        setEventListeners(formElement, config);
    })
}

enableValidation(validationConfig)
