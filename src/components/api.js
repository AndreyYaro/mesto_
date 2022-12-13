export default class Api {
  constructor({ baseURL, headers }) {
    this._baseURL = baseURL;
    this._headers = headers;
  }

  getProfile() {
    return fetch(`${this._baseURL}/users/me`, {
      headers: this._headers,
    })
      .then((res) =>
        res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
      )
      .catch((err) => {
        console.log(err);
      });
  }

  getInitialCards() {
    return fetch(`${this._baseURL}/cards`, {
      headers: this._headers,
    })
      .then((res) =>
        res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
      )
      .catch((err) => {
        console.log(err);
      });
  }

  editProfile(name, about) {
    return fetch(`${this._baseURL}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name,
        about,
      }),
    })
      .then((res) =>
        res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
      )
      .catch((err) => {
        console.log(err);
      });
  }

  addCard(name, link) {
    return fetch(`${this._baseURL}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name,
        link,
      }),
    })
      .then((res) =>
        res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
      )
      .catch((err) => {
        console.log(err);
      });
  }

  deleteCard(id) {
    return fetch(`${this._baseURL}/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    })
      .then((res) =>
        res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
      )
      .catch((err) => {
        console.log(err);
      });
  }

  deleteLike(id) {
    return fetch(`${this._baseURL}/cards/${id}/likes`, {
      method: "DELETE",
      headers: this._headers,
    })
      .then((res) =>
        res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
      )
      .catch((err) => {
        console.log(err);
      });
  }

  addLike(id) {
    return fetch(`${this._baseURL}/cards/${id}/likes`, {
      method: "PUT",
      headers: this._headers,
    })
      .then((res) =>
        res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
      )
      .catch((err) => {
        console.log(err);
      });
  }

  editAvatar(avatar) {
    return fetch(`${this._baseURL}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar,
      }),
    })
      .then((res) =>
        res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
      )
      .catch((err) => {
        console.log(err);
      });
  }
}

export const api = new Api({
  baseURL: "https://mesto.nomoreparties.co/v1/cohort-54",
  headers: {
    authorization: "46a2fa10-55cb-4f0b-86d1-fa06cd0fc111",
    "Content-type": "application/json",
  },
});
