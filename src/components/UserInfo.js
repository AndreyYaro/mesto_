export default class UserInfo {
  constructor(nameSelector, professionSelector) {
    this._nameSelector = document.querySelector(nameSelector);
    this._professionSelector = document.querySelector(professionSelector);
  }

  getUserInfo() {
    return {
      name: this._nameSelector.textContent,
      info: this._professionSelector.textContent,
    };
  }
  setUserInfo(data) {
    this._nameSelector.textContent = data.inputName;
    this._professionSelector.textContent = data.inputProfession;
  }
}
