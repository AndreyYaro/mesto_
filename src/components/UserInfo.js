export default class UserInfo {
  constructor(nameSelector, professionSelector) {
    this._nameSelector = document.querySelector(nameSelector);
    this._professionSelector = document.querySelector(professionSelector);
  }

  getUserInfo() {
    return {
      name: this._nameSelector.textContent,
      profession: this._professionSelector.textContent,
    };
  }
  setUserInfo(name, profession) {
    this._nameSelector.textContent = name;
    this._professionSelector.textContent = profession;
  }
}
