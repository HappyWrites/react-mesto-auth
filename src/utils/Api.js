class Api {
  constructor(url, token) {
    this._url = url;
    this._token = token;
  }

  getInitialCards() {
    return fetch(this._url + '/cards', {
      //mode: 'no-cors',
      headers: {
        authorization: this._token
      }
    })
      .then(res => this._checkResult(res));
  }

  getUserInfo() {
    return fetch(this._url + '/users/me', {
      headers: {
        authorization: this._token
      }
    })
      .then(res => this._checkResult(res));
  }

  setUserInfo({name, about}) {
    return fetch(this._url + '/users/me', {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        about: about
      }),
    })
      .then(res => this._checkResult(res));
  }

  addCard({name, link}) {
    return fetch(this._url + '/cards', {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        link: link
      })
    })
      .then(res => this._checkResult(res));
  }

  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
    })
      .then(res => this._checkResult(res));
  }

  changeLikeCardStatus(id, isLiked) {
    return fetch(`${this._url}/cards/${id}/likes`, {
      method: isLiked ? "PUT" : "DELETE",
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
    })
      .then(res => this._checkResult(res));
  }

  editAvatar(data) {
    return fetch(this._url + '/users/me/avatar', {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: data.avatar
      }),
    })
      .then(res => this._checkResult(res));
  }

  _checkResult(res) {
    if (res.ok) {
      return res.json()
    } else {
      return Promise.reject(`Ошибка: ${res.status}`)
    }
  }
}

const api = new Api('https://mesto.nomoreparties.co/v1/cohort-32', '0e36e0dc-917d-4b2c-8b4d-704f31f7e428');
export default api;
