export default class UserInfo {
  constructor(nameSelector, professionSelector, avatarSelector) {
    this._nameSelector = document.querySelector(nameSelector);
    this._professionSelector = document.querySelector(professionSelector);
    this._avatarSelector = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      name: this._nameSelector.textContent,
      profession: this._professionSelector.textContent,
    };
  }
  setUserInfo(name, profession, avatar) {
    this._nameSelector.textContent = name;
    this._professionSelector.textContent = profession;
    this._avatarSelector.src = avatar;
  }

  setAvatar(avatar) {
    this._avatarSelector.src = avatar;
  }
}
