// включение валидации вызовом enableValidation
// все настройки передаются при вызове
export default class FormValidator {
    constructor(config, element) {
        this._formSelector = config.formSelector;
        this._inputSelector = config.inputSelector;
        this._submitButton = config.submitButtonSelector;
        this._buttonInactive = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
        this._errorClass = config.errorClass
        this._formElement = element;
        this._buttonElement = this._formElement.querySelector(this._submitButton);
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    }
      
    // добавление ошибки
    _setError(input){
        const formError = this._formElement.querySelector(`#${input.id}-error`); 
        input.classList.add(this._inputErrorClass);
        formError.classList.add(this._errorClass);
        formError.textContent = input.validationMessage;
    }

    // удаление ошибки
      _hideError(input) {
        const formError = this._formElement.querySelector(`#${input.id}-error`); 
        input.classList.remove(this._inputErrorClass);
        formError.classList.remove(this._errorClass);
        formError.textContent = '';
    }
    
    //  проверка валидности инпута
    _checkValidity(input){
        if (!input.validity.valid){
            this._setError(input);
            console.log('1')
        } else {
            this._hideError(input);
            console.log('2')
        }  
    }
      
    //  переключатель состояния кнопки
    _toggleButtonState () {
        console.log("toggle")
        const hasErrors = this._inputList.some(input => !input.validity.valid);
        if (hasErrors) {
          this.inactivateButton();
        } else {
          this._activateButton();
        }
    }
                  
    inactivateButton = () => {
        this._buttonElement.classList.add(this._buttonInactive);
        this._buttonElement.setAttribute('disabled', "");
    }
                  
    _activateButton () {
        this._buttonElement.classList.remove(this._buttonInactive);
        this._buttonElement.removeAttribute('disabled', "");
    };
     
    resetValidation = () => {
        this._toggleButtonState();
        this._inputList.forEach((inputElement) => {
            this._hideError(inputElement);
        });
        console.log('reset')
    }
    
    // основная функция
    enableValidation() {
        this._toggleButtonState;
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', ()=>{
                this._checkValidity(inputElement);
                this._toggleButtonState();
            }) 
        })
    }
}